
import React from "react";
import { QuickNotice } from "./QuickNotice";
const WorkSpace = () => {
  return (
    <>
      <div className="flex items-center justify-end gap-x-5">
       <QuickNotice/>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
       <div>sample</div>
        <div className="col-span-12 xl:col-span-8">
          <p> Table rey</p>
        </div>
        <p>chart card rey</p>
      </div>
    </>
  );
};

export default WorkSpace;
