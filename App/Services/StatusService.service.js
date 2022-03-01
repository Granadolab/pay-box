const Status = require('../Models/Status');


class StatusService {
    
    constructor()
    {

    }

    /**
     * 
     * @returns //! all status
     */

    async index()
    {
        const status = await Status.findAll();
        return status;
    }

    /**
     * @param Request 
     * @returns //!status
     */

    async store(request)
    {
        const newstatus = await Status.create({
            name: request.name
       });
       return newstatus; 
    }

    /**
     * 
     * @param {*} id 
     * @returns //!status
     */
    async show(id)
    {
        const status = await Status.findOne({ where: { id: id } });
        return status;
    }

    /**
     * 
     * @param {*} request 
     * @param {*} id 
     * @returns //! true or false
     */

    async update(request, id)
    {
        const updatestatus =  await Status.update({
            name: request.name
        },
        {
            where: {
            id: id
            }
        });

        if(updatestatus == 1){
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
        await Status.destroy({
            where: {
            id: id
            }
        });
        return {message:'This element has deleted successfull'};
    }
    
}


module.exports = StatusService;
