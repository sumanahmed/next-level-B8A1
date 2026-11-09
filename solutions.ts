const multiplyValue = (value:number, multiplier?:number): number => {
    if(multiplier !== undefined) {
        return value * multiplier;
    } else {
        return value * 2;
    }
}



type processInputType = number | string | boolean;
const processInput = (value: processInputType) : processInputType => {
    if(typeof value === 'number') {
        return value * 10;
    } else if(typeof value === 'string') {
        return value.trim().toLowerCase();
    } else {
        return value === true ? 'Active' : 'Inactive';
    }
}


const formatCoordinate = (coordinate: readonly[lat:number, lon:number, locationName: string]) => {
   const [lat, lon, location] = coordinate;

   return `Location: ${location} (${lat}, ${lon})`;

}




const concatenateArrays = <T>(...arrays: T[][]) : T[] => {
    return ([] as T[]).concat(...arrays)
}



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) => {
    return courses.filter(item => item.students >= minStudents && item.isPublished === true);
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];


interface User {
    id: number;
    name: string;
    role: string;
}
const pluckValues = (users: User[], pluckValue: keyof User) => {
    const keyValues = users.map(el => el[pluckValue])
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
    constructor(
        protected name: string,
        private baseSalary: number
    ) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string

    ) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`
    }
}
const manager = new Manager("Alice", 50000, "Engineering");


const validateAgeAsync = async (age:number): Promise<string> => {
    try {
        return new Promise((resolve, reject) => {
            if(age >= 18) {
                setTimeout(() => {
                    resolve("Access Granted");
                }, 1000);
            } else {
                reject(new Error("Access Denied: Must be 18 or older"));
            }
        })  

    } catch(error) {
        if(error instanceof Error) {
            console.error(error.message)
        } else {
            console.error("Something went wrong!")
        }
    }
};

const age20 = await validateAgeAsync(20);
const age15 = await validateAgeAsync(15);

