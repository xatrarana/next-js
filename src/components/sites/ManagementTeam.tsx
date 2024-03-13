import React from "react";
import ProfileCard from "../common/ProfileCard";

const ManagementTeam = () => {
  return (
    <section className=" w-full max-w-6xl mx-auto px-3 py-5">
      <div className="">
        <h1 className="text-2xl rounded-md text-white font-bold bg-green-500  px-10 py-3">
        कार्यसमिति सदस्य
        </h1>
      </div>
      <div className="p-3 md:p-5 flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-3 ">
      {Array.from({ length: 5 }).map((_, index) => (
        <ProfileCard key={index} />
      ))}
      </div>
    </section>
  );
};

export default ManagementTeam;
