// : ? ternary operator : decision making
// ?? : nullish coalescing operator
// ?. optional chaining


// const userAge = 21;

const biyerJonnoEligible = (age: number) => {
    // if (age >= 21) {
    //     console.log("you are eligible");
    // } else {
    //     console.log("you are not eligible");
    // }

    const result = age >= 21 ? "you are eligible" : "you are not eligible";
    console.log(result);
}
biyerJonnoEligible(21);

const useTheme = undefined;

const selectedTheme = useTheme ?? "Light";
// console.log(selectedTheme);

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guiest user";
const resultWithNullish = isAuthenticated ?? "you are user"

console.log({ resultWithTernary, resultWithNullish });