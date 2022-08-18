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
      <div className='mb-10 flex flex-col items-center justify-content text-inline-block' >
      <h3 className="whitespace-nowrap font-euclid text-[1.5rem] tracking-wide items-center justify-content">
          <span className="font-medium xs:text-[2rem]"></span>I&rsquo;m Durga Prasad Pattabhi!, a developer specializing in
          <br></br>  building (with a keen interest in designing) exceptional
          <br></br>  digital experiences that live on the internet.
        </h3>
      </div>
      <div className="relative h-[25rem] w-[25rem]">
        <Image
          src="/img/avatars/dp-laptop.png"
          layout="fill"
          draggable={false}
          quality={100}
          alt="Memoji character of Prasad smiling."
        />
      </div>
    </section>
  )
}

export default HomeAbout
