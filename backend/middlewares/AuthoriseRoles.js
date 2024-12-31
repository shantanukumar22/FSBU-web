import { Member } from "../models/db";

 export const Authorize = (roles) => (req, res, next) => {
  const { user } = req; // Attach user from JWT middleware
  if (!roles.includes(user.role)) {
    return res.status(403).send('Access denied');
  }
  next();
};
// roles is the array of string of roles like ['SuperAdmin', 'Admin']
export const authorizeDepartment = (roles) => async (req, res, next) => {
  const { user } = req;
  const member = await Member.findById(req.params.id);
  if (!member) return res.status(404).send('Member not found');

  if (user.role === 'SuperAdmin') return next(); // SuperAdmin can access all

  if (roles.includes(user.role) && user.department.toString() === member.department.toString()) {
    return next(); // Department head can access their department's members
  }

  res.status(403).send('Access denied');
};

