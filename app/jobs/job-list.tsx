import JobCard from "./job-card";
// import jobs from "../../data.json";
import { promises as fs } from "fs";

async function JobList() {
  const data = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const jobs = JSON.parse(data);

  return (
    <div className="container grid grid-cols-1 tablet:w-[689px] tablet:grid-cols-2 tablet:gap-3 desktop:w-[1110px] desktop:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
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
