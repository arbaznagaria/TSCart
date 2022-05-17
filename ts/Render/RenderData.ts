import { BASE_URL } from "../common/AppConstants";
import Product from "../models/Product";
import { ProductService } from "../services/ProductService"

export class RenderData{

    DisplayData(products: Product[]):void{

        var render = document.getElementById("renderdata");

            console.log(products);
            
            for(const i in products){

                var productTemplate = `<div class="col-md-3">
                    <div class="card product">
                        <img src="${products[i].ImgUrl}" class="card-img-top product-img img-fluid" alt="${products[i].Title}">
                        <div class="card-body">
                            <h5 class="card-title product-title">${products[i].Title}</h5>
                            <p class="card-text product-description text-decoration-line-through text-danger">Orignal Price : ${products[i].OrigPrice}</p>
                            <p class="card-text product-description">Discount Price : ${products[i].DiscountPrice}</p>
                            <p class="card-text product-description">${products[i].Description}</p>
                            <a href="#${products[i].Id}" class="add-to-cart btn btn-primary">Add To Cart</a>
                        </div>
                    </div>
                </div>`

                render.insertAdjacentHTML('beforeend',productTemplate)
            }
    }
}