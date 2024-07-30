import { useState } from "react";
import jobs from "../../data.json";
import Image from "next/image";
import FilterForm from "../components/filter-form";
import ThemeContextProvider from "../contexts/ThemeContext";

function JobList() {
  return (
    <ThemeContextProvider>
      <div>
        <FilterForm />
        {jobs.map((job) => (
          <div
            key={job.id}
            className="mx-auto mb-[49px] w-[327px] rounded-md bg-white px-8 pb-8 pt-12"
          >
            <div className="-mt-[65px]">
              <Image src={job.logo} alt="" width={50} height={50} />
            </div>

            <div className="">
              <span className="text-grey-dark">{job.postedAt}</span>
              <span className="mx-4 inline-block h-1 w-1 rounded-full bg-grey-dark"></span>
              <span className="text-grey-dark">{job.contract}</span>
              <h3 className="text-blue-dark">{job.position}</h3>
              <p className="text-grey-dark">{job.company}</p>
              <p className="text-violet-normal">{job.location}</p>
            </div>
          </div>
        ))}
      </div>
    </ThemeContextProvider>
  );
}

export default JobList;
