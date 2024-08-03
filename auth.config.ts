import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

// Define public paths that can be accessed without authentication
const publicPaths = [
  '/login', 
  '/about-us', 
  '/signin', 
  '/signup', 
  '/forgot-password', 
  '/contact-us'
];

export const authConfig: NextAuthConfig = {
  providers: [credentials],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isPublicPath = publicPaths.includes(nextUrl.pathname);

      // If not logged in and trying to access a protected route, redirect to login
      if (!isLoggedIn) {
        if (nextUrl.pathname.startsWith('/login')) {
          return true; // Allow access to login page
        } else if (isOnDashboard) {
          return false; // Block access to dashboard
        } else {
          return isPublicPath; // Allow access to public paths
        }
      }

      // If logged in and trying to access the login page, redirect to dashboard
      if (isLoggedIn && nextUrl.pathname.startsWith('/login')) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      // Allow access to all routes for logged-in users
      return true;
    },
    async session({ session, user }) {
      // Customize session object if needed
      return session;
    }
  }
};