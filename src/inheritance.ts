

// parent class
class LoginPage {

    enterUsername() {
        console.log("username entered");

    }
}

// child class
class NewPage extends LoginPage {

   

    enterPassword() {
        console.log("password entered");
    }

    userLogin() {
        this.enterUsername()
        this.enterPassword()
        console.log("user loggedin");

    }

}

const newPage = new NewPage()

newPage.userLogin()