import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

export async function fetchJobDetails(
  req: NextRequest,
  res: NextResponse,
  { params: { id } }: Props,
) {}
