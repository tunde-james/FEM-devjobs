import JobCard from "./job-card";
import { promises as fs } from "fs";

interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

async function JobList() {
  const data = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const jobs: Job[] = JSON.parse(data);

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
