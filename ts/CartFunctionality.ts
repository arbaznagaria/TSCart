export class CartFunctionality {
    AddToCart(addtocart : HTMLCollection) {
        for (let i = 0; i < addtocart.length; i++) {
            addtocart[i].addEventListener("click", (e : Event) => {
                e.preventDefault()
                this.eventlistener(addtocart[i].getAttribute("href").replace("#",""))
            })
            
        }
    }


    eventlistener(ID: string):void{
        console.log(ID);
    }
    // DisplayCart(this:Element):any{
    //     alert("Arnaz")
    // }
}



