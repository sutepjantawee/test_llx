import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";

// import Bot from "./bot";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/llx-logo.png";

const navigation = [
  { name: "History of the Lodge", href: "/History", current: false },
  { name: "News and Events", href: "/news", current: false },
  { name: "Agenda Activities", href: "/Agenda", current: false },
  { name: "Humor Corner", href: "/Humor", current: false },
  { name: "Masonic Visitors", href: "/Masonic", current: false },
  { name: "Joining Freemasonry", href: "/Joining", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Logo() {
  return (
    <Disclosure as="nav" className="bg-[#1E2643] fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-20 ">
              <div className="absolute inset-y-0 left-0 flex items-center ">
                {/* Image*/}
                <div className="inline-flex items-center justify-center ">
                  <Link href="/">
                    <a>
                      <Image
                        src={logo}
                        alt="Alt text for the picture"
                        width="62px"
                        height="60px"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-end pl-10">
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-2 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="content-center  pr-14 hidden lg:block">
                <Link href="/Members_Password">
                  <div className="rounded-md shadow w-32">
                    <a
                      href=""
                      className="w-full flex items-center justify-center py-3 border border-transparent rounded-xl text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      {" "}
                      Members Area
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="content-center grid px-3">
                <Link href="/Members_Password">
                  <div className="rounded-md shadow w-full ">
                    <a
                      href=""
                      className="w-full h-[40px] mt-2 flex items-center justify-center py-3 border border-transparent rounded-xl text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      
                      Members Area
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
