

getValues(ourNum = 6 + 2).then((ourNum) => {

    return (slowMath.multiply(ourNum, 2));
}).then((ourNum) => {

    return(slowMath.divide(ourNum, 4))

}).then((ourNum) => {

    return(slowMath.subtract(ourNum, 3))
}).then((ourNum) => {

    return(slowMath.add(ourNum, 98))
}).then((ourNum) => {

    return(slowMath.remainder(ourNum, 2))
}).then((ourNum) => {

    return(slowMath.multiply(ourNum, 50))
}).then((ourNum) => {

    return(slowMath.remainder(ourNum, 40))
}).then((ourNum) => {

    return(slowMath.add(ourNum, 32))
}).then((ourNum) => {

    return(`The final result is ${ourNum}.`)
}).catch((err) => {
    console.log("Error")
});