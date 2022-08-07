import type { NextPage } from 'next'
import { Layout } from '../../components/common/Layout'
import PageHero from '../../components/common/PageHero'
import { SEO } from '../../components/common/SEO'
import Image from 'next/image'
import AnimatedLink from '../../components/common/AnimatedLink'

const leafworks: NextPage = () => {
  const title = 'Leafworks'
  

  return (
  <Layout>
      <SEO
        title={title}
        
        // imageUrl={'/img/about.png'}
      />
      <PageHero title={title}>
        This was  website deign for leafworks
        <br />
        You&rsquo;re in the right place! 😎
      </PageHero>

      {/* new layout starts here */}

      <div className="h-full w-full px-6 sm:px-12 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
          <div className="h-full w-full rounded-[5rem] mdlg:bg-dpoffwhite xs:bg-dpdark">
            <span className="mb-16 mt-2 flex items-center justify-center gap-3 rounded-2xl">
              <div className="mdlg:bg-dpoffwhite xs:bg-dpdark m-10 h-[40rem] w-full justify-center rounded-[5rem] xs:h-[35rem] xs:m-5">
                <div className="relative hidden h-full w-full px-6 sm:px-5 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48 rounded-[5rem] dark:block">
                  <Image
                   src="/img/makeroom/homepage.png"
                   layout="fill"
                   draggable={false}
                   quality={100}
                   alt="Rainbow colored decorative wave shapes for dark mode."
                  />
                </div>
              </div>
            
            </span>

            {/* <span className="mb-16 mt-2 flex items-center justify-center gap-3 rounded-2xl">
              <div className="bg-dpblack m-0 p-8 h-[20rem] w-full justify-center rounded-[3rem]">
              <div className="relative hidden h-full w-full rounded-[5rem] dark:block">
                <h1>Brief:</h1>
                <p className="w-full text-justify-left">We were asked by BASIC to help them develop a new look and feel for NERD Skincare. Working closely with the SD team we developed several concepts that covered the e-commerce platform, branded content, and tone of voice. We then created a suite of brand assets as a toolkit that could be used by the NERD marketing team in their communications.

</p>
              </div>
              
              <div className="relative hidden mt-20 h-full w-full rounded-[5rem] dark:block">
                <h1>Deliverables</h1>
              </div>
              </div>

              
            
            </span> */}
            <h1>
              Tech stack i use goes here
            </h1>

          </div>
          

         

          

          <div className="bg-dpblack h-[20rem] rounded-xl flex">
            {/* card starts here */}

            <div className="w-full h-[20rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                 <a href="#">
                   
                      <div className="px-4 py-3 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                         <p className="text-lg font-bold text-black truncate block capitalize">We were asked by BASIC to help them develop a new look and feel for NERD Skincare. Working closely with the SD team we developed several concepts that covered the e-commerce platform, branded content, and tone of voice. We then created a suite of brand assets as a toolkit that could be used by the NERD marketing team in their communications.</p>
                           <div className="flex items-center">
                             <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                              <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                              </del>
                              <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                               <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                               <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                               </svg>
                              </div>
                           </div>
                    </div>
                 </a>
              </div>

              {/* card end here */}
            
          
          </div>        


        <div className="h-[60rem] w-full px-6 sm:px-12 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
          <h2>hello</h2>
          {/* card starts here */}

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                 <a href="#">
                   <img src="/img/makeroom/homepage.png" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                         <p className="text-lg font-bold text-black truncate block capitalize">We were asked by BASIC to help them develop a new look and feel for NERD Skincare. Working closely with the SD team we developed several concepts that covered the e-commerce platform, branded content, and tone of voice. We then created a suite of brand assets as a toolkit that could be used by the NERD marketing team in their communications.</p>
                           <div className="flex items-center">
                             <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                              <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                              </del>
                              <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                               <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                               <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                               </svg>
                              </div>
                           </div>
                    </div>
                 </a>
              </div>

              {/* card end here */}
          <span>
            <div className="relative hidden xs:overflow-hidden xs:ml-12 xs:h-[40rem] mdlg:h-full w-full px-6 sm:px-12 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48 rounded-[5rem] dark:block">
                  <Image
                   src="/img/makeroom/menu.png"
                   layout="fill"
                   draggable={false}
                   quality={100}
                   alt="Rainbow colored decorative wave shapes for dark mode."
                  />
                  <h3 className="bg-dpyellow rounded-[3rem] h-[10rem] overflow-hidden pb-40">this is what i did</h3>
            </div>
            <div className="my-10 py-[-240">
              <h3 className="bg-dpyellow rounded-[3rem] h-[10rem] overflow-hidden mr-4">this is what i did</h3>
            </div>
            <div className="relative hidden h-full w-full px-6 sm:px-12 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48 rounded-[5rem] dark:block">
                  <Image
                   src="/img/makeroom/profile.png"
                   layout="fill"
                   draggable={false}
                   quality={100}
                   alt="Rainbow colored decorative wave shapes for dark mode."
                  />
            </div>
            </span>
        </div>

        </div>

      {/* <section className="flex items-center justify-center">ask me about me
        <h1>project</h1>
        <h2>case study</h2>
        <section>
          <article>
            <h3>lorem</h3>
            <div className="container flex h-full w-full dark:hidden">
            <Image
              src="/img/banner.png"
              layout="fill"
              draggable={false}
              quality={100}
              alt="Rainbow colored decorative wave shapes for light mode."
            />
              <span></span>
              <span></span>
              <p></p>
              <span></span>
            </div>
          </article>
        </section>  
      </section> */}


     

      {/* new layout ends here  */}


      <div className="flex items-center justify-center">
      <section className="relative mb-72 flex w-full max-w-[1680px] flex-col items-center justify-center md:flex-row-reverse md:justify-end">
        {/* <div className="relative mt-50 h-[24rem] w-[24rem] md:absolute md:right-8 mdlg:right-16 lg:right-32 xl:right-40 2xl:right-48 2xl:h-[30rem] 2xl:w-[30rem]">
          <div className="relative h-full w-full dark:hidden">
            <Image
              src="/img/avatars/jurre_contact_light.png"
              layout="fill"
              draggable={false}
              quality={100}
              alt="Rainbow colored decorative wave shapes for light mode."
            />
          </div>
          <div className="relative hidden h-full w-full dark:block">
            <Image
              src="/img/avatars/prasad-hand.png"
              layout="fill"
              draggable={false}
              quality={100}
              alt="Rainbow colored decorative wave shapes for dark mode."
            /> 
          </div>
        </div> */}
        <div className="flex flex-col md:ml-8 mdlg:ml-16 lg:ml-32 xl:ml-40 2xl:ml-48">
          <div className="mb-6 xl:mb-4">
          {/* <p>ask away</p>
            <h1 className="whitespace-nowrap font-freigeistwide text-[3.5rem] font-black leading-[1] tracking-[-0.07em] md:text-[4.5rem] xl:text-[6.5rem] 2xl:text-[8rem]">
              Get in touch.
            </h1> */}
            {/* <div className="flex flex-col py-6 xl:flex-row xl:gap-2">
              <div className="container mx-auto flex flex-col py-6 xl:flex-row xl:gap-2 justify-between"><p>
              We were asked by BASIC to help them develop a new look and feel for NERD Skincare.
              </p></div>
              <div className="flex flex-col py-6 xl:flex-row xl:gap-2"><p className="flex flex-col py-6 xl:flex-row xl:gap-2 whitespace-nowrap text-[1.2rem] tracking-wide">
              
               Working closely with the SD team we developed several concepts that covered the e-commerce platform,
               
              </p></div><br></br>
              <div className="w-fit">
                <AnimatedLink
                  href="mailto:contact@dprasad.me?subject=I'd%20like%20to%20talk!"
                  color="from-dpyellow to-dpyellow dark:from-dpdarkyellow dark:to-dpdarkyellow"
                  iconColor="!bg-dpyellow dark:!bg-dpdarkyellow"
                  iconSize="h-[1rem] w-[1rem]"
                >
                  <div className="flex w-fit items-center justify-start gap-4">
                    <p className="whitespace-nowrap text-[1.5rem] font-medium tracking-wide text-dpyellow dark:text-dpdarkyellow">
                      Shoot me a message!
                    </p>
                  </div>
                </AnimatedLink>
              </div>
            </div> */}
          </div>
          
        </div>
      </section>
      


      
      <div className="mb-80" />
      </div>
    </Layout>
  )
}



export default leafworks
