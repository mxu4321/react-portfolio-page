// ❄️ import icon for about me/portfolio/contact/resume
import {
  BsFillPersonFill,
  BsFillBriefcaseFill,
  BsFillEnvelopeFill,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import Link from "next/link";

// ❄️ use pascal case for naming component
export default function NavBar() {
  return (
    <section>
      <nav id="navBar" className="flex justify-between py-6 mb-6">
        <ul className="flex items-center text-xl">
          <h1 id="navBarName">Mengxue Xu</h1>
          <li>
            <BsFillPersonFill />
            <Link href="/aboutMe">About me</Link>
          </li>
          <li>
            <BsFillBriefcaseFill />
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <BsFillEnvelopeFill />
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <BsFillFileEarmarkTextFill />
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
