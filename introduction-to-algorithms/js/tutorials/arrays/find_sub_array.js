// Find the smallest window in array sorting which will make the entire array sorted

// Given array of integers, find the smallest window in array sorting which will make tge array sorted in increasing order

// Algorithm:
// 1. Traverse array from left to right keeping track of maximum so far and note the last encountered index j whcih is less than the mazimum so far.

// 2. Traverse array from right to left keeping track of minimum so far and note the last encountered index i which is more than the maximum so far.

// 3. Sort the array from index i to j.

function sizeof(object){
  let objects = [object];
  let size    = 0;

  for (let index = 0; index < objects.length; index ++){
    switch (typeof objects[index]){
      case 'boolean': size += 4; break;
      case 'number': size += 8; break;
      case 'string': size += 2 * objects[index].length; break;
      case 'object':
        if (Object.prototype.toString.call(objects[index]) != '[object Array]'){
          for (let key in objects[index]) size += 2 * key.length;
        }
        for (let key in objects[index]){
          let processed = false;
          for (let search = 0; search < objects.length; search ++){
            if (objects[search] === objects[index][key]){
              processed = true;
              break;
            }
          }
          if (!processed) objects.push(objects[index][key]);
        }
    }
  }

  return size;
}


function findSubArray(arr, n) {
	let leftIndex= -1;
	let rightIndex = -1;
	
	// traverse from left to right and keep track of maximum so far
	let maxSoFar = Number.MIN_VALUE;
	for (let i = 0; i < n; i++) {
		if (maxSoFar < arr[i]) {
			maxSoFar = arr[i];
		}
		// find the last position that is less than the maximum
		if (arr[i] < maxSoFar) {
			rightIndex = i;
		}
	}

	// traverse from right to left and keep track of minimum so far
	let minSoFar = Number.MAX_VALUE;
	for (let i = n-1; i >= 0; i-- ) {
		if (minSoFar > arr[i]) {
			minSoFar = arr[i];
		}
		// find the last position that is more then the minimum
		if (arr[i] > minSoFar) {
			leftIndex = i;
		}
	}

	console.log("Sort array from index " + leftIndex + " to " + rightIndex);
}

function main() {
	let input = [1, 2, 3, 7, 5, 6, 4, 8];
	let n = sizeof(input)/sizeof(input[0]);

	findSubArray(input, n);
	return false;
}

main();
