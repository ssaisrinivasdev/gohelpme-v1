import { NextResponse } from "next/server";

const secret = "$tr0ngkEy123!@#";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  // try {
  //   verify(jwt, secret);

  //   return NextResponse.next();
  // } catch (error) {
  //   return NextResponse.redirect("/login");
  // }
}
