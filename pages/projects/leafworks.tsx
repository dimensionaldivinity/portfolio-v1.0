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
        This was website deign for leafworks
        <br />
        You&rsquo;re in the right place! 😎
      </PageHero>

      {/* new layout starts here */}

      <div>
        <div className="mt-0 overflow-hidden">
          <div className="flex flex-col items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg  relative z-20"
              className="h-10 w-10 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex w-full justify-center md:translate-y-20 md:bg-transparent md:outline-none">
          <img className="" src="/img/leafworks/leafworkshero.png" />
        </div>
      </div>

      <section className="flex min-h-[450px]  flex-col-reverse md:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <article className="max-w-md p-3 py-24 px-3 text-center md:text-left">
            <h1 className="mb-8 text-3xl font-bold leading-8">
              Leafworks
            </h1>
            <p className="text-xl leading-9 text-white ">
              Needed a development process to help build a better botanical world.
              The UX/UI was done by Basilico with me taking on the front end development process.
              most of the marketing for your.
            </p>
            {/* <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl  ">
              Find more
            </button> */}
          </article>
        </div>
        <div className="bg-phone min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
          <img src="/img/leafworks/leafworks1.png" />
        </div>
      </section>

      <section className="flex min-h-[450px] flex-col-reverse md:flex-row-reverse">
        <div className="flex flex-1 items-center justify-center">
          <article className="max-w-md py-24 px-3 text-center md:text-left">
            {/* <h1 className="mb-8 text-3xl font-bold leading-8">
              Stand out to the right audience
            </h1> */}
            <p className="text-xl leading-9 text-white">
            Furthermore, I focused on their business model to understand and then describe a customer journey, 
            designing the service and the web platform as well as defining the Information Architecture.
            </p>
            {/* <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl ">
              Learn more
            </button> */}
          </article>
        </div>
        <div className="bg-glass min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
          <div className="bg-phone min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
            <img src="/img/leafworks/leafworks2.png" />
          </div>
        </div>
      </section>

      <section className="flex min-h-[450px]  flex-col-reverse md:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <article className="max-w-md p-3 py-24 px-3 text-center md:text-left">
            {/* <h1 className="mb-8 text-3xl font-bold leading-8">
              Transform your brand
            </h1> */}
            <p className="text-xl leading-9 ">
            Furthermore, we focused on their business model to understand and then describe a customer journey, 
            designing the service and the web platform as well as defining communication goals.
            </p>
            {/* <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl  ">
              Find more
            </button> */}
          </article>
        </div>
        <div className="bg-phone min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
          <img src="/img/leafworks/leafworks3.png" />
        </div>
      </section>

      <section className="flex min-h-[450px] flex-col-reverse md:flex-row-reverse">
        <div className="flex flex-1 items-center justify-center">
          <article className="max-w-md py-24 px-3 text-center md:text-left">
            {/* <h1 className="mb-8 text-3xl font-bold leading-8">
              Stand out to the right audience
            </h1> */}
            <p className="text-xl leading-9">
              Using a collaborate formula of designers, researchers,
              photographers, videographers, and copywriters, we`ll build and
              extend your brand in digital places..
            </p>
            {/* <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl ">
              Learn more
            </button> */}
          </article>
        </div>
        <div className="bg-glass min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
          <div className="bg-phone min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
            <img src="/img/leafworks/leafworks4.png" />
          </div>
        </div>
      </section>

      {/* <section className="mb-14 flex h-[550px]  flex-col md:flex-row ">
        <article className="bg-chery md:bg-chery md:bg-fill  relative flex flex-1 items-end justify-center bg-red-600 bg-cover bg-bottom pb-8">
          <div className="   w-fukk  bottom-0  text-center  md:w-4/6">
            <h1 className="mb-4 text-3xl font-bold text-black/40">
              Graphick Design
            </h1>
            <p className="font-bold  leading-6 text-black/40 ">
              Great design makes your memorable. We deliver artwork that
              underscores your brand message and captures potencial clients
              attention.
            </p>
          </div>
        </article>

        <article className="bg-orange md:bg-orange relative  flex flex-1 items-end justify-center bg-orange-500 bg-cover bg-right-bottom  bg-no-repeat pb-8">
          <div className="   bottom-0 w-full   text-center  md:w-4/6">
            <h1 className="mb-4 text-3xl font-bold text-black/40">
              Graphick Design
            </h1>
            <p className="font-bold  leading-6 text-black/40">
              Great design makes your memorable. We deliver artwork that
              underscores your brand message and captures potencial clients
              attention.
            </p>
          </div>
        </article>
      </section> */}

      <section className="m-auto w-10/12 py-36">
        <h1 className="mb-16 text-center text-3xl font-bold text-black/30">
          Client testimonials
        </h1>
        <div className="flex flex-col justify-between gap-12 md:flex-row"></div>
      </section>

      <section className="grid  grid-cols-2 flex-wrap md:flex">
        <div className="h-[350px] w-full overflow-hidden bg-blue-800 md:flex-1">
          <img
            className="h-full w-full object-cover"
            src="/img/makeroom/makeroomextra1.png"
          />
        </div>
        <div className="h-[350px] w-full overflow-hidden bg-blue-800 md:flex-1">
          <img
            className="h-full w-full object-cover"
            src="/img/makeroom/makeroomextra4.png"
          />
        </div>
        <div className="h-[350px] w-full overflow-hidden bg-blue-800 md:flex-1">
          <img
            className="h-full w-full object-cover"
            src="/img/makeroom/makeroomextra3.png"
          />
        </div>
        <div className="bg-white-800 flex h-[350px] w-full items-center justify-center overflow-hidden md:flex-1">
          {/* <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-2xl text-white ">
            Learn more
          </button> */}
          <AnimatedLink
                  href="https://leafworks.com/"
                  color="from-dpyellow to-dpyellow dark:from-dpdarkyellow dark:to-dpdarkyellow"
                  iconColor="!bg-dpyellow dark:!bg-dpdarkyellow"
                  iconSize="h-[1rem] w-[1rem]"
                >
                  <div className="flex w-fit items-center justify-start gap-4">
                    <p className="whitespace-nowrap text-[1.5rem] font-medium tracking-wide text-dpyellow dark:text-dpdarkyellow">
                      Visit the Website
                    </p>
                  </div>
                </AnimatedLink>
          <img className="https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
      </section>

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
