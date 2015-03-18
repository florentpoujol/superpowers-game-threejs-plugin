fs = require 'fs'

SupAPI.addPlugin 'typescript', 'threejs', {
  code: "var THREE = SupEngine.THREE; declare var SupWebGLRenderer; declare var SupThreeScene;"
  defs: fs.readFileSync(__dirname + '/three.d.ts', encoding: 'utf8') + "declare var SupWebGLRenderer; declare var SupThreeScene;"
} 
