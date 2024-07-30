import JobCard from "./job-card";
import jobs from "../../data.json";

function JobList() {
  return (
    <div className="flex flex-col tablet:flex-row tablet:flex-wrap">
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
