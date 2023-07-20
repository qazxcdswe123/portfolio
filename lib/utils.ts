import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*
 * Get GitHub stars count given a project URI (USERNAME/REPO) format.
 * @param projectURI - GitHub project URI in USERNAME/REPO format.
 * @returns {Promise<string | null>} - Stars count in string format.
 */
export async function getGitHubStars(projectURI: string): Promise<string | null> {
  try {
    const [owner, repo] = projectURI.split("/");
    const token = process.env.GITHUB_TOKEN;
    const endpoint = `https://api.github.com/repos/${owner}/${repo}`;
    const response = await fetch(
      endpoint,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: {
          revalidate: 60 * 60 * 24, // 24 hours
        },
      },
    );

    if (!response?.ok) {
      return null;
    }

    const json = await response.json();

    return parseInt(json["stargazers_count"]).toLocaleString();
  } catch (error) {
    return null;
  }
}