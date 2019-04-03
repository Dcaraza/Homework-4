
    // document.ready is used to make sure that all the functions load into the document before running any code.
$( document ).ready(function(){
    // Math.random will create a random number between 0 and .9999. This will be multiplied by 101.
    // math floow will get round the number down to an even number. Then the system will add 19 to the calculation.
    // ===================================================================================
    // These are the variables
    // ===================================================================================
    var Random=Math.floor(Math.random()*101)+19
    
    //This call sets the random number id to the random number generated in the code above.
    // The .text function pushes a string into the the randomNumber ID. If the parenthesis were empty, this code would retun 
    // data and not set data.
    $('#randomNumber').text(Random);
    
    // This area is setting the jewels to different values.
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*16+1)
    var num3= Math.floor(Math.random()*21+1)
    var num4= Math.floor(Math.random()*26+1)
    
    // variable containers
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
    // This call sets the number of wins and losses on the screen.
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
  

// ===================================================================================
// These are the functions
// ===================================================================================
//This code resets the game but it may be repetitive.
  function reset(){
        Random=Math.floor(Math.random()*101)+19;
        $('#randomNumber').text(Random);
            num1= Math.floor(Math.random()*11+1);
            num2= Math.floor(Math.random()*16+1);
            num3= Math.floor(Math.random()*21+1);
            num4= Math.floor(Math.random()*26+1);
          userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 


  //This is to count up the wins and display them.
  function winner(){
    alert("Winner!");
        wins=wins+1; 
    $('#numberWins').text(wins);
        reset();
  }
  //This is to count up the losses and display them.
  function loser(){
    alert ("Loser!");
        losses=losses+1;
    $('#numberLosses').text(losses);
        reset()
  }

    //When the image that has the one is clicked, the function runs. The user total then becomes the user total plus
    // what was saved in the variable for the random number generator.
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
     $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  

    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
     $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  

    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
     $('#finalTotal').text(userTotal);
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  

    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      $('#finalTotal').text(userTotal); 
         if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 