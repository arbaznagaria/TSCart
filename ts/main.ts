import {
    ProductService
} from "./services/ProductService";
import {
    url
} from "./url";
import {
    BASE_URL
} from "./common/AppConstants";
// import { RenderData } from "./Render/RenderData";
import "../css/style.css"
import {
    CartFunctionality
} from "./CartFunctionality";
import Product from "./models/Product";
import {
    RenderData
} from "./Render/RenderData";


document.addEventListener("DOMContentLoaded", () => {
    new ProductService().getProducts().then((response: any) => {
        let products: Product[] = [];
        response.data.products.forEach((product: any) => {
            products.push(new Product(product.id, product.title, product.desc, product.img_url, product.orig_price, product.disc_price, product.category));
        });
        const prodservice = new RenderData()
        prodservice.DisplayData(products)


        // var productinterval = setInterval(() => {
            const AddToCartClick = new CartFunctionality;
        var addtocart = document.getElementsByClassName("add-to-cart") as HTMLCollection;
            AddToCartClick.AddToCart(addtocart)
        //     clearInterval(productinterval)
        // },200)



            

    })
})
// const Render = new RenderData()
// Render.DisplayData()
// const AddToCartClick = new CartFunctionality;
// setTimeout(() => {
//     AddToCartClick.AddToCart()
// }, 200);