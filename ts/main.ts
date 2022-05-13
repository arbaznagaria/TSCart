import { ProductService } from "./services/ProductService";
import { url } from "./url";
import { BASE_URL } from "./common/AppConstants";


const prodService = new ProductService(BASE_URL)
var productList = prodService.getProducts()
console.log("Product List : ", productList)