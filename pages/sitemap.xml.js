// ./pages/sitemap.xml.js
import fs from 'fs';
import path from 'path';

// Function to recursively get all file paths in a directory, excluding files starting with a dot
function getAllFilePaths(directoryPath, fileArray) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFilePaths(filePath, fileArray);
    } else {
      // Exclude files starting with a dot (e.g., .DS_Store)
      if (!file.startsWith('.')) {
        fileArray.push(filePath);
      }
    }
  });
}

export const getServerSideProps = async ({ res }) => {
  // Paths to your /blog and /tutorial directories
  const blogDir = path.join(process.cwd(), 'pages', 'blog');
  const tutorialDir = path.join(process.cwd(), 'pages', 'tutorial');

  // Create an array to store all file paths
  const allFilePaths = [];

  // Get all file paths from the /blog and /tutorial directories (excluding dot files)
  getAllFilePaths(blogDir, allFilePaths);
  getAllFilePaths(tutorialDir, allFilePaths);

  // Map file paths to valid Next.js routes
  const routes = allFilePaths
    .map((filePath) => {
      const relativePath = path.relative(process.cwd(), filePath);
      const fileNameWithoutExt = path.basename(relativePath, path.extname(relativePath));
      const route = `https://yourwebsite.com${relativePath
        .replace('pages', '')
        .replace('.mdx', '')}`;
      return route;
    })
    .filter((route) => !route.includes('/.')); // Filter out routes containing '/.'

  // Create the sitemap.xml content with valid routes
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetEnd = '</urlset>\n';
  const urlElements = routes
    .map((route) => `  <url>\n    <loc>${route}</loc>\n  </url>`)
    .join('\n');

  const sitemapContent = `${xmlHeader}${urlsetStart}${urlElements}${urlsetEnd}`;

  // Set the response content type to XML
  res.setHeader('Content-Type', 'text/xml');
  // Send the sitemap XML as the response
  res.write(sitemapContent);
  res.end();

  return {
    props: {},
  };
};

const Sitemap = () => {
  // This component is empty as the sitemap is generated in getServerSideProps
  return null;
};

export default Sitemap;
