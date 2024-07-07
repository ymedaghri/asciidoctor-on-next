import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  '/dashboard/(.*)',
]);

const allowedUserIds = process.env.ALLOWED_USER_IDS ? process.env.ALLOWED_USER_IDS.split(',') : [];

export default clerkMiddleware((auth, request) => {  
  
  const { protect, userId } = auth()

  if (isProtectedRoute(request)) {
    protect(_has => {
      return allowedUserIds.includes(userId||"unknown")
    })
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)","/dashboard(.*)"],
}