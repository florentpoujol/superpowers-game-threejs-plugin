# Superpowers THREE.js plugin

This plugin for [Superpowers, the extensible HTML5 2D+3D game engine](http://sparklinlabs.com), exposes THREE.js (r70) directly to the runtime.  

# Usage

Typically, runtime objects have an `__inner` property set to their conterpart instance on the engine side which will reference the THREE objects they works with (`texture` for a Sprite asset, `threeMesh` for a SpriteRenderer, ...).  

The `__inner` property is likely not exposed, so you have to store the objects in a temp variable of type `any` to access it.

You also have direct access to the `SupWebGLRenderer` and `SupThreeScene` variables which are set to the instances of `THREE.WebGLRenderer` and `THREE.Scene` used by Superpowers.

## Quick example

For instance, the following code creates the two cubes and the sphere you can see in the image below:

![blma](https://dl.dropboxusercontent.com/u/51314747/superpowers/threejs-plugin-demo.png)

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
          map: tmpSprite.__inner.texture,
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


## Installation

This plugin depends on [the DOM plugin](https://github.com/florentpoujol/superpowers-dom-plugin), __so you need to install it too__.

[Download the latest release](https://github.com/florentpoujol/superpowers-threejs-plugin/releases), unzip it, rename the folder to `threejs`, move it inside `app/plugins/florentpoujol/` then restart your server.

__Advanced:__

Get it via `npm`:

    npm install sup-threejs-plugin

The name of the vendors or plugins in the `app/plugins/` folder don't matter.  
So you can leave the plugin path as `node_modules/sup-threejs-plugin`.

The DOM plugin will be installed as any dependency in `sup-threejs-plugin/node_modules/sup-dom-plugin`, so you just need to move it two folders up.

## Test/Demo project

The `project` folder contains a test/demo project.  

To install it, put the project's folder inside Superpowers' `projects` folder, then restart the server.

On Window, Superpowers' projects folder is typically in `C:\Users\[Your user name]\AppData\Roaming\Superpowers`.
