
const express = require("express");
const userData = require("../models/userModel.js")

const router = express.Router();



//POST:

router.post("/" , async(req, res)=>{
    const{name, email, age, picture} = req.body;


    try{
        const userAdded = await userData.create({
            name:name,
            email:email,
            age:age,
            picture:picture,
        });
        res.status(201).json(userAdded)


    }catch (error) {
        if (error.code === 11000) { // Duplicate key error code
          res.status(400).json({ error: 'Email already exists' });
        } else {
          res.status(500).json({ error: 'Internal server error', message: error.message });
        }
      }

})


//GET:
router.get("/" , async(req, res)=>{
try{
        const showAll = await userData.find();
        res.status(200).json(showAll)


    }catch(error){
        res.send(500).json({error:error.message})
    }

    // res.send("api running  completely");
})

// GET A SINGLE USER:

router.get("/:id" , async(req, res)=>{
    const {id} = req.params;
    try{
            const singleUser = await userData.findById({_id : id});
            res.status(200).json(singleUser)
    
    
        }catch(error){
            console.log(error)
            res.send(500).json({error:error.message})
        }
    
       
    })

    // DELETE:

    router.delete("/:id" , async(req, res)=>{
        const {id} = req.params;
        try{
                const singleUser = await userData.findByIdAndDelete({_id : id});
                res.status(200).json(singleUser)
        
        
            }catch(error){
                console.log(error)
                res.send(500).json({error:error.message})
            }
        
           
        }) 


        // UPDATE:


        router.patch("/:id" , async(req, res)=>{
            const {id} = req.params;
            const{name, email, age, picture} = req.body;
            try{
                    const updateUser = await userData.findByIdAndUpdate(id, req.body, {
                        new:true,
                    });
                    res.status(200).json(updateUser)
            
            
                }catch(error){
                    console.log(error)
                    res.send(500).json({error:error.message})
                }
            
               
            }) 

    






module.exports = router;
