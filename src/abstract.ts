
abstract class NewClass {

    loginValidated() {
        console.log("loginValidated");
        
    }

    homePageValidated() {
        console.log("homePageValidated");
    }


}

// const validate = new NewClass()

class ClassTwo extends NewClass {


    productPage() {
        this.loginValidated()
        this.homePageValidated()
    }

}