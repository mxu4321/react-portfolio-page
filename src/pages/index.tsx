
// // ❄️ import icon for about me/portfolio/contact/resume
// import Head from "next/head";
// import {
//   BsFillPersonFill,
//   BsFillBriefcaseFill,
//   BsFillEnvelopeFill,
//   BsFillFileEarmarkTextFill,
// } from "react-icons/bs";

// // ❄️ import icon for footer: github/linkedin/email
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title> Mengxue Xu's Portfolio Page</title>
//         <meta name="description" content="created by Mengxue Xu" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main id="mainTag" className="bg-slate-800 min-h-screen text-slate-100">
//         {/* ------ ❄️ nav bar ------- */}
//         <section>
//           <nav id="navBar" className="flex justify-between py-6 mb-6">
//             <ul className="flex items-center text-xl">
//               <h1 id="navBarName">Mengxue Xu</h1>
//               <li>
//                 <BsFillPersonFill />
//                 <a href="#">About me</a>
//               </li>
//               <li>
//                 <BsFillBriefcaseFill />
//                 <a href="#">Portfolio</a>
//               </li>
//               <li>
//                 <BsFillEnvelopeFill />
//                 <a href="#">Contact</a>
//               </li>
//               <li>
//                 <BsFillFileEarmarkTextFill />
//                 <a href="#">Resume</a>
//               </li>
//             </ul>
//           </nav>
//         </section>

//         {/* ------ ❄️ about me ------- */}
//         <section>
//           <div id="aboutMePage">
//             <div className="relative mx-auto pt-40 ml-20">
//               <Image src={avatar} alt="avatar" className="rounded-full w-1/4" />
//             </div>
//           </div>
//         </section>

//         {/* ------ ❄️ footer ------- */}
//         <section>
//           <footer className="w-full py-4 absolute bottom-0">
//             <div className="flex justify-center">
//               <ul className="flex items-center text-3xl">
//                 <li>
//                   <a href="#">
//                     <FaGithub />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <FaLinkedin />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <FaEnvelope />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </footer>
//         </section>
//       </main>
//     </div>
//   );
// }


// ❄️ import images
import Image from "next/image";
import avatar from "../assets/images/avatar.png";

export default function aboutMe() {
  return (
    <section>
      <div id="aboutMePage">
        <div className="relative mx-auto pt-40 ml-20">
          <Image src={avatar} alt="avatar" className="rounded-full w-1/4" />
        </div>
      </div>
    </section>
  );
}
