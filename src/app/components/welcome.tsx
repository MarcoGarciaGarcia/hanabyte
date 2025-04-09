"use client";
import { Button, Image, Link } from "@heroui/react";
import { motion } from "framer-motion";

const WelcomeSection: React.FC = () => {
  return (
    <section id="inicio" className="welcome-section w-screen h-screen flex p-20">
      <div className="w-full lg:w-[50%] grid justify-center items-center justify-items-start">
        <motion.div initial={{ x: "-200%" }} animate={{ x: "calc(0%)" }}>
          <h1 className="text-[#379aa3] text-7xl font-bold mb-4">
            HanaByte 花
          </h1>
          <p className="text-black font-normal text-md mb-4">
            Desarrollamos experiencias web que florecen con tecnología, cercanía
            <br></br>y diseño natural.
          </p>
          <Button className="bg-[#379aa3] rounded-md text-white h-12">
            <Link className="font-semibold" href="/#form">Comienza tu proyecto</Link>
          </Button>
        </motion.div>
      </div>
      <div className="w-0 lg:w-[50%] flex justify-center items-center justify-items-start">
        <Image
          src="/1.jpg"
          width={350}
          className="rounded-xl hover:opacity-80 transition-opacity"
        ></Image>
        <Image
          src="/2.jpg"
          width={350}
          className="rounded-xl -ml-14 mt-10 hover:opacity-80 transition-opacity"
        ></Image>
      </div>
    </section>
  );
};

export default WelcomeSection;
