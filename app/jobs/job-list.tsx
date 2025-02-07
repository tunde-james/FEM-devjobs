import JobCard from "./job-card";
import jobsData from "../data.json";
import { Job } from "../types";

interface JobListProps {
  jobs: Job[];
}

function JobList({ jobs }: JobListProps) {
  return (
    <div className="container grid grid-cols-1 tablet:w-[689px] tablet:grid-cols-2 tablet:gap-3 desktop:w-[1110px] desktop:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
