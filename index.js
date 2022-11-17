console.log("I am coming")
console.log(1);
function showTwo(){
    console.log(2);
};
setTimeout(showTwo, 3000);
console.log(3);

let sentToAirport = true;

let p = new Promise(function(resolve, reject){
    if(sentToAirport){
        resolve("from resolve():send to airport");

    } else {
        reject("from reject():order cancelled");
    }

});

p.
then(function(message){
    console.log(`${message}:promise resolved`)
}).
catch(function(message){
    console.log(`${message}:promise resolved`)

});

let f = fetch("https://jsonplaceholder.typicode.com/users");
f
.then(function(userData){
    console.log(userData);
    return userData.json();
})
.then(function(jsonData){
    console.log(jsonData);

})
