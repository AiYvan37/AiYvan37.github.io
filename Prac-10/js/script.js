var SortLib = {

    // Exchange
    bubbleSort: function(arr, ascending = true) {
      let swapCount = 0;
      let compareCount = 0;
      let len = arr.length;
      for (var i = 0; i < len; i++) {
          for (var j = 0; j < len - i - 1; j++) {
              compareCount++;
              if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
                  var temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
                  swapCount++;
              }
          }
      }
      console.log("Exchanges: " + swapCount + ", Comparisons: " + compareCount);
      return arr;
    },

    // min elements
    selectionSort: function(arr, ascending = true) {
      let swapCount = 0;
      let compareCount = 0;
      let len = arr.length;
      for (var i = 0; i < len; i++) {
          var minIndex = i;
          for (var j = i + 1; j < len; j++) {
              compareCount++;
              if ((ascending && arr[j] < arr[minIndex]) || (!ascending && arr[j] > arr[minIndex])) {
                  minIndex = j;
              }
          }
          if (minIndex != i) {
              var temp = arr[i];
              arr[i] = arr[minIndex];
              arr[minIndex] = temp;
              swapCount++;
          }
      }
      console.log("Exchanges: " + swapCount + ", Comparisons: " + compareCount);
      return arr;
    },

    // insertion
    insertionSort: function(arr, ascending = true) {
      let swapCount = 0;
      let compareCount = 0;
      let len = arr.length;
      for (var i = 1; i < len; i++) {
          var key = arr[i];
          var j = i - 1;
          while (j >= 0 && ((ascending && arr[j] > key) || (!ascending && arr[j] < key))) {
              arr[j + 1] = arr[j];
              j = j - 1;
              swapCount++;
              compareCount++;
          }
          arr[j + 1] = key;
      }
      console.log("Exchanges: " + swapCount + ", Comparisons: " + compareCount);
      return arr;
    }
};

let arr = [];
for (var i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log("Initial array: " + arr.join(", "));
console.log("Sort by exchange: " + SortLib.bubbleSort([...arr]).join(", "));
console.log("Sort by min elements: " + SortLib.selectionSort([...arr]).join(", "));
console.log("Sort by insertion: " + SortLib.insertionSort([...arr]).join(", "));