// type guard

type Alphaneumeric = number | string

const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
};

add(2, 5);

add(2, "2");

const concat = add("2", "2");
console.log(concat);

// in guard

interface NormalUser {
    name: string;
}

interface AdminUser {
    name: string;
    role: "Admin"
}

const getUserInfo = (user: NormalUser | AdminUser) => {
    if('role' in user){
        console.log(`${user.name} and his role ${user.role}`);
    }else{
        console.log(`${user.name}`);
    }
};

getUserInfo({name: "Hanif", role: 'Admin'});