import Product from "./models/Product";
import { ProductService } from "./services/ProductService";

export class CartFunctionality {
    Cart: any[] = [];

    AddToCart(addtocart : HTMLCollection , products: Product[]) {
        for (let i = 0; i < addtocart.length; i++) {
            addtocart[i].addEventListener("click", (e : Event) => {
                e.preventDefault()
                // if(this.Cart.length > 0){
                //     for(const j in this.Cart)
                //     {
                //         if(products[i].Id == this.Cart[j].Id){
                //             alert(`productid: ${products[i].Id} & Cartid: ${this.Cart[j].Id}`)
                //         }
                //     }
                // }
                this.Cart.push(products[i])
                console.log(this.Cart);
                this.eventlistener(this.Cart)
                this.productcount(this.Cart)
                this.cartproducts(this.Cart)
            })
            
        }
    }


    eventlistener(Cart:Product[]):void{
        // console.log(Cart)
    }
    productcount(Cart: Product[]):void{
        var count = document.getElementById("cartcount")
        // console.log(count);
        if(Cart.length > 0)
        {
            count.innerHTML=Cart.length.toString();
        }
    }

    cartproducts(Cart:Product[]):void{
        var cartprod = document.getElementById("cartshow")
        var rendercart:string = '';
        for(const i in Cart){
                rendercart += `
                <div class="col-12">
                    <div class="row">
                        <div class="col-2">
                            <img src="${Cart[i].ImgUrl}" width="150px">
                        </div>
                        <div class="col-3">
                            <input type="text" value=${Cart[i].Id}>
                        </div>
                        <div class="col-2">
                            <p><del>Orignal Price : ${Cart[i].OrigPrice}</del></p>
                        </div>
                        <div class="col-2">
                            <p class="text-danger">Discount Price : ${Cart[i].DiscountPrice}</del></p>
                        </div>
                        <div class="col-2">
                            <p>Total Price : ${Cart[i].DiscountPrice}</del></p>
                        </div>
                    </div>
                </div>
            `
            // console.log(cartprod);
        }
        cartprod.innerHTML=rendercart
    }
}



