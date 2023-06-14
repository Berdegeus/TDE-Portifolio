import { useEffect, useState } from "react";
import clsx from "clsx";

import dynamic from "next/dynamic";

import Header from "@/components/sections/Header/Header";
import HomeComponent from "@/components/sections/Home/HomeComponent";
import About from "@/components/sections/About/About";
import ExpCriativa from "@/components/sections/Materias/ExpCriativa/ExpCriativa";
import Ra from "@/components/sections/Materias/RA/RA";
import Logica from "@/components/sections/Materias/Logica/Logica";
import Cyber from "@/components/sections/Materias/Cyber/Cyber";
import Footer from "@/components/sections/Footer/Footer";
import Contact from "@/components/sections/Contact/Contact";
import UpComponent from "@/components/UpComponent";
import Services from "@/components/sections/Services/Services";
import LoadingComponent from "@/components/Loading/LoadingComponent";
import { LanguageProvider } from "@/components/Language/LanguageProvider";

import Head from 'next/head';

const Projects = dynamic(
  () => import("@/components/sections/Projects/Projects"),
  { ssr: false }
);
const Projects2 = dynamic(
  () => import("@/components/sections/Projects2/Projects"),
  { ssr: false }
);

export default function Home() {

  const [Theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingProjects2, setLoadingProjects2] = useState(true);

  useEffect(() => {
    let theme: string | null = localStorage.getItem('theme');
    setTheme(theme == null ? 'dark' : theme == 'dark' ? 'dark' : 'light');

    let color1 = localStorage.getItem('1');
    let color2 = localStorage.getItem('2');
    let color3 = localStorage.getItem('3');

    let style = document.body.style;

    style.setProperty('--first', color1);
    style.setProperty('--second', color2);
    style.setProperty('--third', color3);
  }, []);

  return (
    <>
      <Head>
        <title>Portfólio Bernardo</title>
        <meta name="description" content="Meu porfólio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LanguageProvider>
        <Header theme={Theme} setTheme={setTheme} />
        <section className={clsx("transition-all duration-300", Theme == 'light' ? 'bg-gray-200' : 'dark bg-zinc-900')}>
          <UpComponent />
          <HomeComponent />
          <About />
          <ExpCriativa />
          <Ra />
          <Logica />
          <Cyber />
          <Services />
          {
            loadingProjects
              ?
              <>
                <Projects loading={setLoadingProjects} />
                <LoadingComponent w={"50%"} h={"50%"} />
              </>
              :
              <Projects />
          }
                    {
            loadingProjects2
              ?
              <>
                <Projects2 loading={setLoadingProjects2} />
                <LoadingComponent w={"50%"} h={"50%"} />
              </>
              :
              <Projects2 />
          }
          <Contact />
        </section>
        <Footer theme={Theme} />
      </LanguageProvider>
    </>
  )
}
