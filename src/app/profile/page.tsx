import {  LogoutLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {
    const {getUser} = await getKindeServerSession()
    const user = await getUser()
    if(!user){
      redirect('/')
     }
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div>
        <h1>Name: {user?.given_name} {user?.family_name} </h1>
         <p>
          Email: {user?.email}
         </p>
         <p> User iD: {user?.id}</p>
         
      </div>
      <LogoutLink className='bg-blue-600 py-3 px-5 rounded-md text-xl'>Log out</LogoutLink>
    </div>
  )
}

 export default page
