"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SetStateAction, useState } from "react";
const pers = [""];

const Perfumes = () => {
  const [selected, setSelected] = useState<Number>(0);

  const handleSelected = (num: SetStateAction<Number>) => {
    setSelected(num);
  };
  return (
    <div className="grid grid-cols-2 place-items-center justify-items-center h-full select-none">
      <div className="w-full h-full flex flex-col  p-12">
        <div className="text-5xl font-light font-mono text-[#2fb748] mt-6">
          Our Perfumes
        </div>
        <ul className="text-4xl font-light font-mono text-[#0f3e18] mt-20 w-fit ">
          <motion.li
            className="cursor-pointer flex items-center"
            whileHover={{
              color: "#2fb748",
              transition: { duration: 0.1 },
            }}
            onClick={() => handleSelected(1)}
          >
            <AnimatePresence>
              {selected == 1 ? (
                <motion.div
                  className="text-[#2fb748]"
                  animate={{
                    x: [20, 0],
                  }}
                  exit={{
                    x: [-20, 0],
                  }}
                >
                  &#8594; Product 1
                </motion.div>
              ) : (
                <motion.div
                  animate={{ x: [45, 0], color: ["#2fb748", "#0f3e18"] }}
                >
                  {" "}
                  Product 1
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li
            className="cursor-pointer flex items-center mt-10"
            whileHover={{
              color: "#2fb748",
              transition: { duration: 0.1 },
            }}
            onClick={() => handleSelected(2)}
          >
            <AnimatePresence>
              {selected == 2 ? (
                <motion.div
                  className="text-[#2fb748]"
                  animate={{
                    x: [20, 0],
                  }}
                  exit={{
                    x: [-20, 0],
                  }}
                >
                  &#8594; Product 2
                </motion.div>
              ) : (
                <motion.div
                  animate={{ x: [45, 0], color: ["#2fb748", "#0f3e18"] }}
                >
                  {" "}
                  Product 2
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li
            className="cursor-pointer flex items-center mt-10"
            whileHover={{
              color: "#2fb748",
              transition: { duration: 0.1 },
            }}
            onClick={() => handleSelected(3)}
          >
            <AnimatePresence>
              {selected == 3 ? (
                <motion.div
                  className="text-[#2fb748]"
                  animate={{
                    x: [20, 0],
                  }}
                  exit={{
                    x: [-20, 0],
                  }}
                >
                  &#8594; Product 3
                </motion.div>
              ) : (
                <motion.div
                  animate={{ x: [45, 0], color: ["#2fb748", "#0f3e18"] }}
                >
                  Product 3
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        </ul>
      </div>
      <div className="relative">
        <AnimatePresence>
          {selected == 1 && (
            <motion.div
              className="absolute rounded-lg w-[270px] h-[270px]"
              initial={{ rotate: 6, opacity: 0, scale: 1.1, x: -200, y: -240 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                scale: 1.1,
              }}
            >
              <Image
                src="/per1.jpeg"
                width={400}
                height={400}
                alt=" "
                className="object-cover rounded-lg"
              />
              <motion.div
                className="rounded-lg border-2 border-[#2fb748] absolute top-0 left-0 h-full w-full"
                animate={{
                  borderColor: [
                    "#2fb748",
                    "#158129",
                    "#2bd74b",
                    "#2fb748",
                    "#158129",
                    "#2bd74b",
                    "#158129",
                    "#2bd74b",
                    "#2fb748",
                  ],
                }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  repeat: Infinity,
                }}
              ></motion.div>{" "}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {selected == 2 && (
            <motion.div
              className="rounded-lg w-[270px] h-[270px] absolute"
              initial={{ rotate: 0, opacity: 0, scale: 1.1, x: -80, y: -140 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                scale: 1.1,
              }}
            >
              <Image
                src="/per2.jpeg"
                width={400}
                height={400}
                alt=" "
                className="object-cover rounded-lg"
              />
              <motion.div
                className="rounded-lg border-2 border-[#2fb748] absolute top-0 left-0 h-full w-full"
                animate={{
                  borderColor: [
                    "#2fb748",
                    "#158129",
                    "#2bd74b",
                    "#2fb748",
                    "#158129",
                    "#2bd74b",
                    "#158129",
                    "#2bd74b",
                    "#2fb748",
                  ],
                }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  repeat: Infinity,
                }}
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {selected == 3 && (
            <motion.div
              className="rounded-lg w-[270px] h-[270px] absolute"
              initial={{ rotate: -6, opacity: 0, scale: 1.1, x: -280, y: -40 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                scale: 1.1,
              }}
            >
              <Image
                src="/per3.jpeg"
                width={400}
                height={400}
                alt=" "
                className="object-cover rounded-lg"
              />
              <motion.div
                className="rounded-lg border-2 border-[#2fb748] absolute top-0 left-0 h-full w-full"
                animate={{
                  borderColor: [
                    "#2fb748",
                    "#158129",
                    "#2bd74b",
                    "#2fb748",
                    "#158129",
                    "#2bd74b",
                    "#158129",
                    "#2bd74b",
                    "#2fb748",
                  ],
                }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  repeat: Infinity,
                }}
              ></motion.div>{" "}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Perfumes;
