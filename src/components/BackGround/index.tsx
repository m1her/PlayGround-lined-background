"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const BackGround = () => {
  useEffect(() => {
    const preventZoomOnWheel = (event: { ctrlKey: any; metaKey: any; preventDefault: () => void; }) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    };
    document.addEventListener("wheel", preventZoomOnWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", preventZoomOnWheel);
    };
  }, []);
  return (
    <div className="-rotate-12 fixed text-[#ffff] -top-96 -left-64 select-none">
      <hr className="h-1 bg-white text-white" />
      <motion.div className="flex items-center my-3 w-fit text-7xl whitespace-nowrap ">
        <div className="ml-10 ">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>
      <hr className="h-1 bg-white text-white" />
      <motion.div
        className="flex items-center  my-3 w-fit text-7xl  whitespace-nowrap"
        initial={{
          x: -1500,
        }}
        animate={{
          x: 83,
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>
      <hr className="h-1 bg-white text-white" />
      <motion.div
        className="flex items-center  my-3 w-fit text-7xl whitespace-nowrap"
        initial={{
          x: -17,
        }}
        animate={{
          x: -1600,
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "linear",
        }}
      >
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>
      <hr className="h-1 bg-white text-white" />
      <motion.div
        className="flex items-center  my-3 w-fit text-7xl  whitespace-nowrap"
        animate={{
          x: [200, -800, 200],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeIn",
        }}
      >
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>
      <hr className="h-1 bg-white text-white" />
      <motion.div
        className="flex items-center  my-3 w-fit text-7xl  whitespace-nowrap"
        initial={{
          x: -1500,
        }}
        animate={{
          x: 83,
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "linear",
        }}
      >
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>
      <hr className="h-1 bg-white text-white" />
      <motion.div
        className="flex items-center  my-3 w-fit text-7xl  whitespace-nowrap"
        animate={{
          x: [200, -800, 200],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeOut",
        }}
      >
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>{" "}
      <hr className="h-1 bg-white text-white" />
      <motion.div
        className="flex items-center  my-3 w-fit text-7xl whitespace-nowrap"
        initial={{
          x: 183,
        }}
        animate={{
          x: -1400,
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "linear",
        }}
      >
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>
      <hr className="h-1 bg-white text-white" />
      <motion.div
        className="flex items-center  my-3 w-fit text-7xl whitespace-nowrap"
        initial={{
          x: -17,
        }}
        animate={{
          x: -1600,
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>
      <hr className="h-1 bg-white text-white" />
      <motion.div
        className="flex items-center  my-3 w-fit text-7xl  whitespace-nowrap"
        animate={{
          x: [250, -400, 250],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      >
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>{" "}
      <hr className="h-1 bg-white text-white" />
      <motion.div
        className="flex items-center  my-3 w-fit text-7xl  whitespace-nowrap"
        initial={{
          x: -10,
        }}
        animate={{
          x: -1600,
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </motion.div>{" "}
      <hr className="h-1 bg-white text-white" />
      <div className="flex items-center  my-3 w-fit text-7xl  whitespace-nowrap">
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </div>{" "}
      <hr className="h-1 bg-white text-white" />
      <div className="flex items-center  my-3 w-fit text-7xl  whitespace-nowrap">
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </div>{" "}
      <hr className="h-1 bg-white text-white" />
      <div className="flex items-center  my-3 w-fit text-7xl  whitespace-nowrap">
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 myclass text-[#02010b]">ROCKET X</div>
        <div className="ml-10">ROCKET X</div>
        <div className="ml-10 mr-3 myclass text-[#02010b]">ROCKET X</div>
      </div>
      <hr className="h-1 bg-white text-white" />
    </div>
  );
};
export default BackGround;
