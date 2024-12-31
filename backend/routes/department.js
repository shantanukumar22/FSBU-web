import express from 'express';
const router = express.Router();
import { Authorize } from '../middlewares/AuthoriseRoles.js';
import { Department, Member } from '../models/db.js';

// creating just the department
router.post('/', Authorize(['SuperAdmin']), async (req, res) => {
    const { name } = req.body;
  
    try {
      // Check if the department already exists
      const existingDepartment = await Department.findOne({ name });
      if (existingDepartment) {
        return res.status(400).send('Department already exists');
      }
  
      // Create the new department
      const newDepartment = new Department({ name, departmentHead: null });
      await newDepartment.save();
  
      res.status(201).send({ message: 'Department created successfully', department: newDepartment });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

  // adding someone as a head of a department/ or creating a new member as head
  router.post('/:id/head', Authorize(['SuperAdmin']), async (req, res) => {
    const { id } = req.params; // Department ID
    const { memberId, createNewMember } = req.body;
  
    try {
      // Validate the department
      const department = await Department.findById(id);
      if (!department) return res.status(404).send('Department not found');
  
      let head;
  
      if (createNewMember) {
        // Create a new member as department head
        const { name, email, password, position, contact } = createNewMember;
  
        // Check if a member with the same email already exists
        const existingMember = await Member.findOne({ email });
        if (existingMember) return res.status(400).send('Member with this email already exists');
  
        head = new Member({
          name,
          email,
          password,
          position: position || 'Department Head',
          role: 'Admin', // Department head role
          contact,
          department: id,
        });
  
        await head.save();
      } else if (memberId) {
        // Assign an existing member as the department head
        head = await Member.findById(memberId);
        if (!head) return res.status(404).send('Member not found');
  
        // Check if the member is already a department head
        const existingHead = await Department.findOne({ departmentHead: head._id });
        if (existingHead) {
          return res
            .status(400)
            .send('This member is already assigned as a department head for another department');
        }
  
        // Update the member's department
        head.department = id;
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