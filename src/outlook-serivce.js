import axios from 'axios';

/**
 * Get the permissions of a file or folder in onedrive
 * 
 * @param {itemId} - The id of the file or folder
 * @param {token} - The access token form onedrive
 * @returns - The permissions of the file or folder
 */
const filePermissions =async (itemId, token)=> {
    
    // Check if the itemId is provided 
    if(!itemId) throw {status:400, code: 'BadRequest', message: 'ItemId is required'};

    const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/permissions`

    const data = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
    }
    }).catch((err)=> {
        const {status, data} = err.response;
        const {code, message} = data.error;
        throw {status,code,message}
    });

    const {value} = data.data;

    // Extract the permissions
    const permissions = value.map((perm)=> {
        const {id, roles, grantedTo} = perm;
        return {id,roles,grantedTo}
        })


    return permissions;
}

/**
 * Download a file from onedrive
 * 
 * @param {fileId} - The id of the file
 * @param {token} - The access token form onedrive
 * @returns - The id and download url of the file
 * 
 * @throws - If the file is not found
 * @throws - If the file is not accessible
 * @throws - If the file is not downloadable
 * @throws - If the file is not a file
 * */
const downloadFile = async (fileId, token)=> {
    
    const url = `https://graph.microsoft.com/v1.0/me/drive/items/${fileId}?select=id,@microsoft.graph.downloadUrl`;

    const data = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
    }
    }).catch((err)=> {
        const {status, data} = err.response;
        const {code, message} = data.error;
        throw {status,code,message}
    });

    const {id} = data.data;
    return {id, downloadUrl:data.data["@microsoft.graph.downloadUrl"]};
}

/**
 * List the contents of a folder in onedrive
 * 
 * @param {itemId} - The id of the folder
 * @param {token} - The access token form onedrive
 * @returns - The contents of the folder
 * 
 * @throws - If the folder is not found
 * @throws - If the folder is not accessible
 *  */

const listContents = async ( itemId, token)=> {
    
    const parent = itemId ;
    const url = `https://graph.microsoft.com/v1.0/me/drive/items/${parent}/children`;
    console.log(url);
    const request = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
    }
    }).catch((err)=> {
        const {status, data} = err.response;
        const {code, message} = data.error;
        throw {status,code,message}
    });

    const {value}= request.data;
    return {value, count : request.data["@odata.count"]}
}

export default {
    filePermissions,
    listContents,
    downloadFile

}   