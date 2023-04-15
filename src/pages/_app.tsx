import NavBar from '@/components/navBar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// ❄️ import icon for about me/portfolio/contact/resume
import Head from "next/head";
import {
  BsFillPersonFill,
  BsFillBriefcaseFill,
  BsFillEnvelopeFill,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

// ❄️ import icon for footer: github/linkedin/email
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return  (
    <div>
      <Head>
        <title> Mengxue Xu's Portfolio Page</title>
        <meta name="description" content="created by Mengxue Xu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="mainTag" className="bg-slate-800 min-h-screen text-slate-100">
        {/* ------ ❄️ nav bar ------- */}
        <NavBar/>

        {/* ------ ❄️ about me ------- */}
        <Component {...pageProps} />

        {/* ------ ❄️ footer ------- */}
        <section>
          <footer className="w-full py-4 absolute bottom-0">
            <div className="flex justify-center">
              <ul className="flex items-center text-3xl">
                <li>
                  <a href="#">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
