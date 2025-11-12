// object destructuring
// array destructuring

const user = {
    id: 123,
    name: {
        firstName: "Mahmud",
        middleName: "Reza",
        lastName: "Rafsun"
    },
    gender: "Male",
    favouriteColor: "Green"
};

const { id } = user;
console.log(id);