class Ground{
 constructor(){
var groundOptions={
    isStatic:true
}
  this.body=Bodies.rectangle(200,390,400,20,groundOptions);
 World.add(myWorld,this.body);


 }


display(){

var mes = this.body.position;

rectMode(CENTER);
rect(mes.x,mes.y,400,20);

}

}