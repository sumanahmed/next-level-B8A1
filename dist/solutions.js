const multiplyValue = (value, multiplier) => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    else {
        return value * 2;
    }
};
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
const processInput = (value) => {
    if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    else {
        return value === true ? 'Active' : 'Inactive';
    }
};
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
const formatCoordinate = (coordinate) => {
    const [lat, lon, location] = coordinate;
    return `Location: ${location} (${lat}, ${lon})`;
};
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
const concatenateArrays = (...arrays) => {
    return [].concat(...arrays);
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
const getPopularCourses = (courses, minStudents) => {
    return courses.filter(item => item.students >= minStudents && item.isPublished === true);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));
const pluckValues = (users, pluckValue) => {
    const keyValues = users.map(el => el[pluckValue]);
    return keyValues;
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
pluckValues(users, "name");
pluckValues(users, "id");
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());
// Problem 8
const validateAgeAsync = async (age) => {
    try {
        return new Promise((resolve, reject) => {
            if (age >= 18) {
                setTimeout(() => {
                    resolve("Access Granted");
                }, 1000);
            }
            else {
                reject(new Error("Access Denied: Must be 18 or older"));
            }
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error("Something went wrong!");
        }
    }
};
const age20 = await validateAgeAsync(20);
const age15 = await validateAgeAsync(15);
console.log(age20);
console.log(age15);
export {};
