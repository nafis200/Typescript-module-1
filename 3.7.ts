
{
    //  Statics in OOP

    class Counter {
        static count: number = 0;
        increment(){
            return (Counter.count = Counter.count + 1);
        }
        decrement(){
            return (Counter.count = Counter.count - 1)
        }
    }

    const instance1 = new Counter()

    const instance2 = new Counter()

    instance1.increment()
    //  here give 1
    instance2.increment()
    //  here give 1 but i dont want different memory location i want same memeory location

    // method instance korle eivabe call korte hobe
    // class name.method()

    class Counter1 {
        static count: number = 0;
       static increment(){
            return (Counter.count = Counter.count + 1);
        }
       static decrement(){
            return (Counter.count = Counter.count - 1)
        }
    }

    const counters = Counter1.increment()



}