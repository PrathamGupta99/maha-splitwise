import { model, Schema } from 'mongoose';
import { v4 } from 'uuid';
import IExpense from '../interfaces/expense';

export const createSchema = () => {
  return new Schema<IExpense>(
    {
      uuid: {
        type: String,
        default: function genUUID() {
          return v4();
        },
        required: true,
      },
      adderId: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
      payer: {
        payerId: {
          type: String,
          required: true,
        },
        amountPaid: {
          type: Number,
          required: true,
        },
      },
      participants: [
        {
          participantsId: {
            type: String,
            required: true,
          },
          share: {
            type: Number,
            required: true,
          },
        },
      ],
      groupId: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
      },
      category: {
        type: String,
      },
      notes: {
        type: String,
      },
      isListed: {
        type: Boolean,
        default: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      createdBy: {
        type: String,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
      updatedBy: {
        type: String,
      },
      deletedAt: {
        type: Date,
      },
      deletedBy: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
};

const expenseSchema = createSchema();

expenseSchema.index({ uuid: 1 });

export default model('expenses', expenseSchema);
