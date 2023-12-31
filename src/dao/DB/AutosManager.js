import { autoModel } from "../models/auto.models.js";

class AutosManager {
    async createAuto(name, brand, year, image){
        const auto = await autoModel.create({
            name,
            brand,
            year,
            image,
        })
        return auto;
    }

    async getAll(){
        const autos = await autoModel.find().lean();
        return autos
    }
}

export default AutosManager