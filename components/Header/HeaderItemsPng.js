
function HeaderItemsPng({title, flexDir="flex-col", opacity="opacity-0", text="text-sm", spacex="space-x-5"}) {
    return (
        <div className={`group flex  items-center ${flexDir} cursor-pointer  hover:text-green-500 w-100 rounded ${spacex}`}>
            <img src={`/cotton.png`} className=" h-5 group-hover:animate-bounce bg-green-500  bg-center bg-contain"/>
            <p className={`${opacity} group-hover:opacity-100  ${text} text-green-500 text-center w-full `}>{title}</p>
        </div>
    )
}

export default HeaderItemsPng
