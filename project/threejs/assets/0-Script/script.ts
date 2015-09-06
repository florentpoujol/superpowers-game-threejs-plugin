

class MyBehavior extends Sup.Behavior {
  awake() {
    
    // add a cube to an actor
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( {color: 0xFF4784, wireframe: true} );
    var cube = new THREE.Mesh( geometry, material );
    
    var tmpActor: any = this.actor; // necessary to access __inner which isn't in the definitions
    tmpActor.__inner.threeObject.add( cube );
    
    this.actor.setEulerAngles( new Sup.Math.Vector3(0,20,0) );
    
    
    // create another cube and set the same texture as Sup's logo
  
    var tmpSprite: any = Sup.get("Sup Logo", Sup.Sprite);

    var material = new THREE.MeshBasicMaterial( {
      map: tmpSprite.__inner.textures.map,
      //transparent: true,
      color: 0x96FF96, // 150,255,150
      //wireframe: true
    } );
    var cube = new THREE.Mesh( geometry, material );
    cube.rotation.fromArray( [0,-20,0] );
    
    var tmpActor: any = Sup.getActor("Textured Cube");
    tmpActor.__inner.threeObject.add( cube );
    tmpActor.__inner.threeObject.updateMatrixWorld();
    
    
    // create a sphere and add it directly to Sup's scene.
    
    var sphereGeometry = new THREE.SphereGeometry( 1 );
    var material = new THREE.MeshBasicMaterial( {color: 0x479684, wireframe: true} );
    var sphere = new THREE.Mesh( sphereGeometry, material );
    sphere.position.set(0, 3, 0);
    
    SupThreeScene.add( sphere );
    SupThreeScene.updateMatrixWorld(true);
    
  }
}
Sup.registerBehavior(MyBehavior);


Sup.loadScene( Sup.get("Scene", Sup.Scene));
