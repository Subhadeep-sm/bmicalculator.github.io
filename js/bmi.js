

function weightunit(){
    if (document.getElementById('weight-unit').value == "Pounds"){
        let x = parseFloat(document.getElementById('weight').value);
        document.getElementById('weight').value= 0.45359237 * x;

    }
    else{
        let x = parseFloat(document.getElementById('weight').value);
    }
}

function heightunit(){
    if (document.getElementById('height-unit').value == "Centimeters"){
        let x = parseFloat(document.getElementById('height').value);
        document.getElementById('height').value= 0.01 * x ;
    }
    if (document.getElementById('height-unit').value == "Feet"){
        let x = parseFloat(document.getElementById('height').value);
        document.getElementById('height').value= 0.3048 * x ;
    }
    if (document.getElementById('height-unit').value == "Inches"){
        let x = parseFloat(document.getElementById('height').value);
        document.getElementById('height').value= 0.0254 * x ;
    }

    else{
        let x = parseFloat(document.getElementById('height').value);
        document.getElementById('height').value= x ;
    }
}



function bmi(){
    let weight= parseFloat(document.getElementById('weight').value);
    let height= parseFloat(document.getElementById('height').value);
    let bmi= weight/ height**2 ;
    document.getElementById('result').style.visibility = "visible";
    document.getElementById('weight').value=null;
    document.getElementById('height').value=null;

    if (bmi.toFixed(1) < 18.5){
        document.getElementById('result').innerHTML= "BMI : " + bmi.toFixed(1) + " (Underweight)";
    }
    if (bmi.toFixed(1) >= 18.5 && bmi.toFixed(1) <= 25){
        document.getElementById('result').innerHTML= "BMI : " + bmi.toFixed(1) + " (Normal)";
    }
    if (bmi.toFixed(1) > 25){
        document.getElementById('result').innerHTML= "BMI : " + bmi.toFixed(1) + " (Overweight)";
    }
    else{
        document.getElementById('result').innerHTML= "-No Input-" ;
    }
}

function allclear(){
    document.getElementById('weight').value=null;
    document.getElementById('height').value=null;
    document.getElementById('result').innerHTML= null;
    document.getElementById('result').style.visibility = "hidden";
}