
	var cube,renderer,camera,scene,dimension,controls,raf,tiles;
	var leftSide,rightSide,frontSide,backSide,downSide,upSide;
	var pivot,cmp;
	var degree;
	var solidPos;
	var geometry, material, m, solidC;
	var rafAnimate;
	var dimension = 3;
	var speed = 100;
	var delayTime=0;
	var primaryLogo,lpu;

var cube;
var projector, mouse = { x: 0, y: 0 }, INTERSECTED;
var sprite1;
var canvas1, context1, texture1;
 	//canvas
 	
	var container = document.createElement( 'div' );
	document.body.appendChild( container );
 	
 	      
		
	
	// document.getElementById('player1').appendChild(container);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0xbdbdbd, 1);
	container.appendChild( renderer.domElement );

	material = new THREE.MeshBasicMaterial( {  transparent:false, opacity: 0.0,wireframe:false, color:0x000000  } );
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.useQuaternion == true;

	 init('0');


	
	function init(nw,cubeType){

	//////////////////////////////////////////////////////init scene
	


		 

		if (nw == '1'){
			// console.log('init = 1');
			for (var x =0;x<6;x++){
				for (var y = 0, xMatrix = 1, yMatrix = 1; y<(dimension*dimension);y++){
						scene.remove(tiles[x][y]);
						ff.dispose();
						

				}
			}


			for (var x=0;x<dimension;x++){
				for (var y = 0;y<(dimension*dimension);y++){
					scene.remove(solidC[x][y]);
					geometry.dispose();
					material.dispose();
						
				}
			}

			matrixInit();
			execPerm(allMovesP1);
					
			// scene.remove(arrowHelper);
			// arrowHelper.dispose();
		

		
		}
		
	scene = new THREE.Scene();




	// initCam();
	// alert(window.innerWidth);

	geometry = new THREE.BoxGeometry( 2, 2, 2 );

	// material = new THREE.MeshBasicMaterial( {  transparent:true, opacity: 0.0 } );
	

	// m = new THREE.MeshBasicMaterial( { wireframeLinewidth:51,color: 0xFF00FF, } );
	
	degree = Math.PI/180;
	
	ff = new THREE.PlaneGeometry( 1.7, 1.7);

	var letterA,textGeometry,textMaterial;

	
 		
		
	



		//////////////////////////////////////////////////////init scene
		
		

	//start block
	solidC=[];
	solidPos=[];
	
	
		ad = dimension-1;
	
	
	yPos=ad; //c
	xPos=-ad ;//
	zPos=-ad;//
	for (x=0;x<dimension;x++){
		solidC.push([]);
		solidPos.push([]);
		for (y = 0;y<(dimension*dimension);y++){
			solidC[x].push(new THREE.Mesh(geometry,material)); 
		   	solidPos[x].push([]);
		  // 		objects.push( solidC[x][y]);
			solidPos[x][y][0] = x;
			solidPos[x][y][1] = y;
		
			if (y==0 && x==0){
		    solidC[x][y].position.x = xPos;
			solidC[x][y].position.y = yPos;
			solidC[x][y].position.z = zPos;
			}
			else if((y%dimension==0) && !(y==0)){
			zPos+=2;
			xPos=-ad;//
			solidC[x][y].position.x=xPos;
			solidC[x][y].position.y=yPos;
			solidC[x][y].position.z=zPos;
			}
			else if((x>0) && (y==0)){
			yPos-=2;
			xPos=-ad;//
			zPos=-ad;//
			solidC[x][y].position.x=xPos;
			solidC[x][y].position.y=yPos;
			solidC[x][y].position.z=zPos;	
			}
			else{
				xPos+=2;
			solidC[x][y].position.x=xPos;
			solidC[x][y].position.y=yPos;
			solidC[x][y].position.z=zPos;	
			}
			
			
			scene.add(solidC[x][y]);

	
		//	console.log("x = " + x + " y = " + y + " position.y = " + solidC[x][y].position.x);
		}
	}
	
	//end block

	


//start tiles
	changeColor();
	
//	ad -=2;
	var color="";
	ad-=dimension-1;
	var xInc=(dimension-1)*-2;

	  var xTileInc = 0;
	  var yTileInc = 0;
	  var yTile5Inc = (dimension-1)*dimension;
	 tiles = [];
	for (x =0;x<6;x++){
		tiles.push([]);
		switch (x){
			case 0:
				xInc=-ad;
				zInc=-ad;
				yInc=ad +1.1;
				xDeg=90*degree;
				yDeg=0;
				zDeg=0;
			break;
			case 1:
				xInc=-(ad +1.1);
				zInc=-ad;
				yInc=ad;
				xDeg=0;
				yDeg=90*degree;
				zDeg=0;
			break;
			case 2:
				xInc=-ad;
				zInc=(ad+1.1);
				yInc=ad;
				xDeg=0;
				yDeg=0;
				zDeg=90*degree;
			break;
			case 3:
				xInc=(ad+1.1);
				zInc=-ad;
				yInc=ad;
				xDeg=0;
				yDeg=90*degree;
				zDeg=0;
			
			break;
			case 4:
				xInc=ad;
				zInc=-(ad+1.1);
				yInc=ad;
				xDeg=0;
				yDeg=0;
				zDeg=0;
			break;
			case 5:
				xInc=-ad;
				zInc=ad;
				yInc=-(ad+1.1);
				xDeg=90*degree;
				yDeg=0;
				zDeg=0;
			
			break;
				
			
		}
		for (var y = 0, xMatrix = 1, yMatrix = 1; y<(dimension*dimension);y++){
						
						
					switch (x){
						case 0:
						// color = upSide;
						switch(arrayCube[0][xMatrix][yMatrix][3]){
							case 'U': color=upSide; break;
							case 'D': color=downSide; break;
							case 'L': color=leftSide; break;
							case 'R': color=rightSide; break;
							case 'F': color=frontSide; break;
							case 'B': color=backSide; break;
						}


						

								 if (!(y==0) && (y%(dimension))==0){
									 //zInc+=1;
									 xInc=-ad;
								 }
						break;
						case 1:
						 //color = leftSide;
						switch(arrayCube[4][xMatrix][yMatrix][3]){
							case 'U': color=upSide; break;
							case 'D': color=downSide; break;
							case 'L': color=leftSide; break;
							case 'R': color=rightSide; break;
							case 'F': color=frontSide; break;
							case 'B': color=backSide; break;
						}

								 if (!(y==0) && (y%(dimension))==0){
									// yInc-=2;
									 zInc=-ad;
								 }
						break;
						case 2:
						// color = frontSide;
						switch(arrayCube[1][xMatrix][yMatrix][3]){
							case 'U': color=upSide; break;
							case 'D': color=downSide; break;
							case 'L': color=leftSide; break;
							case 'R': color=rightSide; break;
							case 'F': color=frontSide; break;
							case 'B': color=backSide; break;
						}
								if (!(y==0) && (y%(dimension))==0){
									// yInc-=2;
									 xInc=-ad;
								 }
						break;
						case 3:
						// color = rightSide;
						
						switch(arrayCube[5][xMatrix][((dimension+1) -yMatrix)][3]){
							case 'U': color=upSide; break;
							case 'D': color=downSide; break;
							case 'L': color=leftSide; break;
							case 'R': color=rightSide; break;
							case 'F': color=frontSide; break;
							case 'B': color=backSide; break;
						}

								if (!(y==0) && (y%(dimension))==0){
									// yInc-=2;
									 zInc=-ad;
								 }
						break;
						case 4:
						// color = backSide;
						// console.log(((dimension+1)-xMatrix)  + " " + ((dimension+1) -yMatrix) );
						switch(arrayCube[3][((dimension+1)-xMatrix)][((dimension+1) -yMatrix)][3]){
							case 'U': color=upSide; break;
							case 'D': color=downSide; break;
							case 'L': color=leftSide; break;
							case 'R': color=rightSide; break;
							case 'F': color=frontSide; break;
							case 'B': color=backSide; break;
						}
								if (!(y==0) && (y%(dimension))==0){
									// yInc-=2;
									 xInc=ad;
								 }
						break;
						case 5:
						// color = downSide;
						switch(arrayCube[2][xMatrix][yMatrix][3]){
							case 'U': color=upSide; break;
							case 'D': color=downSide; break;
							case 'L': color=leftSide; break;
							case 'R': color=rightSide; break;
							case 'F': color=frontSide; break;
							case 'B': color=backSide; break;
						}
								if (!(y==0) && (y%(dimension))==0){
									// zInc-=2;
									 xInc=-ad;
								 }
						break;
					
					}
					yMatrix++;
						if ((yMatrix%(dimension+1))==0){
							yMatrix=1;
							xMatrix++;

						}
	  		 tiles[x].push(new THREE.Mesh( ff,color ));
			  tiles[x][y].position.z=zInc;
			  tiles[x][y].position.x=xInc;	
			  tiles[x][y].position.y=yInc;
			  tiles[x][y].rotation.x=xDeg;
			  tiles[x][y].rotation.y=yDeg;
			  tiles[x][y].rotation.z=zDeg;
			  
	//tile assigning		
			 
			  if (x ==0){
				solidC[xTileInc][yTileInc].add(tiles[x][y]);  
				   yTileInc++;
				   
				   if (y==dimension*dimension-1){
					yTileInc=0;   
				   }
			  }
			    if (x == 1 ){
			
				 
				 solidC[xTileInc][yTileInc].add(tiles[x][y]);
				 yTileInc+=dimension;
				 
				  if (yTileInc>(dimension-1)*dimension){
					  yTileInc=0;
					  xTileInc++;
				  } 
				 
			  }
			  if (xTileInc==dimension && yTileInc==0){
				
				xTileInc=0;
				yTileInc=(dimension-1)*dimension;  
			  }
		
			 if (x==2){
		  		solidC[xTileInc][yTileInc].add(tiles[x][y]);
				yTileInc++;
					if (yTileInc==(dimension*dimension)){
						yTileInc=(dimension-1)*dimension;
						xTileInc++;
					}
			 }
			 if (xTileInc==dimension && yTileInc==(dimension-1)*dimension){
			
				xTileInc=0;
				yTileInc=dimension-1;
			  }
			  if (x ==3){
				solidC[xTileInc][yTileInc].add(tiles[x][y]);
				yTileInc+=dimension;
					if (yTileInc>dimension*dimension){
						yTileInc=dimension-1;
						xTileInc++;
					}
				  
			  }
			   if (xTileInc==dimension && yTileInc==dimension-1){
				
				xTileInc=0;
				yTileInc=(dimension-1);  
			  }
			  if (x==4){
				solidC[xTileInc][yTileInc].add(tiles[x][y]); 
				yTileInc--;
					if (yTileInc==-1){
						yTileInc=dimension-1;
						xTileInc++;
					}
			  }
			  
			if (xTileInc==dimension && yTileInc==dimension-1){
				
				xTileInc=dimension-1;
				yTileInc=yTile5Inc;  
			  }
			  if (x==5){
				 solidC[xTileInc][yTileInc].add(tiles[x][y]);
				yTileInc++; 
				
					if ((yTileInc%dimension) == 0){
						yTile5Inc-=dimension;
						yTileInc=yTile5Inc;	
					}
				 	
			  }
			  
		
		//	 scene.add(tiles[x][y]);
			 
		
		
		}
	} //end tiles
	//scene.remove(solidC[0][0]);
			// scene.remove(solidC[0][0]);
		
	 // tiles[0][0].geometry.dispose();

scene.updateMatrixWorld(true);

		var bufferPos = new THREE.Vector3();
		bufferPos.applyMatrix4( tiles[0][0].matrixWorld );
	
	 	var posMatrix = new THREE.Vector3();
		tilesX = 0;

		tilesY = 8;
		posMatrix.applyMatrix4( tiles[tilesX][tilesY].matrixWorld );
		var from;

		switch(tilesX){
			case 0:
				from  = new THREE.Vector3( 0, 50, 0 );
			break;
			case 1:
				from  = new THREE.Vector3( 0 -50, 0, 0 );
			break;
			case 2:
				from  = new THREE.Vector3( 0, 0, 0 + 50 );
			break;
			case 3:
				from  = new THREE.Vector3( 0 +50, 0 , 0 );
			break;
			case 4:
				from  = new THREE.Vector3( 0, 0 , 0 -50 );
			break;
			case 5:
				from  = new THREE.Vector3( 0,-50 , 0 );
			break;
		}
			

		// var spritey = makeTextSprite( "Buffer", 
		// 	{ fontsize: 24, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
		// spritey.position.set(0,0,0);
		// scene.add( spritey );


				
			
				
				// txt.position.x =2;
	
				
				
				
	//solidC[2][1].children[0].material.color.setHex(0xabceeee);
	renderer.render( scene, camera );
	controls = new THREE.OrbitControls(camera,renderer.domElement);
	controls.addEventListener('change',trackCam);
	// animation();
	}//compute blocks  //init
		function changeColor(){
	// leftSide = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} ); //leftSide
	// frontSide = new THREE.MeshBasicMaterial( {color: 0xFF0033, side: THREE.DoubleSide} ); //leftSide
	// rightSide = new THREE.MeshBasicMaterial( {color:0xffff00, side: THREE.DoubleSide} ); //leftSide
	// backSide = new THREE.MeshBasicMaterial( {color: 0xff8000, side: THREE.DoubleSide} ); //leftSide
	// downSide = new THREE.MeshBasicMaterial( {color:0x00ff00, side: THREE.DoubleSide} ); //leftSide
	// upSide = new THREE.MeshBasicMaterial( {color:0x0000ff, side: THREE.DoubleSide} ); //leftSide

	leftSide = new THREE.MeshBasicMaterial( {color: 0xff8000 , side: THREE.DoubleSide} ); //leftSide
	frontSide = new THREE.MeshBasicMaterial( {color:0x00ff00, side: THREE.DoubleSide} ); //leftSide
	rightSide = new THREE.MeshBasicMaterial( {color:0xFF0033, side: THREE.DoubleSide} ); //leftSide
	backSide = new THREE.MeshBasicMaterial( {color:0x0000ff, side: THREE.DoubleSide} ); //leftSide
	downSide = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} ); //leftSide
	upSide = new THREE.MeshBasicMaterial( {color:0xFFFFFF, side: THREE.DoubleSide} ); //leftSide
								}
		
	//trackball
	
	// solidC[0][0].on('click', function()
	// 	{
	// 	    // response to click...
	// 	    alert('hi');
	// 	});
	
	//tiles[0][0].material.color.setHex(0xeeff);
	
 // 	THREE.SceneUtils.detach(tiles[0][0],solidC[0][0],scene);
    //tiles[0][0].geometry.colorsNeedUpdate = true;

    //////////////////

