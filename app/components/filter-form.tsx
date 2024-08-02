"use client";

import { useMediaQuery } from "../hooks/useMediaQuery";
import MobileFilterForm from "./mobile-filter-form";
import LargeScreenFilterForm from "./large-screen-filter-form";
import { ChangeEvent, FormEvent, useState } from "react";
import { Job } from "../types";

const intitialFormData = {
  title: "",
  location: "",
  fullTime: false,
};

export interface FilterFormData {
  title: string;
  location: string;
  fullTime: boolean;
}

interface FilterFormProps {
  handleFilter: (data: FormData) => void;
  filterJobs: Job[];
}

function FilterForm({ handleFilter }: FilterFormProps) {
  const [filterJobData, setFormData] = useState(intitialFormData);

  const isPageSmall = useMediaQuery("(max-width: 580px)");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({ ...filterJobData, [name]: newValue });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFilter(filterJobData);
    setFormData(intitialFormData);
  };

  return (
    <form className="mb-[57px]" onSubmit={handleSubmit}>
      {isPageSmall ? (
        <MobileFilterForm
          formData={filterJobData}
          onChange={handleChange}
          checked={filterJobData.fullTime}
        />
      ) : (
        <LargeScreenFilterForm
          filterJobData={filterJobData}
          onChange={handleChange}
          checked={filterJobData.fullTime}
        />
      )}
    </form>
  );
}

export default FilterForm;
