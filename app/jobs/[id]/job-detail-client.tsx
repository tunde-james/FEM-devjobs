// "use client";

import MobileScreenDetailsPage from "./mobile-screen-details-page";

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
