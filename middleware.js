import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://gohelpme.online/login");
  }

  if (verify && url.includes("/login")) {
    return NextResponse.redirect("http://gohelpme.online/dashboard");
  }
}
