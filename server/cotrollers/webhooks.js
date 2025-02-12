import { Webhook } from "svix";
import User from "../models/User";

// API Controller Function to Menege Clerk User with database

export const clerkWebhooks = async (req, res)=>{
   try {
      const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

      await whook.verify(JSON.stringify(req.body), {
         'svix-id' : req.headers["sviw-id"],
         'svix-timestamp' : req.headers['svix-timestamp'],
         'svix-signature' : req.headers['svix-signature']
      })
      const {data,type} = req.body
      switch (type) {
         case 'user.create': {
            const userData = {
               _id: data.id,
               email: data.email_addres[0].email_addres,
               name: data.first.name + '' + data.last_name,
               imageUrl: data.image_url
            }
            await User.create(userData)
            res.json({})
            break
         }
      
         case 'user.updated': {
            const userData = {
               email: data.email_addres[0].email_addres,
               name: data.first.name + '' + data.last_name,
               imageUrl: data.image_url
         }
         await User.findByIdAndUpdate(data.id, userData)
         res.json({})
         break
      }

      case 'user.deleted' : {
         await User.findByIdAndDelete(data)
         res.json({})
         break
      }

         default:
            break;
      }
   } catch (error) {
      res.json({succes: false, messaga: error.message})
   }
}