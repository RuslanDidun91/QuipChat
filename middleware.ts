import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

//to protect all routes within users
export const config = {
  matcher: [
    "/conversations/:path*",
    "/users/:path*",
  ]
};