import MaskSvg from '../common/MaskSvg'
import type * as Schema from '../../types/sanity'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { builder } from '../../utils/sanity'
import Link from 'next/link'

interface Props {
  project: Schema.Project
}



const ProjectGridItem: React.FC<Props> = ({ project }) => {
  
  return (
    <AnimateSharedLayout>
      <motion.div
        className="group flex cursor-pointer flex-col items-center justify-start pt-[1rem] md:items-start"
        whileHover="hover"
        whileTap="tap"
        // onClick={() => <Link href = '/'></Link>}
        
        layout
      >   
        {/* <Link href = '/'> */}
        <motion.div
          variants={{
            hover: {
              scale: 1.05
            },
            tap: {
              scale: 1.02
            }
          }}
          className={
            'flex h-[14rem] w-[20rem] items-end justify-end rounded-[2rem] xs:h-[16rem] xs:w-[22rem] sm:h-[20rem] sm:w-[30rem] md:h-[21rem] md:w-[35rem] ' +
            (project.mainImage
              ? 'bg-cover bg-no-repeat'
              : 'bg-dpblack dark:bg-dpblack')
          }
          style={{
            backgroundImage: project.mainImage
              ? `url(${builder.image(project.mainImage.asset).url()})`
              : 'none'
          }}
          layoutId={`thumbnail-container-${project.slug}`}
          key={`thumbnail-container-${project.slug}`}
          onClick={()=> <Link href = '/makemyroom' ></Link>}
        >
          
          <div className="m-5 rounded-full bg-white p-4">
            <MaskSvg
              className="h-[0.6rem] w-[0.6rem] md:h-[0.8rem] md:w-[0.8rem]"
              url="/img/icons/arrow-tr.svg"
              color="black"
            />
          </div>
          
        </motion.div>
        {/* </Link> */}
        <div className="flex-wrap xs:pr-5">
          <motion.h2
            className="xs:pr-10 mt-3 mb-2 w-fit bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-left-bottom bg-no-repeat font-freigeistwide text-[2.5rem] font-black tracking-[-0.07em] transition-all group-hover:bg-[length:100%_3px] group-focus:bg-[length:100%_3px] dark:from-white dark:to-white"
            layoutId={`title-container-${project.slug}`}
          >
            <Link href= {"/projects/" + project.slug.current} key={project.slug.current}>
            {project.title}
            </Link>
          </motion.h2>
          <motion.p
            className="text-md max-w-[18rem] text-dpgrey dark:text-dpdarkgrey xs:max-w-[24rem] sm:max-w-[28rem] sm:text-lg md:max-w-[30rem]"
            layoutId={`description-container-${project.slug}`}
          >
            {project.description}
          </motion.p>
          <motion.div
            className="mt-3 flex gap-2"
            layoutId={`stack-container-${project.slug}`}
          >
            {project.techstack.map((stack) => {
              return (
                <p
                  key={project._id + '_' + stack._id}
                  className="rounded-full bg-dpoffwhite py-2 px-4 text-dpgrey dark:bg-white dark:text-black"
                >
                  {stack.name}
                </p>
              )
            })}
          </motion.div>
          
        </div>
      </motion.div>
    </AnimateSharedLayout>
  )
}

export default ProjectGridItem
