import JobCard from "./job-card";
import jobs from "../../data.json";

function JobList() {
  return (
    <div className="container grid grid-cols-1 tablet:w-[689px] tablet:grid-cols-2 tablet:gap-3 desktop:w-[1110px] desktop:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          company={job.company}
          logo={job.logo}
          logoBg={job.logoBackground}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
        />
      ))}
    </div>
  );
}

export default JobList;
