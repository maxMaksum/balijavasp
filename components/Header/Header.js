
import {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../AuthProvider'
import {auth} from '../../firebase'
import Link from'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import HeaderItems from './HeaderItems'
import HeaderItemsPng from './HeaderItemsPng'
import { faHome, faEnvelope, faUsers, faEllipsisV } from '@fortawesome/free-solid-svg-icons'


import HeaderMenuSmall from './HeaderMenuSmall'

function Header() {
    const router =useRouter()
    const [open, setOpen] = useState(false)
    const hanldeClick = ()=> setOpen(!open)
   
    const {currentUser} = useContext(AuthContext)

    const signOut = (e)=>{
      e.preventDefault()
       auth.signOut().then(() => {
        router.push("/")
      }).catch((error) => {
       console.log(error)
      });
    }

    return (
      <div className="h-100 sticky top-0 inset-x-0 z-50 bg-gray-700">
        <header className="flex items-center justify-between">
          {/* left */}

          <div className="flex flex-grow sm:flex-grow-0 flex-no-wrap items-center justify-start group left-0 top-0">
            <Link href="/">
              <a>
                <div className="ml-2">
                  <Image
                    className="bg-cover bg-center hover:animate-bounce text-green-500"
                    src="/logo.png"
                    width={40}
                    height={40}
                  />
                </div>
              </a>
            </Link>

            <Link href="/">
              <a className="flex items-center text-green-500 italic text-center  text-sm sm:text-lg ml-2 w-full space-x-2">
                <p>BALIJAVA SPIRIT</p>
                {
                  !currentUser?
                 
                <button
                  onClick={()=>router.push("/login")}
                  className=" text-xs"
                >
                  LOGIN WITH GMAIL
                </button>
                  :
                <button
                  onClick ={signOut}
                  className=" text-xs"
                >
                  LOGOUT
                </button>
                
                }
              </a>
            </Link>
          </div>

          {/* right */}

          <div className="flex items-center justify-end space-x-0">
            <div className=" justify-end items-center hidden sm:flex ml-4">
              <Link href="/page/5">
                <a>
                  <HeaderItems title="About" icon={faUsers} />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <HeaderItems title="Contact" icon={faEnvelope} />
                </a>
              </Link>

              <Link href="/page/2">
                <a>
                  <HeaderItemsPng title="Services" />
                </a>
              </Link>
            </div>
            <Link href="/">
              <a>
                <HeaderItems title="Home" icon={faHome} />
              </a>
            </Link>

            <div onClick={hanldeClick} className="flex sm:hidden">
              <HeaderItems title="Menu" icon={faEllipsisV} />
            </div>
          </div>
        </header>

        {open && (
          <div className=" sm:invisible  bg-gray-100 w-48 absolute z-10 h-screen p-4">
            <div className=" z-50 opacity-100 flex flex-col items-start space-y-6 ">
              <Link href="/page/5">
                <a>
                  <HeaderMenuSmall title="About" icon={faUsers} />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <HeaderMenuSmall title="Contact" icon={faEnvelope} />
                </a>
              </Link>

              {/* <HeaderMenuSmall title="Facebook" icon={faFacebookF} /> */}

              <Link href="/page/2">
                <a>
                  <HeaderItemsPng
                    title="Services"
                    flexDir="flex-row"
                    opacity="opacity-1"
                    text="text-lg"
                    spacex="space-x-5"
                  />
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
}

export default Header
