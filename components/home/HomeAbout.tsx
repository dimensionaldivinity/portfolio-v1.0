import Image from 'next/image'

const HomeAbout: React.FC = () => {
  return (
    <section
      className="mt-60 mb-40 flex flex-col items-center justify-center pt-32"
      id="about-scroller"
    >
      <div className="mb-2 flex flex-col items-center justify-center ">
        <h1 className="whitespace-nowrap font-freigeistwide text-[9rem] font-black leading-[1] tracking-[-0.07em] xs:text-[4rem]">
          Hi! again
        </h1>
        {/* <h2 className="whitespace-nowrap font-euclid text-[1.7rem] tracking-wide">
          <span className="font-medium xs:text-[2rem]">I</span>, I&rsquo;m Durga Prasad Pattabhi!
        </h2> */}
      </div>

      {/* ABOUT SECTION COPY STARTS */}

        <div className="mt-10 overflow-hidden">
          <div className="flex max-w-[50rem] flex-col items-center gap-5">
            <p className="p-3 w-full text-center text-2xl tracking-widest">
              I am Durga Prasad, <br className="md:hidden" />
              a developer enthusiastic in building exceptional digital experiences that live on the Internet. (with a keen interest on design).
            </p>
            <p className="w-full text-center text-5xl tracking-widest">
              We are <br className="md:hidden" />
              creatives
            </p>
            
          </div>
        </div>

      {/* ABOUT SECTION COPY ENDS */}
      
      <div className="relative h-[25rem] w-[25rem]">
        <Image
          src="/img/avatars/dp-laptop.png"
          layout="fill"
          draggable={false}
          quality={100}
          alt="bitmoji character of Prasad smiling."
        />
      </div>

        


    </section>
  )
}

export default HomeAbout
