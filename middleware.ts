import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/next-auth";

export default auth((req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;

  if (isAuthenticated && nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/boards", nextUrl.origin));
  }

  if (!isAuthenticated && nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", nextUrl.origin));
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
