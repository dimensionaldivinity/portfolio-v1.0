import type { NextPage } from 'next'
import { Layout } from '../components/common/Layout'
import PageHero from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import Image from 'next/image'
import MaskSvg from '../components/common/MaskSvg'
import AnimatedLink from '../components/common/AnimatedLink'

const contact: NextPage = () => {
  const title = 'Lets talk'
  

  return (
  <Layout>
      <SEO
        title={title}
        
        // imageUrl={'/img/about.png'}
      />
      <PageHero title={title}>
        
      </PageHero>

      <div className="items-center xs:ml-12 xs:pl-1 md:hidden mb-10">

      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src="/img/avatars/prasad.jpeg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Developer</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Durga Prasad Pattabhi</p>
        <div className="flex items-center">
          <p className="text-md font-regular text-black cursor-auto my-1"></p>
          <br />
          <p className="text-lg font-regular text-black cursor-auto my-1"></p>
          <article>
            <p className="text-sm text-gray-600 cursor-auto ml-0 mt-2">+91-8383048570</p>
            
            <p className="text-md text-gray-600 cursor-auto ml-0 mb-2">durgaprasadpattabhi@gmail.com</p>
          
            <AnimatedLink
            href="mailto:contact@dprasad.me?subject=I'd%20like%20to%20talk!"
            color="from-black to-black dark:from-white dark:to-white"
            iconColor="!bg-dark dark:!bg-white"
            iconSize="h-[0.7rem] w-[0.7rem]"
          >
            <div className="flex items-left justify-left gap-2">
              <MaskSvg
                className="mt-[0.1rem] h-4 w-4 dark:!bg-white"
                url="/img/icons/mail.svg"
              />
              <p className="text-black dark:text-dpyellow">shoot me a message</p>
            </div>
          </AnimatedLink>
          
          </article>
         
          
        </div>
      </div>
    </a>
  </div>
    
    
   
      </div>

      
    </Layout>
  )
}



export default contact
