import * as THREE from 'three'

export class Char {
    constructor( charMain ) {

        this.charMain = charMain
        this.mixer = new THREE.AnimationMixer( this.charMain )
        this.actions = {}
        this.animations = this.charMain.animations
        this.clock = new THREE.Clock()


        for( let i = 0 ; i < this.animations.length ; i++ ){

            const clip = this.animations[ i ]
			const action = this.mixer.clipAction( clip )
            this.actions[ clip.name ] = action
            //console.log( action )
            action.clampWhenFinished = false
			action.loop = THREE.LoopRepeat

        }

        //this.activeAction = this.actions[ 'play_music' ]
		//this.activeAction.play()

        //console.log( this.animations )

    }

    update(){

        const dt = this.clock.getDelta();
        if ( this.mixer ) this.mixer.update( dt );

    }
}

export class SceneMgr extends THREE.Group {


    constructor( scenePath, onProcess, onFinish) {
        
        super()
        this.debugAlpha = 0
        this.scenePath = scenePath
        this.loader = new THREE.ObjectLoader()
        this.totalSize = 55693796
        this.chars = []
        this.delegate = {
            onProcess: onProcess,
            onFinish: onFinish,
        }

        this.startObj = null
        this.pts = []

    }

    startLoad(){
        const self = this;
        // load a resource
        this.loader.load(
        // resource URL
            self.scenePath,
            // called when resource is loaded
            function ( object ) {

                //object.children )

                
                //self.scene.add( object )
                self.initScene( object )
                
                self.delegate.onFinish( object )
                
                //self.scene.add( object )
                //self.initEvent()
                //self.onWindowResize()
                //self.animate()
                

            },
            // called when loading is in progresses
            function ( xhr ) {

                const percent = Math.floor( ( xhr.loaded / self.totalSize ) * 100  )
                self.delegate.onProcess( percent )
                
                //console.log( percent )
                //console.log( xhr.loaded )
                //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            function ( error ) {

                //console.log( 'An error happened' );

            }
        )


    }

    update(){

        

    }

    initScene( sceneObj ){

        // const self = this

        // const childNum = sceneObj.children.length
        // for( let i = 0 ; i < childNum ; i++ ){
        //     const child = sceneObj.children[ i ]
        //     const charObj = new Char( child )
        //     self.chars.push( charObj )
        //     console.log( charObj )
        // }
        
        // sceneObj.traverse( function( obj ){
        //     //console.log( obj.type )
        //     if( obj.type === "Mesh" ){
                
        //         if( obj.material.map != null ){
        //             obj.material.map.encoding = THREE.sRGBEncoding
        //         }

                
        //     }
        // });

    }


}