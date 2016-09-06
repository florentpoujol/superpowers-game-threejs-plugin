
class MyBehavior extends Sup.Behavior {
  awake() {
    Sup.log("THREE.REVISION =", THREE.REVISION);
    
    
    // add a cube to an actor
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    let material = new THREE.MeshBasicMaterial( {color: 0xFF4784, wireframe: true} );
    let cube = new THREE.Mesh( geometry, material );
    
    let tmpActor: any = this.actor; // necessary to access __inner which isn't in the definitions

    tmpActor.__inner.threeObject.add( cube );
    this.actor.setEulerAngles( new Sup.Math.Vector3(0,20,0) );
    
    
    // create another cube and set the same texture as Sup's logo
  
    var tmpSprite: any = Sup.get("Sup Logo", Sup.Sprite);

    material = new THREE.MeshBasicMaterial( {
      map: tmpSprite.__inner.textures.map,
      //transparent: true,
      color: 0x96FF96, // 150,255,150
      //wireframe: true
    } );
    cube = new THREE.Mesh( geometry, material );
    cube.rotation.fromArray( [0,-20,0] );
    
    tmpActor = Sup.getActor("Textured Cube");
    tmpActor.__inner.threeObject.add( cube );
    tmpActor.__inner.threeObject.updateMatrixWorld();
    
    
    // create a sphere and add it directly to Sup's scene.
    
    const sphereGeometry = new THREE.SphereGeometry( 1 );
    material = new THREE.MeshBasicMaterial( {color: 0x479684, wireframe: true} );
    const sphere = new THREE.Mesh( sphereGeometry, material );
    sphere.position.set(0, 3, 0);
    
    SupThreeScene.add( sphere );
    SupThreeScene.updateMatrixWorld(true);
    
  }
}
Sup.registerBehavior(MyBehavior);
