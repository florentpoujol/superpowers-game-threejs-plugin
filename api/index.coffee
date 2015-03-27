fs = require 'fs'

SupAPI.registerPlugin 'typescript', 'threejs', {
  code: "var THREE = SupEngine.THREE; declare var SupWebGLRenderer; declare var SupThreeScene;"
  defs: fs.readFileSync(__dirname + '/three.d.ts', encoding: 'utf8') + "declare var SupWebGLRenderer: THREE.WebGLRenderer; declare var SupThreeScene: THREE.Scene;"
} 
