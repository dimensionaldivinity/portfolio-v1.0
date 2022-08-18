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
          
        </h2><h2 className="mt-4 whitespace-nowrap font-euclid text-lg tracking-wide text-black dark:text-white sm:text-[1.75rem]">
          Here are some of the things I have worked on -&gt;
        </h2>
        <Link href="/projects" passHref>
          <a className=" h-20 mb-16 mt-6 flex items-center justify-center gap-3 rounded-2xl bg-dpyellow py-3 px-7 dark:bg-dpdarkyellow">
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

            {/* NEW DIV EXPERIMENT STARTS */}
            <div className='flex flex-col items-center'>
            <h3 className="whitespace-nowrap font-freigeistlight text-[1rem] font-black leading-[1] tracking-[-0.07em] xs:text-[2rem]">
              Technologies I have been working with
            </h3>
              
                <div>
                  <div className="mb-10 mt-5 flex items-center justify-center gap-5">
                     <div className='flex flex-col items-center'>
                        <p className='mb-2'>
                         React Js
                        </p>
                        <a
                         href="https://reactjs.org/"
                         rel="noreferrer"
                         target="_blank"
                         className="h-5 transition-all hover:mb-1"
                        >
                        <MaskSvg
                          className="h-10 w-10 mt-5 cursor-alias dark:!bg-white"
                          url="/img/icons/react.svg"
                        />
                        </a>
                     </div>

                     <div className='flex flex-col items-center'>
                        <p className='mb-2'>
                         Next Js
                        </p>
                        <a
                         href="https://nextjs.org/"
                         rel="noreferrer"
                         target="_blank"
                         className="h-5 transition-all hover:mb-1"
                        >
                        <MaskSvg
                          className="h-10 w-10 mt-5 cursor-alias dark:!bg-white"
                          url="/img/icons/next-js.svg"
                        />
                        
                        </a>
                     </div>

                     <div className='flex flex-col items-center'>
                        <p className='mb-2'>
                         Node Js
                        </p>
                        <a
                         href="https://nodejs.org/en/"
                         rel="noreferrer"
                         target="_blank"
                         className="h-5 transition-all hover:mb-1"
                        >
                        <MaskSvg
                          className="h-10 w-10 mt-5 cursor-alias dark:!bg-white"
                          url="/img/icons/nodejs1.svg"
                        />
                        </a>
                     </div>

                     <div className='flex flex-col items-center'>
                        <p className='mb-2'>
                         Express Js
                        </p>
                        <a
                         href="https://expressjs.com/"
                         rel="noreferrer"
                         target="_blank"
                         className="h-5 transition-all hover:mb-1"
                        >
                        <MaskSvg
                          className="h-10 w-10 mt-5 cursor-alias dark:!bg-white"
                          url="/img/icons/expressjs.svg"
                        />
                        </a>
                     </div>

                     <div className='flex flex-col items-center'>
                        <p className='mb-2'>
                         Typescript
                        </p>
                        <a
                         href="https://www.typescriptlang.org/"
                         rel="noreferrer"
                         target="_blank"
                         className="h-5 transition-all hover:mb-1"
                        >
                        <MaskSvg
                          className="h-10 w-10 mt-5 cursor-alias dark:!bg-white"
                          url="/img/icons/typescript1.svg"
                        />
                        </a>
                     </div>
            
            
            
                  </div>
                </div>
              
            </div>
             {/* NEW DIV EXPERIMENTS ENDS */}
            
           


            <div className='mt-10 flex flex-col items-center'>

            <div className='flex flex-col items-center'>
            <h3 className="whitespace-nowrap mb-5 font-freigeistlight text-[1rem] font-black leading-[1] tracking-[-0.07em] xs:text-[2rem]">
              This website is built with :
            </h3>
              
                <div>
                  <div className="mb-10 mt-3 flex items-center justify-center gap-5">
                     <div className='flex flex-col items-center'>
                        <p className='mb-2'>
                         Next Js
                        </p>
                        <a
                         href="https://nextjs.org/"
                         rel="noreferrer"
                         target="_blank"
                         className="h-5 transition-all hover:mb-1"
                        >
                        <img className='h-10 w-10' src="/img/icons/next-js.svg" alt="logo" />
                        </a>
                     </div>
                     <div className='flex flex-col items-center'>
                        <p className='mb-2'>
                         Sanity.io
                        </p>
                        <a
                         href="https://www.sanity.io/"
                         rel="noreferrer"
                         target="_blank"
                         className="h-5 transition-all hover:mb-1"
                        >
                        <img className='h-10 w-10' src="/img/icons/sanity.svg" alt="logo" />
                        </a>
                     </div>
                     <div className='flex flex-col items-center'>
                        <p className='mb-2'>
                         Tailwind CSS
                        </p>
                        <a
                         href="https://tailwindcss.com/"
                         rel="noreferrer"
                         target="_blank"
                         className="h-5 transition-all hover:mb-1"
                        >
                        <img className='h-10 w-10' src="/img/icons/tailwind-css.svg" alt="logo" />
                        </a>
                     </div>
                     <div className='flex flex-col items-center'>
                        <p className='mb-2'>
                         TypeScript
                        </p>
                        <a
                         href="https://www.typescriptlang.org/"
                         rel="noreferrer"
                         target="_blank"
                         className="h-5 transition-all hover:mb-1"
                        >
                        <img className='h-10 w-10' src="/img/icons/typescript.svg" alt="logo" />
                        </a>
                     </div>
                  </div>
                </div>
                
            </div>

                    
            
            </div>
            
           
            

          </div>
        </div>
        
      </section>
    </div>
  )
}

export default HomeProjects
