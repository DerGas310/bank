export class Address{
    constructor(street, city, mailIndex){
        this.street = street
        this.city = city
        this.mailIndex = mailIndex
    }

    listAddress(){
        return `улица ${this.street}, город ${this.city}, ${this.mailIndex}`
    }
}