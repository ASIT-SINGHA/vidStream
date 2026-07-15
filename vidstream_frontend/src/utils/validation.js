import {z} from "zod"

//user validatiton schema zod
export const userSignUpSchema=z.object({
  fullName:z.string().min(3,"Full name must be atleast 3 charactor"),
  username:z.string().min(3,"user name must be atleast 3 charator"),
  email:z.string().email("Invalid email address"),
  password:z.string().min(6,"password must be atleast 6 charactor"),
  avatar:z.instanceof(FileList)
    .refine((files)=> files?.length > 0,"Avatar is required")
    .refine((files)=>files[0]?.size <=5000000,"avatar must be less then 5 MB")
    .refine((files)=>files[0]?.type.startsWith('image/'),"Avatar must be a image"),

  coverImage:z.instanceof(FileList)
    .refine((files)=>files[0]?.size <=5000000,"cover image must be less then 5 MB")
    .refine((files)=>files[0]?.type.startsWith("image/"),"cover image must be a image")
  
})
