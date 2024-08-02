import { notFound } from "next/navigation";
import Link from "next/link";
import jobData from "../../data.json";
import Button from "@/app/components/ui/button";
import JobDetailsHeader from "./job-details-header";
import JobDetailsFooter from "./job-details-footer";

export async function generateStaticParams() {
  return jobData.map((job) => ({
    jobId: job.id.toString(),
  }));
}

function JobDetailPage({ params }: { params: { jobId: string } }) {
  const { jobId } = params;

  const jobDetail = jobData.find((job) => job.id.toString() === jobId);

  if (!jobDetail) {
    notFound();
  }

  return (
    <>
      <div className="container phone:w-[327px] tablet:w-[689px] laptop:max-w-[730px] desktop:max-w-[730px]">
        <JobDetailsHeader jobDetail={jobDetail} />

        <div className="laptop:px- rounded-md bg-white px-6 pt-10 tablet:px-10 tablet:pb-10">
          <div className="tablet:flex tablet:items-center tablet:justify-between">
            <div>
              <div className="pb-2">
                <span className="text-grey-dark">{jobDetail.postedAt}</span>
                <span className="mx-4 inline-block h-1 w-1 rounded-full bg-grey-dark"></span>
                <span className="text-grey-dark">{jobDetail.contract}</span>
              </div>

              <h3 className="pb-3 text-blue-dark">{jobDetail.position}</h3>

              <p className="pb-[50px] text-violet-normal">
                {jobDetail.location}
              </p>
            </div>

            <Link href={jobDetail.apply} className="inline-block pb-8">
              <Button className="px-24 py-4 capitalize tablet:px-6 tablet:py-4">
                apply now
              </Button>
            </Link>
          </div>

          <p className="text-justify text-grey-dark">{jobDetail.description}</p>

          <div>
            <h3 className="pb-7 pt-10 capitalize">requirement</h3>
            <p className="leading-[26px] text-grey-dark">
              {jobDetail.requirements.content}
            </p>

            <ul className="pt-8 text-grey-dark">
              {jobDetail.requirements.items.map(
                (item: string, index: number) => (
                  <li key={index} className="list-disc leading-[26px]">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="pb-7 pt-10 capitalize">what you will do</h3>
            <p className="leading-[26px] text-grey-dark">
              {jobDetail.role.content}
            </p>

            <ul className="pt-8 text-grey-dark">
              {jobDetail.role.items.map((item: string, index: number) => (
                <li
                  key={index}
                  className="list-insid list-decimal leading-[26px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <JobDetailsFooter jobDetail={jobDetail} />
    </>
  );
}

export default JobDetailPage;
