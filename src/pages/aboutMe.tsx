// ❄️ import images
import Image from "next/image";
import avatar from "../assets/images/avatar.png";

export default function aboutMe() {
  return (
    <section>
      <div id="aboutMePage">
        <div className="relative mx-auto pt-60 ml-20">
          <div className="flex items-center">
          <Image src={avatar} alt="avatar" className="rounded-full w-1/4" />
          </div>
        </div>
        <div className="relative mx-10 px-10">
          <p className="text-lg">
            Hi, I'm Mengxue Xu, a full-stack developer based in San Francisco
            Bay Area, CA. I enjoy creating things that live on the internet,
            whether that be websites, applications, or anything in between. My
            passion is to craft elegant and efficient solutions that solve
            real-world problems and deliver seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
