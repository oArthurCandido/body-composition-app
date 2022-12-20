import prisma from './prisma'

// export const getAllUsers = async () => {
//   const users = await prisma.user.findMany({})

//   return users
// }

export const getUserMeasures = async (id : string) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    },
    include: {
      measures: true
    }
  })
  console.log("🚀 ~ file: user.ts:15 ~ getUserById ~ user", user)

  return user
}

export const createMeasure = async (id : string, newMeasure: any) => {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      measures: {
        create:
          {
            data: { ...newMeasure}
          }
    }
  }
  })

  return user
}

// export const updateUser = async (id : string, updateData : any) => {
//   const user = await prisma.user.update({
//     where: {
//       id: id,
//     },
//     data: {...updateData}
//   })

//   return user
// }


// export const deleteUser = async (id : string) => {
//   const user = await prisma.user.delete({
//     where: {
//       id
//     }
//   })

//   return user
// }
