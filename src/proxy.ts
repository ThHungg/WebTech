import { jwtDecode } from "jwt-decode";
import { NextResponse, NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }

  try {
    const token = request.cookies.get("refresh_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    const decoded: any = jwtDecode(token);

    if (decoded.role !== "Admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (e) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
