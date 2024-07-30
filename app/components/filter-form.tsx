"use client";

import { useMediaQuery } from "../hooks/useMediaQuery";
import MobileFilterForm from "./mobile-filter-form";
import LargeScreenFilterForm from "./large-screen-filter-form";

function FilterForm() {
  const isPageSmall = useMediaQuery("(max-width: 580px)");

  return (
    <form className="mb-[57px]">
      {isPageSmall ? <MobileFilterForm /> : <LargeScreenFilterForm />}
    </form>
  );
}

export default FilterForm;
