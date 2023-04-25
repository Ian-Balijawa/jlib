export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description: "Welcome to the Job Search Platform for Developers",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Browse Jobs",
      href: "/browse",
    },
    {
      title: "Joke",
      href: "/joke",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
