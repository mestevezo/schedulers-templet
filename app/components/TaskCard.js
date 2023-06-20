const TaskCard = () => {
  return (
    <>
      <div className="card mb-2 cursor-grab">
        <div className="card-body p-2">
          <div className="d-flex">
            <div className="flex-grow-1 ms-2">
              <a
                className="text-decoration-none"
                data-bs-toggle="offcanvas"
                href="#offcanvasDetails"
                role="button"
                aria-controls="offcanvasDetails"
              >
                <p className="title-task">Lorem ipsum dolor sit amet</p>
                <p className="date-task mb-0">2 hours | Due date: Jun 20</p>
              </a>
              <div className="form-check form-switch mt-1 mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Block
                </label>
              </div>
              {/* <!-- <span className="badge text-bg-danger">No time</span> --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
