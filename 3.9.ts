
{
    //  abstruction  1. interface 2. abstract

    interface Vechicle1 {
        name: string;
        model: number
    }

    const vechile1 : Vechicle1 = {
        name:'Toyata',
        model:2000
    }

// Idea

   interface Vechicle2{
        startEngine():void;
        stopEngine():void;
        move():void
    }
//    implementaion
    class Car implements Vechicle2{
       
    startEngine(): void {
        console.log('I am starting the car engine');
        
    }
    stopEngine(): void {
        console.log('I am stopping the car engine');
    }
    move(): void {
        console.log('I am moving the car');
    }
    //  condition full fill interface i add something

    test(){

    }

    }

    const ToyataCar = new Car()

    ToyataCar.startEngine();

    // now see abstraction using class

   abstract class Vechicle3{
        
       abstract startEngine(): void;
       abstract stopEngine(): void;
       abstract move(): void;

        test(){
    
        }
    }

    class ToyataCar1 extends Vechicle3{
         startEngine(): void {
             console.log('I am starying the car engine');
             
         }
         stopEngine(): void {
             console.log('stop enfine');
         }
         move(): void {
             console.log('i am moving');
             
         }
    }

}

