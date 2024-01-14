import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    if(req.nextUrl.pathname === '/home')
    console.log(req.nextUrl.pathname)
  }
)

export const config = { matcher: ["/home"] }