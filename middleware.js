import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let loginStatus = req.cookies.get("loginStatus");

  let url = req.url;

  if (!verify && !loginStatus && url.includes("/dashboard")) {
    return NextResponse.redirect("http://gohelpme.online/login");
  }

  if (verify && url.includes("/login")) {
    return NextResponse.redirect("http://gohelpme.online/dashboard");
  }

  if (verify && !loginStatus && url.includes("/blog")) {
    return NextResponse.redirect("http://gohelpme.online/fundraisers");
  }
}
