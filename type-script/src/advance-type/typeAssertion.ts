let anything: any;

anything = 999;

(anything as number);

const kgToGRMConverter = (input: string | number): number | string | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`
    }
}

const result1 = kgToGRMConverter(2) as number;
const result2 = kgToGRMConverter("2 KG") as string;

console.log(result1);
console.log(result2);

type CustomError = {
    message: string;
}

try {

} catch (error) {
    console.log((error as CustomError).message);
}