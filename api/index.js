var fs = require("fs");

SupAPI.registerPlugin("typescript", "THREE.js", {
  code: "declare var THREE; declare var SupWebGLRenderer; declare var SupThreeScene;",
  defs: fs.readFileSync(__dirname + "/three.d.ts", { encoding: "utf8" }) + "declare var SupWebGLRenderer: THREE.WebGLRenderer; declare var SupThreeScene: THREE.Scene;"
});
