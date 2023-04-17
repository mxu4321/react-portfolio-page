import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import aboutMe from "@/pages/aboutMe";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";
import Resume from "@/pages/resume";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import bgImg from "../assets/images/bg.jpg"

export default function App({ Component, pageProps }: AppProps) {
  // console.log(bgImg);
  return (
    <div>
      <Head>
        <title> Mengxue Xu's Portfolio Page</title>
        <meta name="description" content="created by Mengxue Xu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="mainTag" className="bg-slate-800 min-h-screen text-slate-100" style={{backgroundImage: `url(${bgImg.src})`}}>
        {/* ------ ❄️ nav bar ------- */}
        <NavBar />

        {/* ------ ❄️ about me ------- */}
        <Component {...pageProps} />
        {/* <aboutMe /> */}

        {/* ------ ❄️ portfolio ------- */}
        {/* <Portfolio /> */}

        {/* ------ ❄️ contact ------- */}
        {/* <Contact /> */}

        {/* ------ ❄️ resume ------- */}
        {/* <Component {...pageProps} /> */}
        {/* <Resume /> */}

        {/* ------ ❄️ footer ------- */}
        <Footer />
      </main>
    </div>
  );
}
