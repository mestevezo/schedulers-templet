"use client";

import { Disclosure } from "@headlessui/react";
import TaskCard from "./TaskCard";
import Notification from "./Notification";

const TeamSection = () => {
  return (
    <>
      <Disclosure>
        {/* <div className="accordion mb-3" id="accordionCreativeTeam">
          <div className="accordion-item"> */}
        <Disclosure.Button>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
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
            </button>
          </h2>
        </Disclosure.Button>
        <Disclosure.Panel>
          {/* <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionCreativeTeam"
          > */}
          {/* <!-- Team member - 1 -->  */}
          <div className="row tasks-wrapper">
            {/* <!-- Start lane - Team --> */}
            <div className="col col-lg-2">
              <div className="card border-0">
                <div className="card-header border-0 bg-white px-0"></div>
                <div className="card-body">
                  <div className="tasks" id="team">
                    {/* <!-- Start task --> */}
                    <div className="card mb-2 border-0">
                      <div className="card-body p-0 border-0">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <img
                              src="./images/mr.png"
                              className="team-member"
                              alt=""
                            />
                            <p className="title-name mt-2">Full Name</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End task --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End lane - Team -->

                                        <!-- Start lane - Monday --> */}
            <div className="col">
              <div className="card border-0">
                <div className="card-header border-0 bg-white px-0">
                  <h3 className="card-title mb-0">
                    <span>Monday</span>
                  </h3>
                </div>
                <div className="card-body">
                  <div className="tasks" id="monday">
                    {/* <!-- Start task --> */}

                    <TaskCard />
                    {/* <!-- End task -->
                            <!-- Start task --> */}
                    <TaskCard />

                    {/* <!-- End task -->
                            <!-- Start notification --> */}
                    <Notification />
                    {/* <!-- End notification --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End lane - Monday -->

                                        <!-- Start lane - Tuesday --> */}
            <div className="col">
              <div className="card border-0">
                <div className="card-header border-0 bg-white px-0">
                  <h3 className="card-title mb-0">
                    <span>Tuesday</span>
                  </h3>
                </div>
                <div className="card-body">
                  <div className="tasks" id="tuesday">
                    {/* <!-- Start task --> */}
                    <TaskCard />
                    {/* <!-- End task -->
                            <!-- Start notification --> */}
                    <Notification />
                    {/* <!-- End notification --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End lane - Tuesday -->

                                        <!-- Start lane - Wednesday --> */}
            <div className="col">
              <div className="card border-0">
                <div className="card-header border-0 bg-white px-0">
                  <h3 className="card-title mb-0">
                    <span>Wednesday</span>
                  </h3>
                </div>
                <div className="card-body">
                  <div className="tasks" id="wednesday">
                    {/* <!-- Start notification --> */}
                    <Notification />
                    {/* <!-- End notification --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End lane - Wednesday -->

                                        <!-- Start lane - Thursday --> */}
            <div className="col">
              <div className="card border-0">
                <div className="card-header border-0 bg-white px-0">
                  <h3 className="card-title mb-0">
                    <span>Thursday</span>
                  </h3>
                </div>
                <div className="card-body">
                  <div className="tasks" id="thursday">
                    {/* <!-- Start task --> */}
                    <TaskCard />
                    {/* <!-- End task -->
                                                        <!-- Start notification --> */}
                    <Notification />
                    {/* <!-- End notification --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End lane - Thursday -->

                                        <!-- Start lane - Friday --> */}
            <div className="col">
              <div className="card border-0">
                <div className="card-header border-0 bg-white px-0">
                  <h3 className="card-title mb-0">
                    <span>Friday</span>
                  </h3>
                </div>
                <div className="card-body">
                  <div className="tasks" id="friday">
                    {/* <!-- Start task --> */}
                    <TaskCard />
                    {/* <!-- End task -->
                                                        <!-- Start notification --> */}
                    <Notification />
                    {/* <!-- End notification --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End lane - Friday --> */}
          </div>
          {/* <!-- Team member - 1 --> */}

          {/* <!-- Unassigned work --> */}
          <div className="row tasks-wrapper mt-4">
            {/* <!-- Start lane - Team --> */}
            <div className="col col-lg-2">
              <div className="card border-0">
                <div className="card-body">
                  <div className="tasks unassigned" id="team">
                    {/* <!-- Start task --> */}
                    <div className="card mb-2 border-0">
                      <div className="card-body p-0 border-0">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="title-name mt-2">Unassigned work</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End task --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End lane - Team --> */}

            <div className="row justify-content-end">
              <div className="col-12 col-lg-6 text-end my-1">
                <button type="button" className="btn btn-outline-primary">
                  <span>Optimize team</span>
                </button>

                <button type="button" className="btn btn-primary ms-1">
                  <span>Publish team</span>
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Disclosure.Panel>
        {/* </div>
        </div> */}
      </Disclosure>
    </>
  );
};

export default TeamSection;
