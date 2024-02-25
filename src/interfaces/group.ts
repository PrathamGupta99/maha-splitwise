import { Types } from 'mongoose';

export default interface IGroup {
  _id: Types.ObjectId;
  uuid: String;
  name: String;
  description: String;
  members: [
    {
      userId: String;
      joinedAt: Date;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
}
