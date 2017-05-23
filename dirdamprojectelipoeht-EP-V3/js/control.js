
//var 

var isPLayed = false ;
var isInterval
var context= document.getElementsByTagName('canvas')[0];
//click generate new draw
context.addEventListener("click", function(){
  drawTriangle()
    });

//play 

  document.getElementById("play").addEventListener("click", function(){
  	document.getElementById("player").play();
  	isPLayed = true;
  	 	if (isPLayed  == true) {
  		isInterval = setInterval(function(){ 
        drawTriangle()

       }, 1000); 
  		console.log("je dessine")
  	}
  	else
  	{
  		console.error("ca marche pas")
  	}


  });

//pause

    document.getElementById("pause").addEventListener("click", function(){
    	document.getElementById("player").pause();
    	isPLayed = false;
    	if (!isPLayed == true) {

        //clear canvas
  		var context= document.getElementsByTagName('canvas')[0].getContext("2d");
		  context.clearRect(0, 0, context.canvas.width, context.canvas.height); 
      //clear interval 
      clearInterval(isInterval);
      return isPLayed = false

		  console.log('propre')
  	}

    });

    addEventListener("click", function(){
   

    });

//play 1

  document.getElementById("play1").addEventListener("click", function(){
    document.getElementById("player1").play();
    isPLayed = true;
      if (isPLayed  == true) {
      isInterval = setInterval(function(){ 
        drawTriangle()

       }, 1000); 
      console.log("je dessine")
    }
    else
    {
      console.error("ca marche pas")
    }


  });

//pause 1

    document.getElementById("pause1").addEventListener("click", function(){
      document.getElementById("player1").pause();
      isPLayed = false;
      if (!isPLayed == true) {

        //clear canvas
      var context= document.getElementsByTagName('canvas')[0].getContext("2d");
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); 
      //clear interval 
      clearInterval(isInterval);
      return isPLayed = false

      console.log('propre')
    }

    });

    addEventListener("click", function(){
   

    });
//play 2

  document.getElementById("play2").addEventListener("click", function(){
    document.getElementById("player2").play();
    isPLayed = true;
      if (isPLayed  == true) {
      isInterval = setInterval(function(){ 
        drawTriangle()

       }, 1000); 
      console.log("je dessine")
    }
    else
    {
      console.error("ca marche pas")
    }


  });

//pause 2

    document.getElementById("pause2").addEventListener("click", function(){
      document.getElementById("player2").pause();
      isPLayed = false;
      if (!isPLayed == true) {

        //clear canvas
      var context= document.getElementsByTagName('canvas')[0].getContext("2d");
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); 
      //clear interval 
      clearInterval(isInterval);
      return isPLayed = false

      console.log('propre')
    }

    });

    addEventListener("click", function(){
   

    });

