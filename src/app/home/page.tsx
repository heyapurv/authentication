
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from 'react'

async function  page() {
   const {getUser} = await getKindeServerSession();
   const user = await  getUser();
   if(!user){
    redirect('/')
   }
   
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div>
        <h1>Hello! {user?.given_name} {user.picture} Welcome to Dashboard</h1>
         <div className='flex justify-center items-center my-5'>
           <LogoutLink className='bg-blue-600 py-3 px-5 rounded-md text-xl'>Log out</LogoutLink>
         </div>
      </div>
    </div>
  )
}

export default page
