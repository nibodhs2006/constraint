class Chain {
   constructor(bA,bB){
    var options={
        bodyA:bA,
        bodyB:bB,
        stiffness:1.5,
      length:60
    
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)

   }
 display(){

    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    
 }



}