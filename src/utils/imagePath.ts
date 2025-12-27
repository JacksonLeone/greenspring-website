/**
 * Returns the correct image path for both local development and production
 * In local dev: /images/filename.png
 * In production: /greenspring-website/images/filename.png
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In production (not local dev), add the GitHub Pages basePath
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on the GitHub Pages domain
    const isGitHubPages = window.location.hostname === 'jacksonleone.github.io';
    return isGitHubPages ? `/greenspring-website/${normalizedPath}` : `/${normalizedPath}`;
  }
  
  // Server-side: use environment variables
  const isLocalDev = process.env.NEXT_PUBLIC_LOCAL_DEV === 'true';
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction && !isLocalDev) {
    return `/greenspring-website/${normalizedPath}`;
  }
  
  return `/${normalizedPath}`;
}