import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addressInfoSchema } from "../schema";
import { motion } from "framer-motion";

export type AddressInfoFormData = z.infer<typeof addressInfoSchema>;

interface AddressInfoProps {
  onSubmit: (data: AddressInfoFormData) => void;
  onNext: () => void;
  onPrev: () => void;
  defaultValues: AddressInfoFormData;
}

const AddressInfo: React.FC<AddressInfoProps> = ({
  onSubmit,
  onNext,
  onPrev,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressInfoFormData>({
    resolver: zodResolver(addressInfoSchema),
    defaultValues,
  });
  //console.log(defaultValues);

  const onSubmitHandler = (data: AddressInfoFormData) => {
    onSubmit(data);
    onNext();
  };

  return (
    <form
      className="max-w-sm mx-auto px-4 pb-4 shadow-lg rounded-md"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <motion.h2
        initial={{ opacity: "0", y: 20 }}
        animate={{ opacity: "100%", y: 0 }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.3 }}
        className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-200"
      >
        Address Information
      </motion.h2>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.6 }}
          htmlFor="addressLine1"
          className="self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Address Line 1
        </motion.label>
        <input
          id="addressLine1"
          {...register("addressLine1")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.addressLine1 && (
          <span className="text-red-500">{errors.addressLine1.message}</span>
        )}
      </div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.7 }}
          htmlFor="addressLine2"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Address Line 2
        </motion.label>
        <input
          id="addressLine2"
          {...register("addressLine2")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.8 }}
          htmlFor="city"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          City
        </motion.label>
        <input
          id="city"
          {...register("city")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.city && (
          <span className="text-red-500">{errors.city.message}</span>
        )}
      </div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.9 }}
          htmlFor="state"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          State
        </motion.label>
        <input
          id="state"
          {...register("state")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.state && (
          <span className="text-red-500">{errors.state.message}</span>
        )}
      </div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 1 }}
          htmlFor="zipCode"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Zip Code
        </motion.label>
        <input
          id="zipCode"
          {...register("zipCode")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.zipCode && (
          <span className="text-red-500">{errors.zipCode.message}</span>
        )}
      </div>
      <div className="flex justify-between">
        <motion.button
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={onPrev}
          className="bg-gray-600 text-white py-2 px-4 rounded"
        >
          Prev
        </motion.button>
        <motion.button
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Next
        </motion.button>
      </div>
    </form>
  );
};

export default AddressInfo;
