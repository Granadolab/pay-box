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

    async show(id){
        const project = await Product.findOne({ where: { id: id } });
        return project;
    }
   
   async update(request, id){

       const updaterequest =  await Product.update({
            name: request.name,
            price: request.price,
            status_id:request.status_id,
            category_id:request.category_id
            },
            {
            where: {
            id: id
            }
        });

        if(updaterequest == 1){
          return  request;
        }
        return {message:'This element has updated'};
    }

   async delete(id){
        await Product.destroy({
            where: {
            id: id
            }
        });

        return {message:'This element has deleted successfull'};
    }
}

module.exports = ProductService;

