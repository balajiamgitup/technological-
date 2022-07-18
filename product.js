var prompt=require("prompt-sync")();
var file=require("fs");
class Order{
    constructor(){
        this.pid;
        this.products;
        this.data=[];

    }
    view(){
        console.log("PID   PRODUCTS           PRICE")
    for(var key in this.pid){
        for(var price in this.products){
            if(this.pid[key]==price){
                console.log(key + "  "+this.pid[key] +"       "+ this.products[price]);
            }
        }
        // console.log(key +"  "+this.pid[key])
    }
    }
    add(){
        let  input1=prompt("Enter the pid :")
        let  input2=prompt("Enter the product :");
        let input3=prompt("Enter the price");
        this.pid[input1]=input2;
        this.products[input2]=input3;
    }
    dlt(){
        var input=prompt("Enter the pid to delete : ");
        for(var key in this.pid){
        if(input==key){
            var x=this.pid[key];
            delete this.pid[input];
            delete this.products[x];
        }
        }
    }
    file()
    {
         this.data.push(this.pid);
         this.data.push(this.products);
        var rawdata=JSON.stringify(this.data,null,2);
     file.writeFileSync("product.txt",rawdata);
    }
}
var obj=new Order();
obj.pid={
    "100":"mobile",
    "101":"Tv",
    "103":"watch",
}
obj.products={
    "mobile":10000,
    "Tv":30000,
    "watch":7898
}
// obj.add();
// obj.view();
obj.file();
// obj.dlt();
// obj.view();
