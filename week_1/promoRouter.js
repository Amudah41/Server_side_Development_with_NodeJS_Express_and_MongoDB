var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.get('/',(req,res,next)=>{
    res.end('This route will send all the promotions to you!');
})

promoRouter.post('/',(req,res,next)=>{
    res.end('This route will add: '+ req.body.promotionName + 'with its description' + req.body.description);
})

promoRouter.put('/',(req,res,next)=>{
    res.status(403).json({message:'this route doesnot support put'});
})

promoRouter.delete('/',(req,res,next)=>{
    res.end("This router will delete all ");
})

promoRouter.get('/:promoId',(req,res,next)=>{
    res.end('This route send details of the promotion: ' + req.params.promoId + ' to you!');
})

promoRouter.post('/:promoId',(req,res,next)=>{
    res.status(403).json({message:'this route doesnot support put'});
})

promoRouter.put('/:promoId',(req,res,next)=>{
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name +
        ' with details: ' + req.body.description);
 
})


promoRouter.delete('/:promoId',(req,res,next)=>{
    res.end('This route will delete promotion: ' + req.params.promoId);
})

exports.router = promoRouter;