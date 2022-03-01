
const Category = require('../Models/Category');


class CategoryService {
    
    constructor()
    {

    }

    /**
     * 
     * @returns //! all categories
     */

    async index()
    {
        const category = await Category.findAll();
        return category;
    }

    /**
     * @param Request 
     * @returns //!Category
     */

    async store(request)
    {
        const newcategory = await Category.create({
            name: request.name
       });
       return newcategory 
    }

    /**
     * 
     * @param {*} id 
     * @returns //!Category
     */
    async show(id)
    {
        const category = await Category.findOne({ where: { id: id } });
        return category;
    }

    /**
     * 
     * @param {*} request 
     * @param {*} id 
     * @returns //! true or false
     */

    async update(request, id)
    {
        const updatecategory =  await Category.update({
            name: request.name
        },
        {
            where: {
            id: id
            }
        });

        if(updatecategory == 1){
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
        await Category.destroy({
            where: {
            id: id
            }
        });
        return {message:'This element has deleted successfull'};
    }
    
}


module.exports = CategoryService;
