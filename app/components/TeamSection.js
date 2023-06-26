"use client";

import { Disclosure } from "@headlessui/react";
import Kanban from "./Kanban";

const handlerOptimizeTeam = async () => {
  fetch(`http://localhost:3000/moptimize`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    query: "area=creative&taskcase=0&double=false",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};


const TeamSection = ({OpData}) => {
  console.log(OpData)
  const sections = ["All"]
  return (
    <>
    { sections.map( (section) => (
      <Disclosure as="nav">
        {/* <div className="accordion mb-3" id="accordionCreativeTeam">
          <div className="accordion-item"> */}
        <Disclosure.Button className="w-full">
          {({ open }) => (
            <div className="w-full p-6">
              <div className="flex items-center bg-white p-4 rounded-lg max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  className="mr-2 text-green-500 fill-current"
                >
                  <circle
                    id="Ellipse_8"
                    data-name="Ellipse 8"
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                  />
                </svg>
                <span className="text-gray-900">{section}</span>
                <svg
                  className={
                    open
                      ? "w-5 h-5 transform rotate-180 ml-auto items-end"
                      : "w-5 h-5 ml-auto items-end"
                  }
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 7l5 5 5-5" />
                </svg>
              </div>
            </div>
          )}
        </Disclosure.Button>
        <Disclosure.Panel className="p-6">
          {/* kanban */}
          <Kanban className="bg-white" opData={OpData}/>
          {/* kanban */}

          <div className="row justify-content-end">
            <div className="col-12 col-lg-6 text-end my-1 ">
              <button
                type="button"
                className="btn4-custom m-1"
                onClick={handlerOptimizeTeam}
              >
                <span>Optimize team</span>
              </button>

              <button type="button" className="btn3-custom m-1">
                <span>Publish team</span>
              </button>
            </div>
          </div>
          {/* </div> */}
        </Disclosure.Panel>
      </Disclosure>
))}
    </>
  );
};

export default TeamSection;
