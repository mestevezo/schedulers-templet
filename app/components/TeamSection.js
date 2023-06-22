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

const TeamSection = () => {
  return (
    <>
      <Disclosure as="nav">
        {/* <div className="accordion mb-3" id="accordionCreativeTeam">
          <div className="accordion-item"> */}
        <Disclosure.Button>
          {({ open }) => (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                viewBox="0 0 9 9"
              >
                <circle
                  id="Ellipse_8"
                  data-name="Ellipse 8"
                  cx="4.5"
                  cy="4.5"
                  r="4.5"
                  fill="#07dd87"
                />
              </svg>
              <span className="ms-2">Creative team</span>
              <svg
                className="ml-auto h-5 w-5 transform"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d={open ? "M5.5 8.5L10 13l4.5-4.5" : "M5.5 10.5L10 6l4.5 4.5"}
                />
              </svg>
            </div>
          )}
        </Disclosure.Button>
        <Disclosure.Panel>
          {/* kanban */}
          <Kanban />
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
    </>
  );
};

export default TeamSection;
