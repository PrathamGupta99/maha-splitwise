import { model, Schema } from 'mongoose';
import { v4 } from 'uuid';
import IUser from '../interfaces/users';

export const createSchema = () => {
  return new Schema<IUser>(
    {
      uuid: {
        type: String,
        default: function genUUID() {
          return v4();
        },
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
};

const usersSchema = createSchema();

usersSchema.index({ uuid: 1 });

export default model('Users', usersSchema);
