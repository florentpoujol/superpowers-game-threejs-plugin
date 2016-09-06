
window.THREE = SupEngine.THREE;

var threejs = {
  init: function(player, callback) {
    window.SupWebGLRenderer = player.gameInstance.threeRenderer;
    window.SupThreeScene = player.gameInstance.threeScene;
    callback();
  }
}

SupRuntime.registerPlugin("threejs", threejs);
