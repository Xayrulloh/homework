
// 1 - misol without array, only numbers
/*function sum(...num) {
    let sanoq = 0
    for(son of num) {
        sanoq += son
    }
    return sanoq
}
console.log(sum(1, 2, 3));*/

// 2 - misol
/*function arrayFromRange(arr){
    arr = arr.sort()
    return `${arr[0]} kichigi \n${arr[arr.length - 1]} kottasi`
}
console.log(arrayFromRange([5, 4, 1]));*/

// 3 - misol
/*const numbers = [1, 2, 3, 4, 5, 6]
function includes(arr, num) {
    if (typeof num === 'string' || typeof num === 'number' || typeof num === 'bigint' || typeof num === 'undefined' || typeof num === 'symbol' || typeof num === 'null') {
        for (let a = 0; a < arr.length; a++) {
            if (num === arr[a]) {
                return true
            }
        }
    }
    return false
}
console.log(includes(numbers, 8));*/

// 4 - misol
/*const numbers = [1, 2, 3, 4, 5, 6]
function except(array, arr) {
    for (son of arr) {
        const index = array.indexOf(son)
        array.splice(index, 1)
    }
    return array
}
console.log(except(numbers, [2, 3, 6]));*/

// 5 - misol
/*const numbers = [1, 2, 3, 4]
function move(array, olish, qoyish) {
    let element = array.splice(olish, 1)
    element = Number(element)
    array.splice(qoyish,0,element)
    console.log(array);
}
move(numbers, 0, 2)*/

// 6 - misol
/*const numbers = [1, 2, 3, 4]
function getMax(arr2) {
    let c = 0
    for (let a = 0; a <= arr2.length; a++) {
                for (let b = 0; b <= arr2.length; b ++) {
                    if (arr2[a] < arr2[b]) {
                        c = arr2[a]
                        arr2[a] = arr2[b]
                        arr2[b] = c
                    }
                }
            }
    console.log(arr2[arr2.length - 1]);
}
getMax(numbers)*/

// 7 - misol
/*function move(movies) {
    let arr = []
    let c = []
    for (movie of movies) {
        if (movie.year === 2020) {
            arr.push(movie)
        }
    }
    arr.sort((a, b) => b.rating - a.rating);
    arr.forEach((e) => {
    // console.log(`${e.title} ${e.year} ${e.rating}`);
    c.push(e.title)
})
    return c
}
const movies = [
    {title: 'a', year: 2021, rating: 4.5},
    {title: 'b', year: 2020, rating: 4.3},
    {title: 'c', year: 2019, rating: 3},
    {title: 'a', year: 2020, rating: 4.5}
]
console.log(move(movies));*/



























































