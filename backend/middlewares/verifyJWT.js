import jwt from 'jsonwebtoken';

// Middleware to verify JWT and extract user info
export const verifyJWT = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');  // Get token from Authorization header
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, "hehe");
    // console.log("decoded token" ,decoded)
    req.user = decoded;

    // token has all this { id: member._id, role: member.role, department: member.department }, // Payload

    next(); 
  } catch (error) {
    console.error(error);
    return res.status(401).send('Invalid token');
  }
};
