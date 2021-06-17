import Sidebar from "../components/SideBar/Sidebar";
import firebase from "firebase"
import { useRouter } from 'next/router'
import {useState, useEffect, useContext} from 'react'
import {auth,db} from "../firebase"
import Login from "./login";

import {AuthContext} from '../components/AuthProvider'


function chathome() {


    const {currentUser} = useContext(AuthContext)
  
    useEffect(
        ()=>{
        if(currentUser){
            db.collection('users').doc(currentUser.uid).set({
                email:currentUser.email,
                lastSeen:firebase.firestore.FieldValue.serverTimestamp(),
                photoURL:currentUser.photoURL


            },
            {merge:true})
        }
         
        },
        []
      )

   
    return (
        <div>
            {!currentUser?
             <Login/> :

             <Sidebar/>
        
        }
            
       
        </div>
    )

}

export default chathome

export function getServerSideProps({req, res}){
    return {
        props:{token:req.cookies.token||""}
    }
}