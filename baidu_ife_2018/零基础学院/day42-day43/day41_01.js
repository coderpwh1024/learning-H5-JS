 function createNewPerson(name){
    var obj ={};
    obj.name = name;
    obj.greeting = function () {
        alert('Hi! I\'m ' + this.name + '.');
    }
    return obj;
 }

 var salave = createNewPerson('salva');
 salave.name;
 console.log('姓名:'+salave.name);
 salave.greeting();

 function Person(name){
     this.name = name;
     this.greeting = function () {
         alert('Hi! I\'m ' + this.name + '.');
     }
 }
 var person1 = new Person('Bob');
 var person2 = new Person('Sarah');
 console.log(person1.name)
 person1.greeting()
 console.log(person2.name)
 person2.greeting();

 function Persons(first,last,age,gender,interests) {
     this.name = {
         first,
         last
     };
     this.age = age;
     this.gender = gender;
     this.interests = interests;
     this.bio = function () {
         alert(this.name.first+' '+this.name.last+' is '+this)
     };
     this.greeting = function () {
         alert('Hi! I\'m ' + this.name.first + '.');
     }
 }
 var person11 = new Persons('Bob','Smith',32,'male',['music', 'skiing']);

 person11['age']
 person11.interests[1]
 person11.bio()




