function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var c = getRandomInt(2147483648);
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
console.log("Q4: " + rocheLimitArrow(getRandomInt(10000), getRandomInt(10000), getRandomInt(10000)))