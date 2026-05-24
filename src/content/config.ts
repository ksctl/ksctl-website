import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default("ksctl Team"),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().default("/ksctl-logo.svg"),
    product: z.enum(["ksctl", "kubmin", "company"]).default("company"),
  }),
});

export const collections = {
  blog: blogCollection,
};
