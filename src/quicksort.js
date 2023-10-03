function partition (numbers, low, high) {
    let middle = Math.floor((low + high) / 2);
    let p = numbers[middle]; //pivot point
    let m = low;
    let n = high;
    let c = middle;

    while (m < n) {
        while (numbers[m] < p) {
            m++;
        };

        while (p < numbers[n]) {
            n--;
        };

        if (m < n) {
            let temp = numbers[n]; //swap
            numbers[n] = numbers[m];
            numbers[m] = temp;

            if (n == c) {
                c = m;
            } else if (m == c) {
                c = n;
            };
            m++;
            n--;
        }
    }

    return c;
};

function quickSort (numbers, low, high) {
    if (low >= high) {
        return;
    }

    let pivotIndex = partition (numbers, low, high);

    quickSort (numbers, low, pivotIndex);
    quickSort (numbers, pivotIndex + 1, high);

};

function parseInput (input) {
    let numbers = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] != ' ') {
            let numberI = "";
            while (input[i] != ' ' && i < input.length) {
                numberI += input[i];
                i++;
            };
            numbers.push(numberI);
        };
    };
    return numbers;
};

function removeDuplicates(array) { //[2,3,4,5,6,6,7]
    let dedupedEllemets = [];    
    
    for (let i = 0; i < array.length; i++) {
        if (dedupedEllemets.includes(array[i]) == false) {
            dedupedEllemets.push(array[i]);
        };
    };
    return dedupedEllemets;
};

document.getElementById("generate").addEventListener('click', () => {
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
});