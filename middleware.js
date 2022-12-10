import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let isLoggedIn = req.cookies.get("isLoggedIn");

  let url = req.url;

  if (!verify && !isLoggedIn && url.includes("/dashboard")) {
    return NextResponse.redirect("http://gohelpme.online/login");
  }

  if (verify && url.includes("/login")) {
    return NextResponse.redirect("http://gohelpme.online/dashboard");
  }

  if (verify && !isLoggedIn && url.includes("/blog")) {
    return NextResponse.redirect("http://gohelpme.online/fundraisers");
  }
}
