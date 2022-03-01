const User = require('../../Models/User');
const {signuser} = require('../../Middlewares/Auth');

class RegisterService {
    
    async createUser(request)
    {
        let newuser = await User.create({
            name: request.name,
            phone: request.phone,
            email: request.email,
            dni: request.dni,
            password: request.password
        });

        //TODO : hacer que se registre y se loguee de una vez 

        const sign = signuser(newuser);

        const res = {
            name: request.name,
            phone: request.phone,
            email: request.email,
            dni: request.dni,
            token:sign
        }

        return res;
    }

}

module.exports = RegisterService;
