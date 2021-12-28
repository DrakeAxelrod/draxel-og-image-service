// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { getScreenshot } from "@lib/chromium";
import ReactDOMServer from "react-dom/server";
import Base from "@components/og-image";
import { parseRequest } from "@lib/parser"
import { sanitizeHtml } from "@lib/sanitizer";

// const isDev = true

const makeHtml = (base: string) => {
  return `
    <html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <body>
    ${base}
    </body>
    </html>`;
}

const isDev = !process.env.AWS_REGION;
const isHtmlDebug = process.env.OG_HTML_DEBUG === "1";

const handler = async (req: Req, res: Res) => {
  const { theme, text, md, fontSize, fileType } = parseRequest(req)
  const html = ReactDOMServer.renderToString(<Base mode={theme} text={text} md={md} fontSize={fontSize} />);
  try {
    if (isHtmlDebug) {
      res.setHeader("Content-Type", "text/html");
      res.end(html);
      return;
    }
    const file = await getScreenshot(html, fileType, isDev);
    res.statusCode = 200;
    res.setHeader("Content-Type", `image/${fileType}`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(e);
  }
};

export default handler;
