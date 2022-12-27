import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import useLoginCheck from "../../../hooks/use-logincheck";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      type: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        // username: { label: "Email", type: "email", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;

        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        const token = () => {
          localStorage.getItem("token");
          if (token) {
            jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
              if (err) {
                return null;
              } else {
                return decoded.id;
              }
            });
          }
        };

        const res = await fetch("http://gohelpme.online/api/user/" + token, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        // console.log("Error Occured");
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  // callbacks: {
  //   jwt: ({ token, user }) => {
  //     if (user) {
  //       token.id = user.id;
  //     }

  //     return token;
  //   },
  //   session: ({ session, token }) => {
  //     session.id = token.id;

  //     return session;
  //   },
  // },
  // secret: "$tr0ngkEy123!@#",
  // jwt: {
  //   secret: "$tr0ngkEy123!@#",
  //   encryption: true,
  // },
});
