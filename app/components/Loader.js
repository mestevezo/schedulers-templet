import React from 'react';
import List01 from "../../public/List01.gif";
import Image from "next/image";

const Loader = () => {
  return (
    <>
    <div  className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <Image src={List01} width={300} height={300} />
      <span className="ml-2">We are running our scheduling and optimization function now.  Hold on tight!</span>
    </div>
        
    </>
  )
}

export default Loader
