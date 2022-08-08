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

      <div>
      <div className="mt-10 overflow-hidden">
      <div className="flex flex-col items-center gap-5">
        
        <svg xmlns="http://www.w3.org/2000/svg  relative z-20" className="h-10 w-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>

    <div className="relative z-10 flex w-full justify-center rounded-full bg-orange-600 outline-dotted outline-4 outline-offset-4 md:translate-y-20 md:bg-transparent md:outline-none">
      <img className="" src="https://pics.clipartpng.com/Orange_Slice_PNG_Clipart-236.png" />
    </div>
  </div>


<section className="flex min-h-[450px]  flex-col-reverse md:flex-row">
  <div className="flex flex-1 items-center justify-center">
    <article className="max-w-md p-3 py-24 px-3 text-center md:text-left">
      <h1 className="mb-8 text-3xl font-bold leading-8">Transform your brand</h1>
      <p className="text-xl leading-9 text-black/60 ">We are full-service creative agency specializing in helping brands gorw fast. Engage your clients through compliting cisuals that do most of the marketing for your.</p>
      <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl  ">Find more</button>
    </article>
  </div>
  <div className="bg-phone min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
    <img src="/img/magnifi/magnifi1.png"/>
  </div>
</section>

<section className="flex min-h-[450px] flex-col-reverse md:flex-row-reverse">
  <div className="flex flex-1 items-center justify-center">
    <article className="max-w-md py-24 px-3 text-center md:text-left">
      
      <h1 className="mb-8 text-3xl font-bold leading-8">Stand out to the right audience</h1>
      <p className="text-xl leading-9 text-white/60">Using  a collaborate formula of designers, researchers, photographers,
videographers, and copywriters, we`ll build and extend your brand in digital places..</p>
      <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl ">Learn more</button>
    </article>
    
  </div>
  <div className="bg-glass min-h-[450px] flex-1 bg-yellow-400 bg-center bg-cover bg-no-repeat">
  <div className="bg-phone min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
    <img src="/img/magnifi/magnifi2.png"/>
  </div>
  </div>
</section>

<section className="flex min-h-[450px]  flex-col-reverse md:flex-row">
  <div className="flex flex-1 items-center justify-center">
    <article className="max-w-md p-3 py-24 px-3 text-center md:text-left">
      <h1 className="mb-8 text-3xl font-bold leading-8">Transform your brand</h1>
      <p className="text-xl leading-9 text-black/60 ">We are full-service creative agency specializing in helping brands gorw fast. Engage your clients through compliting cisuals that do most of the marketing for your.</p>
      <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl  ">Find more</button>
    </article>
  </div>
  <div className="bg-phone min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
    <img src="/img/magnifi/magnifi3.png"/>
  </div>
</section>

<section className="flex min-h-[450px] flex-col-reverse md:flex-row-reverse">
  <div className="flex flex-1 items-center justify-center">
    <article className="max-w-md py-24 px-3 text-center md:text-left">
      
      <h1 className="mb-8 text-3xl font-bold leading-8">Stand out to the right audience</h1>
      <p className="text-xl leading-9">Using  a collaborate formula of designers, researchers, photographers,
videographers, and copywriters, we`ll build and extend your brand in digital places..</p>
      <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl ">Learn more</button>
    </article>
    
  </div>
  <div className="bg-glass min-h-[450px] flex-1 bg-yellow-400 bg-center bg-cover bg-no-repeat">
  <div className="bg-phone min-h-[450px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
    <img src="/img/magnifi/magnifi4.png"/>
  </div>
  </div>
</section>

<section className="flex mb-14 flex-col  md:flex-row h-[550px] ">
  <article className="flex-1 relative bg-chery  items-end pb-8 flex justify-center bg-red-600 md:bg-chery md:bg-fill bg-cover bg-bottom">
    <div className="   md:w-4/6  w-fukk  bottom-0  text-center">
      <h1 className="text-3xl text-black/40 mb-4 font-bold">Graphick Design</h1>
      <p className="text-black/40  leading-6 font-bold ">Great design makes your memorable. We deliver artwork that underscores your brand message and captures potencial clients attention.</p>
    </div>
  </article>

  <article className="flex-1 relative bg-orange  items-end pb-8 flex justify-center bg-orange-500 md:bg-orange bg-no-repeat  bg-cover bg-right-bottom" >
    <div className="   md:w-4/6 w-full   bottom-0  text-center">
      <h1 className="text-3xl text-black/40 mb-4 font-bold">Graphick Design</h1>
      <p className="text-black/40  leading-6 font-bold">Great design makes your memorable. We deliver artwork that underscores your brand message and captures potencial clients attention.</p>
    </div>
  </article>
 
</section>


<section className="m-auto w-10/12 py-36">
  <h1 className="text-3xl text-black/30 font-bold text-center mb-16">Client testimonials</h1>
  <div className="flex flex-col justify-between md:flex-row gap-12">
    

  </div>
</section>

<section className="md:flex  flex-wrap grid grid-cols-2">
  <div className="h-[350px] overflow-hidden md:flex-1 w-full bg-blue-800">
    <img className="w-full h-full object-cover" src="/img/makeroom/makeroomextra1.png"/>
  </div>
   <div className="h-[350px] overflow-hidden md:flex-1 w-full bg-blue-800">
    <img className="w-full h-full object-cover" src="/img/makeroom/makeroomextra4.png"/>
  </div>
  <div className="h-[350px] overflow-hidden md:flex-1 w-full bg-blue-800">
    <img className="w-full h-full object-cover" src="/img/makeroom/makeroomextra3.png"/>
  </div>
  <div className="h-[350px] overflow-hidden md:flex-1 w-full bg-white-800 flex items-center justify-center">
      <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-2xl text-white ">Learn more</button>
    <img className="https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
  </div>
 

</section>

     

      {/* new layout ends here  */}


    </Layout>
  )
}



export default magnifi
