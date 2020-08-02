class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }

};

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
   registerStudent(studentToRegister) {
        const registeredArr = this.students.find(student => student.email === studentToRegister.email);
            console.log("this is my registered array", registeredArr);
            if(registeredArr.length === 0) {
                this.students.push(studentToRegister);
                console.log(`${studentToRegister.email} was registered to the bootcamp`);
                return;
           } else {
                console.log(`${studentToRegister.email} is already registered in the bootcamp`);
           }
        }
    }
