const form=document.querySelector('form')

form.addEventListener('submit',(e) =>{
    e.preventDefault();   //dont send values to server

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')

    if(height<=0 || weight<=0||isNaN(height) || isNaN(weight)){
        result.textContent=`Please enter valid height :${height} and weight :${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `<span style="color: white; font-size: 30px;">${bmi}</span>`;
        result.innerHTML += `<p>${bmi < 18.6 ? "underweight" : bmi < 24.9 ? "normal" : bmi < 29.9 ? "overweight" : "obese"}</p>`;
    
    }
})