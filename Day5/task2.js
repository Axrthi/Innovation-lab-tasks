let student={
    name:'Samritha',
    age:18,
    displayInfo:function(){
        console.log('Name: ${this.name},Age:${this.age}');
    }
};
student.displayInfo();
studemt.greet=function(){
    console.log('Hello,Im ${this.name}');
};
student.greet();
console.log(student.name);
student.name='Samritha';
console.log(student.name);