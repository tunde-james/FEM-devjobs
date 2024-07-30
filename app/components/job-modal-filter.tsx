import React, { useState, useEffect, useRef } from "react";
import Modal from "./modal";
import Image from "next/image";
import Input from "./ui/input";
import Button from "./ui/button";
import Label from "./ui/label";

export interface ModalFilterData {
  text: string;
  checked: boolean;
}

const initialModalFilterData: ModalFilterData = {
  text: "",
  checked: false,
};

interface Props {
  isOpen: boolean;
  onSubmit?: (data: ModalFilterData) => void;
}

function JobModalFilter({ isOpen, onSubmit }: Props) {
  const focusInputRef = useRef<HTMLInputElement | null>(null);
  const [formState, setFormState] = useState<ModalFilterData>(
    initialModalFilterData,
  );

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current!.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    setFormState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen}>
      <div className="">
        <div className="flex">
          <Image
            src="/images/icons/icon-location.svg"
            alt="location icon"
            width={17}
            height={24}
            className="mr-4 self-center"
          />
        </div>

        <div className="divide-y"></div>

        <div className="flex items-center">
          <Input type="checkbox" className="h-6 w-6" />
          <Label className="capitalise ml-4 font-bold">full time only</Label>
        </div>

        <Button className="mt-6 px-8 py-4">search</Button>
      </div>
    </Modal>
  );
}

export default JobModalFilter;
