import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (verify && url.includes("/login")) {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  }
}
