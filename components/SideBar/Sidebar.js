import {useState, useEffect, useContext} from 'react'
import {auth, db} from '../../firebase'
import {AuthContext} from '../AuthProvider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEllipsisV, faCommentAlt, faSearch} from '@fortawesome/free-solid-svg-icons'
import * as EmailValidator from 'email-validator'
import Chat from '../Chat';
import {selectChatName, selectChatId, selectChatUser} from "../../redux/chatSlice"
import { useSelector, useDispatch } from 'react-redux'


function Sidebar() {

    const {currentUser} = useContext(AuthContext)
    const [userEmails, setUserEmails] = useState([])
    const [userInput, setUserInput] = useState(null)
    const [message, setMessage] = useState(null)
    

    const chatName = useSelector(selectChatName)
    const chatId = useSelector(selectChatId)
    const chatUser = useSelector(selectChatUser)

   
    useEffect(async()=>{
        await getRecepientEmail()
      },[])

    const getRecepientEmail = async () =>{

        db.collection('chat').where("users", 'array-contains', currentUser.email)
        .onSnapshot(
            async (snapshot)=>{
                const emailChats = await snapshot.docs.map(
                    (doc) =>({
                            id:doc.id,
                            data:doc.data().users
                        })
                )

               
                const emailRecepients = await emailChats.map(email=>email.data)

                const emailRecepient  = await emailRecepients.map(item =>{
                    return item[1]
                })
                await setUserEmails(emailRecepient)
             }
            )
    }


  
    const createNewChat = async () =>{
        const input = prompt ("please enter emaail address you wish to chat")
    
        if(!input) return null
        await  setUserInput(input)
        const found = await userEmails.find(element => element === userInput);
     
    
        if(EmailValidator.validate(input)&&input!==currentUser.email && found ===undefined){
             db.collection("chat").add({
                 users:[currentUser.email, input]
            
            })
        }   
    
    }

    
    useEffect(() => {
      db.collection("chat")
        .onSnapshot(async (snapshot) => {
          const messageChats = await snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data().users,
          }));

          await setMessage(messageChats)
        });

    }, []);



   

    return (
        <div className="relative">
            <header className="flex sticky top-0 bg-gray-50 z-10 items-center justify-between p-2 h-16 border-b border-green-100 shadow-sm "> 

            <FontAwesomeIcon icon={faUserCircle} className=" h-5 hover:animate-bounce text-green-500 cursor-pointer"/>
            <div className="space-x-4">
            <FontAwesomeIcon icon={faCommentAlt} className=" h-5 hover:animate-bounce text-green-500 cursor-pointer"/>
            <FontAwesomeIcon icon={faEllipsisV} className=" h-5 hover:animate-bounce text-green-500 cursor-pointer"/>
            </div>
           

            </header>

            <div className=" flex justify-between 
            items-center
            p-2" >
                
                <FontAwesomeIcon icon={faSearch} className=" h-5 hover:animate-bounce text-green-500 cursor-pointer"/>

                <input
              type="text"
              className="p-2 h-full w-full rounded-l-md 
              focus:outline-none px-4
               "
              placeholder="Search in Chat"
            />
            </div>

            <button
            className="
            w-full mx-auto px-2
            
             border
             border-gray-200
             hover:bg-green-600
           
             uppercase
             "
             onClick={createNewChat}
            >Start a new chat</button>
             <div> 
                <input placeholder="write a message" type="text"/>

           </div>

          <div>
            {message !==null?
            message.map(chatuser =>(
                < Chat 
                key={chatuser.id}
                id={chatuser.id} 
                users={chatuser.data}/>
            ))
           
            :`ok`
                
            }
             
          </div>
        </div>
    )
}

export default Sidebar



