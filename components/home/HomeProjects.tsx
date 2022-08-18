import Link from 'next/link'
import MaskSvg from '../common/MaskSvg'
import { SanityClient } from '@sanity/client'
import ProjectsGrid from '../projects/ProjectsGrid'
import sanity from '../../utils/sanity'
import Projects from '../../pages/projects'
import type * as Schema from '../../types/sanity'
import ShadowButton from '../common/ShadowButton'
import { Layout } from '../common/Layout'





const HomeProjects: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <section className="mt-48 mb-60 flex w-full max-w-[1680px] flex-col items-center justify-center">
        <h1 className="whitespace-nowrap font-freigeistwide text-[5rem] font-black leading-[1] tracking-[-0.07em] text-black dark:text-white sm:text-[8.2rem]">
          Projects
        </h1>
        <h2 className="mt-4 whitespace-nowrap font-euclid text-lg tracking-wide text-black dark:text-white sm:text-[1.75rem]">
          Since time is so precious,
        </h2><h2 className="mt-4 whitespace-nowrap font-euclid text-lg tracking-wide text-black dark:text-white sm:text-[1.75rem]">
          here is a curated list of things i have worked on -&gt;
        </h2>
        <Link href="/projects" passHref>
          <a className="mb-16 mt-6 flex items-center justify-center gap-3 rounded-2xl bg-dpyellow py-3 px-7 dark:bg-dpdarkyellow">
            <p className="text-white">Have a look at the projects</p>
            <MaskSvg
              className="h-[0.65rem] w-[0.65rem]"
              url="/img/icons/arrow-tr.svg"
              color="white"
            />
          </a>
        </Link>
        <div className="h-[30rem] w-full px-6 sm:px-12 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48 ">
          <div className="h-full w-full rounded-[5rem] bg-dpoffwhite dark:bg-dpdarklight xs:pb-20">
            <span className="mb-16 mt-2 flex items-center justify-center gap-3 rounded-2xl">
            <h1>
              Tech stack i use goes here
            </h1>
            </span>
            <div className='flex flex-col items-center'>
              <h2>This website was built using </h2>
              
            </div>
            <div className='flex flex-col items-center'>
            <div className='mt-5 flex items-center justify-center gap-5'>
              <p>Next Js</p>
              
              <p>Sanity.io</p>
               
              <p>Tailwind CSS</p>

              <p>Typescript</p>
               
            </div>
            </div>
            <div className='mt-5 flex items-center justify-center gap-14'>
              
              <MaskSvg
                className="h-10 w-10 cursor-alias dark:!bg-white"
                url="/img/icons/next-js.svg"
              />
              
              <MaskSvg
                className="h-10 w-10 cursor-alias dark:!bg-white"
                url="/img/icons/sanity.svg"
              />
              
               <MaskSvg
                className="h-10 w-10 cursor-alias dark:!bg-white"
                url="/img/icons/tailwind-css.svg"
              />

              <MaskSvg
                className="h-10 w-10 cursor-alias dark:!bg-white"
                url="/img/icons/typescript1.svg"
              />
            </div>
            

          </div>
        </div>
        
      </section>
    </div>
  )
}

export default HomeProjects
