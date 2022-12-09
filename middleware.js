import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { useRouter } from "next/router";

const secret = "$tr0ngkEy123!@#";

export default function middleware() {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (router.query.includes("/dashboard")) {
    if (token === undefined) {
      return NextResponse.redirect("/login");
    }

    try {
      verify(token, secret);

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect("/login");
    }
  }

  return NextResponse.next();
}
