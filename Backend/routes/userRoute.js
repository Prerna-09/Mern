
const express = require("express");
const userData = require("../models/userModel.js")
const mongoose = require("mongoose");

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

// router.get("/:id" , async(req, res)=>{
//     const {id} = req.params;
//     try{
//             const singleUser = await userData.findById({_id : id});
//             res.status(200).json(singleUser)
    
    
//         }catch(error){
//             console.log(error)
//             res.send(500).json({error:error.message})
//         }
    
       
//     })





router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
  
    try {
      const singleUser = await userData.findById(id);
      if (!singleUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(singleUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });


    // DELETE:

    // router.delete("/:id" , async(req, res)=>{
    //     const {id} = req.params;
    //     try{
    //             const singleUser = await userData.findByIdAndDelete({_id : id});
    //             res.status(200).json(singleUser)
        
        
    //         }catch(error){
    //             console.log(error)
    //             res.send(500).json({error:error.message})
    //         }
        
           
    //     }) 


    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
      
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ error: 'Invalid user ID' });
        }
      
        try {
          const singleUser = await userData.findByIdAndDelete(id);
          if (!singleUser) {
            return res.status(404).json({ error: 'User not found' });
          }
          res.status(200).json(singleUser);
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: error.message });
        }
      });


        // UPDATE:


        // router.patch("/:id" , async(req, res)=>{
        //     const {id} = req.params;
        //     const{name, email, age, picture} = req.body;
        //     try{
        //             const updateUser = await userData.findByIdAndUpdate(id, req.body, {
        //                 new:true,
        //             });
        //             res.status(200).json(updateUser)
            
            
        //         }catch(error){
        //             console.log(error)
        //             res.send(500).json({error:error.message})
        //         }
            
               
        //     }) 


        router.patch("/:id", async (req, res) => {
            const { id } = req.params;
            const { name, email, age, picture } = req.body;
          
            if (!mongoose.Types.ObjectId.isValid(id)) {
              return res.status(400).json({ error: 'Invalid user ID' });
            }
          
            try {
              const updateUser = await userData.findByIdAndUpdate(id, req.body, {
                new: true,
              });
              if (!updateUser) {
                return res.status(404).json({ error: 'User not found' });
              }
              res.status(200).json(updateUser);
            } catch (error) {
              console.log(error);
              res.status(500).json({ error: error.message });
            }
          });
          

    






module.exports = router;
