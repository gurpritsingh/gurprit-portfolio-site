// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/gurpritsingh/workspace/portfolio/gurprit-portfolio-site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/gurpritsingh/workspace/portfolio/gurprit-portfolio-site/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/gurpritsingh/workspace/portfolio/gurprit-portfolio-site/src/pages/page-2.js"))
}

