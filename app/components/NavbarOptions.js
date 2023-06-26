"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

const NavbarOptions = () => {
  return (
    <>
      <nav className="navbar bg-white border-b py-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="nav-link active" aria-current="page">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.285"
                  height="15.706"
                  viewBox="0 0 14.285 15.706"
                >
                  <g
                    id="Icon_feather-home"
                    data-name="Icon feather-home"
                    transform="translate(-3.75 -2.25)"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M4.5,7.972,10.893,3l6.393,4.972v7.813a1.421,1.421,0,0,1-1.421,1.421H5.921A1.421,1.421,0,0,1,4.5,15.785Z"
                      fill="none"
                      stroke="#232e3c"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M13.5,25.1V18h4.262v7.1"
                      transform="translate(-4.738 -7.897)"
                      fill="none"
                      stroke="#232e3c"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
                <span className="ml-2">Home</span>
              </div>
            </Link>
            <Disclosure as="nav">
              <Disclosure.Button
                className="dropdown flex items-center justify-center btn3-custom mr-4"
                type="button"
                data-toggle="dropdown"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="#ffffff"
                  >
                    <path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h11.646c1.287,0,2.497-.501,3.407-1.411l2.536-2.536c.897-.896,1.411-2.139,1.411-3.407V5c0-2.757-2.243-5-5-5ZM2,19V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v10h-4c-1.654,0-3,1.346-3,3v4H5c-1.654,0-3-1.346-3-3Zm16.639,2.175c-.448.448-1.02.725-1.639.802v-3.977c0-.552.449-1,1-1h3.976c-.079.615-.361,1.198-.802,1.639l-2.536,2.536ZM5,6.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm3,5.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm0,5.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z" />
                  </svg>

                  <span className="ml-2">Create a task</span>
                </div>
              </Disclosure.Button>

              <Disclosure.Panel>
                <div className="dropdown-menu absolute right-0 mt-2 py-2 w-56 bg-white rounded-md shadow-lg z-10">
                  <a
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    href="#"
                    data-toggle="modal"
                    data-target="#StandardTasks"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.529"
                        height="13.184"
                        viewBox="0 0 11.529 13.184"
                      >
                        <g id="version" transform="translate(-32.134)">
                          <path
                            id="Path_2489"
                            data-name="Path 2489"
                            d="M42.965,2.838,40.825.7A2.368,2.368,0,0,0,39.14,0H36.657a1.213,1.213,0,0,0-1.214,1.214v.441H35a1.214,1.214,0,0,0-1.214,1.214V3.31h-.441a1.214,1.214,0,0,0-1.214,1.214V11.97a1.215,1.215,0,0,0,1.214,1.214H39.14a1.215,1.215,0,0,0,1.214-1.214v-.441h.441a1.215,1.215,0,0,0,1.214-1.214V9.874h.441a1.213,1.213,0,0,0,1.214-1.214V4.523a2.372,2.372,0,0,0-.7-1.686ZM40.353,1.319,42.344,3.31h-1.55a.442.442,0,0,1-.441-.441V1.319ZM39.581,11.97a.442.442,0,0,1-.441.441H33.348a.442.442,0,0,1-.441-.441V4.523a.441.441,0,0,1,.441-.441h.441v6.233A1.214,1.214,0,0,0,35,11.529h4.578Zm1.655-1.655a.442.442,0,0,1-.441.441H35a.442.442,0,0,1-.441-.441V2.869A.441.441,0,0,1,35,2.427h.441V8.661a1.214,1.214,0,0,0,1.214,1.214h4.578Zm1.655-1.655a.441.441,0,0,1-.441.441H36.657a.441.441,0,0,1-.441-.441V1.214a.441.441,0,0,1,.441-.441H39.14a.441.441,0,0,1,.441.441V2.869a1.215,1.215,0,0,0,1.214,1.214H42.45a.442.442,0,0,1,.441.441V8.661Z"
                            fill="#656d77"
                          />
                        </g>
                      </svg>
                      <span className="ml-2">Standard tasks</span>
                    </div>
                  </a>

                  <a
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    href="#"
                    data-toggle="modal"
                    data-target="#NonstandardTasks"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.901"
                        height="12.901"
                        viewBox="0 0 12.901 12.901"
                      >
                        <path
                          id="Path_2490"
                          data-name="Path 2490"
                          d="M24.69-77.9H16.651a.4.4,0,0,1-.4-.4.4.4,0,0,1,.4-.4H24.69a.6.6,0,0,0,.6-.6v-7.155H18.039V-78.3a.4.4,0,0,1-.4.4H14.612A1.413,1.413,0,0,1,13.2-79.31v-7.559a.4.4,0,0,1,.4-.4h11.69v-2.115a.6.6,0,0,0-.6-.6H14.612a.6.6,0,0,0-.6.6v3.5a.4.4,0,0,1-.4.4.4.4,0,0,1-.4-.4v-3.5A1.413,1.413,0,0,1,14.612-90.8H24.69A1.414,1.414,0,0,1,26.1-89.388V-79.31A1.413,1.413,0,0,1,24.69-77.9ZM14.008-86.465v7.155a.6.6,0,0,0,.6.6h2.62v-7.759H14.008Z"
                          transform="translate(-13.2 90.8)"
                          fill="#656d77"
                        />
                      </svg>
                      <span className="ml-2">Nonstandard tasks</span>
                    </div>
                  </a>
                </div>
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarOptions;
