import js from "highlight.js/lib/languages/javascript";
import py from "highlight.js/lib/languages/python";
import java from "highlight.js/lib/languages/java";
import php from "highlight.js/lib/languages/php";
import ruby from "highlight.js/lib/languages/ruby";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import markdown from "highlight.js/lib/languages/markdown";
import bash from "highlight.js/lib/languages/bash";
import c from "highlight.js/lib/languages/c";
import csharp from "highlight.js/lib/languages/csharp";
import go from "highlight.js/lib/languages/go";
import kotlin from "highlight.js/lib/languages/kotlin";
import lua from "highlight.js/lib/languages/lua";
import rust from "highlight.js/lib/languages/rust";
import swift from "highlight.js/lib/languages/swift";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import sql from "highlight.js/lib/languages/sql";

export const colors = [
  {
    name: "orange",
    color: "#8a4c1e",
  },
  {
    name: "red",
    color: "#8a1e1e",
  },
  {
    name: "purple",
    color: "#4c2a85",
  },
  {
    name: "green",
    color: "#1e5945",
  },
  {
    name: "blue",
    color: "#1e3a8a",
  },
];

export const highlightLanguages = [
  css,
  js,
  ts,
  html,
  sql,
  py,
  java,
  php,
  ruby,
  xml,
  markdown,
  bash,
  c,
  csharp,
  go,
  kotlin,
  lua,
  rust,
  swift,
];
