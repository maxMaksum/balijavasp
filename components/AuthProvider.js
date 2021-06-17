import React, {useEffect, useState, createContext} from 'react'
import firebase from 'firebase'
import {auth, db} from '../firebase'

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [pending, setPending] = useState (true)

    useEffect(() => {
       auth.onAuthStateChanged(

        (user)=>{
            setCurrentUser(user)
            setPending(false)
           
            
        })
        
    }, [])

    useEffect(
        ()=>{

         if(currentUser){
            db.collection("users").doc(currentUser.uid).set({
                email:currentUser.email,
                lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                photoURL:currentUser.photoURL
            }, {merge:true})
         }
        },[currentUser])
    
        
   

    if(pending){
        return <div>
            <div className="flex items-center justify-center bg-gray-100 h-screen">
          <div className="flex flex-col space-x-2 justify-center items-center group space-y-12  h-96 w-96 bg-gray-50 p-12 rounded shadow">
            <FontAwesomeIcon
              icon={faSpinner}
              className={`animate-spin text-teal-500 text-8xl space-x-3`}
            />
          </div>
        </div>
        </div>
    }
    return (
        <AuthContext.Provider
        value={{
            currentUser
        }}>

            {children}
            
        </AuthContext.Provider >
    )
}

