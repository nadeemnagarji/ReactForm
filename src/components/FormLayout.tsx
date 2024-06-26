import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

interface FormLayoutProps {
  children: ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen ">
      <Navbar />
      <div className="w-full  ">
        <motion.p
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3 }}
          className="dark:text-white text-2xl mb-2 md:text-4xl md:mb-5 font-semibold"
        >
          Multi Step Form
        </motion.p>
        {children}
      </div>
    </div>
  );
};
