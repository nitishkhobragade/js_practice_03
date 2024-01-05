//// 3) By using an Object constructor
//// Here, you need to create function with arguments. Each argument value can be assigned in the current object by using this keyword.

//// The this keyword refers to the current object.

//// The example of creating object by object constructor is given below.

function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
}  
e=new emp(103,"Vimal Jaiswal",30000);  

document.write(e.id+" "+e.name+" "+e.salary);  