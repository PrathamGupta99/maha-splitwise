import { Types } from 'mongoose';

export default interface IUser {
  _id: Types.ObjectId;
  uuid: String;
  username: String;
  email: String;
  password: String;
  createdAt: Date;
  updatedAt: Date;
  firstName: String;
  lastName: String;
  phone: String;
}
