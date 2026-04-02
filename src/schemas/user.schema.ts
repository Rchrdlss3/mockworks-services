import mongoose from "mongoose";
const Schema = mongoose.Schema;


const SocialMediaSchema = new Schema({
  twitter: { type: String },
  linkedin: { type: String },
  github: { type: String },
  instagram: { type: String }
}, { _id: false });

const PersonalInformationSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  avatarUrl: { type: String },
  pronouns: { type: String },
  birthday: { type: String }, 
  phone: { type: String },
  email: { type: String, required: true, unique: true },
  socialMedia: SocialMediaSchema
}, { _id: false });

const OfficeAddressSchema = new Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String }
}, { _id: false });

const EmploymentSchema = new Schema({
  jobTitle: { type: String },
  department: { type: String },
  managerId: { type: String }, 
  startDate: { type: String }, 
  employmentType: { type: String },
  manager: [Schema.Types.Mixed], 
  directReports: [Schema.Types.Mixed], 
  officeAddress: OfficeAddressSchema
}, { _id: false });

const TimeOffPolicySchema = new Schema({
  type: { type: String },
  upcoming: { type: Number },
  used: { type: Number },
  balance: { type: Number }
}, { _id: false });

const TimeOffSchema = new Schema({
  policies: [TimeOffPolicySchema],
  upcoming: [Schema.Types.Mixed], 
  current: [Schema.Types.Mixed], 
  past: [Schema.Types.Mixed]     
}, { _id: false });



const UserSchema = new Schema({
  
  id: { type: String, required: true, unique: true }, // Your custom 'u-98234' format
  personalInformation: PersonalInformationSchema,
  employment: EmploymentSchema,
  timeOff: TimeOffSchema
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

export default User;