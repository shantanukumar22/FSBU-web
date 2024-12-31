import express from 'express';
import { Member } from '../models/db.js';
import { Authorize, authorizeDepartment } from '../middlewares/AuthoriseRoles.js';

const router = express.Router();

// users can request adding them as a member in the club
router.post('/signup', async (req, res) => {
  const { name, enrollmentNumber, email, password, contact } = req.body;

  try {
    // Check if email or enrollment number already exists
    const existingMember = await Member.findOne({ $or: [{ email }, { enrollmentNumber }] });
    if (existingMember) {
      return res.status(400).send('Member with this email or enrollment number already exists');
    }

    // Create a new member with status 'Pending'
    const newMember = new Member({
      name,
      enrollmentNumber,
      email,
      password,
      contact,
      role: 'Member', // Default role
      status: 'Pending', // Pending approval
    });

    await newMember.save();
    res.status(201).send({ message: 'Signup successful. Waiting for approval', member: newMember });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
// approve/reject the request of members
router.put('/approve-member/:id', Authorize(['SuperAdmin', 'Admin']), async (req, res) => {
  const { status } = req.body; // Status should be 'Approved' or 'Rejected'

  if (!['Approved', 'Rejected'].includes(status)) {
    return res.status(400).send('Invalid status value');
  }

  try {
    const member = await Member.findById(req.params.id);

    if (!member) return res.status(404).send('Member not found');

    // Restrict Admins to approving/rejecting members in their department
    if (req.user.role === 'Admin' && member.department.toString() !== req.user.department.toString()) {
      return res.status(403).send('Access denied');
    }

    member.status = status;

    // Assign department to approved members if not already set
    if (status === 'Approved' && !member.department) {
      member.department = req.user.department; // Assign Admin's department
    }

    await member.save();

    res.send({ message: `Member ${status.toLowerCase()} successfully`, member });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Fetch Pending Members
router.get('/pending-members', Authorize(['SuperAdmin', 'Admin']), async (req, res) => {
  try {
    const query = { status: 'Pending' };

    // Restrict Admins to their department only
    if (req.user.role === 'Admin') {
      query.department = req.user.department;
    }

    const pendingMembers = await Member.find(query).select('name email enrollmentNumber position contact');
    res.send(pendingMembers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

  
  router.put('/update-member/:id', authorizeDepartment(['SuperAdmin', 'Admin']), async (req, res) => {
    const updates = req.body;
    try {
      const updatedMember = await Member.findByIdAndUpdate(req.params.id, updates, { new: true });
      res.send(updatedMember);
    } catch (error) {
      res.status(500).send('Server error');
    }
  });

  router .delete('/delete-member/:id', authorizeDepartment(['SuperAdmin', 'Admin']), async (req, res) => {
    try {
      await Member.findByIdAndDelete(req.params.id);
      res.send({ message: 'Member deleted successfully' });
    } catch (error) {
      res.status(500).send('Server error');
    }
  });
  
  router.delete('/delete-member/:id', Authorize(['SuperAdmin', 'Admin']), async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
  
      if (!member) return res.status(404).send('Member not found');
  
      // Restrict Admins to deleting members in their department
      if (req.user.role === 'Admin' && member.department.toString() !== req.user.department.toString()) {
        return res.status(403).send('Access denied');
      }
  
      await member.delete();
      res.send({ message: 'Member deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
  

export default router;