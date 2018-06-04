var theDiv = document.getElementById("rootDiv");
var heading1 = document.getElementById("head1");
var functionSwitch = true;

theDiv.style.backgroundColor = "blue";
heading1.style.color = "white";

function changeStuff() {
    if (functionSwitch) {
        theDiv.style.backgroundColor = "green";
        heading1.style.textAlign = "center";
        heading1.style.fontFamily = "Impact";
        var image1 = document.createElement("img");
        image1.src = "Vida Tequila Bottles 1.jpg";
        image1.style.width = "100px";
        image1.style.height = "100px";
        image1.style.textAlign = "center";
        theDiv.appendChild(image1);
        functionSwitch = false;
    }
    
}

if (2 > 3) {
    // nothing
}
if (9 > 4) {
    console.log("success A");
}
if (true) {
    console.log("success B");
}

if ("cat" === "cat") {
    console.log("success C");
}
var rocket = "buddy";
if (rocket === "dog") {
    // nothing
} else {
    console.log("success D");
}

if (rocket === "dog") {
    // nothing
} else if (rocket === "buddy") {
    console.log("success E");
} else {
    // nothing might happen
}

