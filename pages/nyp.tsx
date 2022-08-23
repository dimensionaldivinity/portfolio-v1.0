import type { NextPage } from 'next'
import { Layout } from '../components/common/Layout'
import PageHero from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import Image from 'next/image'
import MaskSvg from '../components/common/MaskSvg'
import AnimatedLink from '../components/common/AnimatedLink'

const nyp: NextPage = () => {
  const title = 'nyp'

  return (
    <Layout>
      <SEO
        title={title}

        // imageUrl={'/img/about.png'}
      />
      <PageHero title={title}></PageHero>

      <div>
        <div className="mt-10 overflow-hidden">
          <div className="flex flex-col items-center gap-5">
            <h1 className="w-full text-center text-5xl tracking-widest">
              We are <br className="md:hidden" />
              creatives
            </h1>
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

        <div className="relative z-10 flex w-full justify-center rounded-full bg-orange-600 outline-dotted outline-4 outline-offset-4 md:translate-y-20 md:bg-transparent md:outline-none">
          <img
            className=""
            src="https://pics.clipartpng.com/Orange_Slice_PNG_Clipart-236.png"
          />
        </div>
      </div>

      <section className="flex min-h-[450px]  flex-col-reverse md:flex-row">
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
            <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl  ">
              Find more
            </button>
          </article>
        </div>
        <div className="bg-phone min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
          <img src="/img/makeroom/makeroomhome.png" />
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
            <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl ">
              Learn more
            </button>
          </article>
        </div>
        <div className="bg-glass min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
          <div className="bg-phone min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
            <img src="/img/makeroom/makeroom2.png" />
          </div>
        </div>
      </section>

      <section className="flex min-h-[450px]  flex-col-reverse md:flex-row">
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
            <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl  ">
              Find more
            </button>
          </article>
        </div>
        <div className="bg-phone min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
          <img src="/img/makeroom/makeroom3.png" />
        </div>
      </section>

      <section className="flex min-h-[450px] flex-col-reverse md:flex-row-reverse">
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
            <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl ">
              Learn more
            </button>
          </article>
        </div>
        <div className="bg-glass min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
          <div className="bg-phone min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
            <img src="/img/makeroom/makeroom4.png" />
          </div>
        </div>
      </section>

      <section className="mb-14 flex h-[550px]  flex-col md:flex-row ">
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
      </section>

      <section className="m-auto w-10/12 py-36">
        <h1 className="mb-16 text-center text-3xl font-bold text-black/30">
          Client testimonials
        </h1>
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <article className="flex flex-col items-center gap-3 px-2 py-4 text-center">
            <div className=" h-24 w-24 overflow-hidden rounded-full outline-dotted outline-4 outline-offset-2 outline-sky-800">
              <img
                className="h-full w-full object-cover"
                src="/img/makeroom/makeroom2.png"
              />
            </div>
            <p className="mt-9 text-base font-bold text-black/60">
              We put our trus in sunnyside and they delivered, making sure our
              needs were met dedlines were alwas hit
            </p>
            <span className="mt-11 text-2xl font-bold text-black/80">
              Emily R.
            </span>
          </article>

          <article className="flex flex-col items-center gap-3 px-2 py-4 text-center">
            <div className=" h-24 w-24 overflow-hidden rounded-full outline-dotted outline-4 outline-offset-2 outline-sky-800">
              <img
                className="h-full w-full object-cover"
                src="/img/makeroom/makeroom3.png"
              />
            </div>
            <p className="mt-9 text-base font-bold text-black/60">
              We put our trus in sunnyside and they delivered, making sure our
              needs were met dedlines were alwas hit
            </p>
            <span className="mt-11 text-2xl font-bold text-black/80">
              Emily R.
            </span>
          </article>
          <article className="flex flex-col items-center gap-3 px-2 py-4 text-center">
            <div className=" h-24 w-24 overflow-hidden rounded-full outline-dotted outline-4 outline-offset-2 outline-sky-800">
              <img
                className="h-full w-full object-cover"
                src="/img/makeroom/makeroom4.png"
              />
            </div>
            <p className="mt-9 text-base font-bold text-black/60">
              We put our trus in sunnyside and they delivered, making sure our
              needs were met dedlines were alwas hit
            </p>
            <span className="mt-11 text-2xl font-bold text-black/80">
              Emily R.
            </span>
          </article>
        </div>
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
          <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-2xl text-white ">
            Learn more
          </button>
          <img className="https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
      </section>
    </Layout>
  )
}

export default nyp
