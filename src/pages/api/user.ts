import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../../prisma/user'


export default async (req : any, res : any) => {
  try{
    switch(req.method){
      case 'GET': {
        if (req.query.id) {
          const user = await getUserById(req.query.id)


          return res.status(200).json(user)
        } else {
          const users = await getAllUsers()

          return res.status(200).json(users)
        }
      }
      case 'POST': {
        const {name, email, birthYear} = req.body
        const user = await createUser({name, email, birthYear})

        return res.status(200).json(user)
      }
      case 'PUT': {
        const {id, ...updateData} = req.body
        const user = await updateUser(id, updateData)

        return res.status(200).json(user)
      }
      case 'DELETE': {
        const {id} = req.body
        const user = await deleteUser(id)

        return res.status(200).json(user)
      }
  }
} catch (error: any) {
  return res.status(500).json({error: error.message})
}}
