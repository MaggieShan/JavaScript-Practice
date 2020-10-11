// Javascript challenges and practice quesitons

//Recursive function that returns the length of a string 
function reclength(str) {
    if (str.length == 0) {
        return 0;
    }
    else {
        return reclength(str.substring(1)) + 1; 
    }
}

// Function that returns string based on object properties, eg. city facts
function cityFacts(city) {
    return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}

// Farm problem: chicken(2 legs), cows(4 legs), pigs(4 legs)
// function that returns total number of legs on farm 
function animals(ch, cw, p) {
    return (ch * 2) + (cw * 4) + (p * 4); 
}

// Function that reverses an array without the reverse() method
function reverse(arr) {
    let len = arr.length();
    for(i = 0, j = len - 1; i < len / 2; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    } 
    return arr;
}

// Concatenating integer arrays 
function concatenate(arr1, arr2) {
    let newArr;
    const len1 = arr1.length();
    const len2 = arr2.length(); 
    for (i = len1 - 1, j = len2 - 1; i == 0 || j == 0;) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr2.pop());
            j--;
        }
        else {
            newArr.push(arr1.pop());
            i--; 
        }
    } 
}

// Adds all numbers starting from 1 given a single number
function addUp(num) {
    let sum = 0;
    for (i = 0; i <= num; i++) {
        sum += i; 
    }
    return sum;
}
