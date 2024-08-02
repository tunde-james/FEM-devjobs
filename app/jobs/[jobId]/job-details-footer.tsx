"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/button";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { Job } from "@/app/types";

interface JobDetailsProps {
  jobDetail: Job;
}

function JobDetailsFooter({ jobDetail }: JobDetailsProps) {
  const isPageSmall = useMediaQuery("(max-width: 580px)");

  return (
    <footer>
      {isPageSmall ? (
        <div className="mt-14 flex items-center justify-center rounded-md bg-white py-6">
          <Link href={jobDetail.apply}>
            <Button className="self-stretch px-[119px] py-4 capitalize">
              apply now
            </Button>
          </Link>
        </div>
      ) : (
        <div className="mx-auto mt-14 flex items-center justify-center rounded-t-md bg-white px-10 py-6 laptop:px-[170px] desktop:px-[415px]">
          <div className="mr-auto">
            <h3 className="pb-3 text-blue-dark">{jobDetail.position}</h3>
            <p className="text-grey-dark">{jobDetail.company}</p>
          </div>

          <Link href={jobDetail.apply}>
            <Button className="px-7 py-4 capitalize">apply now</Button>
          </Link>
        </div>
      )}
    </footer>
  );
}

export default JobDetailsFooter;
