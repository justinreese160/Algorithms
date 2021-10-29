// Write code to merge two sorted arrays into a new sorted array
arrayA = ["Adam", "Tom", "Marie", "Justin"]
arrayB = ["John", "Randy", "Beth", "Collin" ]

var mergeSorted = function (arr1, arr2) {
    let merged = arr1.concat(arr2)
    let sorted = merged.sort()
    console.log(sorted)
};

mergeSorted(arrayA, arrayB)