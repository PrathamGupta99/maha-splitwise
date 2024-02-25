import { Types } from 'mongoose';

export default interface IExpense {
  _id: Types.ObjectId;
  uuid: String;
  description: String;
  amount: Number;
  currency: String;
  adderId: String;
  payer: {
    payerId: String;
    amountPaid: Number;
  };
  participants: [
    {
      participantsId: String;
      share: Number;
    }
  ];
  groupId: String;
  date: Date;
  category: String;
  notes: String;
  isListed: Boolean;
  createdAt: Date;
  createdBy: String;
  updatedAt: Date;
  updatedBy: String;
  deletedAt: Date;
  deletedBy: String;
}
