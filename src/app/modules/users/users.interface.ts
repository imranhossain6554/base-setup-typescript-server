import { Model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
export type IUser = {
  name: string
  userPersonalid: string
  role: string
  email: string
  password: string
}
export type UserModel = Model<IUser, Record<string, unknown>>
