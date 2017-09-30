// Given an unsorted array of integers, find pair with given sum in it.
const inputs = [8, 7, 2, 5, 3, 1];
const sum = 10;

// Naive approach: consider every pair in given array and return if desired sum is found

// function findPair(arr, sum) {
// 	let n = arr.length
// 	for (let i = 0; i < n; i++) {
// 		for (let j = i + 1; j < n; j++) {
// 			if (arr[i] + arr[j] == sum) {
// 				console.log("Pair found at index " + i + " and " + j);
// 				return true;
// 			}
// 		}
// 	}
// 	console.log("Pair not found");
// 	return false;
// }



// O(nlogn) solution using sorting: sort the given array in ascending order and maintain search
// space by maintaining two indexes (low and high) that iniially points to two endpoints of the 
// array. Then we loop until low os less than high index and reduce search space `arr[low..high]`
// ar each iteration of the loop. We compare sum of elements present at index low and high with
// desired sum and increment low if sum is less than the desired sum else we decrement high if sum
// is more than the desired sum. Return if pair is found in the array.

// function findPair(arr, sum) {
// 	let list = arr.sort(function(a, b) { return a - b });
// 	let low = 0;
// 	let high = arr.length - 1;

// 	while (low < high) {
// 		if (list[low] + list[high] == sum) {
// 			console.log("Pair found");
// 			return true
// 		}

// 		if (list[low] + list[high] < sum) {
// 			low++;
// 		} else {
// 			high++;
// 		}
// 	}

// 	console.log("Pait not found");
// 	return false
// }



// O(n) solution using hashing: Insert each element of the array `arr[i]`in a map. check if
// difference `arr[i], sum-arr[i]` already exists in the map or not. If the difference is seen
// before, print the pair.
function findPair(arr, sum) {
	let map = {};
	let n = arr.length;
	
	for (let i =0; i < n; i++) {
		console.log(map)
		const key = sum - arr[i];
		if (Object.keys(map).filter(function(_key) { return _key == key}).length > 0) {
			console.log("Pair found at index " + map[key] + " and " + i);
			return true
		}
		map[arr[i]] = i;
	}
	console.log("Pair not found");
	return false
}


findPair(inputs, sum)
