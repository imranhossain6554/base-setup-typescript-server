import { User } from './users.model'

export const findLastUserId = async (): Promise<string | undefined> => {
  const lastUser = await User.findOne({}, { userPersonalid: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastUser?.userPersonalid
}

export const generateUserId = async (): Promise<string> => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0') //00000
  //increment by 1
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}
