const Order = require('../Models/Order');
const ProductOrder = require('../Models/ProducfOrder');
const Invoice = require('../Models/Invoice');
const User = require('../Models/User');
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

    async store(req)
    {
        const request = req.body;
        const idUser = req.user.user.id;
        const neworder = await Order.create({
            type_pay_id:request.type_pay_id,
            status_id:request.status_id,
            amount:request.amount
       });

    
       //* Save within of ProductOrder
       request.products.forEach(element => {
        // console.log(element.product_id, 'SOY ELEMENT ESPECIFICAMENTE PRODUCT_ID');
            ProductOrder.create({
            order_id:neworder.id,
            product_id:element.product_id,
            quantity_product:element.quantity
          })
       });

       //*save invoice of
       Invoice.create({
        name_buyer:request.name_buyer,
        address_buyer:request.address_buyer,
        dni_buyer:request.dni_buyer,
        phone_buyer:request.phone_buyer,
        order_id:neworder.id,
        user_id:idUser,
       })

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

    async update(req, id)
    {
        const request = req.body;
        const idUser = req.user.user.id;

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

           //    //* update within of ProductOrder
       request.products.forEach(element => {
        // console.log(element.product_id, 'SOY ELEMENT ESPECIFICAMENTE PRODUCT_ID');
            ProductOrder.update({
            order_id:neworder.id,
            product_id:element.product_id,
            quantity_product:element.quantity
          },
          {
            where: {
            order_id: id
            }
          })
       });


       //*save invoice of
       Invoice.update({
        name_buyer:request.name_buyer,
        address_buyer:request.address_buyer,
        dni_buyer:request.dni_buyer,
        phone_buyer:request.phone_buyer,
        order_id:neworder.id,
        user_id:idUser,
       },{
        where: {
            order_id: id
            }
       })

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
        await ProductOrder.destroy({
            where:{order_id: id}
        });
        await Order.destroy({
            where: {
            id: id
            }
        });
        return {message:'This element has deleted successfull'};
    }
    
}


module.exports = OrderService;
