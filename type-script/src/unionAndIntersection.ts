// union

type userRole = 'Admin' | 'User' | 'Guest';

const getDashboard = (role: userRole) => {
    if (role === "Admin") {
        return "Admin Dashboard"
    }
    else if (role === "User") {
        return "User Dashboard"
    }
    else if (role === "Guest") {
        return "Guest Dashboard"
    }
    else {
        return "Not Found"
    }
};
// console.log(getDashboard("Admin"));

// intersesstion &

type Employee = {
    id: number,
    name: string,
    phoneNo: string
}

type Manager = {
    designation: string,
    teamSize: number
}

type EmployeeManager = Employee & Manager;

const chowdhuriShaheb: EmployeeManager = {
    id: 123,
    name: "chowdhuri Shaheb",
    phoneNo: '0187777777',
    designation: "Manager",
    teamSize: 90,
}