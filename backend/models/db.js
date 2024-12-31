import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://cmsfullstack:aJsTCZ81K3Er6GO6@cms.expj4.mongodb.net/test-fsbu", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};
connectDB();

const memberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    enrollmentNumber: { type: String, unique: true, required: true },
    position: { type: String, enum: ['Head', 'Member'], default: 'Member' }, 
    role: { type: String, enum: ['SuperAdmin', 'Admin', 'Member'], required: true }, // Role-based access
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: false }, // Optional for pending members
    contact: { type: String },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }, // Approval status
  },
  { timestamps: true }
);

// memberSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  departmentHead: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true }, // Head of the department
});

const attendanceSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
  status: { type: Boolean, default: false }, // True if present
});

const meetingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  attendees: [attendanceSchema], // Embedded documents
  organizedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' }, // SuperAdmin ID
}, { timestamps: true });



const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
  images: [{ type: String }], // Array of Cloudinary URLs
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' }, // Organizer's ID
}, { timestamps: true });



export const Member = mongoose.model('Member', memberSchema);
export const Department = mongoose.model('Department', departmentSchema);
export const Meeting = mongoose.model('Meeting', meetingSchema);
export const Event = mongoose.model('Event', eventSchema);
