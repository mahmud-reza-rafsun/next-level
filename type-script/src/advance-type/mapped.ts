// mapped type

// map

const arrayOfNum: number[] = [1, 5, 4]

const arrayOfStr: string[] = ["1", "5", "8"]

const arrayOfStringUsingNumber: string[] = arrayOfStr.map((num) => num.toString());
console.log(arrayOfStringUsingNumber);

type AreaOfNumber = {
    height: number;
    width: number;
}


type areaOfNumber = {
    height: number;
    width: number;
}

type height = areaOfNumber["height"]

// type AreaOfString = {
//     []
// }