# Onedrive Basic CRUD

This repo give basic APIs to interact with one drive. 
|Route|Name|Description  |
|--|--|--|
|  `{{IP}}/list/:folderId`| List contents | This API list folder contents|
|  `{{IP}}/permission/:itemId`| Permission | This API list permissions of a file or folder|
|  `{{IP}}/download/:fileId`| DownLOAD File| Gives download URL|

> All API requires onedrive token as **token** in header

Added postman collection for detailed sample response and error. Check [here](https://raw.githubusercontent.com/hariprasath2603/One-drive/main/One%20Drive.postman_collection.json)



### Get token

Usually applications follow oAuth flow with required permissions. 

For simplicity we added token directly from [Microsoft graph explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)  

***Permissions Required*** - `Files.ReadWrite.All`


##  Run project

Steps to run the project

 - Clone this project
 - Install dependency using `yarn install` command
 - Run server using `yarn start`
