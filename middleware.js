import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let url = req.url;

  if (verify && url === "http://gohelpme.online/login") {
    return NextResponse.redirect("http://gohelpme.online/dashboard");
  }

  if (!verify && url === "http://gohelpme.online/dashboard") {
    return NextResponse.redirect("http://gohelpme.online/login");
  }
}
