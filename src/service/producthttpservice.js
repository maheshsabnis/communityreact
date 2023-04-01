import axios from "axios";
export default class ProductHttpService {
    constructor(){
        this.url = "https://productapiserv.azurewebsites.net/api/ProductsAPI";
    }

    getProducts(){
        const response = axios.get(this.url);
        return response;
    }
    getProduct(id){
        const response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postProduct(product){
        const response = axios.post(this.url, product, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        return response;
    }

    putProduct(id,product){
        const response = axios.put(`${this.url}/${id}`, product, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        return response;
    }

    deleteProduct(id){
        const response = axios.delete(`${this.url}/${id}`);
        return response;
    }

}