const User = require('../../Models/User');
const {signuser} = require('../../Middlewares/Auth');
const {errorHandler} = require('../../Middlewares/ErrorHandler');
const { json } = require('express/lib/response');

class LoginService {
    
    async login(request)
    {

        // TODO : meterle seguridad al login 
       const  email = request.email;
       
       const  password =  request.password;

       const user = await User.findOne({ where: { email: email, password:password } });
      if (user) {

            const sign = signuser(user);
            const res = {
                name: user.name,
                phone: user.phone,
                email: user.email,
                dni: user.dni,
                token:sign
            }
            return res;
        }else{
            return {message:'This user doesnt found'};
        }
      }

}

module.exports = LoginService;
