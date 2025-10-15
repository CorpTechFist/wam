import fs from "fs";
import path from "path";

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  const cleaned = content.replace(/@[\d]+\.[\d]+\.[\d]+/g, "");
  if (content !== cleaned) {
    fs.writeFileSync(filePath, cleaned);
    console.log("Fixed:", filePath);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith(".ts") || fullPath.endsWith(".tsx")) {
      fixFile(fullPath);
    }
  });
}

walkDir("./src");
console.log("✅ All versioned imports removed!");
