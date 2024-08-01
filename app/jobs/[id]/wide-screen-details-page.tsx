import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/button";

interface Props {
  params: { id: string };
}

async function WideScreenDetailsPage({ params: { id } }: Props) {
  return (
    <>
      <div>
        <div className="relative -top-4 flex flex-col items-center justify-center rounded-md bg-white px-20">
          <div
            style={{ backgroundColor: job.logoBackground }}
            className="relative -top-[25px] flex h-[50px] w-[50px] items-center justify-center rounded-2xl"
          >
            <Image
              src={`/${job.logo}`}
              alt="company logo"
              width={30}
              height={30}
              className="self-center"
            />
          </div>

          <div className="">
            <h3 className="mb-3">{job.company}</h3>

            <Link
              href={job.website}
              className="mb-7 text-grey-dark"
            >{`${job.company}.com`}</Link>
          </div>

          <Button className="mb-8 bg-violet-accent px-5 py-4 font-bold capitalize text-violet-normal">
            company site
          </Button>
        </div>

        <div className="rounded-md bg-white px-6 py-10">
          <div className="pb-2">
            <div>
              <>
                <span className="text-grey-dark">{job.postedAt}</span>
                <span className="mx-4 inline-block h-1 w-1 rounded-full bg-grey-dark"></span>
                <span className="text-grey-dark">{job.contract}</span>
              </>

              <h3 className="pb-3 text-blue-dark">{job.position}</h3>

              <p className="pb-14 text-violet-normal">{job.location}</p>
            </div>

            <Link href={job.apply} className="inline-block pb-8">
              <Button className="px-[114px] py-4">Apply</Button>
            </Link>
          </div>

          <p>{job.description}</p>

          <>
            <h3 className="pb-7 pt-10 capitalize">requirement</h3>
            <p className="leading-[26px] text-grey-dark">
              {job.requirements.content}
            </p>

            <ul className="pt-8 text-grey-dark">
              {job.requirements.items.map((item: string, index: number) => (
                <li key={index} className="list-disc leading-[26px]">
                  {item}
                </li>
              ))}
            </ul>
          </>

          <>
            <h3 className="pb-7 pt-10 capitalize">what you will do</h3>
            <p className="leading-[26px] text-grey-dark">{job.role.content}</p>

            <ul className="pt-8 text-grey-dark">
              {job.role.items.map((item: string, index: number) => (
                <li
                  key={index}
                  className="list-insid list-decimal leading-[26px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </>
        </div>
      </div>

      <footer className="mx-auto mt-14 flex items-center justify-center rounded-t-md bg-white p-6">
        <div>
          <h3 className="pb-3 text-blue-dark">{job.position}</h3>
        </div>

        <Link href={job.apply} className="inline-block phone:w-[327px]">
          <Button className="px-36 py-6">Apply</Button>
        </Link>
      </footer>
    </>
  );
}

export default WideScreenDetailsPage;
