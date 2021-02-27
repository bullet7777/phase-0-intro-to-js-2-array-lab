// Write your solution here!
var cats=['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    var newCatArray=[...cats,name]
    return newCatArray
}
function prependCat(name){
    var newCatArray=[name,...cats]
    return newCatArray
}
function removeLastCat(){
     var newCatArray=cats.slice(0,cats.length-1)
     return newCatArray
}
function removeFirstCat(){
    var newCatArray=cats.slice(1,cats.length)
    return newCatArray
}