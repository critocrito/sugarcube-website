import {Popover, Transition} from "@headlessui/react";
import React, {Fragment} from "react";

import Logo from "$components/logo";
import Menu from "$components/menu";
import MenuButton from "$components/menu-button";

const Header = () => {
  return (
    <Popover className="relative">
      {({open}) => (
        <>
          <div className="desktop:container mx-2.5 laptop:mx-6 desktop:mx-auto">
            <div className="flex justify-between items-center py-6 laptop:justify-start laptop:space-x-10">
              <div className="flex justify-start laptop:w-0 laptop:flex-1">
                <Logo />
              </div>
              <div className="laptop:hidden">
                <Popover.Button className="bg-canvas shadow-md rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <MenuButton isOpen={open} />
                </Popover.Button>
              </div>

              <Menu className="hidden laptop:flex space-x-10" />
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <Logo />
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <MenuButton isOpen={open} />
                      </Popover.Button>
                    </div>
                  </div>

                  <Menu className="mt-6 grid gap-y-2" />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
