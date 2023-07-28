"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import BackGround from "@/components/BackGround";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setToggle(true);
    }, 7000);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full min-w-screen h-full min-h-screen -z-10 bg-[#02010b]">
      <BackGround />
      <div className="fixed top-0 left-0 p-4 z-10 w-full h-full min-h-screen flex justify-center items-center">
        <motion.div
          className=" bg-[#000000e7] w-full h-full rounded-xl relative"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{
            delay: 3,
            duration: 0.2,
            type: "spring",
            stiffness: 120,
          }}
        >
          <AnimatePresence>
            {!toggle && (
              <motion.div
                className="text-7xl font-light text-[#31ce73] absolute top-1/2 w-full text-center -translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{
                  duration: 1,
                  delay: 4.6,
                }}
              >
                Welcome To Rocket X
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {toggle && (
              <motion.div
                className="text-7xl font-light text-[#31ce73] absolute top-1/2 w-full text-center -translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: 2,
                }}
              >
                Listt Listt Listt
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
