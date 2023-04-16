import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Resume from "@/components/resume";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title> Mengxue Xu's Portfolio Page</title>
        <meta name="description" content="created by Mengxue Xu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="mainTag" className="bg-slate-800 min-h-screen text-slate-100">
        {/* ------ ❄️ nav bar ------- */}
        <NavBar />

        {/* ------ ❄️ about me ------- */}
        <Component {...pageProps} />

        {/* ------ ❄️ portfolio ------- */}
        <Portfolio />

        {/* ------ ❄️ contact ------- */}
        <Contact />

        {/* ------ ❄️ resume ------- */}
        <Resume />

        {/* ------ ❄️ footer ------- */}
        <Footer />
      </main>
    </div>
  );
}
