import Image from "next/image";
import Link from "next/link";

type Props = {
  company: string;
  logo: string;
  logoBg: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
};

function JobCard({
  company,
  logo,
  logoBg,
  position,
  postedAt,
  contract,
  location,
}: Props) {
  return (
    <div className="mb-[49px] rounded-md bg-white px-8 pb-8 phone:w-[327px] tablet:w-[339px] desktop:w-[330px]">
      <div
        style={{ backgroundColor: logoBg }}
        className="relative -top-[25px] flex h-[50px] w-[50px] items-center justify-center rounded-2xl"
      >
        <Image
          src={logo}
          alt=""
          width={30}
          height={30}
          className="self-center"
        />
      </div>

      <div className="">
        <div className="mb-[13px]">
          <span className="text-grey-dark">{postedAt}</span>
          <span className="mx-4 inline-block h-1 w-1 rounded-full bg-grey-dark"></span>
          <span className="text-grey-dark">{contract}</span>
        </div>

        <h3 className="mb-[17px] text-blue-dark">{position}</h3>

        <p className="mb-11 text-grey-dark">{company}</p>

        <p className="text-violet-normal">{location}</p>
      </div>
    </div>
  );
}

export default JobCard;
