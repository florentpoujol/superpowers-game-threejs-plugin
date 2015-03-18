exports.init = (player, callback) ->
  window.SupWebGLRenderer = player.gameInstance.threeRenderer
  window.SupThreeScene = player.gameInstance.threeScene
  callback()
