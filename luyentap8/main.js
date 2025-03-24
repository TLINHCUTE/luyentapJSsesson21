let sum = 0;
const number = prompt('nhap so co 3 chu so: ');

let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}

if (sum == number) {
    console.log(`${number} la so Armstrong`);
}
else {
    console.log(`${number} ko phai so Armstrong.`);
}