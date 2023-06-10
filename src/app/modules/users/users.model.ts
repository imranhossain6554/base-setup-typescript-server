import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './users.interface';

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    userPersonalid: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// 3. Create a Model.
export const User = model<IUser, UserModel>('User', userSchema);
