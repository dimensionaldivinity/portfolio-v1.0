import type { NextPage } from 'next'
import { Layout } from '../components/common/Layout'
import PageHero from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import Image from 'next/image'
import MaskSvg from '../components/common/MaskSvg'
import AnimatedLink from '../components/common/AnimatedLink'

const contact: NextPage = () => {
  const title = 'Lets talk'

  return (
    <Layout>
      <SEO
        title={title}

        // imageUrl={'/img/about.png'}
      />
      <PageHero title={title}></PageHero>

      <div className="mb-10 items-center xs:ml-12 xs:pl-1">
        <div className="w-72 rounded-xl bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl md:hidden">
          <a href="#">
            <img
              src="/img/avatars/prasad.jpeg"
              alt="Product"
              className="h-80 w-72 rounded-t-xl object-cover"
            />
            <div className="w-72 px-4 py-3">
              <span className="mr-3 text-xs uppercase text-gray-400">
                Developer
              </span>
              <p className="block truncate text-lg font-bold capitalize text-black">
                Durga Prasad Pattabhi
              </p>
              <div className="flex items-center">
                <p className="text-md font-regular my-1 cursor-auto text-black"></p>
                <br />
                <p className="font-regular my-1 cursor-auto text-lg text-black"></p>
                <article>
                  <p className="ml-0 mt-2 cursor-auto text-sm text-gray-600">
                    +91-8383048570
                  </p>

                  <p className="text-md ml-0 mb-2 cursor-auto text-gray-600">
                    durgaprasadpattabhi@gmail.com
                  </p>

                  <AnimatedLink
                    href="mailto:contact@dprasad.me?subject=I'd%20like%20to%20talk!"
                    color="from-black to-black dark:from-white dark:to-white"
                    iconColor="!bg-dark dark:!bg-white"
                    iconSize="h-[0.7rem] w-[0.7rem]"
                  >
                    <div className="items-left justify-left flex gap-2">
                      <MaskSvg
                        className="mt-[0.1rem] h-4 w-4 dark:!bg-white"
                        url="/img/icons/mail.svg"
                      />
                      <p className="text-black dark:text-dpyellow">
                        shoot me a message
                      </p>
                    </div>
                  </AnimatedLink>
                </article>
              </div>
            </div>
          </a>
        </div>

        <div className="bg-grey-100 ml-[27rem] mt-[-5] hidden w-1/2 items-center p-20 md:w-1/2 mdlg:block">
          <div className="rounded-lg bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-purple-900">
                Durga Prasad
              </h2>
              <p className="mb-2 text-purple-700">
                Developer who designs things for the internet
              </p>
              <p className="mb-2 text-purple-700">+91-8383048570</p>
              <p className="mb-2 text-purple-700">
                durgaprasadpattabhi@gmail.com
              </p>
              <a
                href="#"
                className="text-sm text-purple-600 underline hover:text-purple-500"
              >
                Read More 👉
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
