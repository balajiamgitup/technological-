var x=require("prompt-sync")();
var file=require("fs");
//var z=require("./order");
var arr=[];
class Customer{
    constructor(){
        this.name;
        this.number;
        this.username;
        this.password;
    }
    newUser(taking){
        if(taking=="yes"){
          this.name=x("Enter the neame :");
          this.number=x("Enter the mobile number :");
          this.username=x("Enter the user name :");
          this.password=x("enter the password :")
        }
    }
    abs(input,name,pswd){
      if(input=="no"){
        var result;
        var fdata=file.readFileSync("customer.txt")
        var data=JSON.parse(fdata);
        arr.push(data);
      for(var i=0;i<arr.length;i++){
        if(arr[i].password==pswd && arr[i].username==name){
        // console.log("******LOgin is success*****");
        result="login success"; 
      }
      else{
        // console.log("login failed pls try agin ")
        result="Login fail"
    }
}
 return result;
//}

}
}

// searching(){
//    var q1=x("Enter the ordered brand to search : ");
//      if(q1=="redmi"){
//        console.log("***Your order = "+z.order.ord+"***");
//        return z.order.ord;   
//    }
// }
}
var a=new Customer();
var input=x("New user ")
if(input=="yes"){
a.newUser(input);
var data=JSON.stringify(a,null,2);
file.writeFileSync("customer.txt",data);
}
else if(input=="no"){
var input1=x("Enter the usrname :");
var input2=x("Enter the pswd");
var checkoutput= a.abs(input,input1,input2);
console.log(checkoutput)
}
