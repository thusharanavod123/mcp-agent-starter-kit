import fs from "fs";
import path from "path";

const toolsDir = path.resolve("./mcp/tools");

export function loadTools() {
  const files = fs.readdirSync(toolsDir);

  const tools = [];

  for (const file of files) {
    if (file.endsWith(".js")) {
      const tool = require(path.join(toolsDir, file));
      tools.push(tool.default || tool);
    }
  }

  return tools;
}
