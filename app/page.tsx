import Balancer from 'react-wrap-balancer'
import { Logo } from '@/components/logo'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full bg-stone-300 min-h-screen">
      <div className="relative flex flex-col align-middle mx-auto max-w-6xl bg-white min-h-screen">
        <header className="relative">
          <Image src="/swiss_themed_background-2.png" alt="Swiss themed background" width={1280} height={500}/>
          <div className="absolute top-1 left-1 sm:top-10 sm:left-12 text-white">
            <h1 className="font-bold text-lg sm:text-5xl ">React Switzerland</h1>
            <h3 className="mt-3 text-xs sm:text-xl">Welcome to the React JS community in Switzerland</h3>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row">
          <div className="h-96 w-96 p-10 shrink-0 basis-1/3 sm:order-2">
            <div className="rounded-3xl overflow-hidden ">
              <Logo />
            </div>
          </div>
          <div className="p-10 text-stone-500 md:basis-1/3 sm:order-1">
            <p>We are a group of developers who are passionate about building user-friendly, high-performance web applications using the popular JavaScript library, React.</p>
            <p className="mt-3">Whether you're a seasoned React developer or just getting started, we invite you to join us for our regular meetups and events where we discuss the latest trends and technologies in React development.</p>
            <p className="mt-3">We also provide opportunities for networking, mentorship, and learning from one another. </p>
          </div>
          <div className="flex flex-col justify-start items-center p-10 text-stone-500 font-extrabold basis-1/3 sm:order-3">
            <h3 className="text-2xl"><Balancer>Let's build great things together!</Balancer></h3>
            <h4 className='mt-3'>Next event: Geneva</h4>
            <div className="w-48 text-center text-stone-700 mt-3 overflow-hidden">
              <div className="p-3 bg-red-700 font-bold text-white border-b-4 rounded-t-3xl border-red-800">march</div>
              <div className="p-3 bg-gray-50 text-8xl rounded-b-3xl border-t border-b-4 border-gray-300">15</div>
            </div>
            <button className="mt-7 inline-block rounded-lg bg-red-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800">More information</button>
          </div>
        </div>


        <div className="bg-red-700">
          <Image src="/footer-image.png" alt="Montains themed background" width={1280} height={500} className="translate-y-10"/>
        </div>
        
        <footer className="bg-red-800 text-white p-10">
          <div className="flex justify-center">
            <div className="flex flex-col align-middle text-stone-500">
              <div className="flex justify-center gap-3">
                <a className="text-white" href="https://www.meetup.com/React-Switzerland/" target="_blank" rel="noopener noreferrer">
                  meetup
                </a> 
                <a className="text-white" href="https://twitter.com/ReactSwitzerland" target="_blank" rel="noopener noreferrer">
                  twitter
                </a>
                <a className="text-white" href="    https://www.linkedin.com/company/react-switzerland/" target="_blank" rel="noopener noreferrer">
                  linkedin
                </a>  
                <a className="text-white" href="https://www.youtube.com/channel/UCZ8J2J2Q3Z8QZ1Z0Z9Z0Z0g" target="_blank" rel="noopener noreferrer">
                  youtube
                </a>
                <Link href='/test'>
                  test
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
