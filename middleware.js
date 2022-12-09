import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret = "$tr0ngkEy123!@#";

export default function middleware(req) {
  const { cookies } = req;
  console.log(cookies);

  const jwt = cookies.token;

  const url = req.url;

  if (url.includes("/dashboard")) {
    if (jwt === undefined) {
      return NextResponse.redirect("/login");
    }

    try {
      verify(jwt, secret);

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect("/login");
    }
  }

  return NextResponse.next();
}
