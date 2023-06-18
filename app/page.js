export default function Home() {
  return (
    <>
      <nav className="flex bg-jade pt-1.875 pb-1.875 h-14">
        <div className="flex flex-wrap align-center justify-between">
          <ul className="m-2 ml-5">
            <button className="inline-block leading-1.5 text-center no-underline align-middle cursor-pointer select-none border py-2 px-4 text-sm rounded-md text-white bg-jade border-white hover:border-transparent hover:text-jade hover:bg-white font-medium">
              <span className="">Back</span>
            </button>
          </ul>

          <div className="flex align-center">
            <button type="button" className="btn btn-outline-secondary ms-2">
              <span className="ms-1">Optimize all teams</span>
            </button>

            <button className="" type="button">
              Publish all
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
