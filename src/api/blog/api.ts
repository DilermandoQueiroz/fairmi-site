import { Post } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "public/posts");

export function getPostSlugs(): string[] {
  try {
    return fs.readdirSync(postsDirectory, { withFileTypes: true })
              .filter(dirent => dirent.isDirectory())
              .map(dirent => dirent.name);
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = join(postsDirectory, slug, "index.md");
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, slug, content } as Post;
  } catch (error) {
    console.error(`Error reading file for slug: ${slug}`, error);
    return null;
  }
}


export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post !== null) // Filter out null values
    // sort posts by date in descending order
    .sort((post1, post2) => (post1 && post2 && post1.date > post2.date ? -1 : 1))
    .filter((post) => post !== null) // Filter out null values
    .map((post) => {
      const formattedDate = new Date(post!.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      return {
        ...post,
        date: formattedDate,
      } as Post;
    }); // Cast to Post type
  
  return posts;
}