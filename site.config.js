const CONFIG = {
  // profile setting (required)
  profile: {
    name: "HiroNewf",
    image: "/Profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role:"",
    bio: "Professional Googler pretending to be an Ethical Hacker. PNPT, PJOR, Security+, & Network+ Certified",
    email: "HiroNewf@protonmail.com",
    linkedin: "",
    github: "HiroNewf",
    instagram: "",
  },
  projects: [
    {
      name: `Cybersec Discord Server`,
      href: "https://discord.gg/jkxNrvdRQk",
    },
  ],
  // blog setting (required)
  blog: {
    title: "HiroNewf's Blog",
    description: "Welcome to my blog where I will post about certifications, resumes, penetration testing, OSINT, & more!",
  },

  // CONFIG configration (required)
  link: "https://blog-git-main-hironewfs-projects.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "HiroNewf/Blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
