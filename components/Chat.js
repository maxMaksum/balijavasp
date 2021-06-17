import {useState, useEffect, useContext} from 'react'
import {auth, db} from '../firebase'
import {AuthContext} from './AuthProvider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEllipsisV, faCommentAlt, faSearch} from '@fortawesome/free-solid-svg-icons'
import getRecepientEmail from "../Utils/getRecepientEmail";

function Chat({id, users}) {
    const [dataUsers, setDataUsers] = useState(null)
    const {currentUser} = useContext(AuthContext)
    const recepientEmail = getRecepientEmail(users)

    // console.log(recepientEmail)
    // console.log(dataUsers)

    useEffect(() => {
        if(currentUser) {
        db.collection("users")

        .onSnapshot(async (snapshot) => {
            const messageChats = await snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }));
  
           
          
            })
    
    }
  
       }, []);
  
    
    return (
        <div className="flex items-center- p-4 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">

           <div>
            <div><FontAwesomeIcon icon={faUserCircle} className=" h-5 hover:animate-bounce text-green-500 cursor-pointer text-2xl mr-8"/>
            </div>
           {/* {dataUsers[0].id} */}
            <div>{recepientEmail}</div>

           </div>

        </div>
    )
}

export default Chat
