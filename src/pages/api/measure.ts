import { getUserMeasures, createMeasure } from '../../prisma/measure'


export default async (req : any, res : any) => {
  try{
    switch(req.method){
      case 'GET': {
        if (req.query.id) {
          const user = await getUserMeasures(req.query.id)

          return res.status(200).json(user)
        } else {
          return res.status(200).json({error: "No user id provided"})
        }
      }case 'PUT': {
        const { id, ...newMeasure} = req.body
        console.log("🚀 ~ file: measure.ts:17 ~ id", id)
        console.log("🚀 ~ file: measure.ts:17 ~ data", newMeasure)
        const user = await createMeasure({ id, newMeasure})

        return res.status(200).json(user)
      }
  }
}
        catch (error: any) {
             return res.status(500).json({error: error.message})
}}
