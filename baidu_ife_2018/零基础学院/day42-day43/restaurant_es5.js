 function Restaurant(obj){
    this.cash = obj.cash;
    this.setas = obj.setas;
    this.staff = obj.staff;
 }
 Restaurant.prototype = {
     construct:Restaurant,
     hire:function(employee){
         this.staff.push(employee)
     },
     fire:function (employee) {
         for(var  i in this.staff){
             if(this.staff[i]==employee){
                 return this.staff.splice(i,1);
             }
         }
     }
 }

 // 员工
 function Employee(id,name,salary) {
     this.id = id;
     this.name = name;
     this.salary = salary;
 }
 Employee.prototype.work = function () {
     console.log('完成了一次工作');
 }
 function Serve(id,name,salary) {
      Employee.call(this,id,name,salary)
     this.work = function(){
          console.log('完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为');
     }
 }
 function Cook(name,salary){
     Employee.call(this,name,salary);
     this.work = function () {
         console.log('完成一次工作：烹饪出菜品');
     }
 }

 function Customer(){
     this.order = function(food){
         console.log('点了一盘'+food);
     };
      this.eat = function(food){
          console.log('吃了一盘'+food);
      }
 }

 function Food(name,cost,price){
     this.name= name;
     this.cost = cost;
     this.price = price;
 }

 var ifeRestaurant = new Restaurant({
     cash:1000000,
     seats:20,
     staff:[]
 });

 var newCook = new Cook("Tony",10000);
 ifeRestaurant.hire(newCook);
 console.log(ifeRestaurant);

 console.log(ifeRestaurant.staff);
 console.log(ifeRestaurant.staff);


 
 
