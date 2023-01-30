rotateLeft = (arr, point) => {
  let len = arr.length;
  let temp = [];
  let left = point;
  let right = point;

  for (let i = len - 1; i >= right; i--) {
    temp.unshift(arr[i]);
  }

  for (let i = 0; i < left; i++) {
    temp.push(arr[i]);
  }

  console.log(temp);
};

rotateLeft([1, 2, 3, 4, 5, 6, 7, 8, 9], 7);
