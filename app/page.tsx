"use client";

import { useState } from "react";
import FilterForm from "./components/filter-form";
import JobList from "./jobs/job-list";
import jobsData from "../app/data.json";
import { FilterFormData } from "./components/filter-form";
import { Job } from "./types";

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>(jobsData);
  const [filterJobs, setFilterJobs] = useState<Job[]>(jobsData);

  const handleFilterJobs = (filterOptions: FilterFormData) => {
    const { title, location, fullTime } = filterOptions;

    if (!title && !location && !fullTime) {
      setFilterJobs(jobs);
      return;
    }

    const filtered = jobs.filter((job) => {
      const matchesTitle = job.company
        .toLowerCase()
        .includes(title.toLowerCase());

      const matchesLocation = job.location
        .toLowerCase()
        .includes(location.toLowerCase());

      const matchesFullTime = fullTime ? job.contract === "Full Time" : true;

      return matchesTitle && matchesLocation && matchesFullTime;
    });

    setFilterJobs(filtered);
  };

  return (
    <div className="">
      <FilterForm handleFilter={handleFilterJobs} filterJobs={filterJobs} />
      <JobList />
    </div>
  );
}
