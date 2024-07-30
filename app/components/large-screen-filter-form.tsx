import Image from "next/image";
import Input from "./ui/input";
import Label from "./ui/label";
import Button from "./ui/button";

function LargeScreenFilterForm() {
  return (
    <div className="mx-auto -mt-10 flex h-20 items-center rounded-md bg-white pl-6 pr-4 tablet:w-[689px] laptop:w-[789px] desktop:w-[1000px]">
      <div className="flex grow gap-4 tablet:w-[147px]">
        <Image
          src="/images/icons/icon-search.svg"
          alt="Search icon"
          width={24}
          height={24}
          className="self-center"
        />

        <Input type="text" placeholder="Filter by title..." />
      </div>

      <div className="flex grow gap-4 tablet:w-[169px]">
        <Image
          src="/images/icons/icon-location.svg"
          alt="Location icon"
          width={17}
          height={24}
          className="self-center"
        />

        <Input type="text" placeholder="Filter by location" />
      </div>

      <div className="flex grow gap-4 tablet:w-[108px]">
        <Input type="checkbox" />
        <Label>Full time</Label>
      </div>

      <Button className="px-8 py-4 capitalize">search</Button>
    </div>
  );
}

export default LargeScreenFilterForm;
