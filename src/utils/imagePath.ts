/**
 * Returns the correct image path for both local development and production
 * In local dev: /images/filename.png
 * In production: /greenspring-website/images/filename.png
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Use environment variables consistently for both server and client
  const isLocalDev = process.env.NEXT_PUBLIC_LOCAL_DEV === 'true';
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction && !isLocalDev) {
    return `/greenspring-website/${normalizedPath}`;
  }
  
  return `/${normalizedPath}`;
}