import { One } from "./inheritOne";





class Two extends One {

    constructor(user: string) {
        super(user)
        this.password = 54321
    }

    


}


const value = new Two("User1")

value.enterUname()

console.log(value.password)