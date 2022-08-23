import type { NextPage } from 'next'
import { Layout } from '../../components/common/Layout'
import PageHero from '../../components/common/PageHero'
import { SEO } from '../../components/common/SEO'
import Image from 'next/image'
import AnimatedLink from '../../components/common/AnimatedLink'

const magnifi: NextPage = () => {
  const title = 'Magnifi . ai'

  return (
    <Layout>
      <SEO title={title} />
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
          <img className="" src="/img/magnifi/magnifihero.png" />
        </div>
      </div>

      <section className="flex min-h-[450px]  flex-col-reverse md:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <article className="max-w-md p-3 py-24 px-3 text-center md:text-left">
            <h1 className="mb-8 text-3xl font-bold leading-8">
              Magnifi.ai
            </h1>
            <p className="text-xl leading-9 text-white ">
              
              The goal was to make the front end and user dashboard of an AI driven on-the-fly
              video editing platform aimed at catering to sports events and other streaming services
              empowering the customers to pull and broadcast highlights and other short stories on the fly.
            </p>
            
          </article>
        </div>
        <div className="bg-phone min-h-[250px] flex-1 bg-cover bg-center bg-no-repeat">
          <img src="/img/magnifi/magnifi1.png" />
        </div>
      </section>

      <section className="flex min-h-[450px] flex-col-reverse md:flex-row-reverse">
        <div className="flex flex-1 items-center justify-center">
          <article className="max-w-md py-24 px-3 text-center md:text-left">
            <h1 className="mb-8 text-3xl font-bold leading-8">
              Stand out to the right audience
            </h1>
            <p className="text-xl leading-9 text-white/60">
              Using a collaborate formula of designers, researchers,
              photographers, videographers, and copywriters, we`ll build and
              extend your brand in digital places..
            </p>
            
          </article>
        </div>
        <div className="bg-glass min-h-[250px] flex-1 bg-cover bg-center bg-no-repeat">
          <div className="bg-phone min-h-[250px] flex-1 bg-cover bg-center bg-no-repeat">
            <img src="/img/magnifi/magnifi2.png" />
          </div>
        </div>
      </section>

      <section className="flex min-h-[250px]  flex-col-reverse md:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <article className="max-w-md p-3 py-24 px-3 text-center md:text-left">
            <h1 className="mb-8 text-3xl font-bold leading-8">
              Transform your brand
            </h1>
            <p className="text-xl leading-9 text-black/60 ">
              We are full-service creative agency specializing in helping brands
              gorw fast. Engage your clients through compliting cisuals that do
              most of the marketing for your.
            </p>
            
          </article>
        </div>
        <div className="bg-phone min-h-[250px] flex-1 bg-cover bg-center bg-no-repeat">
          <img src="/img/magnifi/magnifi3.png" />
        </div>
      </section>

      <section className="flex min-h-[250px] flex-col-reverse md:flex-row-reverse">
        <div className="flex flex-1 items-center justify-center">
          <article className="max-w-md py-24 px-3 text-center md:text-left">
            <h1 className="mb-8 text-3xl font-bold leading-8">
              Stand out to the right audience
            </h1>
            <p className="text-xl leading-9">
              Using a collaborate formula of designers, researchers,
              photographers, videographers, and copywriters, we`ll build and
              extend your brand in digital places..
            </p>
            
          </article>
        </div>
        <div className="bg-glass min-h-[250px] flex-1 bg-cover bg-center bg-no-repeat">
          <div className="bg-phone min-h-[250px] flex-1 bg-cover bg-center bg-no-repeat">
            <img src="/img/magnifi/magnifi4.png" />
          </div>
        </div>
      </section>

      {/* NEW LAYOUT ENDS HERE */}

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
          
          <AnimatedLink
                  href="https://magnifi.ai/"
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
    </Layout>
  )
}

export default magnifi
