
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderMenuSmall({title, icon}) {
    return (
     
        <div className={`group flex items-center justify-between cursor-pointer hover:text-green-500 w-100 space-x-5`}>
            <FontAwesomeIcon icon={icon} className=" h-5 group-hover:animate-bounce text-green-500 "/>
            <p className="group-hover:animate-bounce text-green-500 text-lg ">{title}</p>
        </div>
      
    )
}

export default HeaderMenuSmall
