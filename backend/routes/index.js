import express from "express";
// import chatRouter from "./chatRoutes.js"; 
import memberRouter from "./member.js"; 
import departmentRouter from "./department.js";  
import authRouter from "./auth.js"
const router = express.Router();


// router.use("/convo", chatRouter)
router.use("/member",memberRouter )
router.use("/department", departmentRouter) 
router.use("/auth", authRouter)


export default router;
