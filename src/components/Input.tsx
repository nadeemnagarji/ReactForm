type InputProps = {
  label: string;
  type: string;
  className: string;
};

export default function Input({ label, type = "text", className }: InputProps) {
  return (
    <>
      <input
        type={type}
        name="name"
        placeholder=""
        required
        className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 ${className}`}
      />
      <label
        for="name"
        className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
      >
        {label}
      </label>
    </>
  );
}