//  	 var tryko = tiles[0][0];
//  	 tryko.position.set(0,2,0);
//  	 tryko.material.color.setHex(0xeeeff);
// 	mesh.material.color.setHex(0xeeeff);
////////////////
	// scene.children[1].children[0].material.color.setHex(0xeeeff);



	renderer.render( scene, camera );
	
	//render();
	
	function changeDimen(){
			
			
			scene = new THREE.Scene();
			renderer.render(scene,camera);
			dimension = Number(document.getElementById("txtDimen").value);
			init();
	}

	// function makeTextSprite( message, parameters ) {if ( parameters === undefined ) parameters = {}; var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial"; var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18; var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4; var borderColor = parameters.hasOwnProperty("borderColor") ? parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 }; var backgroundColor = parameters.hasOwnProperty("backgroundColor") ? parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 }; var spriteAlignment = THREE.SpriteAlignment; var canvas = document.createElement('canvas'); var context = canvas.getContext('2d'); context.font = "Bold " + fontsize + "px " + fontface; var metrics = context.measureText( message ); var textWidth = metrics.width; context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","+ backgroundColor.b + "," + backgroundColor.a + ")"; context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","+ borderColor.b + "," + borderColor.a + ")"; context.lineWidth = borderThickness; roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6); context.fillStyle = "rgba(0, 0, 0, 1.0)"; context.fillText( message, borderThickness, fontsize + borderThickness); var texture = new THREE.Texture(canvas) texture.needsUpdate = true; var spriteMaterial = new THREE.SpriteMaterial({ map: texture} ); var sprite = new THREE.Sprite( spriteMaterial ); sprite.scale.set(100,50,1.0); return sprite; }

