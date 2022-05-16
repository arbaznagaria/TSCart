import { BASE_URL } from "../common/AppConstants";
import { ProductService } from "../services/ProductService"

export class RenderData{

    DisplayData():void{

        var render = document.getElementById("renderdata");
        const data = new ProductService(BASE_URL)
        var products = data.getProducts()


        setTimeout(() => {

            for(const i in products){

                var productTemplate = `<div class="col-md-3">
                    <div class="card product">
                        <img src="${products[i].ImgUrl}" class="card-img-top product-img img-fluid" alt="${products[i].Title}">
                        <div class="card-body">
                            <h5 class="card-title product-title">${products[i].Title}</h5>
                            <p class="card-text product-description text-decoration-line-through text-danger">Orignal Price : ${products[i].OrigPrice}</p>
                            <p class="card-text product-description">Discount Price : ${products[i].DiscountPrice}</p>
                            <p class="card-text product-description">${products[i].Description}</p>
                            <a href="#${products[i].Id}" class="btn btn-primary add-to-cart">Add To Cart</a>
                        </div>
                    </div>
                </div>`

                render.insertAdjacentHTML('beforeend',productTemplate)
            }
        }, 200);
    }
}