
const User = require('../Models/User');


class UserService {
    
    constructor()
    {

    }

    /**
     * 
     * @returns //! all user
     */

    async index()
    {
        const user = await User.findAll({attributes:['id','name', 'dni', 'email', 'phone']});
        return user;
    }

    /**
     * @param Request 
     * @returns //!user
     */

    async store(request)
    {
        const newuser = await User.create({
            name: request.name,
            phone: request.phone,
            email: request.email,
            dni: request.dni,
            password: request.password
       });
       return newuser; 
    }

    /**
     * 
     * @param {*} id 
     * @returns //!user
     */
    async show(id)
    {
        const user = await User.findOne({ where: { id: id } });
        return user;
    }

    /**
     * 
     * @param {*} request 
     * @param {*} id 
     * @returns //! true or false
     */

    async update(request, id)
    {
        const updateuser =  await User.update({
            name: request.name,
            phone: request.phone,
            email: request.email,
            dni: request.dni,
            password: request.password
        },
        {
            where: {
            id: id
            }
        });

        if(updateuser == 1){
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
        await User.destroy({
            where: {
            id: id
            }
        });
        return {message:'This element has deleted successfull'};
    }
    
}


module.exports = UserService;
