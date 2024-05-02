
// QUESTION 1a
let dis1a = document.getElementById('dis1a');
let input1 = document.getElementById('q1a_input');
let output1 = document.getElementById('q1a_output');

function group_1_choice_1(){
    let input_value = input1.value;
    if(!isNaN(input_value)){ 
        input_value = parseFloat(input_value);
       if(input_value==0 || (input_value>= 13 && input_value<=17)){
        output1.value = "Number is in range";
       }
       else{
        output1.value = "Number is not in range";
       }
       
    }
    else{
       
       output1.value = "Please enter a numeric value";
    }


}

dis1a.addEventListener('click',group_1_choice_1);


//QUESTION 1b

let dis1b = document.getElementById('dis1b');
let input1b = document.getElementById('q1b_input');
let output1b = document.getElementById('q1b_output');

function group_1_choice_3(){
    let input_value = input1b.value;
    if(!isNaN(input_value)){
        let side = parseFloat(input_value);
        if(input_value>=0.0){
            output1b.value = "Perimeter: "+4*side;
            output1b.value += " units and Area: "+ side**2+" square units";
        }
        else{
            output1b.value = "Entered side is not positive!"
        }
    }
    else{
        output1b.value = "Can't Calculate!";
    }
}

dis1b.addEventListener('click',group_1_choice_3);


//QUESTION 2a

let dis2a = document.getElementById('dis2a');
let input2 = document.getElementById('q2a_input');
let output2 = document.getElementById('q2a_output');

function group_2_choice_1(){
    let input_value = input2.value;
    if(isNaN(input_value)){
    input_value = input_value.toLowerCase();
    if(input_value==="a" || input_value==="e" || input_value==="i" || input_value==="o" || input_value==="u"){
        output2.value = "A VOWEL"; 
    }
    else if(input_value==="y"){
        output2.value = "Sometimes";
    }
    else{
        output2.value  = "Not a vowel";
    }
}
else{
    output2.value = "Enter an alphabet only!"
}
}

dis2a.addEventListener('click',group_2_choice_1);


//QUESTION 2b 

let dis2b = document.getElementById('dis2b');
let input2b = document.getElementById('q2b_input');
let output2b = document.getElementById('q2b_output');

function group_2_choice_3(){
    let input_value = input2b.value;
    if(!isNaN(input_value)){
        input_value = parseInt(input_value);
        if(input_value>=0){
            let x =0 ;
            let sum = 1;
            for(let i = 1; i<input_value;i++){
                sum += sum*i;
            }
            output2b.value = "Factorial is: " + sum;
            }
            else{
                output2b.value = "Cannot compute factorial value";
            }
        }
        else{
            output2b.value = "Please enter a numeric value";
        }
    }

    dis2b.addEventListener('click',group_2_choice_3);


    //QUESTION 3

    let dis3 = document.getElementById('dis3');
let input3 = document.getElementById('q3_input');
let output3 = document.getElementById('q3_output');

function group_3_choice_1(){
    let input_value = input3.value;
    if(!isNaN(input_value)){
        if(input_value.length>=10 && input_value.length<=20){
            let sum = 0;
            for(let i= 0; i<input_value.length;i++){
                sum += parseInt(input_value.charAt(i)) * Math.pow(2,i);
            }
            output3.value=  "The integer value: "+sum;
    }
    else{
        output3.value = "Please enter the binary number in range[10,20] - charLength "
    }

      }
      else{
        output3.value = "Please enter a number only";
      }
    }

    dis3.addEventListener('click',group_3_choice_1);

