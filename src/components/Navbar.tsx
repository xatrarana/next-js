"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import NavTopContent from "./NavTopContent";
import NewsTicker from "./Notice";
import Notice from "./Notice";

// गृह
// हाम्रो बारेमा
// हाम्रा सेवाहरु
// बचत सेवा
// ऋण सेवा
// ग्यालरी
// सुचना
// डाउनलोड
// सेवा केन्द्र
// सम्पर्क

const navigation = [
  { name: "मुख्य पृष्ठ", href: "/", current: true, type: "link" },
  {
    name: "हाम्रा सेवाहरु",
    type: "dropdown",
    current: false,
    dropdown: [
      { name: "बचत सेवा", href: "/services/saving" },
      { name: "ऋण सेवा", href: "/services/loan" },
      { name: "बिमा सेवा", href: "/services/insurance" },
      { name: "अन्य सेवाहरू", href: "/services/others" },
    ],
  },
  {
    name: "हाम्रो बारेमा",
    type: "dropdown",
    current: false,
    dropdown: [
      { name: "परिचय", href: "/about/" },
      { name: "सञ्चालक समिति", href: "/about/board-members" },
      { name: "व्यवस्थापन", href: "/about/management" },
      { name: "अध्यक्षबाट सन्देश", href: "/about/अध्यक्षबाट सन्देश" },
    ],
  },
  { name: "सन्देश", href: "#",
    current: false, 
    type: "dropdown",
    dropdown: [
      { name: "अध्यक्षबाट सन्देश", href: "/message/अध्यक्षबाट सन्देश" },
    ], 
  },
  { name: "सुचना", href: "/message", current: false, type: "link" },
  { name: "ग्यालरी", href: "/message", current: false, type: "link" },
  { name: "सम्पर्क", href: "/contact", current: false, type: "link" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
   <header>
   <NavTopContent/>
    <Disclosure as="nav" className="bg-green-600 sticky top-0 left-0 z-30">
      {({ open }) => (
        <>
          <div className=" max-w-6xl mx-auto">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-7 w-7 bg-green-900 hover:bg-green-900"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-7 w-7 text-white hover:bg-green-900"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div className="relative group" key={item.name}>
                        {item.type === "link" ? (
                          <Link
                          
                            href={item.href!}
                            className={`${
                              item.current
                                ? "text-yellow-200"
                                : "text-base-100 hover:text-yellow-200"
                            } rounded-md px-3 py-2 text-md font-semibold no-underline hover:underline flex items-center gap-x-1`}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <span
                            className={`${
                              item.current
                                ? "text-yellow-200"
                                : "text-base-100 hover:text-yellow-200"
                            } rounded-md px-3 py-2 text-md font-semibold cursor-pointer flex items-center gap-x-1`}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}{" "}
                            <ChevronDownIcon className="block h-3 w-3" />
                          </span>
                        )}
                        {item.dropdown && (
                          <div className="absolute z-50 left-0 hidden  w-64  group-hover:block bg-white shadow-lg rounded-sm divide-y divide-gray-100">
                            {" "}
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-green-500 hover:rounded-sm"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-5 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div className="relative group" key={item.name}>
                  {item.type === "link" ? (
                    <Link
                      href={item.href!}
                      className={`${
                        item.current
                          ? "text-yellow-200"
                          : "text-base-100 hover:text-yellow-200"
                      } rounded-md px-3 py-2 text-md font-medium`}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span
                      className={`${
                        item.current
                          ? "text-yellow-200"
                          : "text-base-100 hover:text-yellow-200"
                      } rounded-md px-3 py-2 text-md font-medium cursor-pointer flex items-center gap-x-1`}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name} <ChevronDownIcon className="block h-3 w-3" />
                    </span>
                  )}
                  {item.dropdown && (
                    <div className="absolute z-10 left-0 hidden w-full max-w-64  group-hover:block bg-white shadow-lg rounded-sm divide-y divide-gray-100">
                      {" "}
                      {/* Adjust for Tailwind CSS */}
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:rounded-sm"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
    <Notice/>

        </>
      )}
    </Disclosure>
   </header>
  );
}
