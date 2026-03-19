

class ProductPage {

    val: string
    userName: string

    constructor(value: string, user: string) {
        this.val = value
        this.userName = user
    }
    validateCart() {
        console.log(` cart validated`);
    }

    login() {
        this.userName
    }

}

const product = new ProductPage("Bag", "user1")

product.validateCart()