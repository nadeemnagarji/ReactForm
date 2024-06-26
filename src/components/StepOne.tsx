import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { personalInfoSchema } from "../schema";

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
      className="max-w-sm mx-auto px-4 shadow-xl"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold mb-8">
        Step 1: Personal Information
      </h2>
      <div className="mb-5 flex flex-col justify-center items-center">
        <label
          htmlFor="name"
          className="self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
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
        <label
          htmlFor="email"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
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
        <label
          htmlFor="phone"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone
        </label>
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
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded mb-2"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
