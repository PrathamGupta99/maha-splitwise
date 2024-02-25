import { model, Schema } from 'mongoose';
import { v4 } from 'uuid';
import IGroup from '../interfaces/group';

export const createSchema = () => {
  return new Schema<IGroup>(
    {
      uuid: {
        type: String,
        default: function genUUID() {
          return v4();
        },
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      members: [
        {
          userId: {
            type: String,
            required: true,
          },
          joinedAt: {
            type: Date,
          },
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );
};

const expenseSchema = createSchema();

expenseSchema.index({ uuid: 1 });

export default model('groups', expenseSchema);
