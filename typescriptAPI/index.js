var fs = require("fs");

SupCore.system.registerPlugin("typescriptAPI", "THREE.js", {
  code: "declare var THREE; declare var SupWebGLRenderer; declare var SupThreeScene;",
  defs: fs.readFileSync(__dirname + "/main.d.ts", { encoding: "utf8" })
});
