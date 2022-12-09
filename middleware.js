import { NextResponse } from "next/server";

export default function middleware(req) {
  let jwtToken = req.cookies.get("token");

  let url = req.url;

  // if (verify && url === "/login") {
  //   return NextResponse.redirect("http://gohelpme.online/dashboard");
  // }

  if (
    !jwtToken &&
    url.includes("/dashboard") &&
    !url.includes("/fundraisers")
  ) {
    return NextResponse.redirect("http://gohelpme.online/login");
  }
}
