import {Company} from "../Models/Company.js"

const companyDetails = async(req,res) => {
    // console.log(req.body)
    const {companyName,name,phone,city,state,country, about} = req.body

    try{
        const isCompanyExists = await Company.findOne({companyName: companyName})

        if(isCompanyExists){
            return res.status(200).json({
                success : false,
                message: "Company already exists" })
        }

        const company = new Company({
            companyName,name,phone:Number(phone),city,state,country, about
        })
        company.save();

        res.status(200).json({
            success : true,
            message:"Company created successfully"
        })

        


    }
    catch (err) {
        res.sendStatus(404).json("Something went wrong")
    }



}

const companyData = async (req, res) => {
    const companyName = req.query.companyName
    const company = await Company.findOne({companyName : companyName})
    // console.log(company)
    res.status(200).json({
        success : true,
        data : company
    })
}
export {companyDetails, companyData}