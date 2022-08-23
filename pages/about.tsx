import type { NextPage } from 'next'
import { Layout } from '../components/common/Layout'
import PageHero from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'

const About: NextPage = () => {
  const title = 'About'
  const description = 'Want to know more about Durga Prasad? Get to know me!'

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        // imageUrl={'/img/about.png'}
      />
      <PageHero title={title}>
        Hey, I am a creative developer hailing from India
        <br />
        And I love Oranges. 😎
      </PageHero>

      <div>
        <div className="mt-10 overflow-hidden">
          <div className="flex flex-col items-center gap-5">
            <h1 className="w-full text-center text-5xl tracking-widest">
              We are <br className="md:hidden" />
              creatives
            </h1>
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

      <div className="mb-80" />
    </Layout>
  )
}

export default About
