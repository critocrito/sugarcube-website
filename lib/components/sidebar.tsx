import {Dialog, Transition} from "@headlessui/react";
import {DotsVerticalIcon, XIcon} from "@heroicons/react/outline";
import c from "clsx";
import React, {Fragment, useState} from "react";

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const Sidebar = ({className, children}: SidebarProps) => {
  const [open, setOpen] = useState(false);

  const toggleSlideOver = () => {
    setOpen(!open);
  };

  return (
    <aside className={c(className)}>
      <nav
        className="sticky hidden laptop:block top-20 flex flex-col space-y-10 overflow-y-auto"
        aria-label="Sidebar"
      >
        {children}
      </nav>

      <nav className="sticky top-4 relative laptop:hidden">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 overflow-hidden z-20"
            open={open}
            onClose={setOpen}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Dialog.Overlay className="absolute inset-0" />

              <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <div className="w-screen max-w-md">
                    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-end">
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              type="button"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close Sidebar</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 relative flex-1 px-4 mobile:px-6">
                        <div className="absolute inset-0 space-y-10 px-4 mobile:px-6">
                          {children}
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <button
          className="fixed bottom-3 right-3 rounded-full p-2 bg-sapphire focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 svg-shadow z-50"
          type="button"
          onClick={toggleSlideOver}
        >
          <DotsVerticalIcon className="w-8 h-8 text-white fill-current" />
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
