document.getElementById("iterations").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        try {
            let numbers = parseInput(document.getElementById("iterations").value);
            var result = numbers.map(function (x) { 
                return parseInt(x, 10); 
            });
            let dedup = removeDuplicates(result);
            quickSort(dedup, 0, (dedup.length-1));
            let output = dedup.toString();
            document.getElementById("output").innerHTML = output;
        } catch (error) {
            document.getElementById("output").innerHTML = "Error: " + error;
        };
    };
})