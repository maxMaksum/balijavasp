import Head from 'next/head'
import Link from 'next/link'

import {mockData2} from '../components/MockData/MockData'
import Products from '../components/Card/Products'

import NewSlider from '../components/Slider/NewSlider'

export default function Home() {
  return (
    <div className="mx-0 w-full h-full">
      <Head>
        <title>BaliJava Spirit</title>
        <link rel="icon" href="/cotton.png" />
      </Head>

      <NewSlider />


      <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3  xl:grid-flow-row-dense  mx-auto gap-2">
          {mockData2.map((d) => (
           
              
              <Link  key={d.id}  href={`/page/${d.id}`}>
                <a>
                <Products
                  id={d.id}
                  title={d.title}
                  url={d.image}
                  description={d.description}
                  excerpt={d.excerpt}
                />
                </a>
             </Link>
            
            
          ))}
         </div>
      </div>
    </div>
  );
}
