import Image from "next/image";
import Input from "./ui/input";
import Label from "./ui/label";
import Button from "./ui/button";
import { FilterFormData } from "./filter-form";
import { ChangeEvent } from "react";

interface LargeScreenFilterFormProps {
  filterJobData: FilterFormData;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

function LargeScreenFilterForm({
  filterJobData,
  onChange,
  checked,
}: LargeScreenFilterFormProps) {
  return (
    <div className="container -mt-10 flex h-20 items-center rounded-md bg-white pl-6 pr-4 tablet:w-[689px] desktop:w-[1110px]">
      <div className="flex grow gap-4 tablet:w-[147px]">
        <Image
          src="/images/icons/icon-search.svg"
          alt="Search icon"
          width={24}
          height={24}
          className="self-center"
        />

        <Input
          type="text"
          name="title"
          value={filterJobData.title}
          onChange={onChange}
          placeholder="Filter by title..."
        />
      </div>

      <div className="flex grow gap-4 tablet:w-[169px]">
        <Image
          src="/images/icons/icon-location.svg"
          alt="Location icon"
          width={17}
          height={24}
          className="self-center"
        />

        <Input
          type="text"
          name="location"
          value={filterJobData.location}
          onChange={onChange}
          placeholder="Filter by location"
        />
      </div>

      <div className="flex grow gap-4 tablet:w-[108px]">
        <Input
          type="checkbox"
          name="fullTime"
          checked={filterJobData.fullTime}
          onChange={onChange}
        />
        <Label>Full time</Label>
      </div>

      <Button className="px-8 py-4 capitalize">search</Button>
    </div>
  );
}

export default LargeScreenFilterForm;
