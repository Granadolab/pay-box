//TODO : import model, validator

const Product = require('../Models/Product');
//TODO : put validation 

class ProductService {

    constructor(){
    //TODO: middleware auth

    }

   async index() {
    const products = await Product.findAll();
    return products;
    }

    async store(request){

        const newproduct = await Product.create({
             name: request.name ,
             price:request.price,
             status_id:request.status_id,
             category_id:request.category_id
        });
        return newproduct 
    }
   async show(){

    }
   
   async update(){

    }
   async delete(){

    }
}

module.exports = ProductService;

