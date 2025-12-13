import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./data-layer/user/getSession";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set(
      "url",
      request.nextUrl.pathname + request.nextUrl.search
    );
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
