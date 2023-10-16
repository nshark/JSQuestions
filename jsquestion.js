const { randomInt } = require("firebase-tools/lib/utils");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
  }
var c = getRandomInt(0, 2147483648);
console.log("Q1: " + c);
if ((c % 7 == 0) && (c % 9 == 0)){
    console.log("Q1: Y");
}
else{
    console.log("Q1: N");
}
var toConvert = 87
var conversion = {E: 65, D: 66, Dplus: 69, Cminus: 72, C: 76, Cplus: 79, Bminus: 82, B: 86, Bplus:89, Aminus:92, A:96, Aplus:100}
for (const [key, value] of Object.entries(conversion)){
    if(toConvert<=value){
        console.log("Q2: " + key);
        break;
    }
}
function rocheLimit(primaryRadius, primaryDensity, satelliteDensity) {
    return (primaryRadius * (2 * primaryDensity/satelliteDensity)^(1/3)) - primaryRadius
}
// The Roche limit of the Moon relative to the Earth, in km from surface
console.log("Q3: " + rocheLimit(6378.1, 5513, 3346))

const rocheLimitArrow = (p3, p2, p1) => {
    return rocheLimit(p1,p2,p3);
};
console.log("Q4: " + rocheLimitArrow(getRandomInt(0, 10000), getRandomInt(0, 10000), getRandomInt(0, 10000)))
var c = ["1234asdf","32sadf", "asdfmkl", "vmdfjv", "zxcvczxkl", "iozxcv"];
console.log("Q5: len: " + c.length + " first:" + c[0] + " last:" + c[c.length-1] + " random: " + c[randomInt(0, c.length-1)]);
c = c.sort();
c.push("suffering");
c.push(243);
k = [];
for (let m = 0; m < 10; m++){
    k.push(randomInt(29, 87));   
}
min = 214
max = 0
k.forEach(element => {
    console.log("Q6:" + element);
    if(element > max){
        max = element;
    }
    if(element < min){
        min = element;
    }
});
console.log("Q6: " + (max-min));
k = k.map(element =>
    Math.round(Math.sqrt(element)));
console.log("Q7:" + k);
kmax = 0;
k.forEach(element => {if(element>kmax){kmax=element}})
k = k.filter((element) => element >= kmax/2);
console.log("Q8:" + k);
console.log("Q9: " + k.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
k.forEach((element, index) => {
    console.log("Q10: k[" + index + "] = " + element);
})