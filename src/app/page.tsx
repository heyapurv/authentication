import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-center text-2xl ">
            This is Kinde Authentication
          </h1>
         <div className="flex justify-center items-center gap-x-5 my-5">
         <LoginLink className="bg-blue-600 py-3 px-5 rounded-md text-xl">Sign in</LoginLink>
          <RegisterLink className="bg-blue-600 py-3 px-5 rounded-md text-xl">Sign up</RegisterLink>
          
         </div>
        </div>
      </div>
    </>
  );
}
