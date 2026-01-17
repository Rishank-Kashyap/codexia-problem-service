const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();

  // 1. Convert MarkDown to HTML
  const convertedHtml = marked.parse(markdownContent);
  console.log("convertedHtml", convertedHtml);

  // 2. Sanitizing the converted HTML
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });
  console.log("sanitizedHtml", sanitizedHtml);

  // 3. Converting sanitized HTML back to MarkDown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
  console.log("sanitizedMarkdown", sanitizedMarkdown);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
