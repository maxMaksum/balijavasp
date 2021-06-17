import CardImage from "./CardImage";
import {useRouter} from 'next/router'


function Products({title, url, excerpt, id}) {

  const router = useRouter()

    return (
      <div >
        
          <div className="bg-teal-500 rounded">
            <CardImage url={url} />

            <div className="text-gray-900 w-full flex items-center justify-center relative ">
              <div className="z-10 bg-teal-500 p-6 w-full  transform skew-y-3 absolute -top-5 "></div>

              <div className="p-6 space-y-4 ">
                <p className="text-xl text-left">{title}</p>
                <p className="text-md text-left">{excerpt}</p>
              </div>
            </div>
          </div>

          <button onClick={()=>router.push(`/page/${id}`)} className="mx-auto btn">Read More</button>
        
      </div>
    );
}

export default Products
