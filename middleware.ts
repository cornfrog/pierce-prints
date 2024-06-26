import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/categories",
    "/contact",
    "/about",
    "/api/categories",
    "/api/message",
    "/categories/:category",
    "/api/categories/:category",
    "/categories/:category/:item",
    "/api/remove-account"
  ]
});

export const config = {
  matcher: [
    "/((?!.+.[w]+$|_next).*)", 
    "/", "/(api|trpc)(.*)", 
    "/categories/:category",
    "/api/categories/:category",
    "/categories/:category/:item"
  ],
};
