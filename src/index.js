document.getElementById("iterations").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        try {
            let numbers = parseInput(document.getElementById("iterations").value);
            var result = numbers.map(function (x) { 
                if (isNaN(parseInt(x, 10))) {
                    console.log("Nan");
                    throw new Error("Hey, please enter a number ;)");
                };
                return parseInt(x, 10); 
            });
            let dedup = removeDuplicates(result);
            quickSort(dedup, 0, (dedup.length-1));
            let output = dedup.toString();
            document.getElementById("output").innerHTML = output;
        } catch (error) {
            document.getElementById("output").innerHTML = error;
        };
    };
})