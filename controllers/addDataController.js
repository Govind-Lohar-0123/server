import prodModel from "../config/models/productSchema.js"


class AddDataController {
    static addData = async (data) => {

        try {
            const prod = await prodModel.insertMany(data);

        }
        catch (err) {

        }
    }

}
export default AddDataController;