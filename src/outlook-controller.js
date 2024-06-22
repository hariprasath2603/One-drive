import axios from 'axios';
import service from './outlook-serivce';


// This fill contains controller functions for the outlook service
// The controller functions are responsible for handling the request and response objects



// The filePermissions function is responsible for handling the request and response objects
const filePermissions = async(req, res)=> {
    try{
        const {itemId} = req.params;
        const {token} = req.headers;

        res.send(await service.filePermissions( itemId, token));
    }
    catch(err){
        res.status(err.status || 500 ).send(err);
    }
}

// The listContents function is responsible for handling the request and response objects
const listContents = async(req, res)=> {
    try{
        const {itemId} = req.params;
        const {token} = req.headers;
        
        res.send(await service.listContents(itemId, token));
    }
    catch(err){
        res.status(err.status || 500 ).send(err);
    }
}

// The downloadFile function is responsible for handling the request and response objects
const downloadFile = async(req, res)=> {
    try{
        const {itemId} = req.params;
        const {token} = req.headers;
        res.send(await service.downloadFile(itemId, token));
    }
    catch(err){
        res.status(err.status || 500 ).send(err);
    }
}

export default {
    filePermissions,
    listContents,
    downloadFile
}