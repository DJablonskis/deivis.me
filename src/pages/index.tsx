import Head from "next/head";
import MainSwiper from "@/components/MainSwiper";

interface Props {
  links: { name: string; url: string }[];
  projects: { name: string; url: string }[];
}
export default function Home({ links, projects, skills }: Props) {
  return (
    <>
      <Head>
        <title>Hello, I am Deividas Jablonskis</title>
        <meta
          name="description"
          content="Portfolio website of Deividas Jablonskis."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="px-3 bg-[url('/stacked-waves.svg')] bg-cover bg-fixed py-5 text-center  flex flex-col justify-center items-center w-full min-h-screen">
        <div className="w-full">
          <MainSwiper links={links} projects={projects} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const links = [
    {
      url: "https://www.linkedin.com/in/deividas-jablonskis/",
      name: "LinkedIn",
    },
    {
      url: "https://github.com/DJablonskis",
      name: "GitHub",
    },
  ];

  const projects = [
    {
      url: "https://merchantspalma.com",
      name: "Merchants Palma",
    },
    {
      url: "https://juicylucy.es",
      name: "Juicy Lucy",
    },
    {
      url: "https://wineing.es",
      name: "Wineing",
    },
    {
      url: "https://five-senses.co.uk",
      name: "Five Senses",
    },
    {
      url: "https://kohpalma.com",
      name: "KOH",
    },
    {
      url: "https://spoofs.deivis.me",
      name: "Unicode spoofs",
    },
    {
      url: "https://uolcsplanner.deivis.me",
      name: "Study planner",
    },
  ];

  return {
    props: {
      links,
      projects,
    },
  };
}
