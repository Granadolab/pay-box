const TypePay = require('../Models/TypePay');


class TypePayService {
    
    constructor()
    {

    }

    /**
     * 
     * @returns //! all typepay
     */

    async index()
    {
        const typepay = await TypePay.findAll();
        return typepay;
    }

    /**
     * @param Request 
     * @returns //!typepay
     */

    async store(request)
    {
        const newtypepay = await TypePay.create({
            name: request.name
       });
       return newtypepay; 
    }

    /**
     * 
     * @param {*} id 
     * @returns //!typepay
     */
    async show(id)
    {
        const typepay = await TypePay.findOne({ where: { id: id } });
        return typepay;
    }

    /**
     * 
     * @param {*} request 
     * @param {*} id 
     * @returns //! true or false
     */

    async update(request, id)
    {
        const updatetypepay =  await TypePay.update({
            name: request.name
        },
        {
            where: {
            id: id
            }
        });

        if(updatetypepay == 1){
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
        await TypePay.destroy({
            where: {
            id: id
            }
        });
        return {message:'This element has deleted successfull'};
    }
    
}


module.exports = TypePayService;
