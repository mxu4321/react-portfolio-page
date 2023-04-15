// ❄️ import icon for about me/portfolio/contact/resume
import Link from "next/link";
import {
  BsFillPersonFill,
  BsFillBriefcaseFill,
  BsFillEnvelopeFill,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

// ❄️ pascal ⤵️
export default function NavBar() {
  return (
    <section>
      <nav id="navBar" className="flex justify-between py-6 mb-6">
        <ul className="flex items-center text-xl">
          <h1 id="navBarName">Mengxue Xu</h1>
          <li>
            <BsFillPersonFill />
            <Link href="/">About me</Link>
          </li>
          <li>
            <BsFillBriefcaseFill />
            <a href="#">Portfolio</a>
          </li>
          <li>
            <BsFillEnvelopeFill />
            <a href="#">Contact</a>
          </li>
          <li>
            <BsFillFileEarmarkTextFill />
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
