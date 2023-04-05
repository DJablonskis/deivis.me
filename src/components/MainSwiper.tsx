import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";

import {
  TbBrandTailwind,
  TbBrandCss3,
  TbBrandReact,
  TbBrandHtml5,
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandBootstrap,
  TbBrandRedux,
  TbBrandGit,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { icons } from "react-icons/lib";

function MainSwiper({
  links,
  projects,
}: {
  links: { url: string; name: string }[];
  projects: { url: string; name: string }[];
}) {
  const skills = [
    {
      icon: TbBrandTailwind,
      name: "TailwindCSS",
    },
    {
      icon: TbBrandCss3,
      name: "CSS",
    },
    {
      icon: TbBrandReact,
      name: "React",
    },
    {
      icon: TbBrandHtml5,
      name: "HTML5",
    },
    {
      icon: TbBrandNextjs,
      name: "Next.js",
    },
    {
      icon: TbBrandJavascript,
      name: "JavaScript",
    },
    {
      icon: TbBrandBootstrap,
      name: "Bootstrap",
    },
    {
      icon: TbBrandRedux,
      name: "Redux",
    },
    {
      icon: SiAdobecreativecloud,
      name: "Adobe CC",
    },
    {
      icon: TbBrandGit,
      name: "Git / Github",
    },
    {
      icon: TbBrandTypescript,
      name: "TypeScript",
    },
    {
      icon: SiJquery,
      name: "jQuery",
    },
  ];

  return (
    <Swiper
      className="pb-8"
      modules={[Autoplay, Pagination]} // Pagination
      loop={true}
      autoHeight={true}
      autoplay={{
        delay: 5000,
      }}
      spaceBetween={0}
      slidesPerView={1}
      pagination={true}
    >
      <SwiperSlide className="self-center">
        <h1 className="text-6xl sm:text-8xl font-bold mb-3 sm:mb-8 text-indigo-900">
          Hi!
        </h1>
        <div className=" text-center m-auto">
          <div className="max-w-prose mx-auto text-justify leading-normal text-sm sm:text-lg sm:px-4">
            <p className="mb-2">
              I&apos;m Deividas Jablonskis, a versatile web developer, computer
              science student, and technology enthusiast with a strong passion
              for problem-solving and a dedication to lifelong learning.
            </p>
            <p className="mb-2 leading-normal">
              With extensive experience in luxury hospitality, I gained
              exceptional customer service skills and learned to collaborate
              effectively with teams and clients. With a dedication to
              excellence and a drive to succeed, I&apos;m excited to bring my
              skills and expertise to any project or team.
            </p>
            <p className="mb-8">
              If you&apos;re looking for a highly motivated and dedicated web
              developer with a strong foundation in computer science, let&apos;s
              connect and discuss how I can contribute to your success.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row justify-center sm: justify-evenly items-center">
              {links.map((link) => (
                <Link
                  key={link.url}
                  className="text-indigo-950 font-bold hover:text-indigo-700 duration-100 ease-linear pl-1 pr-1 hover:pl-2 hover:pr-0"
                  href={link.url}
                >
                  {link.name}
                </Link>
              ))}
              <a
                className="text-indigo-950 font-bold hover:text-indigo-700 duration-100 ease-linear pl-1 pr-1 hover:pl-2 hover:pr-0"
                href="mailto:hello@deivis.me"
              >
                <span>hello@deivis.me</span>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="self-center">
        <h2 className="text-4xl sm:text-6xl font-bold mb-10 text-indigo-900">
          Some of my work:
        </h2>
        <ul className=" text-center sm:my-10 flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly justify-between gap-6 sm:gap-12 max-w-lg mx-auto ">
          {projects.map((p) => (
            <li key={p.url}>
              <Link
                className="relative mb-4 text-2xl sm:text-3xl font-bold first-letter:first-line:text-indigo-950 hover:text-indigo-700 duration-100 ease-linear pl-1 pr-1 hover:pl-2 hover:pr-0"
                href={p.url}
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </SwiperSlide>
      <SwiperSlide className="self-center">
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 text-indigo-900">
          My Skillset
        </h2>
        <ul className="text-center grid gap-4  sm:gap-6 grid-cols-3 sm:grid-cols-4 w-100 max-w-xl m-auto sm:mb-10">
          {skills.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="flex flex-col items-center justify-center"
            >
              <Icon className="text-5xl sm:text-6xl text-violet-600" />
              <span className="mt-2 text-sm font-semibold">{name}</span>
            </li>
          ))}
        </ul>
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSwiper;
