import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-44 p-2 laptop:p-0">
        <h1 className="tablet:mt-10 tablet:mb-2 text-2xl text-bold">Contact</h1>
        {/* Divider */}
        <div className="h-0.5 border-t-0 bg-neutral-500 opacity-25"></div>
      </div>
      
      <div className="grid grid-cols-1 tablet:grid-cols-2">
        <div className="mt-12">
          <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
            Let&apos;s work
          </h1>
          <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
            together.
          </h1>
          <Button type="primary">Get in touch</Button>
          <div className="mt-10">
            <Socials />
          </div>
        </div>

      <p className="text-sm opacity-60 mt-2 laptop:mt-14 p-2 laptop:p-0 justify-self-center">
        Sourced from <a className="sm-link" href="https://github.com/chetanverma16/react-portfolio-template">Chetan 
        Verma</a> and coded in <a className="sm-link" href="https://code.visualstudio.com/">Visual Studio<br/>
        Code</a>. Built with <a className="sm-link" href="https://nextjs.org/">Next.js</a>
        , <a className="sm-link" href="https://tailwindcss.com/">Tailwind CSS</a>, 
        and <a className="sm-link" href="https://www.framer.com/">Framer</a>. Deployed with<br/> 
        <a className="sm-link" href="https://vercel.com/">Vercel</a>. Text is set 
        in <a className="sm-link" href="https://pangrampangram.com/products/mori">Mori</a> typeface.
      </p>
    </div>
    </>
  );
};

export default Footer;
