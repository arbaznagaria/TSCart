// import AbsService from "./AbsService";
import { BASE_URL } from "../common/AppConstants";
import Product from "../models/Product";
import axios from "axios";


export class ProductService{
    
    // static NetworkError = class extends Error {
    //     constructor(name: string) {
    //         super()
    //         this.name = name
    //         this.message = "Network Error"
    //     }
    // }

    getProducts(): Promise<Product[]> {
        // var productList: Product[] = []

        // axios.get(this.baseUrl + "/products").then((resp) => {
            
        //     resp.data.products.forEach((product: any) => {
        //             productList.push(new Product(product.id, product.title, product.desc, product.img_url, product.orig_price, product.disc_price, product.category))
        //     });
        // })
        // .catch(err => {
        //     console.log(err)
        //   throw new ProductService.NetworkError(err)  
        // })

        // return productList
        return axios.get(BASE_URL+ "/products")
    }

}