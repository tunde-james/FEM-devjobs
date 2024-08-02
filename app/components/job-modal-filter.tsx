import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import Modal from "./modal";
import Image from "next/image";
import Input from "./ui/input";
import Button from "./ui/button";
import Label from "./ui/label";
import { FilterFormData } from "./filter-form";

interface JobModalFilterProps {
  isOpen: boolean;
  formData: FilterFormData;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

function JobModalFilter({
  isOpen,
  formData,
  onChange,
  checked,
}: JobModalFilterProps) {
  const focusInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current!.focus();
      }, 0);
    }
  }, [isOpen]);

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen}>
      <div className="mx-auto flex w-[327px] flex-col rounded-md bg-white p-6">
        <div className="flex">
          <Image
            src="/images/icons/icon-location.svg"
            alt="location icon"
            width={17}
            height={24}
            className="mr-4 self-center"
          />

          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={onChange}
            placeholder="Filter by location ..."
          />
        </div>

        <div className="border-b border-grey-dark pt-6"></div>

        <div className="flex items-center pt-6">
          <Input
            type="checkbox"
            name="fullTime"
            checked={checked}
            className="h-6 w-6"
          />
          <Label className="capitalise ml-4 font-bold">full time only</Label>
        </div>

        <Button className="mt-6 px-8 py-4">search</Button>
      </div>
    </Modal>
  );
}

export default JobModalFilter;
