export const siteConfig = {
  name: "telecaller.ai",
  description: "AI telecallers for Indian businesses",
  url: "https://telecaller.ai",
  contact: {
    email: "abhinav@telecaller.ai",
    phone: "+91 90001 30400",
    phoneHref: "tel:+919000130400",
    whatsappHref: "https://wa.me/919000130400",
    location: "Hyderabad, India",
  },
  calendly: {
    url: "https://calendly.com/abhinav-telecaller/15-minute-demo-telecaller-ai",
  },
  social: {
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