// function for drawing rounded rectangles
// function roundRect(ctx, x, y, w, h, r) {ctx.beginPath(); ctx.moveTo(x+r, y); ctx.lineTo(x+w-r, y); ctx.quadraticCurveTo(x+w, y, x+w, y+r); ctx.lineTo(x+w, y+h-r); ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h); ctx.lineTo(x+r, y+h); ctx.quadraticCurveTo(x, y+h, x, y+h-r); ctx.lineTo(x, y+r); ctx.quadraticCurveTo(x, y, x+r, y); ctx.closePath(); ctx.fill(); ctx.stroke(); }

	function trackCam(){
		//camera
		// document.getElementById('txtx').value = camera.position.x;
		// document.getElementById('txty').value = camera.position.y;
		// document.getElementById('txtz').value = camera.position.z;
		// document.getElementById('txtRx').value = camera.rotation.x;
		// document.getElementById('txtRy').value = camera.rotation.y;
		// document.getElementById('txtRz').value = camera.rotation.z;
		
		
		// camera.position.x = document.getElementById('txtx').value;
		// camera.position.y = document.getElementById('txty').value;
		// camera.position.z = document.getElementById('txtz').value;
		
		// console.log("camera.position.x=",camera.position.x,";");
		// console.log("camera.position.y=",camera.position.y,";");
		// console.log("camera.position.z=",camera.position.z,";");
		// console.log("camera.rotation.x=",camera.rotation.x,";");
		// console.log("camera.rotation.y=",camera.rotation.y,";");
		// console.log("camera.rotation.z=",camera.rotation.z,";");
		//camera

		renderer.render( scene, camera );
		
	}
	function initCam(){
			// document.getElementById('txtx').value = 6.826888528374662;
			// document.getElementById('txty').value = 4.683904919445453 ;
			// document.getElementById('txtz').value =7.769909726436357;

			// camera.rotation.set(0,0,0);
			// camera.position.set(0,0,0);
			// controls.reset();
			camera.position.x= 7.226525622389737;
			camera.position.y= 6.164650291010791;
			camera.position.z= 7.73261306595859;
			
			
			camera.rotation.x= -0.6730479785136418;
			camera.rotation.y= 0.6310664858727041;
			camera.rotation.z= 0.4480982252579138;
	
			// camera.position.set(7,6,7);

			// camera.position.set(10,0,0);
			// // camera.up = new THREE.Vector3(0,0,90);
			// camera.lookAt(new THREE.Vector3(0,0,1000));

	}
	function disableCamera(){
	//		document.getElementById("btnAdjust").className = "btn btn-info btn-sm";
	//	document.getElementById("btnCancelAdjust").className = "btn btn-info btn-sm disabled";
		cancelAnimationFrame(rafAnimate);

		// for (var x =0;x<6;x++){
		// 		for (var y = 0, xMatrix = 1, yMatrix = 1; y<(dimension*dimension);y++){
		// 				scene.remove(tiles[x][y]);
		// 				ff.dispose();
						

		// 		}
		// 	}


		// 	for (var x=0;x<dimension;x++){
		// 		for (var y = 0;y<(dimension*dimension);y++){
		// 			scene.remove(solidC[x][y]);
		// 			geometry.dispose();
		// 			material.dispose();
						
		// 		}
		// }


		

	}
	//animation() //enable camera
	// animation();
	function animation(){


		//document.getElementById("btnAdjust").className = "btn btn-info btn-sm disabled";
		//document.getElementById("btnCancelAdjust").className = "btn btn-info btn-sm ";

			// socket.on('playerPixels1', function (data){
			// 		console.log(data);

			// 		// for (var x=0;x<dimension;x++){
								
			// 		// 		for (var y = 0;y<(dimension*dimension);y++){
				
			// 				solidC[0][0].position.setFromMatrixPosition(data ); //ok
			// 				solidC[0][0].setRotationFromMatrix(data);
						
								
			// 		// 		}
			// 		// }
			// });
		rafAnimate=	requestAnimationFrame(animation);
		// camera.rotation.x +=2;


		// scene.rotation.y +=0.005;
		renderer.render(scene,camera);
		controls.update();


	}//trackball
	//////////////////////////////////////////////////////////////////////////////////////////////////
	
	var tempContX,tempContY,h;
	var setFinish=true;
	//var speed = 500-Number(slidSpeed);

	//var typeEasing = TWEEN.Easing.Circular.Out;
	var typeEasing = TWEEN.Easing.Linear.None;
	//speed = 800;
	function removeBlocksZ(colsDeg,cols){
			for (x = 0;x<h;x++){
					THREE.SceneUtils.detach(solidC[tempContX[x]][tempContY[x]],pivot,scene);
				}
		}

	function getBlocksZ(colsDeg,cols){
	 pivot = new THREE.Object3D();
		scene.add(pivot);
		tempContX = [];
		tempContY = [];
		h = 0;
		var maxVal = dimension-1;
					for (z=1;z<=colsDeg;z++,cols--){
						  for (x = 0;x<dimension;x++){
						
								for (y = 0;y<(dimension*dimension);y++){
								if (solidC[x][y].position.z>=(maxVal-((cols-1)*2))-1.5 && solidC[x][y].position.z<=(maxVal-((cols-1)*2))+1.5){
									THREE.SceneUtils.attach(solidC[x][y],scene,pivot);
											tempContX.push(x);
											tempContY.push(y);
												h++;
										}
								}
						}
			     	}

	}
	
	function face(rot,spec,widthSpec,turn,str){
		if (setFinish==true){
				render();
				getBlocksZ(	widthSpec,spec); //colsDeg,cols
				 new TWEEN.Tween(pivot.rotation)
                .to({ z: rot + (Math.PI/turn)}, speed)
                .easing( typeEasing)
                .delay(delayTime)
                .onComplete(function() {
					  renderer.render(scene,camera);
						
                  sendAlgDB(str,function(){
                  	setFinish = true;
                  });
                
				
			     cancelAnimationFrame(raf);
				 removeBlocksZ(widthSpec,spec);
                })
				.start();
			}
			setFinish=false;
			
	}
	
	function getBlocksY(colsDeg,cols){
		 pivot = new THREE.Object3D();
		scene.add(pivot);
		tempContX = [];
		tempContY = [];
		h = 0;
		var maxVal = dimension-1;
					for (z=1;z<=colsDeg;z++,cols--){
						  for (x = 0;x<dimension;x++){
						
								for (y = 0;y<(dimension*dimension);y++){
								if (solidC[x][y].position.x>=(maxVal-((cols-1)*2))-1.5 && solidC[x][y].position.x<=(maxVal-((cols-1)*2))+1.5){
									THREE.SceneUtils.attach(solidC[x][y],scene,pivot);
											tempContX.push(x);
											tempContY.push(y);
						//					console.log(h + " " +tempContX[h]+ " " +tempContY[h]);
											h++;
											
											
										}
										
								}
						}
			     	}
	}
	function removeBlocksY(colsDeg,cols){
	for (x = 0;x<h;x++){
				THREE.SceneUtils.detach(solidC[tempContX[x]][tempContY[x]],pivot,scene);
		}
	}
	function right(rot,spec,widthSpec,turn,str){
		
		if (setFinish==true){
			render();
				getBlocksY(widthSpec,spec);
				 new TWEEN.Tween(pivot.rotation)
                .to({ x: rot + Math.PI/turn}, speed)
                .easing( typeEasing)
                .delay(delayTime)
                .onComplete(function() {
					 // console.log('hehe');
              	   renderer.render(scene,camera);
					 sendAlgDB(str,function(){
					 	setFinish=true;
					 });
				 // setFinish=false;
				 // alert('haha');
				
				 cancelAnimationFrame(raf);
				 removeBlocksY(widthSpec,spec);
				 	
                })
				.start();
			}

			setFinish=false;

	}
	
	function getBlocksX(colsDeg,cols){
		 pivot = new THREE.Object3D();
		scene.add(pivot);
		tempContX = [];
		tempContY = [];
		h = 0;
		
		var maxVal = dimension-1;
					for (z=1;z<=colsDeg;z++,cols--){
						  for (x = 0;x<dimension;x++){
						
								for (y = 0;y<(dimension*dimension);y++){
									if (solidC[x][y].position.y>=(maxVal-((cols-1)*2))-1.5 && solidC[x][y].position.y<=(maxVal-((cols-1)*2))+1.5){
											THREE.SceneUtils.attach(solidC[x][y],scene,pivot);
											tempContX.push(x);
											tempContY.push(y);
											h++;
											
											
									}
									
							}
						}
			     	}

	}
	function removeBlocksX(colsDeg,cols){
	for (x = 0;x<h;x++){
						THREE.SceneUtils.detach(solidC[tempContX[x]][tempContY[x]],pivot,scene);
				}
	}


	function up(rot,spec,widthSpec,turn,str){
		if (setFinish==true){
				render();
				getBlocksX(widthSpec,spec); //colsDeg,cols
				 new TWEEN.Tween(pivot.rotation)
                .to({ y: rot + Math.PI/turn}, speed)
                .easing( typeEasing)
                .delay(delayTime)
                .onComplete(function() {
					
					  renderer.render(scene,camera);
					   sendAlgDB(str,function(){
					   	setFinish = true;
					   });
					
				cancelAnimationFrame(raf);
				 removeBlocksX(widthSpec,spec);
				  })
				.start();
			}
			
			
			setFinish=false;
			
		
	}
	
	function rotateX(rot, turn,str){
		if (setFinish==true){
				render();
				getBlocksAll();
				 new TWEEN.Tween(pivot.rotation)
                .to({x: rot + Math.PI/turn}, speed)
                .easing( typeEasing)
                .delay(delayTime)
                .onComplete(function() {
                  renderer.render(scene,camera);
					  sendAlgDB(str,function(){
					  	setFinish = true;
					  });
                 
				
			     cancelAnimationFrame(raf);
				  removeBlocksAll();
                })
				.start();
			}
			setFinish=false;
	}
	function rotateZ(rot, turn,str){
		if (setFinish==true){
				render();
				getBlocksAll();
				 new TWEEN.Tween(pivot.rotation)
                .to({z: rot + Math.PI/turn}, speed)
                .easing( typeEasing)
                .delay(delayTime)
                .onComplete(function() {
                  renderer.render(scene,camera);
					   sendAlgDB(str,function(){
					   	setFinish = true;
					   });
                 
				
			     cancelAnimationFrame(raf);
				  removeBlocksAll();
                })
				.start();
			}
			setFinish=false;
	}
	function rotateY(rot, turn,str){
		if (setFinish==true){
				render();
				getBlocksAll();
				 new TWEEN.Tween(pivot.rotation)
                .to({y: rot + Math.PI/turn}, speed)
                .easing( typeEasing)
                .delay(delayTime)
                .onComplete(function() {
                  renderer.render(scene,camera);
					 sendAlgDB(str,function(){
					 	setFinish = true;
					 });
                 
				
			     cancelAnimationFrame(raf);
				  removeBlocksAll();
                })
				.start();
			}
			setFinish=false;
	}
	function getBlocksAll(){
		 pivot = new THREE.Object3D();
		scene.add(pivot);
		
		  for (x = 0;x<dimension;x++){
			
			for (y = 0;y<dimension*dimension;y++){
					THREE.SceneUtils.attach(solidC[x][y],scene,pivot);
				
				
			}
			
		}

	}
	function removeBlocksAll(){
		for (x = 0;x<dimension;x++){
			
			for (y = 0;y<dimension*dimension;y++){
				//pivot.updateMatrixWorld();
				
					THREE.SceneUtils.detach(solidC[x][y],pivot,scene);
				
				
			}
			
		}
	}
	function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}
		var arrayAlg =[];
		for (x=0;x<dimension;x++){
			arrayAlg.push([]);
			
			for (y = 0;y<(dimension*dimension);y++){
			
					arrayAlg[x][y] = '0';

			  }
		}

	function render() {
		raf = requestAnimationFrame( render );
		TWEEN.update();

		// console.log("render");
			for (var x=0;x<dimension;x++){
			
				for (var y = 0;y<(dimension*dimension);y++){
						arrayAlg[x][y] = solidC[x][y].matrixWorld;

				}	
			}

		//if (playerControl == true){
			// if (scrambler == 1){
			
			// 	socket.emit('updatePixels1',arrayAlg);	
			// 	socket.emit('updatePixels',arrayAlg);
			// 	console.log('testing');
			// }else{
				socket.emit('updatePixels',arrayAlg);
			// }
			//console.log('exec');
		//}
		renderer.render( scene, camera );
		// }
		
		
		
	}
	function sendAlgDB(alg,callback){

		// console.log(alg);
		socket.emit('sendAlgP1',alg,function(){
			callback();
		});
	}

	// animation();
		initCam();
