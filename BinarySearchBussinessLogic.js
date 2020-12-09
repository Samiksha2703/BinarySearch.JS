class BinarySearch {
    
    binarySearch(item, value){
    let flag = 0;
    let startIndex  = 0;
    let stopIndex   = item.length - 1;
    let middle = Math.floor((stopIndex - startIndex)/2);

    while(startIndex <= stopIndex){
        
        //searching for element
        if (item.indexOf(value) < middle){
            stopIndex = middle - 1;
        } else if (item.indexOf(value) > middle){
            startIndex = middle + 1;
        }
        else if (item.indexOf(value) == middle) {  
            console.log("\nYour Search is found at "+middle);
            break;
        }

        middle = Math.floor((stopIndex + startIndex)/2);
    }
 
    if (flag !== 0)
    console.log("\nEnter correct input");
}
}
module.exports = BinarySearch;