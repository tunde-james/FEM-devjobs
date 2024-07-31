// "use client";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/button";
import JobDetailPage from "./page";
import MobileScreenDetailsPage from "./mobile-screen-details-page";
import WideScreenDetailsPage from "./wide-screen-details-page";

interface Params {
  id: string;
}

interface JobDetailClientProps {
  params: Params;
}

function JobDetailClient({ params }: JobDetailClientProps) {
  // const isPageSmall = useMediaQuery("(max-width: 580px)");

  return (
    <>
      {/* {isPageSmall ? (
        <MobileScreenDetailsPage params={params} />
      ) : (
        <WideScreenDetailsPage params={params} />
      )} */}
      <MobileScreenDetailsPage params={params} />
    </>
  );
}

export default JobDetailClient;
