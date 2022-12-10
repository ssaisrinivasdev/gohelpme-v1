import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let loginStatus = req.cookies.get("isLoggedIn");

  let url = req.url;

  if (!verify && loginStatus != true && url.includes("/dashboard")) {
    return NextResponse.redirect("http://gohelpme.online/login");
  }

  if (verify && loginStatus != false && url.includes("/login")) {
    return NextResponse.redirect("http://gohelpme.online/dashboard");
  }

  if (!verify && loginStatus != true && url.includes("/blog")) {
    return NextResponse.redirect("http://gohelpme.online/fundraisers");
  }
}
