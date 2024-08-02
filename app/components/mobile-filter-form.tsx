"use client";

import React, { ChangeEvent, useState } from "react";
import JobModalFilter from "./job-modal-filter";
import Button from "./ui/button";
import Image from "next/image";
import Input from "./ui/input";
import { FilterFormData } from "./filter-form";

export interface SmallScreenFilterFormProps {
  filterJobData: FilterFormData;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

function MobileFilterForm({ filterJobData, onChange, checked }: SmallScreenFilterFormProps) {
  const [isJobModalFilterOpen, setJobModalFilter] = useState(false);

  function openJobModalFilter() {
    setJobModalFilter(true);
  }

  return (
    <div className="container -mt-8 flex h-20 w-[327px] items-center rounded-md bg-white px-6">
      <div className="flex items-center">
        <JobModalFilter
          isOpen={isJobModalFilterOpen}
          filterJobData={filterJobData}
          onChange={onChange}
          checked={checked}
        />

        <Input
          type="text"
          name="title"
          value={filterJobData.title}
          placeholder="Filter by title ..."
          onChange={onChange}
        />

        <Image
          src="/images/icons/icon-filter.svg"
          alt="Filter icon"
          width={20}
          height={20}
          onClick={openJobModalFilter}
          className="self-center"
        />

        <Button className="ml-6 p-4">
          <Image
            src="/images/icons/icon-search-white.svg"
            alt="Search icon"
            width={20}
            height={20}
            className="self-center"
          />
        </Button>
      </div>
    </div>
  );
}

export default MobileFilterForm;
