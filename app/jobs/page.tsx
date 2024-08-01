"use client";

import { useRouter } from "next/navigation";

function JobListPage() {
  const router = useRouter();

  router.push("/");
}

export default JobListPage;
