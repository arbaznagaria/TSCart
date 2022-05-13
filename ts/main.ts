import { service } from "./services";
import { url } from "./url";


const services = new service()
var data = services.service(url);
console.log(data)