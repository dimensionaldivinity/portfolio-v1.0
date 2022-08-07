interface Props {
  title: string
  children: React.ReactNode
}

const PageHero: React.FC<Props> = (props) => {
  return (
    <section className="mt-14 flex flex-col items-center justify-center">
      <h1 className="font-freigeistwide text-[5rem] font-black tracking-[-0.07em] text-black dark:text-white md:text-[6rem] xs:text-[4rem]">
        {props.title}
      </h1>
      <p className="text-center text-lg text-dpgrey dark:text-dpdarkgrey sm:text-xl md:text-2xl">
        {props.children}
      </p>
    </section>
  )
}

export default PageHero
