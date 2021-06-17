import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderItems({title, icon, flexDir="flex-col" }) {
    return (
        <div className={`group flex ${flexDir} items-center cursor-pointer w-12 text-green-500`}>
            <FontAwesomeIcon icon={icon} className=" h-5 group-hover:animate-bounce text-green-500"/>
            <p className="opacity-0 group-hover:opacity-100 text-xs">{title}</p>
        </div>
    )
}

export default HeaderItems
