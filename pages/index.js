import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Stairs from '../components/Layout/Stairs';



// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

    <Stairs>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="mt-10 laptop:mt-32 laptop1:mt-40">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-md tablet:text-xl laptop:text-2xl py-1 tablet:py-2 tablet:px-1 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.subheader}
            </h1>
            <h1
              ref={textTwo}
              className="text-4xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl pt-1 tablet:pt-2 text-bold w-full laptop:w-4/5 tracking-tight"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textThree}
              className="text-4xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl py-1 tablet:py-2 text-bold w-full laptop:w-4/5 tracking-tight"
            >
              {data.headerTaglineTwo}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-32 laptop1:mt-40 py-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-12">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-32 laptop1:mt-40 py-2 laptop:p-0">
          <h1 className="tablet:my-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:my-10 grid grid-cols-1 laptop:grid-cols-2 gap-12">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-40 py-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:my-10 text-2xl text-bold">About.</h1>
          <p className="tablet:my-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>

        <div ref={contactRef}>
          <Footer />
        </div>

      </div>
      </Stairs>
    </div>
  );
}
