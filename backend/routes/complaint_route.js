const Complaint=require("./models/Complaint");
const router=require("express").Router();
const {paginatedResults}=require('./pagination'); 

//save Complaint
router.post("/", async(req,res)=>{
    const newComplaint=new Complaint(req.body);
    try{
        const savedComplaint=await newComplaint.save();
        res.status(200).json(savedComplaint);
    }catch(err){
        res.status(500).json(err);
    }
});

//update Complaint
router.put("/:id", async(req,res)=>{
    try {
        const updatedComplaint=await Complaint.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },{
                new:true
            }
        );
        res.status(200).json(updatedComplaint);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete Complaint
router.delete("/:id", async(req,res)=>{
    try { 
        await Complaint.findByIdAndDelete(req.params.id);
        res.status(200).json("Complaint deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

//search Complaint 
router.get("/:id", async(req,res)=>{
    try {
        const Complaint=await Complaint.findById(req.params.id);
        res.status(200).json(Complaint);
    } catch (err) {
        res.status(500).json(err);
    }  
});

// //load all Complaints
// router.get("/", paginatedResults(Complaint), async(req,res)=>{
//     res.json(res.paginatedResults);
// })


module.exports=router;