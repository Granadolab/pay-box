const Order = require('../Models/Order');
const ProductOrder = require('../Models/ProducfOrder');
class OrderService {
    

    //TODO: A Trait for entire objects
    constructor()
    {

    }

    /**
     * 
     * @returns //! all orders
     */

    async index()
    {
        const orders = await Order.findAll({include:['status', 'typepay', 'products']});
        return orders;
    }

    /**
     * @param Request 
     * @returns //!Order
     */

    async store(request)
    {
        const neworder = await Order.create({
            type_pay_id:request.type_pay_id,
            status_id:request.status_id,
            amount:request.amount
       });
       //* Save within of ProductOrder
       request.products.forEach(element => {
            ProductOrder.create({
            order_id:neworder.id,
            product_id:element.product_id,
            quantity_product:element.quantity
          })
       });

       return neworder 
    }

    /**
     * 
     * @param {*} id 
     * @returns //!Order
     */
    async show(id)
    {
        const order = await Order.findOne({ where: { id: id } },{include:['status', 'typepay']});
        return order;
    }

    /**
     * 
     * @param {*} request 
     * @param {*} id 
     * @returns //! true or false
     */

    async update(request, id)
    {
        const updateorder =  await Order.update({
            type_pay_id:request.type_pay_id,
            status_id:request.status_id,
            amount:request.amount
        },
        {
            where: {
            id: id
            }
        });

        if(updateorder == 1){
          return  request;
        }
        return {message:'This element has updated'};
    }


    /**
     * @param {*} id 
     * @returns  //! true or false 
     */

    async delete(id)
    {
        await Order.destroy({
            where: {
            id: id
            }
        });
        return {message:'This element has deleted successfull'};
    }
    
}


module.exports = OrderService;
