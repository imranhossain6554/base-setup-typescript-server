import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'
//import config from '../../../config'
const createUser = async (user: IUser): Promise<IUser | null> => {
  /*  if (!user.password) {
    user.password = config.default_user_password as string
  } */
  const id = await generateUserId()
  user.userPersonalid = id

  if (!user.password) {
    throw new Error('failed to create user')
  }
  const cratedUser = await User.create(user)
  return cratedUser
}

export const UserService = { createUser }
