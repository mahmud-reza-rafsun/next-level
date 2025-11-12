type User = {
    name: string,
    age: number
}

type Role = {
    role: "admin" | "user"
}

interface Iuser {
    name: string;
    age: number;
}

type userWithRole = User & Role;

const user1: userWithRole = {
    name: "Mr.X",
    age: 100,
    role: 'admin'
}

const user2: User = {
    name: "Mr Y",
    age: 16,
}