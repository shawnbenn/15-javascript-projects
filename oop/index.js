// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log('draw')
//     }
// };

// circle.draw()

// function minMax(arr) {
//     let min = 1;
//     let max = 0;
//     for (i in arr) {
//         if (arr[i] > max) {
//             max = arr[i];

//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return [min, max]
// }

function minMax(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    return [arr[0], arr[arr.length - 1]]
};

let arr1 = [-54, 5, 6, 3, 8]
console.log(minMax(arr1))