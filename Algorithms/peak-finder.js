const array = [1, 3, 50, 500, 5, 3, 1]
function peakElement(arr){
    let n = arr.length;
    let left = 0;
    let right = n-1;
    while(left<right){
        let mid = Math.floor(left+(right-left)/2)
        if(arr[mid]<arr[mid+1]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    console.log(`Peak found at index:${left}`)
}
peakElement(array);
  