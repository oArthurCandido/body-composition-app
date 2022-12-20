import prisma from './prisma'

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({})

  return users
}

export const getUserById = async (id : string) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })
  console.log("🚀 ~ file: user.ts:15 ~ getUserById ~ user", user)

  return user
}

export const createUser = async (data: any) => {
  const user = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      birthYear: data.birthYear

    }
  })

  return user
}

export const updateUser = async (id : string, updateData : any) => {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {...updateData}
  })

  return user
}


export const deleteUser = async (id : string) => {
  const user = await prisma.user.delete({
    where: {
      id
    }
  })

  return user
}
