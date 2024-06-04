import {Employers} from "../Models/Employer.js"

const companyDetails = async(req,res) => {
    console.log(req.body)
    
    const email = req.query.email
    const {companyName, phone, city, state, country, about }= req.body
    console.log(req.body.companyName)
    try{
        const isCompanyExists = await Employers.find({companyName: companyName})
        console.log(isCompanyExists)
        if(isCompanyExists.length > 0){
            console.log("inside this")
            return res.status(404).json({
                success : false,
                message: "Company already exists" })
        }

        const company = await Employers.findOneAndUpdate({email:email}, {companyName, phone: Number(phone), city, state, country, about}, {new: true})
        console.log(company)
        return res.status(200).json({
            success : true,
            message:"Company created successfully"
        })

        


    }
    catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }



}

const companyData = async (req, res) => {
    const email = req.query.email
    console.log(email)
    const company = await Employers.findOne({email : email})
    console.log(company)
    res.status(200).json({
        success : true,
        data : company
    })
}
export {companyDetails, companyData}