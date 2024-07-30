"use client";

import React, { useState } from "react";
import JobModalFilter from "./job-modal-filter";
import Button from "./ui/button";
import Image from "next/image";
import Input from "./ui/input";

function MobileFilterForm() {
  const [isJobModalFilterOpen, setJobModalFilter] = useState(false);

  function openJobModalFilter() {
    setJobModalFilter(true);
  }

  return (
    <div className="container -mt-8 flex h-20 w-[327px] items-center rounded-md bg-white px-6">
      <div className="flex items-center">
        <JobModalFilter isOpen={isJobModalFilterOpen} />

        <Input type="text" placeholder="Filter by title ..." />

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
