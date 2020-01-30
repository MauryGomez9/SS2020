var userModel ={};

var userCollection = [];
var userTemplate = {
    userEmail:"",
    userPswd:"",
    userCompleteName:"",
    userID:"",
    userDateCreated: null
}

userModel.getALL = ()=>{
    return userCollection;
}

userModel.getById = (id)=>{
    var filteredUsers = userCollection.filter(
        (o, i )=>{
          return o.userID === id;
        }
    );
    if(filteredUsers.length){
        return filteredUsers[0];

    }else{
        return null
    }
}

userCollection.push(
    Object.assign(
        {},
        userTemplate,
        {
            userEmail:"mauriciogotze.9@yahoo.com",
            userPswd:"12345",
            userCompleteName: "Edilson Mauricio",
            userID: 1,
            userDateCreated: new Date().getTime()
        }
    )
);