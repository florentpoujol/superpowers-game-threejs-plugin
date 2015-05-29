window.THREE = SupEngine.THREE;

exports.init = function(player, callback) {
  window.SupWebGLRenderer = player.gameInstance.threeRenderer;
  window.SupThreeScene = player.gameInstance.threeScene;
  callback();
};
