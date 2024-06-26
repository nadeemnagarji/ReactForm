import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex items-center justify-end h-20">
      <button
        onClick={toggleTheme}
        className=" absolute top-0 right-0 mr-4 mt-4 p-2 rounded bg-gray-800 text-white"
      >
        {theme.toUpperCase()}
      </button>
    </div>
  );
}
