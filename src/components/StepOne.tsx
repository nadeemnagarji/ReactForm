import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { personalInfoSchema } from "../schema";
import { motion } from "framer-motion";

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

interface PersonalInfoProps {
  onSubmit: (data: PersonalInfoFormData) => void;
  onNext: () => void;
  defaultValues: PersonalInfoFormData;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  onSubmit,
  onNext,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
  });
  // console.log(defaultValues);

  const onSubmitHandler = (data: PersonalInfoFormData) => {
    onSubmit(data);
    onNext();
  };

  return (
    <form
      className="max-w-sm mx-auto px-4 shadow-lg rounded-md"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <motion.h2
        initial={{ opacity: "0", y: 20 }}
        animate={{ opacity: "100%", y: 0 }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.3 }}
        className="text-2xl text-gray-900 dark:text-gray-200 font-semibold mb-8"
      >
        Step 1: Personal Information
      </motion.h2>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.5 }}
          htmlFor="name"
          className="self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </motion.label>
        <input
          id="name"
          {...register("name")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500 focus:border-blue-500"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.6 }}
          htmlFor="email"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </motion.label>
        <input
          id="email"
          {...register("email")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.7 }}
          htmlFor="phone"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone
        </motion.label>
        <input
          id="phone"
          {...register("phone")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}
      </div>
      <div className="flex justify-end">
        <motion.button
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded mb-2"
        >
          Next
        </motion.button>
      </div>
    </form>
  );
};

export default PersonalInfo;
