function calc(option){
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let output;

    if (option == "Add"){
        output = `Sum of the number is ${Number(a) + Number(b)}`
    }else if(option == "Sub"){
        output = `Difference of the number is ${Number(a) - Number(b)}`
    }else if(option == "Mul"){
        output = `Difference of the number is ${Number(a) * Number(b)}`
    }else{
        output = `Difference of the number is ${Number(a) / Number(b)}`
    }
    document.getElementsByClassName("output")[0].innerText = output
}


// function add(){
   
//     let output = Number(a) + Number(b)
//     document.getElementsByClassName("output")[0].innerText = `Sum of the number is ${output}`       
// }

// function sub(){
//     let a = document.getElementById("first").value
//     let b = document.getElementById("second").value
//     let output = Number(a) -  Number(b)
//     document.getElementsByClassName("output")[0].innerText = `Difference of the number is ${output}`       
// }