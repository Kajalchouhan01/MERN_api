import { Product } from "../Models/Product.js";

// get all products
export const getProducts = async (req,res)=>{
    try{
         let product = await Product.find();
         res.json({ message:"all products", product, success: true});
    }catch(error){
        res.json({ message:"Internal server error", success: false});
    }

    
};

// add products 
export const addProduct = async (req,res) => {
    const{title,description,price,qty,img}=req.body;
    try {
        let product = await Product.create({
            title,
            description,
            price,
            qty,
            img
        });
    
    res.json({
        message:"product added successfully", 
        product, 
        success: true,

    });
    } catch(error){
        res.json({ message: "Internal server error", success: false});
    
    }

};

// get product id
export const getProductById = async (req,res) => {
    const id = req.params.id;
    try{
        let product = await Product.find({_id: id});   
    res.json({message : "product detail", product, success: true}) ;
} catch (error){
    res.json({ message: "Internal server error", success: false});
}
};

// delete product by id
export const deleteProduct = async (req, res) =>{
    const id = req.params.id;
    try {
        let product = await Product.findByIdAndDelete (id);
        if(!product) return res.json({message:"Invalid Id", success:false});
        res.json({message:"you product has been delete...!", success: false});
    } catch (error){
        res.json({ message: "Internal server error", success: true});
    }
};

// update product by id
export const updateProduct = async (req, res) =>{
    const id = req.params.id;
    try {
        let product = await Product.findByIdAndUpdate (id,req.body,{new:true});
        if(!product) return res.json({message:"Invalid Id", success:false});
        res.json({message:"you product has been updated...!",product, success: true});
    } catch (error){
        res.json({ message: "Internal server error", success: false});
    }
};
