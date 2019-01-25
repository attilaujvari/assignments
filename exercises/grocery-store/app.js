var shopper = {
    name : "default",
    quantity: 0,
    inStore: false,
    groceryCart: ['potato','bread','sour cream','pineapple'],
    availability: function () {
        if (this.inStore === true){
            console.log("This item, " + this.name + " is currently available.")
        } else {
            console.log("This item, " + this.name + " is not currently available.")
        }
    }
}