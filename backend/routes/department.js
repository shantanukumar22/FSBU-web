import express from 'express';
const router = express.Router();
import { verifyJWT } from '../middlewares/verifyJWT.js';
import { Department, Member } from '../models/db.js';

// Creating a department
router.post('/', verifyJWT, async (req, res) => {
  const { name } = req.body;

  try {
    // Only allowing SuperAdmins to create departments
    if (req.user.role !== 'SuperAdmin') {
      return res.status(403).json({message: 'Access denied'});
    }

    // Checking if the department already exists
    const existingDepartment = await Department.findOne({ name });
    if (existingDepartment) {
      return res.status(400).json({message: 'Department already exists'});
    }

    const newDepartment = new Department({ name, departmentHead: null });
    await newDepartment.save();

    res.status(201).send({ message: 'Department created successfully', department: newDepartment });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Adding a head to a department or creating a new member as the head
router.post('/:id/head', verifyJWT, async (req, res) => {
  const { id } = req.params; // Department ID
  const { enrollmentNumber } = req.body;

  try {
    // Only allow SuperAdmins to assign department heads
    if (req.user.role !== 'SuperAdmin') {
      return res.status(403).send({message: 'Access denied'});
    }

    // Validate the department
    const department = await Department.findById(id);
    if (!department) return res.status(404).send('Department not found');

    let head;

      if (enrollmentNumber) {
      // Assign an existing member as the department head
      head = await Member.findOne({enrollmentNumber: enrollmentNumber});
      if (!head) return res.status(404).send('Member not found');

      // Check if the member is already a department head
      const existingHead = await Department.findOne({ departmentHead: head._id });
      if (existingHead) {
        return res
          .status(400)
          .send('This member is already assigned as a department head for another department');
      }

      // Update the member's department and role
      head.department = id;
      head.role = 'Admin'; // Set the role to Admin for department heads
      await head.save();
    } else {
      return res.status(400).send('Invalid request: provide memberId or createNewMember');
    }

    // Update the department with the new head
    department.departmentHead = head._id;
    await department.save();

    res.status(200).send({ message: 'Department head assigned successfully', department });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

export default router;
