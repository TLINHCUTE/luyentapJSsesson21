let number = Number(prompt("nhap mot so: "));
let uoc = 0;
for(let i = 1; i <= number; i++){
    if (number % i===0){
        uoc++;
        console.log(uoc);
    } 
}
