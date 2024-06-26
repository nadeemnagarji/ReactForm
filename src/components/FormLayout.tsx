import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface FormLayoutProps {
  children: ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen ">
      <Navbar />
      <div className="w-full  ">
        <p className="dark:text-white text-2xl mb-2 md:text-4xl md:mb-5 font-semibold">
          Multi Step Form
        </p>
        {children}
      </div>
    </div>
  );
};
