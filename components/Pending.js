import React, {useEffect, useState} from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pending() {
    
    const [loading, setLoading] = useState(false)

    useEffect(
        ()=>{
            setLoading(true)
        },

        []
    )


    return (
        <div>
            <div>
       

        <div className="flex items-center justify-center bg-gray-100 h-screen">
          <div className="flex flex-col space-x-2 justify-center items-center group space-y-12  h-96 w-96 bg-gray-50 p-12 rounded shadow">
            <FontAwesomeIcon
              icon={faSpinner}
              className={`${loading? `animate-spin text-teal-500 text-8xl`:`space-x-3`}  `}
            />
          </div>
        </div>
      </div> 
        </div>
    )
}

export default Pending
