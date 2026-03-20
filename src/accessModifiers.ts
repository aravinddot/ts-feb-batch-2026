


class protect {

    private valueOne: string // inside class
    protected valueTwo: string // inside class + child class
    readonly valueThree: string

    constructor() {
        this.valueOne = "Playwright"
        this.valueTwo = "cypress"
        this.valueThree = "selenium"
    }

    loginFunc() {
        //this.valueThree = "night watch"
        console.log(this.valueOne);
        console.log(this.valueTwo);
        
    }


}

const pro = new protect()

pro.loginFunc