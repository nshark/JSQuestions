function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
  }
// is excuted
console.log("Q1: First Console.log");
// is put on a new thread that will resolve and print to console in 1000 ms
var pr = new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
        console.log("Q1: Within Promise")
      }),
    );
  });
//once the promise is put on the new thread, but not nessecarily before it resolves, print the following
console.log("Q1: Console.log outside and after promise in code")
var pr1 = new Promise((resolve) => {
    setTimeout(() => {resolve("not foobar")}, 10000);
})
pr1.then((ret) => {console.log("Q2:"+ret)}, (ret) => {console.log("Q2:"+ret)});

var pr2 = new Promise((resolve, reject) => {if(Math.random() > 0.5){resolve(5)} else {reject("Randomly failed")}});
pr2.then((ret) => {console.log("Q3:"+ret)}, (ret) => {console.log("Q3:"+ret)})

var pr3 = new Promise((resolve, reject) => {if(Math.random() > 0.5){resolve(5)} else {reject("Randomly failed")}})
pr3.then((ret) => {
    console.log("Q4:"+ret);
    return ret
}).then((ret) => {
    console.log("Q4:"+(ret+3));
}).catch((ret) => {console.log("Q4:" + ret)})
//I'm curious - can you figure out what this computes?
var pr4 = new Promise((resolve, reject) => {
    resolve(50*0.00712*Math.pow(299792458,2));
})
pr4.then((ret) => {
    console.log("Q5:" + ret);
    console.log("Q5:" + ret/(4.184*Math.pow(10,15))); 
})
async function fik(){
    console.log("Q6: I hate all movies")
}
fik();
//Yes
async function fik2(){
    return new Promise((resolve) => (console.log("Q7: I hate all movies")))
}
fik2();
async function fik3(){
    return "I am asyncronous";
}
var c = fik3();
c.then((ret) => {console.log("Q8:" + ret)}, (ret) => {console.log("Q8:" + ret)});
var f = async () =>{
    return new Promise((resolve) => (console.log("Q9: I hate all movies")))
}
var genObjs = []
for(var i = 0; i < 9; i++){
    genObjs.push({
         num: getRandomInt(1,77),
         str: i+""});
}
async function fik4(gen){
    gen.forEach(element => {
        if(element.num > 70){
            console.log("Q10:"+element.str);
        }
    });
}
var m = fik4(genObjs);
m.then((ret)=> (console.log("Q10: successful")), (ret) => (console.log("Q10: unsuccessful")))