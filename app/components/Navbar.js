const Navbar = () => {
  return (
    <>
      <nav className="flex bg-jade pt-1.875 pb-1.875 h-14">
        <div className="flex flex-wrap items-center justify-between w-full px-4">
          <button className="btn-custom m-2">
            <span className="mx-0.5">Back</span>
          </button>

          <div className="flex items-center justify-end flex-1">
            <button type="button" className="btn-custom m-2">
              <span className="m-2">Optimize all teams</span>
            </button>

            <button className="btn2-custom m-2">Publish all</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
