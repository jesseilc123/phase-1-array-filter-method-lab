// Code your solution here
function findMatching(array, string){
    const win = array.filter(function(name){
        return name.toLowerCase() === string.toLowerCase()
    })
    return win
}
function fuzzyMatch(array, string){
    const sin = array.filter(function(name){
        return name.toLowerCase().substring(0, string.length) === string.toLowerCase()
    })
    return sin
}

function matchName(array, string){
    const min = array.filter(function(name){
        return name.name === string
    })
    return min
}
