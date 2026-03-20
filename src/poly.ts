

class LoginOne {

   func() {
    console.log("function one");  
   }

}

class HomeOne extends LoginOne {

    func() {
        console.log("function two");       
    }

}

const home1 = new HomeOne()

home1.func()

