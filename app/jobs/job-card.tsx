import Image from "next/image";
import Link from "next/link";
import { Job } from "../types";

export interface JobCardProps {
  job: Job;
}

function JobCard({ job }: JobCardProps) {
  return (
    <div className="mb-[49px] rounded-md bg-white px-8 pb-8 phone:w-[327px] tablet:w-[339px] desktop:w-[330px]">
      <Link href={`/jobs/${job.id}`}>
        <div
          style={{ backgroundColor: job.logoBackground }}
          className="relative -top-[25px] flex h-[50px] w-[50px] items-center justify-center rounded-2xl"
        >
          <Image
            src={job.logo}
            alt=""
            width={30}
            height={30}
            className="self-center"
          />
        </div>

        <div className="">
          <div className="mb-[13px]">
            <span className="text-grey-dark">{job.postedAt}</span>
            <span className="mx-4 inline-block h-1 w-1 rounded-full bg-grey-dark"></span>
            <span className="text-grey-dark">{job.contract}</span>
          </div>

          <h3 className="mb-[17px] text-blue-dark">{job.position}</h3>

          <p className="mb-11 text-grey-dark">{job.company}</p>

          <p className="font-bold text-violet-normal">{job.location}</p>
        </div>
      </Link>
    </div>
  );
}

export default JobCard;
