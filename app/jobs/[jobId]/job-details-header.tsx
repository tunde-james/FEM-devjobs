"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/button";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { Job } from "@/app/types";

interface JobDetailsProps {
  jobDetail: Job;
}

function JobDetailsHeader({ jobDetail }: JobDetailsProps) {
  const isPageSmall = useMediaQuery("(max-width: 580px)");

  return (
    <header>
      {isPageSmall ? (
        <div className="relative -top-4 flex flex-col items-center justify-center rounded-md bg-white px-20">
          <div
            style={{ backgroundColor: jobDetail.logoBackground }}
            className="relative -top-[25px] flex h-[50px] w-[50px] items-center justify-center rounded-2xl"
          >
            <Image
              src={`/${jobDetail.logo}`}
              alt="company logo"
              width={30}
              height={30}
              className="self-center"
            />
          </div>

          <h3 className="mb-3">{jobDetail.company}</h3>

          <Link
            href={jobDetail.website}
            className="mb-7 text-grey-dark"
          >{`${jobDetail.company}.com`}</Link>

          <Button className="mb-8 bg-violet-accent px-5 py-4 font-bold capitalize text-violet-normal">
            company site
          </Button>
        </div>
      ) : (
        <div className="relative -top-10 flex h-[140px] items-center justify-center rounded-md bg-white pr-10">
          <div
            style={{ backgroundColor: jobDetail.logoBackground }}
            className="flex h-[140px] w-[140px] items-center justify-center"
          >
            <Image
              src={`/${jobDetail.logo}`}
              alt="company logo"
              width={30}
              height={30}
              className="self-center"
            />
          </div>

          <div className="ml-10">
            <h3 className="mb-3">{jobDetail.company}</h3>

            <Link
              href={jobDetail.website}
              className="mb-7 text-grey-dark"
            >{`${jobDetail.company}.com`}</Link>
          </div>

          <Button className="ml-auto inline-block bg-violet-accent px-5 py-4 font-bold capitalize text-violet-normal">
            company site
          </Button>
        </div>
      )}
    </header>
  );
}

export default JobDetailsHeader;
