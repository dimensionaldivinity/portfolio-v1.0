import type { NextPage } from 'next'
import { Layout } from '../components/common/Layout'
import PageHero from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import Image from 'next/image'
import AnimatedLink from '../components/common/AnimatedLink'

const MakeMyRoom: NextPage = () => {
  const title = 'Makeroom'
  

  return (
  <Layout>
      <SEO
        title={title}
        
        // imageUrl={'/img/about.png'}
      />
      <PageHero title={title}>
        Want to learn more about me?
        <br />
        You&rsquo;re in the right place! 😎
      </PageHero>

      {/* new layout starts here */}

      <section>ask me about me
        <h1>project</h1>
        <h2>case study</h2>
        <section>
          <article>
            <h3>lorem</h3>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <p></p>
              <span></span>
            </div>
          </article>
        </section>  
      </section>


      {/* new layout ends here  */}


      <div className="flex items-center justify-center">
      <section className="relative mb-72 flex w-full max-w-[1680px] flex-col items-center justify-center md:flex-row-reverse md:justify-end">
        <div className="relative mt-50 h-[24rem] w-[24rem] md:absolute md:right-8 mdlg:right-16 lg:right-32 xl:right-40 2xl:right-48 2xl:h-[30rem] 2xl:w-[30rem]">
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
        </div>
        <div className="flex flex-col md:ml-8 mdlg:ml-16 lg:ml-32 xl:ml-40 2xl:ml-48">
          <div className="mb-6 xl:mb-4">
          <p>ask away</p>
            <h1 className="whitespace-nowrap font-freigeistwide text-[3.5rem] font-black leading-[1] tracking-[-0.07em] md:text-[4.5rem] xl:text-[6.5rem] 2xl:text-[8rem]">
              Get in touch.
            </h1>
            <div className="flex flex-col py-6 xl:flex-row xl:gap-2">
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
            </div>
          </div>
          
        </div>
      </section>


      
      <div className="mb-80" />
      </div>
    </Layout>
  )
}



export default MakeMyRoom
