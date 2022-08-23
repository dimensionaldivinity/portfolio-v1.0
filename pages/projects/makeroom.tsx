import type { NextPage } from 'next'
import { Layout } from '../../components/common/Layout'
import PageHero from '../../components/common/PageHero'
import { SEO } from '../../components/common/SEO'
import Image from 'next/image'
import AnimatedLink from '../../components/common/AnimatedLink'

const makeroom: NextPage = () => {
  const title = 'Makeroom'

  return (
    <Layout>
      <SEO
        title={title}

        // imageUrl={'/img/about.png'}
      />
      <PageHero title={title}>
        This was website deign for makeroom
        <br />
        You&rsquo;re in the right place! 😎
      </PageHero>

      {/* new layout starts here for XS and SM*/}

      <div className="h-full w-full px-6 sm:px-12 md:hidden mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
        <div className="h-full w-full rounded-[5rem] xs:bg-dpdark mdlg:bg-dpoffwhite">
          <span className="mb-5 mt-2 flex items-center justify-center gap-3 rounded-2xl">
            <div className="m-10 h-[40rem] w-full justify-center rounded-[5rem] xs:m-5 xs:h-[40rem] xs:bg-dpdark mdlg:bg-dpoffwhite">
              <div className="relative hidden h-full w-full rounded-[5rem] px-6 dark:block sm:px-5 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
                <Image
                  src="/img/makeroom/homepage.png"
                  layout="fill"
                  draggable={false}
                  quality={100}
                  className="object-cover"
                  alt="Rainbow colored decorative wave shapes for dark mode."
                />
              </div>
            </div>
          </span>
        </div>

        <div className="mb-5 flex h-[20rem] rounded-xl bg-dpblack">
          {/* card starts here */}

          <div className="h-[20rem] w-full rounded-xl bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <div className="w-72 px-4 py-3">
                <span className="mr-3 text-xs uppercase text-gray-400">
                  Brand
                </span>
                <p className="block truncate text-lg font-bold capitalize text-black">
                  We were asked by BASIC to help them develop a new look and
                  feel for NERD Skincare. Working closely with the SD team we
                  developed several concepts that covered the e-commerce
                  platform, branded content, and tone of voice. We then created
                  a suite of brand assets as a toolkit that could be used by the
                  NERD marketing team in their communications.
                </p>
                <div className="flex items-center">
                  <p className="my-3 cursor-auto text-lg font-semibold text-black">
                    $149
                  </p>
                  <del>
                    <p className="ml-2 cursor-auto text-sm text-gray-600">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* card end here */}
        </div>
      </div>

      <div className="h-full w-full px-6 sm:px-12 md:hidden mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
        <div className="h-full w-full rounded-[5rem] xs:bg-dpdark mdlg:bg-dpoffwhite">
          <span className="mb-5 mt-2 flex items-center justify-center gap-3 rounded-2xl">
            <div className="m-10 h-[40rem] w-full justify-center rounded-[5rem] xs:m-5 xs:h-[40rem] xs:bg-dpdark mdlg:bg-dpoffwhite">
              <div className="relative hidden h-full w-full rounded-[5rem] px-6 dark:block sm:px-5 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
                <Image
                  src="/img/makeroom/profile.png"
                  layout="fill"
                  draggable={false}
                  quality={100}
                  className="object-cover"
                  alt="Rainbow colored decorative wave shapes for dark mode."
                />
              </div>
              <div className="relative z-0 hidden h-full w-full rounded-[5rem] px-6 dark:block sm:px-5 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
                <Image
                  src="/img/makeroom/menu.png"
                  layout="fill"
                  draggable={false}
                  quality={100}
                  className="object-cover"
                  alt="Rainbow colored decorative wave shapes for dark mode."
                />
              </div>
            </div>
          </span>
        </div>

        <div className="mb-5 flex h-[20rem] rounded-xl">
          {/* card starts here */}

          <div className="z-10 mt-60 h-[23rem] w-full rounded-xl bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <div className="w-72 px-4 py-3">
                <span className="mr-3 text-xs uppercase text-gray-400">
                  Brand
                </span>
                <p className="block truncate text-lg font-bold capitalize text-black">
                  We were asked by BASIC to help them develop a new look and
                  feel for NERD Skincare. Working closely with the SD team we
                  developed several concepts that covered the e-commerce
                  platform, branded content, and tone of voice. We then created
                  a suite of brand assets as a toolkit that could be used by the
                  NERD marketing team in their communications.
                </p>
                <div className="flex items-center">
                  <p className="my-3 cursor-auto text-lg font-semibold text-black">
                    $149
                  </p>
                  <del>
                    <p className="ml-2 cursor-auto text-sm text-gray-600">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* card end here */}
        </div>
      </div>

      <div className="h-full w-full px-6 sm:px-12 md:hidden mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
        <div className="h-full w-full rounded-[5rem] xs:bg-dpdark mdlg:bg-dpoffwhite">
          <span className="mb-5 mt-80 flex items-center justify-center gap-3 rounded-2xl">
            <div className="m-10 h-[40rem] w-full justify-center rounded-[5rem] xs:m-5 xs:h-[40rem] xs:bg-dpdark mdlg:bg-dpoffwhite">
              <div className="relative hidden h-full w-full rounded-[5rem] px-6 dark:block sm:px-5 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
                <Image
                  src="/img/makeroom/dash.png"
                  layout="fill"
                  draggable={false}
                  quality={100}
                  className="object-cover"
                  alt="Rainbow colored decorative wave shapes for dark mode."
                />
                <Image
                  src="/img/makeroom/newproduct.png"
                  layout="fill"
                  draggable={false}
                  quality={100}
                  className="object-cover"
                  alt="Rainbow colored decorative wave shapes for dark mode."
                />
              </div>
              <div className="relative hidden h-full w-full rounded-[5rem] px-6 dark:block sm:px-5 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
                <Image
                  src="/img/makeroom/fulfillment.png"
                  layout="fill"
                  draggable={false}
                  quality={100}
                  className="object-cover"
                  alt="Rainbow colored decorative wave shapes for dark mode."
                />
              </div>
            </div>
          </span>
        </div>

        <div className="mb-30 mt-60 flex h-[10rem] rounded-xl bg-dpblack">
          {/* card starts here */}

          <div className="z-10 mt-40 h-[10rem] w-full rounded-xl bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <div className="w-72 px-4 py-3">
                <span className="mr-3 text-xs uppercase text-gray-400">
                  Brand
                </span>
                <p className="block truncate text-lg font-bold capitalize text-black">
                  We were asked by BASIC to help them develop a new look and
                  feel for NERD Skincare. Working closely with the SD team we
                  developed several concepts that covered the e-commerce
                  platform, branded content, and tone of voice. We then created
                  a suite of brand assets as a toolkit that could be used by the
                  NERD marketing team in their communications.
                </p>
                <div className="flex items-center">
                  <p className="my-3 cursor-auto text-lg font-semibold text-black">
                    $149
                  </p>
                  <del>
                    <p className="ml-2 cursor-auto text-sm text-gray-600">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* card end here */}
        </div>
      </div>

      {/* New layout ends here for XS and SM */}

      {/* mdlg and above starts here */}

      <div className="hidden md:block">
        <div>
          <div className="mt-10 overflow-hidden">
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

          <div className="relative z-10 flex w-full justify-center rounded-full bg-orange-600 outline-dotted outline-4 outline-offset-4 md:translate-y-20 md:bg-transparent md:outline-none">
            <img className="" src="/img/makeroom/makeroomhero.png" />
          </div>
        </div>

        <section className="flex min-h-[450px]  flex-col-reverse md:flex-row">
          <div className="flex flex-1 items-center justify-center">
            <article className="max-w-md p-3 py-24 px-3 text-center md:text-left">
              <h1 className="mb-8 text-3xl font-bold leading-8">
                Come up with a plan fpr makeroom
              </h1>
              <p className="text-xl leading-9 text-black/60 ">
                We are full-service creative agency specializing in helping
                brands gorw fast. Engage your clients through compliting cisuals
                that do most of the marketing for your.
              </p>
              <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl  ">
                Find more
              </button>
            </article>
          </div>
          <div className="bg-phone min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
            <img src="/img/makeroom/makeroom2.png" />
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
          <div className="bg-glass min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
            <div className="bg-phone min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
              <img src="/img/makeroom/makeroom3.png" />
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
                We are full-service creative agency specializing in helping
                brands gorw fast. Engage your clients through compliting cisuals
                that do most of the marketing for your.
              </p>
              <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-xl  ">
                Find more
              </button>
            </article>
          </div>
          <div className="bg-phone min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
            <img src="/img/makeroom/makeroom4.png" />
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
          <div className="bg-glass min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
            <div className="bg-phone min-h-[250px] flex-1 bg-yellow-400 bg-cover bg-center bg-no-repeat">
              <img src="/img/makeroom/makeroom5.png" />
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
            {/* <button className="mt-3 border-b border-b-8 border-dotted border-b-yellow-400 py-2 text-2xl text-white"
             
             >
              visit the website
            </button> */}
            <AnimatedLink
                  href="https://mymakeroom.com/"
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
      </div>

      {/* mdlg and above ends here */}

      <div className="flex items-center justify-center">
        <div className="pb-80"></div>
      </div>
    </Layout>
  )
}

export default makeroom
