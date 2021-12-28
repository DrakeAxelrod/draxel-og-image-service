import { IncomingMessage } from "http";
import { URL } from "url";
import { ParsedRequest } from "./types";
import { getAbsoluteURL } from "./get-absolute-url";

export function parseRequest(req: IncomingMessage) {
  const baseURL = getAbsoluteURL("/api");
  const { pathname, searchParams } = new URL(req.url?.replace("/api", "") || "/", baseURL.replace("/api", ""))
  const theme = searchParams.get("theme");
  const md = searchParams.get("md");
  const fontSize = searchParams.get("fontSize");
  if (Array.isArray(fontSize)) {
    throw new Error("Expected a single fontSize");
  }
  if (Array.isArray(theme)) {
    throw new Error("Expected a single theme");
  }
  const arr = (pathname || "/").slice(1).split(".");
  let extension = "";
  let text = "";
  if (arr.length === 0) {
    text = "";
  } else if (arr.length === 1) {
    text = arr[0];
  } else {
    extension = arr.pop() as string;
    text = arr.join(".");
  }

  const parsedRequest: ParsedRequest = {
    fileType: extension === "jpeg" ? extension : "png",
    text: decodeURIComponent(text),
    theme: theme === "dark" ? "dark" : "light",
    md: md === "1" || md === "true",
    fontSize: fontSize || "96px",
  };
  return parsedRequest;
}
