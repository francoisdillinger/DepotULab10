document.addEventListener('DOMContentLoaded', function(){
    console.log('Im ready');
    
      
// I put all of my buttons in a var, makes it easier for me to work with.
 
      var buttonOne = document.getElementById('button1');
      var buttonTwo = document.getElementById('button2');
      var buttonThree = document.getElementById('button3');
      var buttonFour = document.getElementById('button4');
      
/* This is the function for the 'add' button. As you will see on all following functions I added the class upon 'click' to change 
   the color of the button while the function is running, to let the user know it is being processed. It's extra code to add the remove 
   class to the If AND Else statement for after the function has run. I did this for personal preference. I like the look better when the
   highlight disappears right before the alert box shows, rather than waiting for it to return to normal until AFTER the alert window
   is closed. It just looks better to me. */   
   
            buttonOne.onclick = function() {
                var num1 = document.getElementById('op1').value;
                var num2 = document.getElementById('op2').value;
                document.getElementById("button1").classList.add("button");
            davidsLib.add(num1, num2, function callback(err, result)
            {
                if (err){
                    document.getElementById("button1").classList.remove("button");
                    alert("I don't know addition!");
                } 
                else {
                    document.getElementById("button1").classList.remove("button");
                    alert(result);
                }
            });
                
            }   

// The function for the 'subtract' button.
           
            buttonTwo.onclick = function() {
                var num1 = document.getElementById('op1').value;
                var num2 = document.getElementById('op2').value;
                document.getElementById("button2").classList.add("button"); 
            davidsLib.subtract(num1, num2, function callback(err, result)
            {   
               
                if (err){
                    document.getElementById("button2").classList.remove("button");
                    alert("I dont know subtraction!");
                } 
                else {
                    document.getElementById("button2").classList.remove("button");
                    alert(result);
                }
                
            });
                
            }   

// The function for the 'divide' button.
            
            buttonThree.onclick = function() {
                var num1 = document.getElementById('op1').value;
                var num2 = document.getElementById('op2').value;
                document.getElementById("button3").classList.add("button");
            davidsLib.divide(num1, num2, function callback(err, result)
            {
                if (err){
                    document.getElementById("button3").classList.remove("button");
                    alert("I'm not too good at Dividing");
                } 
                else {
                    document.getElementById("button3").classList.remove("button");
                    alert(result);
                }
            });
                
            }   
            
// The function for the 'multiply' button.
            
            buttonFour.onclick = function() {
                var num1 = document.getElementById('op1').value;
                var num2 = document.getElementById('op2').value;
                document.getElementById("button4").classList.add("button");
            davidsLib.multiply(num1, num2, function callback(err, result)
            {
                if (err){
                    document.getElementById("button4").classList.remove("button");
                    alert("How do you multiply?");
                } 
                else {
                    document.getElementById("button4").classList.remove("button");
                    alert(result);
                }
            });
                
            }   
});