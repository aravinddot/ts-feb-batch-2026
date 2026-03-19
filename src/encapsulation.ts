


class HomePage {

// hiding functions
    private validateHeader() {
        console.log("header validated");
    }

    validateFooter() {
        this.validateHeader()
        console.log("footer validated");
    }

    validateMenu() {
        this.validateFooter()
    }


}

const home = new HomePage()

home.validateFooter()