/**
 * Returns the correct image path for both local development and production
 * In development and production: /images/filename.png
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  return `/${normalizedPath}`;
}