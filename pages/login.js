import firebase from 'firebase/auth'
import Head from 'next/head'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {auth, db, provider} from '../firebase'




function Login() {
 
  const router =useRouter()

 
 
  const signIn = async()=>{
          await auth.setPersistence("local").then(
          auth.signInWithPopup(provider)
          )

         
       
       
         router.push("/chathome")
        
        }
      

    return (
      <div>
        <Head>
          <title>Login</title>
        </Head>

        <div className="flex items-center justify-center bg-gray-100 h-screen">
          <div className="flex flex-col space-x-2 justify-center items-center group space-y-12  h-96 w-96 bg-gray-50 p-12 rounded shadow">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className=" text-8xl group-hover:animate-bounce text-teal-500"
            />
            <button 
            
            onClick={signIn}
            className=" btn text-xl">
              SIGN IN WITH GMAIL
            </button>
          </div>
        </div>
      </div> 
    );
}

export default Login
