import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

const ThemeSwitcher: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mount, setMount] = useState(true);
  const IconToUse = mount || resolvedTheme === "light" ? LuMoon : LuSun;
  useEffect(() => setMount(false), []);
  return (
    <button
      disabled={mount}
      type="button"
      aria-label="Theme Switcher"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center p-2 outline-none rounded-full text-slate-600 bg-slate-200 dark:bg-slate-600  hover:bg-slate-600 hover:text-white dark:text-white dark:hover:bg-slate-200 dark:hover:text-black"
    >
      <IconToUse className="size-6" />
    </button>
  );
};

export default ThemeSwitcher;
