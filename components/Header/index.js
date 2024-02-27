import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Mobile Menu */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between py-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-georgia text-2xl py-2 laptop:py-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            {/* Mobile Menu: Popup with links */}
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 py-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  <Button onClick={handleContactScroll}>Contact</Button>
                  <Button
                      onClick={() =>
                        window.open("https://drive.google.com/file/d/1f2u27l64clmLZhe_IWjxmLoyrtivNp6w/view")
                      }
                    >
                      Resume
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pl-1 pb-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </Button>
                </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Navbar */}
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-georgia text-2xl cursor-pointer mob:py-2 laptop:py-0 laptop:px-1"
        >
          {name}.
        </h1>
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}

            <Button onClick={handleContactScroll}>Contact</Button>
            <Button
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1f2u27l64clmLZhe_IWjxmLoyrtivNp6w/view")
                }
              >
                Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 pl-1 pb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>

              </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
      </div>
    </>
  );
};

export default Header;
