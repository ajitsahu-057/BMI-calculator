const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault() //! dont do submit
    const height = parseInt(document.querySelector('#height').value) //! parseInt convert to integer
    const weight = parseInt(document.querySelector('#weight').value)
    const results =document.querySelector('#results');
    console.log(results);

    if( height === "" || height <= 0 || isNaN(height)){
        results.innerHTML =    `please give the valid height.`;
    }else if(weight === "" || weight <= 0 || isNaN(weight)){
        results.innerHTML = `please give the valid weight.`;
    }else{
       const BMI = (weight / ((height / 100) ** 2)).toFixed(2);
       //! show in the result
       results.innerHTML = `<span> ${BMI}</span>`;
    }
});
