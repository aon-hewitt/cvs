
var platform;
var repository;
var branch;
var node;
var repositoryId = '0da4c0b255d99e3fea3a';
var branchId = '93ac3d94f366fcaa21c5';
 var schemaSource;
var optionsSource;
var dataSource;
//var pageIdToLoad = "21f5c2a082ab59f6391b";
var pageIdToLoad;
var username;
var password;
var nData= new Array();
var pages = [];
var authorizationHeader;
var ContainerId='85392d705ff0c4e25d99';
var now = new Date();
var projectId = '7ed2d5fbd98cabe9eb61';

//var applicationId = '6af9084e0eec8c4756c6'; // to be provided for cvs app
var applicationId = '6d5aa7e34b8be727b8d5'; 
var workflowId = 'cvsWorkflow';
//var emailProviderId = '0ebca2d0dcc9590dc9ae'; // from cvs app
var emailProviderId = '6b1b6a8e002d85bb28bd';
var globaLanguage = 'English';
var draftNodeId;
var config;

var en_actualJson=[
 {"id":"1","title": "Medical and Prescription (Most U.S. Locations)"}, {"id":"2","title": "Medical and Prescription (California)"}, {"id":"3","title": "Medical and Prescription (Dallas)"}, {"id":"4","title": "Medical and Prescription (Phoenix)"}, {"id":"5","title": "Medical and Prescription (Chicago)"}, {"id":"6","title": "Medical and Prescription (Georgia)"},{"id":"7","title": "Medical and Prescription (Houston)"},{"id":"8","title": "Medical and Prescription (MD/VA/D.C.)"},{"id":"9","title": "Medical and Prescription (San Antonio)"}]
var en_relatedJson=["Medical and Prescription (Most U.S. Locations)","Medical and Prescription (California)","Medical and Prescription (Dallas)","Medical and Prescription (Phoenix)", {"id":"6","title": "Medical and Prescription (Georgia)"},{"id":"7","title": "Medical and Prescription (Houston)"},{"id":"8","title": "Medical and Prescription (MD/VA/D.C.)"},{"id":"9","title": "Medical and Prescription (San Antonio)"}]


var sp_actualJson=[
 {"id":"1","title": "Planes médicos y de medicamentos por receta  (La mayoría de las localidades de Estados)"}, {"id":"2","title": "Planes médicos y de medicamentos por receta  (California)"}, {"id":"3","title": "Planes médicos y de medicamentos por receta (Dallas)"}, {"id":"4","title": "Planes médicos y de medicamentos por receta (California)"},{"id":"5","title": "Planes médicos y de medicamentos por receta (Chicago)"},{"id":"6","title": "Planes médicos y de medicamentos por receta (Geogia)"},{"id":"7","title": "Planes médicos y de medicamentos por receta (San Antonio)"},{"id":"8","title": "Planes médicos y de medicamentos por receta (Houston)"},{"id":"9","title": "Planes médicos y de medicamentos por receta (MD/VA/D.C.)"}]
var sp_relatedJson=["Planes médicos y de medicamentos por receta  (La mayoría de las localidades de Estados))","Planes médicos y de medicamentos por receta  (California)","Planes médicos y de medicamentos por receta (Dallas)","Planes médicos y de medicamentos por receta (Phoenix)",{"id":"5","title": "Planes médicos y de medicamentos por receta (Chicago)"},{"id":"6","title": "Planes médicos y de medicamentos por receta (Geogia)"},{"id":"7","title": "Planes médicos y de medicamentos por receta (San Antonio)"},{"id":"8","title": "Planes médicos y de medicamentos por receta (Houston)"},{"id":"9","title": "Planes médicos y de medicamentos por receta (MD/VA/D.C.)"}]



function checkCred(){

 $("#loginContainer").append('<div id="dialog" title="Please Log In."><label>Username:</label> <input id="txtUsername" name="txtUsername" type="text"><label>Password:</label> <input id="txtPassword" name="txtPassword" type="password"><input id="submitButton" onclick="getPage()" name="Submit" type="button" value="Submit"><label id="lblLoginLable"></label></div>');
        $("#dialog").dialog({
            modal: true,
            draggable: false,
            width: "auto",
            position: {
                my: "top",
                at: "center",
                of: window
            },
            create: function(event, ui) {
                $(this).css("maxWidth", "350px");
            }

        });
}

//Switching from local developement to production will require switching config objects
//getPage(showForm);
function getConfig(){
    username = $("#txtUsername").val();
    password = $("#txtPassword").val();

 config = {
        "clientKey": "35b028e7-1f30-47fe-8574-d7ffca4ca967",
        "clientSecret": "TsPd9+05+Gmz9mrv40/pJ7rE6v3h5nw78vE5mo+iDAAcA6R2IlwngWll+xcXl+pgy38+6//boG1LeAw5deRSQccka0xxU5ZUgRQx5FAf7pY=",
        "username": username,
        "password": password,
        "baseURL": "https://api.cloudcms.com",
        "application": "6af9084e0eec8c4756c6"
    };/*
    config = {
                   "username": username,
                 "password": password,
                  "baseURL": "/proxy"
     }*/
 //  $("#dialog").dialog("close");
    Gitana.connect(config, function(err) {
        if (err) {
            
        }
    }).then(function() {

        platform = this; 
        this.readRepository(repositoryId).then(function() {
            repository = this;
 
            this.readBranch(branchId).then(function() {
                branch = this;         
                
                 /* node = this.readNode(pageIdToLoad).then(function () {
                    callback && callback();
                });*/

            });
        });

       

    });
}

function getPage(callback) {
   
    username = $("#txtUsername").val();
    password = $("#txtPassword").val();
    config   = {
        "clientKey": "35b028e7-1f30-47fe-8574-d7ffca4ca967",
        "clientSecret": "TsPd9+05+Gmz9mrv40/pJ7rE6v3h5nw78vE5mo+iDAAcA6R2IlwngWll+xcXl+pgy38+6//boG1LeAw5deRSQccka0xxU5ZUgRQx5FAf7pY=",
       // "username": "06fa5ef3-2815-4c06-90b8-936188d17cb1",
        //"password": "roY8ZcOnEKbM5ns8a8qjCJg+xXEdyDslz4Ta4EKGWXNKsqjN2ty2yDJ7BJRYEVPjo0MEryrzHCoTsQET23f2Oe8CNqkcY3fGuYlmjOIfcDs=",
        "username":username,
        "password":password,
        "baseURL": "https://api.cloudcms.com",
        "application": "6af9084e0eec8c4756c6"
    };
    /*
    config = {
                   "username": username,
                 "password": password,
                  "baseURL": "/proxy"

     }*/

    Gitana.connect(config).then(function () {
           platform = this; 
        this.readRepository(repositoryId).then(function () {
            this.readBranch('master').then(function () {
                branch = this;
                var query = {
                     "flag": 'cvsPage1',
                    "_type": { "$in": ["custom:specialpag0"] }
                };
                var pagination = {
                    "sort": {
                        "priority": 0
                    },
                    "limit": 9999
                };
                $("#dialog").dialog("close");
                var newData_page= new Array(); 
                branch.queryNodes(query, pagination).then(function () {
                    totalObjects = this.__size();
                    console.log("Total pages retrieved: " + totalObjects);
                }).each(function () {
                    pages.push(this);
                    console.log(this._doc + " added to Array");
                    var fileldValues = {};
                    if(this.flag != "cvsPage1Draft"){
                        fileldValues['key']= this.title;
                        fileldValues['titles']= this.getId(); 
                        fileldValues['tileId']= this.tileId; 
                        fileldValues['startDate']= this.startDate; 
                        fileldValues['endDate']= this.endDate;                            
                    } 
                    newData_page.push(fileldValues);
                })
                .then(function () {
                    sessionStorage.setItem("pages", JSON.stringify(pages));  
                    authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
                    getPageDetails(newData_page); 
                    
                });
 
            })//ends read branch
        })//read repository
    });//ends config
  
}

function getImages(val){
    username = $("#txtUsername").val();
    password = $("#txtPassword").val();

   config = {
        "clientKey": "35b028e7-1f30-47fe-8574-d7ffca4ca967",
        "clientSecret": "TsPd9+05+Gmz9mrv40/pJ7rE6v3h5nw78vE5mo+iDAAcA6R2IlwngWll+xcXl+pgy38+6//boG1LeAw5deRSQccka0xxU5ZUgRQx5FAf7pY=",
       // "username": "06fa5ef3-2815-4c06-90b8-936188d17cb1",
       // "password": "roY8ZcOnEKbM5ns8a8qjCJg+xXEdyDslz4Ta4EKGWXNKsqjN2ty2yDJ7BJRYEVPjo0MEryrzHCoTsQET23f2Oe8CNqkcY3fGuYlmjOIfcDs=",
        "username":username,
        "password":password,
        "baseURL": "https://api.cloudcms.com",
        "application": "6af9084e0eec8c4756c6"
    };/*
    config = {
                   "username": username,
                 "password": password,
                  "baseURL": "/proxy"
     }*/
   $("#dialog").dialog("close");
    Gitana.connect(config, function(err) {
        if (err) {
            
        }
    }).then(function() {

        platform = this; 
        this.readRepository(repositoryId).then(function() {
            repository = this; 
            this.readBranch(branchId).then(function() {
                branch = this;  
                var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
                    
                    ct="https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/85392d705ff0c4e25d99/attachments" ;
                    $.ajax({
                        type: "GET",
                        url: ct, 
                        headers: {
                            authorization: authorizationHeader
                        },
                        success: function (response) {
                            var count=0; 
                            var newData= new Array();
                            var imgHtml= '';
                            var strHtml='';
                             $(".images").html('');
                             $(".thumbs").html('');
                             $(".images1").html('');
                             $(".thumbs1").html('');

                            var attachUrl ='https://a980f94f-6083-4374-8d7f-9a4a9f042a9b-hosted.cloudcms.net/static/test.pdf?repositories=0da4c0b255d99e3fea3a&branches=93ac3d94f366fcaa21c5&node=85392d705ff0c4e25d99&attachment=';
                            for ( var i=0; i < response['rows'].length; i++){
                                var data_arr={};
                                x= response['rows'][i];                               
                                
                                if(x['filename'].substr(x['filename'].indexOf('.')+1) == 'jpg' || x['filename'].substr(x['filename'].indexOf('.')+1) == 'png') {
                                     
                                    data_arr ['pic'] = count;
                                    data_arr ['ar'] = ct + '/' + x['attachmentId'];
                                    data_arr ['cpy'] = ct + '/' + x['filename'];
                                    data_arr['imageId']=x['attachmentId'];
                                    newData.push(data_arr);
                                    count++;
                                    
                                    if(count==1){
                                        imgHtml +='<div class="image active"><div class="content" style="background-image: url('+ attachUrl + '/'+ x['attachmentId'] +')"></div></div>';
                                        strHtml +='<div class="thumb active" title=" '+ x['attachmentId']+'" style="background-image: url('+ attachUrl + '/'+x['attachmentId'] +')"></div>';
                                           
                                    }else{
                                        imgHtml +='<div class="image"><div class="content" style="background-image: url('+ attachUrl + '/'+ x['attachmentId'] +')"></div></div>';
                                        strHtml +='<div class="thumb" title=" '+ x['attachmentId']+'" style="background-image: url('+ attachUrl + '/'+x['attachmentId'] +')"></div>';
                                        
                                    }   
                                }                                    
                            }
                           
                   

                               $(function () {
                                    $(".images").append(imgHtml);
                                    $(".thumbs").append(strHtml);                                
                                }); 
                          
                            document.cookie = "image_data =" + JSON.stringify(newData);                           
                        }
                    });
            });
        });
         

       

    });

   
} 
//This is form upload scripting here--------------------------------------------
function getAttachments(attach){
     username = $("#txtUsername").val();
    password = $("#txtPassword").val();

  config = {
        "clientKey": "35b028e7-1f30-47fe-8574-d7ffca4ca967",
        "clientSecret": "TsPd9+05+Gmz9mrv40/pJ7rE6v3h5nw78vE5mo+iDAAcA6R2IlwngWll+xcXl+pgy38+6//boG1LeAw5deRSQccka0xxU5ZUgRQx5FAf7pY=",
       // "username": "06fa5ef3-2815-4c06-90b8-936188d17cb1",
       // "password": "roY8ZcOnEKbM5ns8a8qjCJg+xXEdyDslz4Ta4EKGWXNKsqjN2ty2yDJ7BJRYEVPjo0MEryrzHCoTsQET23f2Oe8CNqkcY3fGuYlmjOIfcDs=",
        "username":username,
        "password":password,
        "baseURL": "https://api.cloudcms.com",
        "application": "6af9084e0eec8c4756c6"
    };/*
    config = {
                   "username": username,
                 "password": password,
                  "baseURL": "/proxy"
     }*/
   $("#dialog").dialog("close");
    Gitana.connect(config, function(err) {
        if (err) {
            
        }
    }).then(function() {

        platform = this; 
        this.readRepository(repositoryId).then(function() {
            repository = this; 
            this.readBranch(branchId).then(function() {
                branch = this;  

                /*attach/preview image*/
                if(attach == 'images'){
                    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
                    
                    ct="https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/85392d705ff0c4e25d99/attachments" ;
                    $.ajax({
                        type: "GET",
                        url: ct, 
                        headers: {
                            authorization: authorizationHeader
                        },
                        success: function (response) {
                            var count=0; 
                            var newData= new Array();
                            var imgHtml= '';
                            var strHtml='';
                              

                            var attachUrl ='https://a980f94f-6083-4374-8d7f-9a4a9f042a9b-hosted.cloudcms.net/static/test.pdf?repositories=0da4c0b255d99e3fea3a&branches=93ac3d94f366fcaa21c5&node=85392d705ff0c4e25d99&attachment=';
                            for ( var i=0; i < response['rows'].length; i++){
                                var data_arr={};
                                x= response['rows'][i];                               
                                
                                if(x['filename'].substr(x['filename'].indexOf('.')+1) == 'jpg' || x['filename'].substr(x['filename'].indexOf('.')+1) == 'png') {
                                     
                                    data_arr ['pic'] = count;
                                    data_arr ['ar'] = attachUrl + '/' + x['attachmentId'];
                                    data_arr ['cpy'] = attachUrl + '/' + x['filename'];
                                    data_arr['imageId']=x['attachmentId'];
                                    newData.push(data_arr);
                                    count++; 
                                }    
                                   

                            }                      
                            if(count > 0){ 
                                $("#imgtbl").css('display','block');
                                $("#frmeditSubmitForm5").css('display','none');
                                $("#imgtbl").alpaca({
                                    "data": JSON.stringify(newData),
                                 "schema": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "pic": {
                                                "type": "string",
                                                "title": "Pic"
                                            },    

                                            "ar": {
                                                "type": "string",
                                                "title": "Images"
                                            }, "cpy": {
                                                "type": "string",
                                                "title": "Images"
                                            },  
                                            "imageId":{
                                                "type": "string",
                                                "title": "ImageId"
                                            },                                                                                           
                                            "delete": {
                                                "type": "boolean",
                                                "title": "Delete"
                                            }
                                             
                                        }
                                    }
                                    }, 
                                    "options": {
                                           "type": "table",
                                            "showActionsColumn": false,  
                                             "items": {
                                                 "fields":{
                                                    "pic":{
                                                        "type":"hidden"
                                                     },  
                                                     "cpy":{
                                                        "type":"hidden"
                                                     },                          
                                                    "ar": {
                                                        "type": "image",                                  
                                                         "view": "bootstrap-display",
                                                        "height":"60",
                                                        "width":"60"
                                                    },
                                                    "imageId":{
                                                        "type":"hidden"
                                                    }
                                                }  
                                            },
    
                                            "form": {
                                                "buttons": {
                                                      "addRow": {
                                                        "title": "Upload New Image",
                                                        "click": function() {
                                                            $(".uploadIm").css('display','none');
                                                             $("#frmeditSubmitForm5").css('display','block');
                                                             $("#imgtbl").css('display','none');
                                                        }
                                                    },
                                                    "submit": {
                                                         "click": function() {
                                                        var value = this.getValue();                        
                                                        for ( var i=0; i < value.length;i++) { 
                                                            
                                                            if(value[i].delete==true){
                                                                if(type=='image'){
                                                                    console.log(value[i])
                                                                    ct_del=value[i].imageId ;
                                                                    ct="https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/85392d705ff0c4e25d99/attachments/" + ct_del;
                                                                    console.log(ct);
                                                                    $.ajax({                                                                       
                                                                        url: ct, 
                                                                        type: 'delete', 
                                                                        headers: {
                                                                           authorization: authorizationHeader
                                                                        },
                                                                        success: function (response) {
                                                                            alert('Image has been deleted successfully');
                                                                            location.reload();
                                                                         
                                                                        },
                                                                        error: function(jqXHR, textStatus, errorThrown) { 
                                                                              console.log(jqXHR + "---" + textStatus + '//' + errorThrown);
                                                                        }
                                                                    }); 
                                                                }
                                                                                             
                                                           }

                                                        }   
                                                    }
                                                    }
                                                }
                                            }
                                            
                                    },
                                    "postRender": function() {                                               
                                       
                                       
                                    }
                                });
                            }   
                            document.cookie = "image_data =" + JSON.stringify(newData);                           
                        }
                    }); 
                }
                /**/
                else{
                    
                    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];                    
                    ct="https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/85392d705ff0c4e25d99/attachments" ;
                    $.ajax({
                        type: "GET",
                        url: ct, 
                        headers: {
                            authorization: authorizationHeader
                        },
                        success: function (response) {
                            var count=0; 
                            var newData= new Array();
                            var imgHtml= '';
                            var strHtml='';
                              

                            var attachUrl ='https://a980f94f-6083-4374-8d7f-9a4a9f042a9b-hosted.cloudcms.net/static/test.pdf?repositories=0da4c0b255d99e3fea3a&branches=93ac3d94f366fcaa21c5&node=85392d705ff0c4e25d99&attachment=';
                            for ( var i=0; i < response['rows'].length; i++){
                                var data_arr={};
                                x= response['rows'][i];                               
                                
                                if(x['filename'].substr(x['filename'].indexOf('.')+1) == 'pdf' || x['filename'].substr(x['filename'].indexOf('.')+1) == 'xlxs') {
                                     
                                    data_arr ['pic'] = count;
                                    data_arr ['ar'] = attachUrl + '/' + x['attachmentId'];
                                    data_arr ['cpy'] = attachUrl + '/' + x['filename'];
                                    data_arr['imageId']=x['attachmentId'];
                                    newData.push(data_arr);
                                    count++; 
                                }    
                                   

                            }                      
                            if(count > 0){ 
                                $("#imgdoc").css('display','block');
                                $("#frmeditSubmitForm5").css('display','none');
                                $("#imgdoc").alpaca({
                                    "data": JSON.stringify(newData),
                                 "schema": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                             "cpy": {
                                                "type": "string",
                                                "title": "Images"
                                            },  
                                            "imageId":{
                                                "type": "string",
                                                "title": "ImageId"
                                            } 
                                             
                                        }
                                    }
                                    }, 
                                    "options": {
                                           "type": "table",
                                            "showActionsColumn": false,  
                                             "items": {
                                                 "fields":{
                                                       
                                                     "cpy":{
                                                        "type":"hidden"
                                                     },
                                                    "imageId":{
                                                        "type":"hidden"
                                                    }
                                                }  
                                            },
    
                                            "form": {
                                                "buttons": {
                                                      "addRow": {
                                                        "title": "Upload New Document",
                                                        "click": function() {
                                                            $(".uploadIm").css('display','none');
                                                             $("#frmeditSubmitForm5").css('display','block');
                                                             $("#imgdoc").css('display','none');
                                                        }
                                                    },
                                                    "submit": {
                                                         "click": function() {
                                                        var value = this.getValue();                        
                                                        for ( var i=0; i < value.length;i++) { 
                                                            
                                                             

                                                        }   
                                                    }
                                                    }
                                                }
                                            }
                                            
                                    },
                                    "postRender": function() {                                               
                                       
                                       
                                    }
                                });
                            }   
                            document.cookie = "image_data =" + JSON.stringify(newData);                           
                        }
                    }); 
                }
            });
        });
         

       

    });

   
 

}
function getPageDetails(nPageData){
    //nPageData= nPageData.filter(Boolean);
    //nPageData = nPageData.filter(e => String(e).trim());
 
    var index = -1,
        arr_length = nPageData ? nPageData.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = nPageData[index];
        console.log(value['key'])
        if (value['key'] != undefined ) {
            result[++resIndex] = value;
        }
    }

    nPageData = result;
    $("#tileDisp").html('');
    /* list existing page */ 
    $("#tileDisp").alpaca({
        "data": nPageData,
        "schema": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "key": {
                        "type": "string",
                        "title": "PageName"
                    },
                    "titles":{
                        "type": "string",
                        "title": "Titles"
                    },
                    "startDate":{
                      "type": "string",
                        "title": "startDate",
                        "readonly":true
                    },
                    "endDate":{
                      "type": "string",
                        "title": "endDate",
                        "readonly":true
                    },
                    "edit": {
                        "type": "boolean",
                        "title": "Edit"
                    } ,
                    
                    "delete": {
                        "type": "boolean",
                        "title": "Delete"
                    } 
                }
            }
        },
        "options": {
            "type": "table",
            "showActionsColumn": false,
            "items": {
                "fields":{
                    "titles":{
                        "type":"hidden"
                    },

                }
            },
            "form": {
                "buttons": {
                      "addRow": {
                        "title": "Add New tile",
                        "click": function() {
                            $("#tileDisp").css('display','none');
                            $("#tileDisp1").css('display','block');
                            $("#myform").css('display','none');
                        }
                    },
                    "submit": {
                        "click": function() {
                            var value = this.getValue();                        
                            var cnt=0;
                            //loop to check if multipages selected
                            for ( var i=0; i < value.length;i++) {
                               if(value[i].edit==true){          
                                    cnt++;
                               }else if(value[i].delete ==true){          
                                    cnt++;
                               }
                            }
                             if( cnt == 1 ){
                                for ( var i=0; i < value.length;i++) {
                                   if(value[i].edit==true){     
                                        loadPage(value[i].titles);
                                       
                                   }
                                    if(value[i].delete==true){   
                                        node = branch.readNode(value[i].titles).then(function () {                                        
                                            node.del().then(function () {
                                             alert("Page deleted successfully.");
                                             $("#myform").html('');
                                             $("#tileDisp").html('');
                                             getPage();
                                            });
                                        });
                                    } 
                                }
                             }else{
                                 alert('Please select only one page to update.');
                             }   
                        }
                    }
                }
            }
        }
    });
   

    var multiSelect ='';
    var hours ='';
    var locations='';
    document.cookie ="tileExists=" + false;  
    //add new page
   $("#tileDisp1").alpaca({
       "view": "bootstrap-edit",
        "data": node,
       "schema": {
                "title": "Edit Tile",
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string",
                        "title": "title"
                    },
                    "section": {
                        "type": "string",
                        "title": "Section",
                        "enum": ["Learn","Decide","Enroll"]
                    },               
                    "population": {
                         "type": "string",
                        "title": "Population",
                        "enum": ["Most US Locations", "California","Dallas", "Hawaii","Phoenix","Puerto Rico","Chicago","Georgia","Houston","San Antonio","MD/VA/D.C."],
                        "required":true
                    },
                    "language": {
                        "type": "string",
                        "title": "Language",
                        "enum": ["English","Spanish"],
                        "required":true
                    },
                    "hours": {
                        "type": "string",
                        "title": "Hours",
                        "enum": ["Full-time","Part-time"],
                        "required":true
                    },
                    "startDate": {                    
                        "format":"date" 
                    },
                    "endDate": {
                        "format":"date" 
                    },
                    "bgImage": {
                        "type": "boolean",
                        "title": "Background Image"
                    },
                    "imageURL": {
                        "type": "string",
                        "title": "imageURL",
                        "readonly":true
                    },
                   "existingImage":{
                        "title": "Choose image",
                        "type": "string" 
                    },
                      
                    "color": {
                        "type": "string",
                        "title": "Color",
                        "enum": ["cvs-babyblue","cvs-darkgray","cvs-green","cvs-icon-gray","cvs-icon-green","cvs-icon-red","cvs-icon-turq","cvs-img","cvs-lightgray","cvs-medgray","cvs-navy","cvs-orange","cvs-pink","cvs-red","cvs-turq","cvs-yellow","logo"]
                    },
                    "previewTile":{
                        "title":"Preview Home page Tile",
                        "type":"string"
                    },
                    "tags": {
                        "type": "string",
                        "title": "Tags"
                    },
                    "body": {
                        "type": "string",
                        "title": "MainBody",
                        "required":true
                    },
                    "accordions": {
                        "type": "array",
                        "title": "Accordions",
                        "items": {
                            "properties": {
                                "accordionHeader": {
                                    "type": "string",
                                    "title": "Accordion Header"
                                },
                                "accordionBody": {
                                      "type": "string",
                                    "title": "Accordion Body"                    
                                }
                            },
                            "type": "object"
                        }
                    },
                    "extRelate": {
                        "type": "string",
                        "title": "New Related" 
                    },
                    "allRelated":{
                        "type": "string",
                        "title": "Existing Related IDs",
                        "readonly":true

                    }
                },  
                "_parent": "n:node",
                "description": "custom:specialpag0",
                "$schema": "http://json-schema.org/draft-04/schema#",         
                "items": {}
            },
        "options": { 
            "form": {
                "buttons":{
                    "submit": {
                        "click": function() {
                            clearTimer();
                           
                            setTimer();  
                          
                            var value = this.getValue();
                            
                            var related_title  = value.allRelated;                               
                            var relatedId = '';
                            //set epoch datetime as number
                            var d = new Date();
                            pgId = ((d.getTime()-d.getMilliseconds())/1000);

                           // var pgId = Math.floor((Math.random() * 1000) + 1);

                            //console.log(multiSelect.toString());
                            var imgBgURL = 'https://a980f94f-6083-4374-8d7f-9a4a9f042a9b-hosted.cloudcms.net/static/test.pdf?repositories=0da4c0b255d99e3fea3a&branches=93ac3d94f366fcaa21c5&node=85392d705ff0c4e25d99&attachment=/';
                            if(value.imageURL != '' || value.imageURL != null){
                                    bgIm = true;
                            }
                            else
                                bgIm =  value.bgImage;            

                            branch.createNode({
                                "title": value.title,
                                "priority": '0',
                                "tileId": pgId.toString(),
                                "flag":"cvsPage1",
                                "section" : value.section,
                                "population" : value.population,
                                "language" : value.language,                                
                                "hours" : value.hours,
                                "startDate" : value.startDate,
                                "endDate" : value.endDate,                                                  
                                "bgImage" : bgIm,
                                "imageURL" : imgBgURL+ value.imageURL,
                                "color" : value.color,
                                "icon" : 'spotlight',
                                "tags" : value.tags,
                                "body" : value.body,
                                "accordions" : value.accordions,
                                "allRelated" :  multiSelect.toString(),                                
                                "_type": 'custom:specialpag0'
                            
                            }).then(function () {
                                alert("Tile Item added successfully.");
                                $("#myform").html("");
                                $("#tileDisp1").html("");
                                $("#tileDisp1").html("");
                                $("#tileDisp1").css('display','none');
                                $("#tileDisp").css('display','block');
                                getPage();
                                document.cookie ="tileCreat=" + false;                           
                                document.cookie ="tileExists=" + true;  
                            }); 
                          
                         }
                    }
                }            
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields":{
                 "title": {
                        "type": "text"
                    }, 
                    "section": {
                       "optionLabels": ["Learn", "Decide", "Enroll"]
                    },
                    "population": {
                        "type":"checkbox",
                        "optionLabels": ["Most US Locations", "California","Dallas", "Hawaii","Phoenix","Puerto Rico","Chicago","Georgia","Houston","San Antonio","MD/VA/D.C."],                        
                        "events":{
                               "change": function(val) {                                  
                                    var language_sel = $('input:radio[name=language]:checked').val();
                                    var location_selected =this.getValue();
                                    locations = this.getValue();
                                    if(language_sel == '' || language_sel == undefined){
                                        language_sel ='english';
                                    }
                                    if(hours == '' || hours == undefined){
                                        hours='full';                                        
                                    }
                                    var allRelated_select=$('[name=extRelate]'); 
                                    allRelated_select[0].innerHTML='';  

                                    var ourData;
                                    var ourRequest = new XMLHttpRequest();
                                  
                                    if(language_sel.toLowerCase() == 'english'){                        
                                            ourRequest.open('GET', 'js/cvs_content.json');
                                    }
                                    else{
                                        ourRequest.open('GET', 'js/cvs_content_sp.json');
                                    }
                                    ourRequest.onload = function () {
                                        if (ourRequest.status >= 200 && ourRequest.status < 400) { 
                                            ourData = JSON.parse(ourRequest.responseText);
                                        } 
                                        if(language_sel == 'English'){
                                            language_sel ='english';
                                        }
                                        if(language_sel == 'Spanish'){
                                            language_sel ='spanish';
                                        }
                                        
                                         var loc_str='';
                                        if(location_selected.indexOf(',')>=0){
                                            var loc_data = location_selected.split(',');
                                           
                                            for(var j=0; j < loc_data.length ; j++) {
                                                if(loc_data[j].indexOf('Cali') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='cali';
                                                    }else{
                                                        loc_str +=',cali';
                                                    }
                                                }
                                             if(loc_data[j].indexOf('Hawa') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hawaii';
                                                    }else{
                                                        loc_str +=',hawaii';
                                                    }
                                                }
                                                if(loc_data[j].indexOf('Dall') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='dal';
                                                    }else{
                                                        loc_str +=',dal';
                                                    }
                                                }
                                                  if(loc_data[j].indexOf('Pho') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='phx';
                                                    }else{
                                                        loc_str +=',phx';
                                                    }
                                                } if(loc_data[j].indexOf('Puert') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='rico';
                                                    }else{
                                                        loc_str +=',rico';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Most') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='most';
                                                    }else{
                                                        loc_str +=',most';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Chic') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='chg';
                                                    }else{
                                                        loc_str +=',chg';
                                                    }
                                                } 
                                                if(loc_data[j].indexOf('Geor') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='grg';
                                                    }else{
                                                        loc_str +=',grg';
                                                    }
                                                }   
                                                if(loc_data[j].indexOf('Hous') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hou';
                                                    }else{
                                                        loc_str +=',hou';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('San An') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='ant';
                                                    }else{
                                                        loc_str +=',ant';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('MD/VA') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='mvd';
                                                    }else{
                                                        loc_str +=',mvd';
                                                    }
                                                }  

                                            }
                                            var location_data =loc_str.split(',');
                                        }else{
                                            var location_data = new Array();
                                            if(location_selected.indexOf('Cali') >=0 ){ 
                                                loc_str ='cali'; 
                                            } if(location_selected.indexOf('Dal') >=0 ){ 
                                                loc_str ='dal';                                                 
                                            } if(location_selected.indexOf('Pho') >=0 ){
                                                    loc_str ='phx';
                                            } if(location_selected.indexOf('Most') >=0 ){
                                                loc_str ='most';
                                            } if(location_selected.indexOf('Hawa') >=0 ){                                              
                                                loc_str ='hawaii';
                                            } if(location_selected.indexOf('Puer') >=0 ){                                              
                                                loc_str ='rico';
                                            }if(location_selected.indexOf('Chic') >=0 ){                                              
                                                loc_str ='chg';
                                            }if(location_selected.indexOf('Geor') >=0 ){                                              
                                                loc_str ='grg';
                                            }if(location_selected.indexOf('Hous') >=0 ){                                              
                                                loc_str ='hou';
                                            }if(location_selected.indexOf('San An') >=0 ){                                              
                                                loc_str ='ant';
                                            }if(location_selected.indexOf('MD/VA') >=0 ){                                              
                                                loc_str ='mvd';
                                            }
                                            location_data[0]=loc_str; 
                                        } 
                                        var hr='';

                                        if(hours.indexOf(',')>=0){
                                            var hr_data = hours.split(',');
                                           
                                            for(var j=0; j < hr_data.length ; j++) {
                                                if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                    if(hr == ''){
                                                        hr ='full';
                                                    }else{
                                                        hr +=',full';
                                                    }
                                                }
                                             if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                    if(hr == ''){
                                                        hr ='part';
                                                    }else{
                                                        hr +=',part';
                                                    }
                                                }
                                                 
                                            }
                                            var hr_data =hr.split(',');
                                        }else{
                                            var hr_data = new Array();
                                       
                                            if(hours.toLowerCase().indexOf('full') >= 0 ){ 
                                                hr ='full'; 
                                            } if(hours.toLowerCase().indexOf('part') >=0 ){ 
                                                hr ='part';                                                 
                                            } 
                                            hr_data[0]=hr; 
                                        } 
                                        
                                        tile_data  =[];
                                        for(var x=0; x< ourData.length ; x++){
                                            var lan=0;
                                            var lang= ourData[x].language;
                                            if(lang == language_sel){
                                                 lan++;
                                                    var loc = 0;            
                                                    if ((ourData[x].location.length) >= 1) {
                                                        for (j = 0; j < ourData[x].location.length; j++) {
                                                            for(var l =0; l <location_data.length ;l++){
                                                                if (location_data[l] === ourData[x].location[j]) {
                                                                    loc++;
                                                                }
                                                            }
                                                        }
                                                    } 
                                                    var stat = 0;
                                                    if ((ourData[x].status.length) >= 1) {
                                                        for (j = 0; j < ourData[x].status.length; j++) {
                                                            for(var l =0; l <hr_data.length ;l++){
                                                                if (hr_data[l] === ourData[x].status[j]) {
                                                                    stat++;
                                                                }    
                                                            }
                                                        }
                                                    }

                                            } 
                                            title='';
                                            
                                            if(ourData[x].title.indexOf("(") < 0){
                                                if(ourData[x].filename.indexOf('-m-') >=0 ){
                                                     title = ourData[x].title + " (Most US Locations)";     
                                                }
                                                else if(ourData[x].filename.indexOf('-h-') >=0 ){
                                                     title = ourData[x].title + " (Hawaii)";  
                                                }
                                                else if(ourData[x].filename.indexOf('-c-') >=0 ){
                                                     title = ourData[x].title + " (California)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-d-') >=0 ){
                                                     title = ourData[x].title + " (Dallas)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-p-') >=0 ){
                                                     title = ourData[x].title + " (Phoenix)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-r-') >=0 ){
                                                     title = ourData[x].title + " (Puerto Rico)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-mvd-') >=0 ){
                                                     title = ourData[x].title + " (MD/VA/D.C.)";                                                                                                          
                                                }  
                                                else if(ourData[x].filename.indexOf('-chg-') >=0 ){
                                                     title = ourData[x].title + " (Chicago)";                                                                                                          
                                                }  
                                                else if(ourData[x].filename.indexOf('-grg-') >=0 ){
                                                     title = ourData[x].title + " (Georgia)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-ant-') >=0 ){
                                                     title = ourData[x].title + " (San Antonio)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-hou-') >=0 ){
                                                     title = ourData[x].title + " (Houston)";                                                                                                          
                                                }  else{ 
                                                    title = ourData[x].title;
                                                }

                                            }else{
                                                  title = ourData[x].title;                                                                                                            
                                            }
                                            
                                            if (lan > 0 && loc > 0 && stat > 0) {                                              

                                                tile_data.push(
                                                { 
                                                    "id": ourData[x].id, 
                                                     "title": title 
                                                }); 
                                            }
                                        } 
                                        tile= getUniqueValuesOfKey(tile_data,'title');
                                        
                                        var selectHTML="";
                                        for(i=0; i<tile.length; i++){
                                           selectHTML+= "<option value='"+tile[i]['id']+"'>"+tile[i]['title']+"</option>";
                                        }    
                                        
                                        allRelated_select[0].innerHTML= selectHTML;
                                    }
                                    ourRequest.onerror = function () {
                                        console.log("Connection error");
                                    };
                                    ourRequest.send();
                                }
                        }
                    },
                    "language": {
                        "optionLabels": ["English","Spanish"],
                        "events":{
                             "click": function() {
                                    var language_sel = this.getValue().toLowerCase();
                                
                                    var location_selected =locations; 
                                    var ourRequest = new XMLHttpRequest(); 
                                    if(language_sel == 'english'){                        
                                            ourRequest.open('GET', 'js/cvs_content.json');
                                    }
                                    else{
                                        ourRequest.open('GET', 'js/cvs_content_sp.json');
                                    }
                                    ourRequest.onload = function () {
                                        if (ourRequest.status >= 200 && ourRequest.status < 400) { 
                                            ourData = JSON.parse(ourRequest.responseText);
                                        }  
                                        
                                         var loc_str='';
                                        if(location_selected.indexOf(',')>=0){
                                            var loc_data = location_selected.split(',');
                                           
                                            for(var j=0; j < loc_data.length ; j++) {
                                                if(loc_data[j].indexOf('Cali') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='cali';
                                                    }else{
                                                        loc_str +=',cali';
                                                    }
                                                }
                                             if(loc_data[j].indexOf('Hawa') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hawaii';
                                                    }else{
                                                        loc_str +=',hawaii';
                                                    }
                                                }
                                                if(loc_data[j].indexOf('Dall') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='dal';
                                                    }else{
                                                        loc_str +=',dal';
                                                    }
                                                }
                                                  if(loc_data[j].indexOf('Pho') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='phx';
                                                    }else{
                                                        loc_str +=',phx';
                                                    }
                                                } if(loc_data[j].indexOf('Puert') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='rico';
                                                    }else{
                                                        loc_str +=',rico';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Most') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='most';
                                                    }else{
                                                        loc_str +=',most';
                                                    }
                                                }  
                                                 if(loc_data[j].indexOf('Chic') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='chg';
                                                    }else{
                                                        loc_str +=',chg';
                                                    }
                                                } 
                                                if(loc_data[j].indexOf('Hous') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hou';
                                                    }else{
                                                        loc_str +=',hou';
                                                    }
                                                } 
                                                if(loc_data[j].indexOf('Geor') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='grg';
                                                    }else{
                                                        loc_str +=',grg';
                                                    }
                                                } 
                                                if(loc_data[j].indexOf('San An') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='ant';
                                                    }else{
                                                        loc_str +=',ant';
                                                    }
                                                } 
                                                if(loc_data[j].indexOf('MD/VA') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='mvd';
                                                    }else{
                                                        loc_str +=',mvd';
                                                    }
                                                } 

                                            }
                                            var location_data =loc_str.split(',');
                                        }else{
                                            var location_data = new Array();
                                            if(location_selected.indexOf('Cali') >=0 ){ 
                                                loc_str ='cali'; 
                                            } if(location_selected.indexOf('Dal') >=0 ){ 
                                                loc_str ='dal';                                                 
                                            } if(location_selected.indexOf('Pho') >=0 ){
                                                    loc_str ='phx';
                                            } if(location_selected.indexOf('Most') >=0 ){
                                                loc_str ='most';
                                            } if(location_selected.indexOf('Hawa') >=0 ){                                              
                                                loc_str ='hawaii';
                                            } if(location_selected.indexOf('Puer') >=0 ){                                              
                                                loc_str ='rico';
                                            }if(location_selected.indexOf('Chic') >=0 ){                                              
                                                loc_str ='chg';
                                            }
                                            if(location_selected.indexOf('Geor') >=0 ){                                              
                                                loc_str ='grg';
                                            }
                                            if(location_selected.indexOf('Hous') >=0 ){                                              
                                                loc_str ='hou';
                                            }
                                            if(location_selected.indexOf('San An') >=0 ){                                              
                                                loc_str ='ant';
                                            }
                                            if(location_selected.indexOf('MD/VA') >=0 ){                                              
                                                loc_str ='mvd';
                                            }

                                           location_data[0]= loc_str;
                                        }
                                        var hr='';
                                        if(hours.indexOf(',')>=0){
                                            var hr_data = hours.split(',');
                                           
                                            for(var j=0; j < hr_data.length ; j++) {
                                                if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                    if(hr == ''){
                                                        hr ='full';
                                                    }else{
                                                        hr +=',full';
                                                    }
                                                }
                                             if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                    if(hr == ''){
                                                        hr ='part';
                                                    }else{
                                                        hr +=',part';
                                                    }
                                                }
                                                 
                                            }
                                            var hr_data =hr.split(',');
                                        }else{
                                            var hr_data = new Array();
                                            if(hours.toLowerCase().indexOf('full') >=0 ){ 
                                                hr ='full'; 
                                            } if(hours.toLowerCase().indexOf('part') >=0 ){ 
                                                hr ='part';                                                 
                                            } 
                                            hr_data[0]=hr; 
                                        }  
                                        tile_data  =[];
                                        for(var x=0; x< ourData.length ; x++){
                                            var lan=0;
                                            var lang= ourData[x].language;
                                            if(lang == language_sel){
                                                 lan++;
                                                    var loc = 0;            
                                                    if ((ourData[x].location.length) >= 1) {
                                                        for (j = 0; j < ourData[x].location.length; j++) {
                                                            for(var l =0; l <location_data.length ;l++){
                                                                if (location_data[l] === ourData[x].location[j]) {
                                                                    loc++;
                                                                }
                                                            }
                                                        }
                                                    } 
                                                    var stat = 0;
                                                    if ((ourData[x].status.length) >= 1) {

                                                        for (j = 0; j < ourData[x].status.length; j++) {
                                                            for(var l =0; l <hr_data.length ;l++){
                                                                if (hr_data[l] === ourData[x].status[j]) {
                                                                    stat++;
                                                                }    
                                                            }
                                                        }
                                                    }

                                            } 
                                               title='';
                                            
                                                if(ourData[x].title.indexOf("(") < 0){
                                                    if(ourData[x].filename.indexOf('-m-') >=0 ){
                                                         title = ourData[x].title + " (Most US Locations)";     
                                                    }
                                                    else if(ourData[x].filename.indexOf('-h-') >=0 ){
                                                         title = ourData[x].title + " (Hawaii)";  
                                                    }
                                                    else if(ourData[x].filename.indexOf('-c-') >=0 ){
                                                         title = ourData[x].title + " (California)";                                                    
                                                     
                                                    }
                                                    else if(ourData[x].filename.indexOf('-d-') >=0 ){
                                                         title = ourData[x].title + " (Dallas)";                                                    
                                                     
                                                    }
                                                    else if(ourData[x].filename.indexOf('-p-') >=0 ){
                                                         title = ourData[x].title + " (Phoenix)";                                                    
                                                     
                                                    }
                                                    else if(ourData[x].filename.indexOf('-r-') >=0 ){
                                                         title = ourData[x].title + " (Puerto Rico)";                                                                                                          
                                                    }  
                                                    else if(ourData[x].filename.indexOf('-chg-') >=0 ){
                                                         title = ourData[x].title + " (Chicago)";                                                                                                          
                                                    } 
                                                    else if(ourData[x].filename.indexOf('-ant-') >=0 ){
                                                         title = ourData[x].title + " (San Antonio)";                                                                                                          
                                                    }  
                                                    else if(ourData[x].filename.indexOf('-grg-') >=0 ){
                                                         title = ourData[x].title + " (Georgia)";                                                                                                          
                                                    }  
                                                    else if(ourData[x].filename.indexOf('-hou-') >=0 ){
                                                         title = ourData[x].title + " (Houston)";                                                                                                          
                                                    } 
                                                    else if(ourData[x].filename.indexOf('-mvd-') >=0 ){
                                                         title = ourData[x].title + " (MD/VA/D.C.)";                                                                                                          
                                                    } else{ 
                                                    title = ourData[x].title;
                                                    }
                                                }else{
                                                      title = ourData[x].title;                                                                                                            
                                                }
                                            if (lan > 0 && loc > 0 && stat > 0) {
                                                tile_data.push(
                                                { 
                                                    "id": ourData[x].id, 
                                                     "title": title
                                                }); 
                                            }
                                        }
                     

                                        var selectHTML="";
                                        for(i=0; i<tile_data.length; i++){
                                           selectHTML+= "<option value='"+tile_data[i]['id']+"'>"+tile_data[i]['title']+"</option>";
                                        }   

                                        var allRelated_select=$('[name=extRelate]');                        
                                          allRelated_select[0].innerHTML= selectHTML;
                                    }
                                    ourRequest.onerror = function () {
                                      console.log("Connection error");
                                    };
                                    ourRequest.send();
                            }
                        }
                    },
                    "hours": {
                        "type":"checkbox",
                        "optionLabels": ["Full-time","Part-time"],
                         "events":{
                            "change": function() {
                                    var language_sel = $('input:radio[name=language]:checked').val();
                                    hours = this.getValue();                                    

                                    if(language_sel == '' || language_sel == undefined){
                                        language_sel = 'english';
                                    }else{
                                        language_sel = language_sel.toLowerCase();
                                    }
                                    if(locations == '' || locations== undefined){
                                        location_selected ='most';
                                    }else{
                                        location_selected =locations; 
                                    }


                                    var ourRequest = new XMLHttpRequest();
                                  
                                    if(language_sel == 'english'){                        
                                            ourRequest.open('GET', 'js/cvs_content.json');
                                    }
                                    else{
                                        ourRequest.open('GET', 'js/cvs_content_sp.json');
                                    }
                                    ourRequest.onload = function () {
                                        if (ourRequest.status >= 200 && ourRequest.status < 400) { 
                                            ourData = JSON.parse(ourRequest.responseText);
                                        } 
                                        
                                         var loc_str='';
                                        if(location_selected.indexOf(',')>=0){
                                            var loc_data = location_selected.split(',');
                                           
                                            for(var j=0; j < loc_data.length ; j++) {
                                                if(loc_data[j].indexOf('Cali') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='cali';
                                                    }else{
                                                        loc_str +=',cali';
                                                    }
                                                }
                                             if(loc_data[j].indexOf('Hawa') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hawaii';
                                                    }else{
                                                        loc_str +=',hawaii';
                                                    }
                                                }
                                                if(loc_data[j].indexOf('Dall') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='dal';
                                                    }else{
                                                        loc_str +=',dal';
                                                    }
                                                }
                                                  if(loc_data[j].indexOf('Pho') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='phx';
                                                    }else{
                                                        loc_str +=',phx';
                                                    }
                                                } if(loc_data[j].indexOf('Puert') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='rico';
                                                    }else{
                                                        loc_str +=',rico';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Most') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='most';
                                                    }else{
                                                        loc_str +=',most';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('San An') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='ant';
                                                    }else{
                                                        loc_str +=',ant';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Chic') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='chg';
                                                    }else{
                                                        loc_str +=',chg';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Georg') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='grg';
                                                    }else{
                                                        loc_str +=',grg';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Hous') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hou';
                                                    }else{
                                                        loc_str +=',hou';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('MD/VA') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='mvd';
                                                    }else{
                                                        loc_str +=',mvd';
                                                    }
                                                }  

                                            }
                                            var location_data =loc_str.split(',');
                                        }else{
                                            var location_data = new Array();
                                            if(location_selected.indexOf('Cali') >=0 ){ 
                                                loc_str ='cali'; 
                                            } if(location_selected.indexOf('Dal') >=0 ){ 
                                                loc_str ='dal';                                                 
                                            } if(location_selected.indexOf('Pho') >=0 ){
                                                    loc_str ='phx';
                                            } if(location_selected.indexOf('Most') >=0 ){
                                                loc_str ='most';
                                            } if(location_selected.indexOf('Hawa') >=0 ){                                              
                                                loc_str ='hawaii';
                                            } if(location_selected.indexOf('Puer') >=0 ){                                              
                                                loc_str ='rico';
                                            }
                                            if(location_selected.indexOf('Chic') >=0 ){                                              
                                                loc_str ='chg';
                                            }
                                            if(location_selected.indexOf('Geor') >=0 ){                                              
                                                loc_str ='grg';
                                            }
                                            if(location_selected.indexOf('San An') >=0 ){                                              
                                                loc_str ='ant';
                                            }
                                            if(location_selected.indexOf('MD/VA') >=0 ){                                              
                                                loc_str ='mvd';
                                            }
                                            if(location_selected.indexOf('Hous') >=0 ){                                              
                                                loc_str ='hou';
                                            }

                                            location_data[0]= loc_str;
                                        } 
                                        var hr='';
                                        if(hours.indexOf(',')>=0){
                                            var hr_data = hours.split(',');
                                           
                                            for(var j=0; j < hr_data.length ; j++) {
                                                if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                    if(hr == ''){
                                                        hr ='full';
                                                    }else{
                                                        hr +=',full';
                                                    }
                                                }
                                             if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                    if(hr == ''){
                                                        hr ='part';
                                                    }else{
                                                        hr +=',part';
                                                    }
                                                }
                                                 
                                            }
                                            var hr_data =hr.split(',');
                                        }else{
                                            var hr_data = new Array();
                                            if(hours.toLowerCase().indexOf('full') >=0 ){ 
                                                hr ='full'; 
                                            } if(hours.toLowerCase().indexOf('part') >=0 ){ 
                                                hr ='part';                                                 
                                            } 
                                            hr_data[0]=hr; 
                                        } 
                                    
                                        tile_data  =[];
                                        for(var x=0; x< ourData.length ; x++){
                                            var lan=0;
                                            var lang= ourData[x].language;
                                            if(lang == language_sel){
                                                 lan++;
                                                    var loc = 0;            
                                                    if ((ourData[x].location.length) >= 1) {
                                                        for (j = 0; j < ourData[x].location.length; j++) {
                                                            for(var l =0; l <location_data.length ;l++){
                                                                if (location_data[l] === ourData[x].location[j]) {
                                                                    loc++;
                                                                }
                                                            }
                                                        }
                                                    } 
                                                    var stat = 0;
                                                    if ((ourData[x].status.length) >= 1) {

                                                        for (j = 0; j < ourData[x].status.length; j++) {
                                                            for(var l =0; l <hr_data.length ;l++){
                                                                if (hr_data[l] === ourData[x].status[j]) {
                                                                    stat++;
                                                                }
                                                            }
                                                        }
                                                    }

                                            } 
                                            title='';
                                            
                                            if(ourData[x].title.indexOf("(") < 0){
                                                if(ourData[x].filename.indexOf('-m-') >=0 ){
                                                     title = ourData[x].title + " (Most US Locations)";     
                                                }
                                                else if(ourData[x].filename.indexOf('-h-') >=0 ){
                                                     title = ourData[x].title + " (Hawaii)";  
                                                }
                                                else if(ourData[x].filename.indexOf('-c-') >=0 ){
                                                     title = ourData[x].title + " (California)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-d-') >=0 ){
                                                     title = ourData[x].title + " (Dallas)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-p-') >=0 ){
                                                     title = ourData[x].title + " (Phoenix)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-r-') >=0 ){
                                                     title = ourData[x].title + " (Puerto Rico)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-chg-') >=0 ){
                                                     title = ourData[x].title + " (Chicago)";                                                                                                          
                                                }  
                                                else if(ourData[x].filename.indexOf('-grg-') >=0 ){
                                                     title = ourData[x].title + " (Georgia)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-hou-') >=0 ){
                                                     title = ourData[x].title + " (Houston)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-ant-') >=0 ){
                                                     title = ourData[x].title + " (San Antonio)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-mvd-') >=0 ){
                                                     title = ourData[x].title + " (MD/VA/D.C.)";                                                                                                          
                                                }  else{ 
                                                    title = ourData[x].title;
                                                }
                                            }else{
                                                  title = ourData[x].title;                                                                                                            
                                            }
                                            if (lan > 0 && loc > 0 && stat > 0) {
                                                tile_data.push(
                                                { 
                                                    "id": ourData[x].id, 
                                                     "title": title
                                                }); 
                                            }
                                        } 
                                       
                                        var selectHTML="";
                                        for(i=0; i<tile_data.length; i++){
                                           selectHTML+= "<option value='"+tile_data[i]['id']+"'>"+tile_data[i]['title']+"</option>";
                                        }                        
                                        var allRelated_select=$('[name=extRelate]');                        
                                        allRelated_select[0].innerHTML= selectHTML;
                                    }
                                    ourRequest.onerror = function () {
                                      console.log("Connection error");
                                    };
                                    ourRequest.send();

                            }
                        }
                    },
                    "startDate": {
                        "label":"Start Date",
                         "picker": {                            
                            "maxDate": new Date().setDate(now.getDate() + 364),
                            "locale": "en"
                        }
                    },
                    "endDate": {
                        "label":"End Date",
                        "picker": {                             
                            "maxDate": new Date().setDate(now.getDate() + 364),
                            "locale": "en"
                        }
                    },
                    "bgImage": {
                        "events":{
                            "change": function() {
                                    var bgImg = this.getValue();
                                    if( bgImg == true){
                                       $("input[name=imageURL]").parent().parent().css('display','block');
                                        $("input[name=existingImage]").parent().parent().css('display','block');                    
                                        
                                    }else{
                                        $("input[name=imageURL]").parent().parent().css('display','none');
                                        $("input[name=existingImage]").parent().parent().css('display','none');                    
                                       
                                    }
                            }
                        }
                    },
                    "imageURL": {
                        "type": "text"
                    },
                    "existingImage":{                        
                        "type": "checkbox",
                        "events":{
                            "click":function(){
                                 document.cookie ="tileCreat=" + true;  
                            }
                        }
                    },                      
                    "color": {
                        "optionLabels": ["cvs-babyblue","cvs-darkgray","cvs-green","cvs-icon-gray","cvs-icon-green","cvs-icon-red","cvs-icon-turq","cvs-img","cvs-lightgray","cvs-medgray","cvs-navy","cvs-orange","cvs-pink","cvs-red","cvs-turq","cvs-yellow","logo"],
                         "events":{
                            "click": function() {
                                    var clr = this.getValue();
                                   /* if( clr == 'cvs-lightgray' || clr == 'cvs-red' || clr == 'cvs-green'){
                                        
                                    }else{
                                        $("input[name=bgImage]").parent().parent().parent().css('display','block');
                                        $("input[name=imageURL]").parent().parent().parent().css('display','block');
                                        $("input[name=existingImage]").parent().parent().parent().css('display','block');
                                    }*/
                            }
                        }
                    },
                    "previewTile":{                        
                        "type": "checkbox",
                        "events":{
                            
                            "click":function(){
                             
                                 document.cookie ="tileCreat=" + true; 

                                 var bgcolor ={"cvs-red":"boxbg-cvs-red" , "cvs-yellow":"boxbg-cvs-yellow" ,"cvs-green":"boxbg-cvs-green" ,"cvs-orange":"boxbg-cvs-orange" ,"cvs-turq":"boxbg-cvs-turq" ,"cvs-babyblue":"boxbg-cvs-babyblue" ,"cvs-lightgray":"boxbg-cvs-lightgray","cvs-medgray":"boxbg-cvs-medgray","cvs-darkgray":"boxbg-cvs-darkgray","cvs-pink":"boxbg-cvs-pink","cvs-navy":"boxbg-cvs-navy","logo":"boxbg-logo" ,"cvs-img":"boxbg-cvs-img","cvs-icon-turq":"boxbg-cvs-turq transparency","cvs-icon-gray":"boxbg-cvs-lightgray transparency","cvs-icon-green":"boxbg-cvs-green transparency","cvs-icon-red":"boxbg-cvs-red transparency"};
                           
                                    
                                    var bgI = document.getElementsByName('bgImage');
                                    var cl = document.getElementsByName('color');

                                    /*for(i=0;i<cl.length;i++){
                                        if(cl[i].checked)
                                      bgClass= cl[i].value;
                                    }*/
                                    bgClass=cl['color'].value;
                                  
                                    var bg_class='';
                                   for (var color in bgcolor) {
                                       if (color == bgClass)
                                          bg_class= bgcolor[color];
                                    }

                                    var backgroundImage = bgI[1].value;
                                  

                                    if(backgroundImage == 'on'){
                                        var imgUr = document.getElementsByName('imageURL');
                                        var img= 'https://a980f94f-6083-4374-8d7f-9a4a9f042a9b-hosted.cloudcms.net/static/test.pdf?repositories=0da4c0b255d99e3fea3a&branches=93ac3d94f366fcaa21c5&node=85392d705ff0c4e25d99&attachment=' + imgUr['imageURL'].value;
                                        
                                        var tt = document.getElementsByName('title');
 
                                        mask = '<div class="spot">Spotlight on ...</div>';

                                        var cl= '<a class="'+ bg_class+ ' tileboxbt align-bottom" style="width:286px;display:block;background-image:url('+img+')">'+ mask +'<div class=tilebox><h2>'+ tt['title'].value +' </h2> </div></a>';
                                        $('#learn1').html(cl);
                                         
                                    }  
                                    
                                    $("#dialog-modal2").dialog('open');
                                    
                                    }
                           
                        }
                    },
                    "tags": {
                        "type": "text"
                    },
                    "body": {
                        "type": "ckeditor",
                         "ckeditor": {
                            "toolbar": [
                                ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source','Image']
                            ],                        
                            "height":"220"
                        }
                    },
                    "accordions":{
                        "items":{
                            "fields":{
                                "accordionHeader":{
                                    "type":"text"
                                },
                                "accordionBody":{
                                    "type":"ckeditor",
                                    "ckeditor": {
                                            "toolbar": [
                                                ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                            ],                        
                                            "height":"220"
                                        }
                                }
                            }
                        }
                    },
                     "extRelate": {
                        "type": "select",
                        "multiple": true,
                        "size": 20,
                        "events":{
                            "click":function(){                             
                                multiSelect = this.getValue();
                            }
                        } 

                    },
                    "allRelated":{
                        "type": "text" 
                    }
            }
        },
        "postRender": function(control) {
                getImages();
                var x = document.getElementsByName('existingImage')[0];
                x.innerHTML = ('<input type="button" name="existingImage" class="chx" value="Choose Image" onclick="getImg()">')
               
                var new_image = control.childrenByPropertyId["existingImage"];
                   
                new_image.on('change', function(val) {               
                    this.schema.data = val;     
                    var x=  this.schema.data.target.value ;
                    $('#dialog-modal1').dialog('open');
                                     
                });  
            } 
    });

    $(".push").css('height','0px');
    $(".footer").css('height','0px');

    
}
   
function loadPage(pageId) {
    pageIdToLoad = pageId || "9bccae4f5d0cc8ed0ed4";
    //reShowForm();
   
    node = branch.readNode(pageIdToLoad).then(function() {            
        showFormPage();

    });
}

function reShowForm() {
    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set"); 
    node = branch.readNode(pageIdToLoad).then(function() { 
        showFormPage(); 
    });
}

function showFormPage() {
    $("#myform").css('display','block');
    $("#myform").html(""); 
    $("#tileDisp").html("");
    $("#tileDisp").css('display','none');
    //parse image data from cookie    
    
    var ourData ='';
    var ourRequest = new XMLHttpRequest();
     if(globaLanguage =='English'){
        ourRequest.open('GET', 'js/cvs_content.json');
     }
      else{
        ourRequest.open('GET', 'js/cvs_content_sp.json');
      }
      ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) { 
        ourData = JSON.parse(ourRequest.responseText);
        
        }
    }
    ourRequest.onerror = function () {
      console.log("Connection error");
    };

    ourRequest.send();
    var hours ='';
    var locations='';
    var multiSelect='';
    $("#myform").alpaca({
            "view": "bootstrap-edit",
            "data": node,
            "schema": {
                "title": "Edit Tile",
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string",
                        "title": "title"
                    },
                    "section": {
                        "type": "string",
                        "title": "Section",
                        "enum": ["Learn","Decide","Enroll"]
                    },               
                    "population": {
                         "type": "string",
                        "title": "Population",
                        "enum":["Most US Locations", "California","Dallas", "Hawaii","Phoenix","Puerto Rico","Chicago","Georgia","Houston","San Antonio","MD/VA/D.C."],
                        "required":true
                    },
                    "language": {
                        "type": "string",
                        "title": "Language",
                        "enum": ["English","Spanish"],
                        "required":true
                    },
                    "hours": {
                        "type": "string",
                        "title": "Hours",
                        "enum": ["Full-time","Part-time"],
                        "required":true
                    },
                    "startDate": {                    
                        "format":"date" 
                    },
                    "endDate": {
                        "format":"date" 
                    },
                    "bgImage": {
                        "type": "boolean",
                        "title": "Backgound Image"
                    },
                    "imageURL": {
                        "type": "string",
                        "title": "imageURL",
                        "readonly":true
                    },
                   "existingImage":{
                        "title": "Choose image",
                        "type": "string" 
                    },  
                    "color": {
                        "type": "string",
                        "title": "Color",
                        "enum": ["cvs-babyblue","cvs-darkgray","cvs-green","cvs-icon-gray","cvs-icon-green","cvs-icon-red","cvs-icon-turq","cvs-img","cvs-lightgray","cvs-medgray","cvs-navy","cvs-orange","cvs-pink","cvs-red","cvs-turq","cvs-yellow","logo"]
                    },
                    "previewTile":{
                        "title": "Preview HomePage Tile",
                        "type": "string" 

                    },
                    "tags": {
                        "type": "string",
                        "title": "Tags"
                    },
                    "body": {
                        "type": "string",
                        "title": "MainBody",
                        "required":true
                    },
                    "accordions": {
                        "type": "array",
                        "title": "Accordions",
                        "items": {
                            "properties": {
                                "accordionHeader": {
                                    "type": "string",
                                    "title": "Accordion Header"
                                },
                                "accordionBody": {
                                      "type": "string",
                                    "title": "Accordion Body"                    
                                }
                            },
                            "type": "object"
                        }
                    },
                    "extRelate": {
                        "type": "string",
                        "title": "New Related",
                        "enum": en_actualJson['title']
                    },
                    "allRelated":{
                        "type": "string",
                        "title": "Existing Related IDs",
                        "readonly":true

                    }
                },  
                "_parent": "n:node",
                "description": "custom:specialpag0",
                "$schema": "http://json-schema.org/draft-04/schema#",         
                "items": {}
            },
            "options": {
                "form": {
                    "buttons": {
                        
                        "Preview": {
                            "click": function () {
                                clearTimer();
                                //console.log("Timer Cleared");
                                setTimer();
                                //console.log("Timer Set");
                                value = this.getValue();
                                var valueJson = JSON.stringify(value);
                                
                                  var d = new Date();
                                pgId = ((d.getTime()-d.getMilliseconds())/1000);
                                tId= pgId.toString();
                                var imgBgURL = 'https://a980f94f-6083-4374-8d7f-9a4a9f042a9b-hosted.cloudcms.net/static/test.pdf?repositories=0da4c0b255d99e3fea3a&branches=93ac3d94f366fcaa21c5&node=85392d705ff0c4e25d99&attachment=/' + value.imageURL;
                                console.log(value.imageURL);
                                   var doc_cookie= document.cookie.split(';');
                                 
                                    for(var i = 0; i < doc_cookie.length ; i++){
                                        var name= doc_cookie[i].split("=")[0].trim();
                                        if(name=='multiSelect')
                                             multiSelect= doc_cookie[i].split("=")[1];
                                    }
                                    

                                 if(multiSelect == '') {
                                        multiSelect = document.getElementsByName('allRelated')[1].value;
                                    }else{
                                        console.log(multiSelect + 'before');
                                        multiSelect = multiSelect.toString();
                                    }

                                    console.log(multiSelect + 'after');

                                  if(value.imageURL != '' || value.imageURL != null){
                                       bgIm = true;
                                    }
                                    else
                                        bgIm =  value.bgImage;   

                                branch.createNode({
                                    "title": value.title,
                                    "priority":"0",
                                    "tileId": tId,
                                    "population": value.population,
                                    "language": value.language,
                                    "hours":value.hours,
                                    "flag": 'cvsPage1Draft',
                                    "section" : value.section,
                                    "startDate":value.startDate,                                
                                    "endDate":value.endDate,
                                    "body": value.body,
                                    "imageURL": imgBgURL,
                                    "bgImage": bgIm,
                                    "color": value.color,
                                    "icon": value.icon,
                                    "tags": value.tags,
                                    "accordions":value.accordions,
                                    "allRelated":multiSelect,
                                    "_type": 'custom:specialpag0'
                                }).then(function () {
                                    console.log("Showing preview of Homepage at QC site");
                                    $('.alpaca-form-button-Approve').removeAttr("disabled");
                                    draftNodeId = this._doc;
                                    window.open('http://qc.mbspot2.com/en-special-draft.html' + '?draft=' + this._doc, 'previewWindow');
                                });
                            }
                        },
                        "Approve": {
                            "attributes": {
                                "disabled": "disabled"
                            },
                            "click": function () {
                                clearTimer();
                                //console.log("Timer Cleared");
                                setTimer();
                                //console.log("Timer Set");

                                var value = this.getValue();
                                sendEmail(); //object must be created on cloudCMS before email can be sent
                                alert("Thank you for submitting an update. Please check your email for a verification link. Just click on the link to deploy your update!")
                                $('#myform').html('');
                                $('#tileDisp').html('');
                                $("#tileDisp").css('display','block');
                                getPage();
                            }
                        }

                    }
                },  
                "title": "newPageTitle",
                "engineId": "alpaca2",
                "fields":{
                 "title": {
                        "type": "text"
                    },
                    "section": {
                       "optionLabels": ["Learn", "Decide", "Enroll"]
                    },
                    "population": {
                        "type":"checkbox",
                        "optionLabels": ["Most US Locations", "California","Dallas", "Hawaii","Phoenix","Puerto Rico","Chicago","Georgia","Houston","San Antonio","MD/VA/D.C."],
                        "events":{
                            "change": function(val) {                                  
                                    var language_sel = $('input:radio[name=language]:checked').val();
                                    var location_selected =this.getValue();
                                   
                                    console.log(location_selected);

                                    var allRelated_select=$('[name=extRelate]'); 
                                    allRelated_select[1].innerHTML='';  

                                    //collect all data from cloud and push to array
                                    var nPage = sessionStorage.getItem('pages');
                                    nPage = JSON.parse(nPage);

                                    var ourData;
                                    var ourRequest = new XMLHttpRequest();
                                  
                                    if(language_sel.toLowerCase() == 'english'){                        
                                            ourRequest.open('GET', 'js/cvs_content.json');
                                    }
                                    else{
                                        ourRequest.open('GET', 'js/cvs_content_sp.json');
                                    }
                                    ourRequest.onload = function () {
                                        if (ourRequest.status >= 200 && ourRequest.status < 400) { 
                                            ourData = JSON.parse(ourRequest.responseText);
                                        } 
                                        if(language_sel == 'English'){
                                            language_sel ='english';
                                        }
                                        if(language_sel == 'Spanish'){
                                            language_sel ='spanish';
                                        }
                                        
                                         var loc_str='';
                                        if(location_selected.indexOf(',')>=0){
                                            var loc_data = location_selected.split(',');
                                           console.log(loc_data);
                                            for(var j=0; j < loc_data.length ; j++) {
                                                if(loc_data[j].indexOf('Cali') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='cali';
                                                    }else{
                                                        loc_str +=',cali';
                                                    }
                                                }
                                             if(loc_data[j].indexOf('Hawa') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hawaii';
                                                    }else{
                                                        loc_str +=',hawaii';
                                                    }
                                                }
                                                if(loc_data[j].indexOf('Dall') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='dal';
                                                    }else{
                                                        loc_str +=',dal';
                                                    }
                                                }
                                                  if(loc_data[j].indexOf('Pho') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='phx';
                                                    }else{
                                                        loc_str +=',phx';
                                                    }
                                                } if(loc_data[j].indexOf('Puert') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='rico';
                                                    }else{
                                                        loc_str +=',rico';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Most') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='most';
                                                    }else{
                                                        loc_str +=',most';
                                                    }
                                                } 
                                                if(loc_data[j].indexOf('Chic') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='chg';
                                                    }else{
                                                        loc_str +=',chg';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Geor') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='grg';
                                                    }else{
                                                        loc_str +=',grg';
                                                    }
                                                } 
                                                if(loc_data[j].indexOf('Hous') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hou';
                                                    }else{
                                                        loc_str +=',hou';
                                                    }
                                                } 
                                                if(loc_data[j].indexOf('San An') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='ant';
                                                    }else{
                                                        loc_str +=',ant';
                                                    }
                                                } 
                                                if(loc_data[j].indexOf('MD/VA') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='mvd';
                                                    }else{
                                                        loc_str +=',mvd';
                                                    }
                                                } 

                                            }
                                            var location_data =loc_str.split(',');
                                        }else{
                                            var location_data = new Array();
                                            if(location_selected.indexOf('Cali') >=0 ){ 
                                                loc_str ='cali'; 
                                            } if(location_selected.indexOf('Dal') >=0 ){ 
                                                loc_str ='dal';                                                 
                                            } if(location_selected.indexOf('Pho') >=0 ){
                                                    loc_str ='phx';
                                            } if(location_selected.indexOf('Most') >=0 ){
                                                loc_str ='most';
                                            } if(location_selected.indexOf('Hawa') >=0 ){                                              
                                                loc_str ='hawaii';
                                            } if(location_selected.indexOf('Puer') >=0 ){                                              
                                                loc_str ='rico';
                                            }
                                            if(location_selected.indexOf('Chic') >=0 ){                                              
                                                loc_str ='chg';
                                            }
                                            if(location_selected.indexOf('Geor') >=0 ){                                              
                                                loc_str ='grg';
                                            }
                                            if(location_selected.indexOf('Hous') >=0 ){                                              
                                                loc_str ='hou';
                                            }
                                            if(location_selected.indexOf('San An') >=0 ){                                              
                                                loc_str ='ant';
                                            }
                                            if(location_selected.indexOf('MD/VA') >=0 ){                                              
                                                loc_str ='mvd';
                                            }
                                            location_data[0]=loc_str; 
                                        } 
                                        var hr='';

                                        if(hours.indexOf(',')>=0){
                                            var hr_data = hours.split(',');
                                           
                                            for(var j=0; j < hr_data.length ; j++) {
                                                if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                    if(hr == ''){
                                                        hr ='full';
                                                    }else{
                                                        hr +=',full';
                                                    }
                                                }
                                             if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                    if(hr == ''){
                                                        hr ='part';
                                                    }else{
                                                        hr +=',part';
                                                    }
                                                }
                                                 
                                            }
                                            var hr_data =hr.split(',');
                                        }else{
                                            var hr_data = new Array();
                                
                                            if(hours.toLowerCase().indexOf('full') >= 0 ){ 
                                                hr ='full'; 
                                            } if(hours.toLowerCase().indexOf('part') >=0 ){ 
                                                hr ='part';                                                 
                                            } 
                                            hr_data[0]=hr; 
                                        } 
                                        
                                        tile_data  =[];
                                        for(var x=0; x< ourData.length ; x++){
                                            var lan=0;
                                            var lang= ourData[x].language;
                                            if(lang == language_sel){
                                                 lan++;
                                                    var loc = 0;            
                                                    if ((ourData[x].location.length) >= 1) {
                                                        for (j = 0; j < ourData[x].location.length; j++) {
                                                            for(var l =0; l <location_data.length ;l++){
                                                                if (location_data[l] === ourData[x].location[j]) {
                                                                    loc++;
                                                                }
                                                            }
                                                        }
                                                    } 
                                                    var stat = 0;
                                                    if ((ourData[x].status.length) >= 1) {
                                                        for (j = 0; j < ourData[x].status.length; j++) {
                                                            for(var l =0; l <hr_data.length ;l++){
                                                                if (hr_data[l] === ourData[x].status[j]) {
                                                                    stat++;
                                                                }    
                                                            }
                                                        }
                                                    }

                                            } 
                                            title='';
                                            
                                            if(ourData[x].title.indexOf("(") < 0){
                                                if(ourData[x].filename.indexOf('-m-') >=0 ){
                                                     title = ourData[x].title + " (Most US Locations)";     
                                                }
                                                else if(ourData[x].filename.indexOf('-h-') >=0 ){
                                                     title = ourData[x].title + " (Hawaii)";  
                                                }
                                                else if(ourData[x].filename.indexOf('-c-') >=0 ){
                                                     title = ourData[x].title + " (California)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-d-') >=0 ){
                                                     title = ourData[x].title + " (Dallas)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-p-') >=0 ){
                                                     title = ourData[x].title + " (Phoenix)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-r-') >=0 ){
                                                     title = ourData[x].title + " (Puerto Rico)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-chg-') >=0 ){
                                                     title = ourData[x].title + " (Chicago)";                                                                                                          
                                                }  
                                                else if(ourData[x].filename.indexOf('-grg-') >=0 ){
                                                     title = ourData[x].title + " (Georgia)";                                                                                                          
                                                }  
                                                else if(ourData[x].filename.indexOf('-ant-') >=0 ){
                                                     title = ourData[x].title + " (San Antonio)";                                                                                                          
                                                }  
                                                else if(ourData[x].filename.indexOf('-hou-') >=0 ){
                                                     title = ourData[x].title + " (Houston)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-mvd-') >=0 ){
                                                     title = ourData[x].title + " (MD/VA/D.C.)";                                                                                                          
                                                }  else{ 
                                                    title = ourData[x].title;
                                                }
                                            }else{
                                                  title = ourData[x].title;                                                                                                            
                                            } 
                                            //cloud based tiles added
                                            for(var i=0; i<nPage.length ; i++){
                                                var nlang=0;
                                                if(nPage[i]['language'].toLowerCase() == language_sel){
                                                    nlang++;
                                                    var nloc = 0;  
                                                    if(nPage[i]['population'].indexOf(',')>=0){
                                                         nloc_str='';

                                                        var loc_data = nPage[i]['population'].split(',');
                                           
                                                        for(var j=0; j < loc_data.length ; j++) {
                                                            if(loc_data[j].indexOf('Cali') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='cali';
                                                                }else{
                                                                    nloc_str +=',cali';
                                                                }
                                                            }
                                                            if(loc_data[j].indexOf('Hawa') >=0 ){
                                                                    if(nloc_str == ''){
                                                                        nloc_str ='hawaii';
                                                                    }else{
                                                                        nloc_str +=',hawaii';
                                                                    }
                                                            }
                                                            if(loc_data[j].indexOf('Dall') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='dal';
                                                                }else{
                                                                    nloc_str +=',dal';
                                                                }
                                                            }
                                                              if(loc_data[j].indexOf('Pho') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='phx';
                                                                }else{
                                                                    nloc_str +=',phx';
                                                                }
                                                            } if(loc_data[j].indexOf('Puert') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='rico';
                                                                }else{
                                                                    nloc_str +=',rico';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('Most') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='most';
                                                                }else{
                                                                    nloc_str +=',most';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('Chic') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='chg';
                                                                }else{
                                                                    nloc_str +=',chg';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('Geor') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='grg';
                                                                }else{
                                                                    nloc_str +=',grg';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('San An') >=0 ){
                                                                if(nloc_str == 'ant'){
                                                                    nloc_str ='';
                                                                }else{
                                                                    nloc_str +=',ant';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('Hous') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='hou';
                                                                }else{
                                                                    nloc_str +=',hou';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('MD/VA') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='mvd';
                                                                }else{
                                                                    nloc_str +=',mvd';
                                                                }
                                                            }  
                                                        }
                                                        var nlocation_data =nloc_str.split(','); 
                                                      
                                                    }else{
                                                        var nlocation_data = new Array();
                                                        loc_str='';
                                                        if(nPage[i]['population'].indexOf('Cali') >=0 ){ 
                                                            loc_str ='cali'; 
                                                        } if(nPage[i]['population'].indexOf('Dal') >=0 ){ 
                                                            loc_str ='dal';                                                 
                                                        } if(nPage[i]['population'].indexOf('Pho') >=0 ){
                                                                loc_str ='phx';
                                                        } if(nPage[i]['population'].indexOf('Most') >=0 ){
                                                            loc_str ='most';
                                                        } if(nPage[i]['population'].indexOf('Hawa') >=0 ){                                              
                                                            loc_str ='hawaii';
                                                        } if(nPage[i]['population'].indexOf('Puer') >=0 ){                                              
                                                            loc_str ='rico';
                                                        }
                                                        if(nPage[i]['population'].indexOf('Chic') >=0 ){                                              
                                                            loc_str ='chg';
                                                        }
                                                        if(nPage[i]['population'].indexOf('Geor') >=0 ){                                              
                                                            loc_str ='grg';
                                                        }
                                                        if(nPage[i]['population'].indexOf('Hous') >=0 ){                                              
                                                            loc_str ='hou';
                                                        }
                                                        if(nPage[i]['population'].indexOf('San An') >=0 ){                                              
                                                            loc_str ='ant';
                                                        }
                                                        if(nPage[i]['population'].indexOf('MD/VA') >=0 ){                                              
                                                            loc_str ='mvd';
                                                        }
                                                        nlocation_data[0]= loc_str ;
                                                    }
                                           

                                                    if ((location_data.length) >= 1) {
                                             
                                                        for (j = 0; j < location_data.length; j++) {
                                                            for(var l =0; l <nlocation_data.length ;l++){

                                                                if (nlocation_data[l] == location_data[j]) {
                                                                    nloc++; 
                                                                }
                                                                
                                                            }
                                                        }
                                                    } 
                                                     nhr= nPage[i]['hours'];
                                                    if(nhr.indexOf(',')>=0){
                                                        var hr_data = nhr.split(',');
                                                       
                                                        for(var j=0; j < hr_data.length ; j++) {
                                                            if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                                if(hr == ''){
                                                                    hr ='full';
                                                                }else{
                                                                    hr +=',full';
                                                                }
                                                            }
                                                         if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                                if(hr == ''){
                                                                    hr ='part';
                                                                }else{
                                                                    hr +=',part';
                                                                }
                                                            }
                                                             
                                                        }
                                                        var hr_data =hr.split(',');
                                                    }else{
                                                        var hr_data = new Array();
                                                       
                                                        if(nhr.toLowerCase().indexOf('full') >= 0 ){ 
                                                            hr ='full'; 
                                                        } if(nhr.toLowerCase().indexOf('part') >=0 ){ 
                                                            hr ='part';                                                 
                                                        } 
                                                        hr_data[0]=hr; 
                                                    } 

                                                    var nstat = 0;
                                                    if ((ourData[x].status.length) >= 1) {

                                                        for (j = 0; j < ourData[x].status.length; j++) {
                                                             for(var l =0; l <hr_data.length ;l++){
                                                                if (hr_data[l] === ourData[x].status[j]) {
                                                                    nstat++;
                                                                }    
                                                            }
                                                        }
                                                    }
                                                }
                                                if (nlang > 0 && nloc > 0 && nstat > 0) {
                                                    if(node.title != nPage[i].title){
                                                        tile_data.push(
                                                        { 
                                                            "id": nPage[i].tileId, 
                                                             "title": nPage[i].title
                                                        }); 
                                                    }
                                                }
                                            }

                                            //original json data 
                                            if (lan > 0 && loc > 0 && stat > 0) {                                              

                                                    tile_data.push(
                                                    { 
                                                        "id": ourData[x].id, 
                                                         "title": title 
                                                    }); 
                                                }
                                              }  
                                             
                                            tile= getUniqueValuesOfKey(tile_data,'title');                                       

                                            //sort by title
                                            tile.sort(function(a, b){
                                                if(a.title < b.title) return -1;
                                                if(a.title > b.title) return 1;
                                                return 0;
                                            });
                                            //remove empty titles
                                             tile = tile.filter(function(x) { return x['title'] !== '' });


                                            var selectHTML="";
                                            for(i=0; i<tile.length; i++){                                                     
                                               selectHTML+= "<option value='"+tile[i]['id']+"'>"+tile[i]['title']+"</option>";
                                            }    

                                        

                                        allRelated_select[1].innerHTML= selectHTML;
                                    }
                                    ourRequest.onerror = function () {
                                        console.log("Connection error");
                                    };
                                    ourRequest.send();
                                }
                            }
                    },
                    "language": {
                        "optionLabels": ["English","Spanish"],
                         "events":{
                            "click": function() {
                                    var language_sel = this.getValue().toLowerCase();
                                
                                    var location_selected =locations; 
                                    var ourRequest = new XMLHttpRequest(); 
                                    if(language_sel == 'english'){                        
                                            ourRequest.open('GET', 'js/cvs_content.json');
                                    }
                                    else{
                                        ourRequest.open('GET', 'js/cvs_content_sp.json');
                                    }
                                     //collect all data from cloud and push to array
                                    var nPage = sessionStorage.getItem('pages');
                                    nPage = JSON.parse(nPage);

                                    ourRequest.onload = function () {
                                        if (ourRequest.status >= 200 && ourRequest.status < 400) { 
                                            ourData = JSON.parse(ourRequest.responseText);
                                        }  
                                        
                                         var loc_str='';
                                        if(location_selected.indexOf(',')>=0){
                                            var loc_data = location_selected.split(',');
                                           
                                            for(var j=0; j < loc_data.length ; j++) {
                                                if(loc_data[j].indexOf('Cali') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='cali';
                                                    }else{
                                                        loc_str +=',cali';
                                                    }
                                                }
                                             if(loc_data[j].indexOf('Hawa') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hawaii';
                                                    }else{
                                                        loc_str +=',hawaii';
                                                    }
                                                }
                                                if(loc_data[j].indexOf('Dall') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='dal';
                                                    }else{
                                                        loc_str +=',dal';
                                                    }
                                                }
                                                  if(loc_data[j].indexOf('Pho') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='phx';
                                                    }else{
                                                        loc_str +=',phx';
                                                    }
                                                } if(loc_data[j].indexOf('Puert') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='rico';
                                                    }else{
                                                        loc_str +=',rico';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Most') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='most';
                                                    }else{
                                                        loc_str +=',most';
                                                    }
                                                }  
                                                 if(loc_data[j].indexOf('Chic') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='chg';
                                                    }else{
                                                        loc_str +=',chg';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Geor') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='grg';
                                                    }else{
                                                        loc_str +=',grg';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('San An') >=0 ){
                                                    if(loc_str == 'ant'){
                                                        loc_str ='';
                                                    }else{
                                                        loc_str +=',ant';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Hous') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hou';
                                                    }else{
                                                        loc_str +=',hou';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('MD/VA') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='mvd';
                                                    }else{
                                                        loc_str +=',mvd';
                                                    }
                                                }  

                                            }
                                            var location_data =loc_str.split(',');
                                        }else{
                                            var location_data = new Array();
                                            if(location_selected.indexOf('Cali') >=0 ){ 
                                                loc_str ='cali'; 
                                            } if(location_selected.indexOf('Dal') >=0 ){ 
                                                loc_str ='dal';                                                 
                                            } if(location_selected.indexOf('Pho') >=0 ){
                                                    loc_str ='phx';
                                            } if(location_selected.indexOf('Most') >=0 ){
                                                loc_str ='most';
                                            } if(location_selected.indexOf('Hawa') >=0 ){                                              
                                                loc_str ='hawaii';
                                            } if(location_selected.indexOf('Puer') >=0 ){                                              
                                                loc_str ='rico';
                                            }
                                            if(location_selected.indexOf('Chic') >=0 ){                                              
                                                loc_str ='chg';
                                            }
                                            if(location_selected.indexOf('Geor') >=0 ){                                              
                                                loc_str ='grg';
                                            }
                                           if(location_selected.indexOf('Hous') >=0 ){                                              
                                                loc_str ='hou';
                                            }
                                            if(location_selected.indexOf('San An') >=0 ){                                              
                                                loc_str ='ant';
                                            }
                                           if(location_selected.indexOf('MD/VA') >=0 ){                                              
                                                loc_str ='mvd';
                                            }
                                           location_data[0]= loc_str;
                                        }
                                        var hr='';
                                        if(hours.indexOf(',')>=0){
                                            var hr_data = hours.split(',');
                                           
                                            for(var j=0; j < hr_data.length ; j++) {
                                                if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                    if(hr == ''){
                                                        hr ='full';
                                                    }else{
                                                        hr +=',full';
                                                    }
                                                }
                                             if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                    if(hr == ''){
                                                        hr ='part';
                                                    }else{
                                                        hr +=',part';
                                                    }
                                                }
                                                 
                                            }
                                            var hr_data =hr.split(',');
                                        }else{
                                            var hr_data = new Array();
                                            if(hours.toLowerCase().indexOf('full') >=0 ){ 
                                                hr ='full'; 
                                            } if(hours.toLowerCase().indexOf('part') >=0 ){ 
                                                hr ='part';                                                 
                                            } 
                                            hr_data[0]=hr; 
                                        } 


                                        tile_data  =[];
                                        for(var x=0; x< ourData.length ; x++){
                                            var lan=0;
                                            var lang= ourData[x].language;
                                            if(lang == language_sel){
                                                 lan++;
                                                    var loc = 0;            
                                                    if ((ourData[x].location.length) >= 1) {
                                                        for (j = 0; j < ourData[x].location.length; j++) {
                                                            for(var l =0; l <location_data.length ;l++){
                                                                if (location_data[l] === ourData[x].location[j]) {
                                                                    loc++;
                                                                }
                                                            }
                                                        }
                                                    } 
                                                    var stat = 0;
                                                    if ((ourData[x].status.length) >= 1) {

                                                        for (j = 0; j < ourData[x].status.length; j++) {
                                                            for(var l =0; l <hr_data.length ;l++){
                                                                if (hr_data[l] === ourData[x].status[j]) {
                                                                    stat++;
                                                                }    
                                                            }
                                                        }
                                                    }

                                            } 
                                               title='';
                                            
                                            if(ourData[x].title.indexOf("(") < 0){
                                                if(ourData[x].filename.indexOf('-m-') >=0 ){
                                                     title = ourData[x].title + " (Most US Locations)";     
                                                }
                                                else if(ourData[x].filename.indexOf('-h-') >=0 ){
                                                     title = ourData[x].title + " (Hawaii)";  
                                                }
                                                else if(ourData[x].filename.indexOf('-c-') >=0 ){
                                                     title = ourData[x].title + " (California)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-d-') >=0 ){
                                                     title = ourData[x].title + " (Dallas)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-p-') >=0 ){
                                                     title = ourData[x].title + " (Phoenix)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-r-') >=0 ){
                                                     title = ourData[x].title + " (Puerto Rico)";                                                                                                          
                                                }
                                                else if(ourData[x].filename.indexOf('-chg-') >=0 ){
                                                     title = ourData[x].title + " (Chicago)";                                                                                                          
                                                }  
                                                else if(ourData[x].filename.indexOf('-grg-') >=0 ){
                                                     title = ourData[x].title + " (Georgia)";                                                                                                          
                                                }
                                                else if(ourData[x].filename.indexOf('-ant-') >=0 ){
                                                     title = ourData[x].title + " (San Antonio)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-hou-') >=0 ){
                                                     title = ourData[x].title + " (Houston)";                                                                                                          
                                                }
                                                else if(ourData[x].filename.indexOf('-mvd-') >=0 ){
                                                     title = ourData[x].title + " (MD/VA/D.C.)";                                                                                                          
                                                }  else{ 
                                                    title = ourData[x].title;
                                                }
                                            }else{
                                                  title = ourData[x].title;                                                                                                            
                                            }

                                            //cloud based tiles added
                                            for(var i=0; i<nPage.length ; i++){
                                                var nlang=0;
                                                if(nPage[i]['language'].toLowerCase() == language_sel){
                                                    nlang++;
                                                    var nloc = 0;  
                                                    if(nPage[i]['population'].indexOf(',')>=0){
                                                         nloc_str='';

                                                        var loc_data = nPage[i]['population'].split(',');
                                           
                                                        for(var j=0; j < loc_data.length ; j++) {
                                                            if(loc_data[j].indexOf('Cali') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='cali';
                                                                }else{
                                                                    nloc_str +=',cali';
                                                                }
                                                            }
                                                            if(loc_data[j].indexOf('Hawa') >=0 ){
                                                                    if(nloc_str == ''){
                                                                        nloc_str ='hawaii';
                                                                    }else{
                                                                        nloc_str +=',hawaii';
                                                                    }
                                                            }
                                                            if(loc_data[j].indexOf('Dall') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='dal';
                                                                }else{
                                                                    nloc_str +=',dal';
                                                                }
                                                            }
                                                              if(loc_data[j].indexOf('Pho') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='phx';
                                                                }else{
                                                                    nloc_str +=',phx';
                                                                }
                                                            } if(loc_data[j].indexOf('Puert') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='rico';
                                                                }else{
                                                                    nloc_str +=',rico';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('Most') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='most';
                                                                }else{
                                                                    nloc_str +=',most';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('Chic') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='chg';
                                                                }else{
                                                                    nloc_str +=',chg';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('Geor') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='grg';
                                                                }else{
                                                                    nloc_str +=',grg';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('San An') >=0 ){
                                                                if(nloc_str == 'ant'){
                                                                    nloc_str ='';
                                                                }else{
                                                                    nloc_str +=',ant';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('Hous') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='hou';
                                                                }else{
                                                                    nloc_str +=',hou';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('MD/VA') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='mvd';
                                                                }else{
                                                                    nloc_str +=',mvd';
                                                                }
                                                            }  

                                                        }
                                                        var nlocation_data =nloc_str.split(','); 
                                                      
                                                    }else{
                                                        var nlocation_data = new Array();
                                                        loc_str='';
                                                        if(nPage[i]['population'].indexOf('Cali') >=0 ){ 
                                                            loc_str ='cali'; 
                                                        } if(nPage[i]['population'].indexOf('Dal') >=0 ){ 
                                                            loc_str ='dal';                                                 
                                                        } if(nPage[i]['population'].indexOf('Pho') >=0 ){
                                                                loc_str ='phx';
                                                        } if(nPage[i]['population'].indexOf('Most') >=0 ){
                                                            loc_str ='most';
                                                        } if(nPage[i]['population'].indexOf('Hawa') >=0 ){                                              
                                                            loc_str ='hawaii';
                                                        } if(nPage[i]['population'].indexOf('Puer') >=0 ){                                              
                                                            loc_str ='rico';
                                                        }
                                                      if(nPage[i]['population'].indexOf('Chic') >=0 ){                                              
                                                            loc_str ='chg';
                                                        }
                                                        if(nPage[i]['population'].indexOf('Geor') >=0 ){                                              
                                                            loc_str ='grg';
                                                        }
                                                        if(nPage[i]['population'].indexOf('Hous') >=0 ){                                              
                                                            loc_str ='hou';
                                                        }
                                                        if(nPage[i]['population'].indexOf('San An') >=0 ){                                              
                                                            loc_str ='ant';
                                                        }
                                                        if(nPage[i]['population'].indexOf('MD/VA') >=0 ){                                              
                                                            loc_str ='mvd';
                                                        }
                                                        nlocation_data[0]= loc_str ;
                                                    }
                                           

                                                    if ((location_data.length) >= 1) {
                                             
                                                        for (j = 0; j < location_data.length; j++) {
                                                            for(var l =0; l <nlocation_data.length ;l++){

                                                                if (nlocation_data[l] == location_data[j]) {
                                                                    nloc++; 
                                                                }
                                                                
                                                            }
                                                        }
                                                    } 
                                                     nhr= nPage[i]['hours'];
                                                    if(nhr.indexOf(',')>=0){
                                                        var hr_data = nhr.split(',');
                                                       
                                                        for(var j=0; j < hr_data.length ; j++) {
                                                            if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                                if(hr == ''){
                                                                    hr ='full';
                                                                }else{
                                                                    hr +=',full';
                                                                }
                                                            }
                                                         if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                                if(hr == ''){
                                                                    hr ='part';
                                                                }else{
                                                                    hr +=',part';
                                                                }
                                                            }
                                                             
                                                        }
                                                        var hr_data =hr.split(',');
                                                    }else{
                                                        var hr_data = new Array();
                                                       
                                                        if(nhr.toLowerCase().indexOf('full') >= 0 ){ 
                                                            hr ='full'; 
                                                        } if(nhr.toLowerCase().indexOf('part') >=0 ){ 
                                                            hr ='part';                                                 
                                                        } 
                                                        hr_data[0]=hr; 
                                                    } 

                                                    var nstat = 0;
                                                    if ((ourData[x].status.length) >= 1) {

                                                        for (j = 0; j < ourData[x].status.length; j++) {
                                                             for(var l =0; l <hr_data.length ;l++){
                                                                if (hr_data[l] === ourData[x].status[j]) {
                                                                    nstat++;
                                                                }    
                                                            }
                                                        }
                                                    }
                                                }
                                                if (nlang > 0 && nloc > 0 && nstat > 0) {
                                                    if(node.title != nPage[i].title){
                                                        tile_data.push(
                                                        { 
                                                            "id": nPage[i].tileId, 
                                                             "title": nPage[i].title
                                                        }); 
                                                    }
                                                }
                                            }
                                            if (lan > 0 && loc > 0 && stat > 0) {
                                                tile_data.push(
                                                { 
                                                    "id": ourData[x].id, 
                                                     "title": title 
                                                }); 
                                            }
                                        }
                     
                                        tile_data= getUniqueValuesOfKey(tile_data,'title');

                                        //sort by title
                                        tile_data.sort(function(a, b){
                                            if(a.title < b.title) return -1;
                                            if(a.title > b.title) return 1;
                                            return 0;
                                        });
                                        //remove empty titles
                                         tile_data = tile_data.filter(function(x) { return x['title'] !== '' });

                                        var selectHTML="";
                                        for(i=0; i<tile_data.length; i++){
                                           selectHTML+= "<option value='"+tile_data[i]['id']+"'>"+tile_data[i]['title']+"</option>";
                                        }                        
                                        var allRelated_select=$('[name=extRelate]');                        
                                          allRelated_select[1].innerHTML= selectHTML;
                                    }
                                    ourRequest.onerror = function () {
                                      console.log("Connection error");
                                    };
                                    ourRequest.send();
                            }
                        }
                    },
                    "hours": {
                        "type":"checkbox",
                        "optionLabels": ["Full-time","Part-time"],
                        "events":{
                            "change": function() {
                                    var language_sel = $('input:radio[name=language]:checked').val().toLowerCase();
                                    hours = this.getValue();
                                    var location_selected =locations; 
                                    var ourRequest = new XMLHttpRequest();
                                  
                                    if(language_sel == 'english'){                        
                                            ourRequest.open('GET', 'js/cvs_content.json');
                                    }
                                    else{
                                        ourRequest.open('GET', 'js/cvs_content_sp.json');
                                    }
                                     //collect all data from cloud and push to array
                                    var nPage = sessionStorage.getItem('pages');
                                    nPage = JSON.parse(nPage);
                                    ourRequest.onload = function () {
                                        if (ourRequest.status >= 200 && ourRequest.status < 400) { 
                                            ourData = JSON.parse(ourRequest.responseText);
                                        } 
                                         
                                         var loc_str='';
                                        if(location_selected.indexOf(',')>=0){
                                            var loc_data = location_selected.split(',');
                                           
                                            for(var j=0; j < loc_data.length ; j++) {
                                                if(loc_data[j].indexOf('Cali') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='cali';
                                                    }else{
                                                        loc_str +=',cali';
                                                    }
                                                }
                                             if(loc_data[j].indexOf('Hawa') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hawaii';
                                                    }else{
                                                        loc_str +=',hawaii';
                                                    }
                                                }
                                                if(loc_data[j].indexOf('Dall') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='dal';
                                                    }else{
                                                        loc_str +=',dal';
                                                    }
                                                }
                                                  if(loc_data[j].indexOf('Pho') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='phx';
                                                    }else{
                                                        loc_str +=',phx';
                                                    }
                                                } if(loc_data[j].indexOf('Puert') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='rico';
                                                    }else{
                                                        loc_str +=',rico';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Most') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='most';
                                                    }else{
                                                        loc_str +=',most';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Chic') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='chg';
                                                    }else{
                                                        loc_str +=',chg';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Geor') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='grg';
                                                    }else{
                                                        loc_str +=',grg';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('San An') >=0 ){
                                                    if(loc_str == 'ant'){
                                                        loc_str ='';
                                                    }else{
                                                        loc_str +=',ant';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('Hous') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='hou';
                                                    }else{
                                                        loc_str +=',hou';
                                                    }
                                                }  
                                                if(loc_data[j].indexOf('MD/VA') >=0 ){
                                                    if(loc_str == ''){
                                                        loc_str ='mvd';
                                                    }else{
                                                        loc_str +=',mvd';
                                                    }
                                                }  


                                            }
                                            var location_data =loc_str.split(',');
                                        }else{
                                            var location_data = new Array();
                                            if(location_selected.indexOf('Cali') >=0 ){ 
                                                loc_str ='cali'; 
                                            } if(location_selected.indexOf('Dal') >=0 ){ 
                                                loc_str ='dal';                                                 
                                            } if(location_selected.indexOf('Pho') >=0 ){
                                                    loc_str ='phx';
                                            } if(location_selected.indexOf('Most') >=0 ){
                                                loc_str ='most';
                                            } if(location_selected.indexOf('Hawa') >=0 ){                                              
                                                loc_str ='hawaii';
                                            } if(location_selected.indexOf('Puer') >=0 ){                                              
                                                loc_str ='rico';
                                            }
                                            if(location_selected.indexOf('Chic') >=0 ){                                              
                                                            loc_str ='chg';
                                            }
                                             if(location_selected.indexOf('Geor') >=0 ){                                              
                                                loc_str ='grg';
                                            }
                                            if(location_selected.indexOf('Hous') >=0 ){                                              
                                                loc_str ='hou';
                                            }
                                            if(location_selected.indexOf('San An') >=0 ){                                              
                                                loc_str ='ant';
                                            }
                                            if(location_selected.indexOf('MD/VA') >=0 ){                                              
                                                loc_str ='mvd';
                                            }
                                            location_data[0]= loc_str;
                                        } 
                                        var hr='';
                                        if(hours.indexOf(',')>=0){
                                            var hr_data = hours.split(',');
                                           
                                            for(var j=0; j < hr_data.length ; j++) {
                                                if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                    if(hr == ''){
                                                        hr ='full';
                                                    }else{
                                                        hr +=',full';
                                                    }
                                                }
                                             if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                    if(hr == ''){
                                                        hr ='part';
                                                    }else{
                                                        hr +=',part';
                                                    }
                                                }
                                                 
                                            }
                                            var hr_data =hr.split(',');
                                        }else{
                                            var hr_data = new Array();
                                            if(hours.toLowerCase().indexOf('full') >=0 ){ 
                                                hr ='full'; 
                                            } if(hours.toLowerCase().indexOf('part') >=0 ){ 
                                                hr ='part';                                                 
                                            } 
                                            hr_data[0]=hr; 
                                        } 
                                        tile_data  =[];
                                        for(var x=0; x< ourData.length ; x++){
                                            var lan=0;
                                            var lang= ourData[x].language;
                                            if(lang == language_sel){
                                                 lan++;
                                                    var loc = 0;            
                                                    if ((ourData[x].location.length) >= 1) {
                                                        for (j = 0; j < ourData[x].location.length; j++) {
                                                            for(var l =0; l <location_data.length ;l++){
                                                                if (location_data[l] === ourData[x].location[j]) {
                                                                    loc++;
                                                                }
                                                            }
                                                        }
                                                    } 
                                                    var stat = 0;
                                                    if ((ourData[x].status.length) >= 1) {
                                                        for (j = 0; j < ourData[x].status.length; j++) {
                                                            for(var l =0; l <hr_data.length ;l++){
                                                                if (hr_data[l] === ourData[x].status[j]) {
                                                                    stat++;
                                                                }    
                                                            }
                                                        }
                                                    }

                                            } 
                                            title='';
                                            
                                            if(ourData[x].title.indexOf("(") < 0){
                                                if(ourData[x].filename.indexOf('-m-') >=0 ){
                                                     title = ourData[x].title + " (Most US Locations)";     
                                                }
                                                else if(ourData[x].filename.indexOf('-h-') >=0 ){
                                                     title = ourData[x].title + " (Hawaii)";  
                                                }
                                                else if(ourData[x].filename.indexOf('-c-') >=0 ){
                                                     title = ourData[x].title + " (California)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-d-') >=0 ){
                                                     title = ourData[x].title + " (Dallas)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-p-') >=0 ){
                                                     title = ourData[x].title + " (Phoenix)";                                                    
                                                 
                                                }
                                                else if(ourData[x].filename.indexOf('-r-') >=0 ){
                                                     title = ourData[x].title + " (Puerto Rico)";                                                                                                          
                                                } 
                                                else if(ourData[x].filename.indexOf('-mvd-') >=0 ){
                                                     title = ourData[x].title + " (MD/VA/D.C.)";                                                    
                                                 
                                                }
                                                 else if(ourData[x].filename.indexOf('-chg-') >=0 ){
                                                     title = ourData[x].title + " (Chicago)";                                                    
                                                 
                                                }
                                                 else if(ourData[x].filename.indexOf('-grg-') >=0 ){
                                                     title = ourData[x].title + " (Georgia)";                                                    
                                                 
                                                }
                                                 else if(ourData[x].filename.indexOf('-hou-') >=0 ){
                                                     title = ourData[x].title + " (Houston)";                                                    
                                                 
                                                }
                                                 else if(ourData[x].filename.indexOf('-ant-') >=0 ){
                                                     title = ourData[x].title + " (San Antonio)";                                                    
                                                 
                                                } else{ 
                                                    title = ourData[x].title;
                                                }
                                            }else{
                                                  title = ourData[x].title;                                                                                                            
                                            }
                                            //cloud based tiles added
                                            for(var i=0; i<nPage.length ; i++){
                                                var nlang=0;
                                                if(nPage[i]['language'].toLowerCase() == language_sel){
                                                    nlang++;
                                                    var nloc = 0;  
                                                    if(nPage[i]['population'].indexOf(',')>=0){
                                                         nloc_str='';

                                                        var loc_data = nPage[i]['population'].split(',');
                                           
                                                        for(var j=0; j < loc_data.length ; j++) {
                                                            if(loc_data[j].indexOf('Cali') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='cali';
                                                                }else{
                                                                    nloc_str +=',cali';
                                                                }
                                                            }
                                                            if(loc_data[j].indexOf('Hawa') >=0 ){
                                                                    if(nloc_str == ''){
                                                                        nloc_str ='hawaii';
                                                                    }else{
                                                                        nloc_str +=',hawaii';
                                                                    }
                                                            }
                                                            if(loc_data[j].indexOf('Dall') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='dal';
                                                                }else{
                                                                    nloc_str +=',dal';
                                                                }
                                                            }
                                                              if(loc_data[j].indexOf('Pho') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='phx';
                                                                }else{
                                                                    nloc_str +=',phx';
                                                                }
                                                            } if(loc_data[j].indexOf('Puert') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='rico';
                                                                }else{
                                                                    nloc_str +=',rico';
                                                                }
                                                            }  
                                                            if(loc_data[j].indexOf('Most') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='most';
                                                                }else{
                                                                    nloc_str +=',most';
                                                                }
                                                            }
                                                             if(loc_data[j].indexOf('Chic') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='chg';
                                                                }else{
                                                                    nloc_str +=',chg';
                                                                }
                                                            }
                                                             if(loc_data[j].indexOf('Geor') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='grg';
                                                                }else{
                                                                    nloc_str +=',grg';
                                                                }
                                                            }
                                                             if(loc_data[j].indexOf('San An') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='ant';
                                                                }else{
                                                                    nloc_str +=',ant';
                                                                }
                                                            }
                                                             if(loc_data[j].indexOf('Hous') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='hou';
                                                                }else{
                                                                    nloc_str +=',hou';
                                                                }
                                                            }
                                                             if(loc_data[j].indexOf('MD/VA') >=0 ){
                                                                if(nloc_str == ''){
                                                                    nloc_str ='mvd';
                                                                }else{
                                                                    nloc_str +=',mvd';
                                                                }
                                                            }  
                                                        }
                                                        var nlocation_data =nloc_str.split(','); 
                                                      
                                                    }else{
                                                        var nlocation_data = new Array();
                                                        loc_str='';
                                                        if(nPage[i]['population'].indexOf('Cali') >=0 ){ 
                                                            loc_str ='cali'; 
                                                        } if(nPage[i]['population'].indexOf('Dal') >=0 ){ 
                                                            loc_str ='dal';                                                 
                                                        } if(nPage[i]['population'].indexOf('Pho') >=0 ){
                                                                loc_str ='phx';
                                                        } if(nPage[i]['population'].indexOf('Most') >=0 ){
                                                            loc_str ='most';
                                                        } if(nPage[i]['population'].indexOf('Hawa') >=0 ){                                              
                                                            loc_str ='hawaii';
                                                        } if(nPage[i]['population'].indexOf('Puer') >=0 ){                                              
                                                            loc_str ='rico';
                                                        }
                                                         if(nPage[i]['population'].indexOf('Chic') >=0 ){                                              
                                                            loc_str ='chg';
                                                        }

                                                         if(nPage[i]['population'].indexOf('Geor') >=0 ){                                              
                                                            loc_str ='grg';
                                                        }
                                                         if(nPage[i]['population'].indexOf('Hous') >=0 ){                                              
                                                            loc_str ='hou';
                                                        }
                                                         if(nPage[i]['population'].indexOf('San An') >=0 ){                                              
                                                            loc_str ='ant';
                                                        }
                                                         if(nPage[i]['population'].indexOf('MD/VA') >=0 ){                                              
                                                            loc_str ='mvd';
                                                        }
                                                          
                                                        nlocation_data[0]= loc_str ;
                                                    }
                                           

                                                    if ((location_data.length) >= 1) {
                                             
                                                        for (j = 0; j < location_data.length; j++) {
                                                            for(var l =0; l <nlocation_data.length ;l++){

                                                                if (nlocation_data[l] == location_data[j]) {
                                                                    nloc++; 
                                                                }
                                                                
                                                            }
                                                        }
                                                    } 
                                                     nhr= nPage[i]['hours'];
                                                    if(nhr.indexOf(',')>=0){
                                                        var nhr_data = nhr.split(',');
                                                       
                                                        for(var j=0; j < nhr_data.length ; j++) {
                                                            if(nhr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                                if(hr == ''){
                                                                    hr ='full';
                                                                }else{
                                                                    hr +=',full';
                                                                }
                                                            }
                                                         if(nhr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                                if(hr == ''){
                                                                    hr ='part';
                                                                }else{
                                                                    hr +=',part';
                                                                }
                                                            }
                                                             
                                                        }
                                                        var nhr_data =hr.split(',');
                                                    }else{
                                                        var nhr_data = new Array();
                                                       
                                                        if(nhr.toLowerCase().indexOf('full') >= 0 ){ 
                                                            hr ='full'; 
                                                        } if(nhr.toLowerCase().indexOf('part') >=0 ){ 
                                                            hr ='part';                                                 
                                                        } 
                                                        nhr_data[0]=hr; 
                                                    } 

                                                    var nstat = 0;
                                                    if ((ourData[x].status.length) >= 1) {

                                                        for (j = 0; j < hr_data.length; j++) {
                                                             for(var l =0; l <nhr_data.length ;l++){
                                                                if (nhr_data[l] === hr_data[j]) {
                                                                    nstat++;
                                                                }    
                                                            }
                                                        }
                                                    }
                                                }
                                                if (nlang > 0 && nloc > 0 && nstat > 0) {
                                                    if(node.title != nPage[i].title){
                                                        tile_data.push(
                                                        { 
                                                            "id": nPage[i].tileId, 
                                                             "title": nPage[i].title
                                                        }); 
                                                    }
                                                }
                                            }

                                            if (lan > 0 && loc > 0 && stat > 0) {
                                                tile_data.push(
                                                { 
                                                    "id": ourData[x].id, 
                                                     "title": title 
                                                }); 
                                            }
                                        } 

                                        tile_data= getUniqueValuesOfKey(tile_data,'title');

                                        //sort by title
                                        tile_data.sort(function(a, b){
                                            if(a.title < b.title) return -1;
                                            if(a.title > b.title) return 1;
                                            return 0;
                                        });
                                        //remove empty titles
                                         tile_data = tile_data.filter(function(x) { return x['title'] !== '' });
                                         

                                        var selectHTML="";
                                        for(i=0; i<tile_data.length; i++){
                                           selectHTML+= "<option value='"+tile_data[i]['id']+"'>"+tile_data[i]['title']+"</option>";
                                        }                        
                                        var allRelated_select=$('[name=extRelate]');                        
                                        allRelated_select[1].innerHTML= selectHTML;
                                    }
                                    ourRequest.onerror = function () {
                                      console.log("Connection error");
                                    };
                                    ourRequest.send();

                            }
                        }
                    },
                    "startDate": {
                        "label":"Start Date",
                         "picker": {                            
                            "maxDate": new Date().setDate(now.getDate() + 364),
                            "locale": "en"
                        }
                    },
                    "endDate": {
                        "label":"End Date",
                        "picker": {                             
                            "maxDate": new Date().setDate(now.getDate() + 364),
                            "locale": "en"
                        }
                    },
                    "bgImage": {
                        "events":{
                            "change": function() {
                                    var bgImg = this.getValue();
                                    if( bgImg== true){
                                        $("input[name=imageURL]").parent().parent().css('display','block');
                                        $("input[name=existingImage]").parent().parent().css('display','block');                    
                                    }else{
                                        $("input[name=imageURL]").parent().parent().css('display','none');
                                        $("input[name=existingImage]").parent().parent().css('display','none');                    
                                       
                                    }
                            }
                        }
                        
                    },
                    "imageURL": {
                        "type": "text"
                    },                   
                   "existingImage":{                      
                        "type": "checkbox"
                    },                   
                    "color": {
                          "type":"radio", 
                        "optionLabels": ["cvs-babyblue","cvs-darkgray","cvs-green","cvs-icon-gray","cvs-icon-green","cvs-icon-red","cvs-icon-turq","cvs-img","cvs-lightgray","cvs-medgray","cvs-navy","cvs-orange","cvs-pink","cvs-red","cvs-turq","cvs-yellow","logo"],
                        "events":{
                            "click": function() {
                                     
                            }
                        }
                    },
                     "previewTile":{
                        "type":"checkbox",
                        "events":{
                            "click":function(){
                             
                                 document.cookie ="tileCreat=" + true; 

                                 var bgcolor ={"cvs-red":"boxbg-cvs-red" , "cvs-yellow":"boxbg-cvs-yellow" ,"cvs-green":"boxbg-cvs-green" ,"cvs-orange":"boxbg-cvs-orange" ,"cvs-turq":"boxbg-cvs-turq" ,"cvs-babyblue":"boxbg-cvs-babyblue" ,"cvs-lightgray":"boxbg-cvs-lightgray","cvs-medgray":"boxbg-cvs-medgray","cvs-darkgray":"boxbg-cvs-darkgray","cvs-pink":"boxbg-cvs-pink","cvs-navy":"boxbg-cvs-navy","logo":"boxbg-logo" ,"cvs-img":"boxbg-cvs-img","cvs-icon-turq":"boxbg-cvs-turq transparency","cvs-icon-gray":"boxbg-cvs-lightgray transparency","cvs-icon-green":"boxbg-cvs-green transparency","cvs-icon-red":"boxbg-cvs-red transparency"};
                           
                                    
                                    var bgI = document.getElementsByName('bgImage');
                                    var cl = document.getElementsByName('color');

                                    for(i=0;i<cl.length;i++){
                                        if(cl[i].checked)
                                      bgClass= cl[i].value;
                                    }

                                    var bg_class='';
                                   for (var color in bgcolor) {
                                       if (color == bgClass)
                                          bg_class= bgcolor[color];
                                    }

                                    var backgroundImage = bgI[1].value;
                                  

                                    if(backgroundImage == 'on'){
                                        var imgUr = document.getElementsByName('imageURL');
                                        var img= 'https://a980f94f-6083-4374-8d7f-9a4a9f042a9b-hosted.cloudcms.net/static/test.pdf?repositories=0da4c0b255d99e3fea3a&branches=93ac3d94f366fcaa21c5&node=85392d705ff0c4e25d99&attachment=' + imgUr[1].value;
                                        console.log(img);
                                        var tt = document.getElementsByName('title');
 
                                        mask = '<div class="spot">Spotlight on ...</div>';

                                        var cl= '<a class="'+ bg_class+ ' tileboxbt align-bottom" style="width:286px;display:block;background-image:url('+img+')">'+ mask +'<div class=tilebox><h2>'+ tt[1].value +' </h2> </div></a>';
                                        $('#learn1').html(cl);
                                        console.log(cl)
                                    }  
                                    
                                    $("#dialog-modal2").dialog('open');
                                    
                                    }
                            }
                        
                    },
                    "tags": {
                        "type": "text"
                    },
                    "body": {
                        "type": "ckeditor",
                         "ckeditor": {
                            "toolbar": [
                                ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source','Image']
                            ],                        
                            "height":"220"
                        }
                    },
                    "accordions":{
                        "items":{
                            "fields":{
                                "accordionHeader":{
                                    "type":"text"
                                },
                                "accordionBody":{
                                    "type":"ckeditor",
                                    "ckeditor": {
                                            "toolbar": [
                                                ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                            ],                        
                                            "height":"220"
                                        }
                                }
                            }
                        }
                    },
                     "extRelate": {
                        "type": "select",
                        "multiple": true,
                        "size": 20,
                        "helper":"Please re-select all related items to change/add/update.",
                        "events":{
                            "click": function(){
                                    var doc_cookie= document.cookie.split(';');
                                 
                                    for(var i = 0; i < doc_cookie.length ; i++){
                                    var name= doc_cookie[i].split("=")[0].trim();
                                    if(name=='relatedItem')
                                         var relate= doc_cookie[i].split("=")[1];
                                    }
                                   
                                    if(relate == 'true'){
                                      alert('please re-select all Related items.');  
                                      document.cookie ="relatedItem=" + false;
                                    } 
                                    multiSelect = this.getValue(); 

                                    document.cookie="multiSelect" + multiSelect;
                                    var extR = document.getElementsByName('allRelated');               
                                     if(extR[1].value != ''){
                                     //   alert('please re-select all Related items.')
                                     }
                            }
                        }

                    },
                    "allRelated":{
                        "type": "text" 
                    }
                }

            },
            "postRender": function(control) {
                 
                 document.cookie ="tileExists=" + true;  

                //display image name only
                var extImgURL = control.childrenByPropertyId["imageURL"];
                var extImgData = extImgURL['data'];               
                
                if( (extImgData == null)){
                   
                }else{
                    var imgUr = document.getElementsByName('imageURL');                
                    imgUr[1].value =  extImgData.substr(extImgData.lastIndexOf('/')+1);
                }
                //display image name only
                //set cookie for existing related item
                var relatedItem = document.getElementsByName('allRelated');       
                
                if(relatedItem[1].value != '' || relatedItem[1].value != undefined || relatedItem[1].value != null){
                    document.cookie ="relatedItem=" + true; 
                }
                //if background image exist ,hide color
                var bgImage = control.childrenByPropertyId["bgImage"];
                if(bgImage['data'] == false){
                    $("input[name=imageURL]").parent().parent().css('display','none');
                    $("input[name=existingImage]").parent().parent().css('display','none');
                                       
                }
                var x = document.getElementsByName('existingImage')[1];
                x.innerHTML = ('<input type="button" name="existingImage" class="chx" value="Choose Image" onclick="getImg()">')
                

                //add new selected image from thumbnails
                var new_image = control.childrenByPropertyId["existingImage"];
                   
                new_image.on('change', function(val) {
                    getImages('dialog1');
                    this.schema.data = val;     
                    var x=  this.schema.data.target.value ;
                    
                    $('#dialog-modal1').dialog('open');
                    var doc_cookie = document.cookie.split(";");                  
                    for(var i = 0; i < doc_cookie.length ; i++){
                        var name= doc_cookie[i].split("=")[0].trim();
                        if(name=='image_data')
                            var image_data= doc_cookie[i].split("=")[1];                   
                    }                                               
                });                  
                //add new selected image from thumbnails 

                //* call related links based on language ,location , status*/

                var language_selected = control.childrenByPropertyId["language"];                
                var language_sel = control.childrenByPropertyId["language"]['data'].toLowerCase();                
                var location_selected = control.childrenByPropertyId["population"]['data'];                
                hours = control.childrenByPropertyId["hours"]['data']; 
                
                locations =location_selected;        
                var status_selected = control.childrenByPropertyId["hours"]['data']; 
                var extRelatedID = control.childrenByPropertyId["allRelated"]['data']; 
                //collect all data from cloud and push to array
                var nPage = sessionStorage.getItem('pages');
                nPage = JSON.parse(nPage);

                var ourRequest = new XMLHttpRequest();               
                if(language_sel == 'spanish'){                                        
                    ourRequest.open('GET', 'js/cvs_content_sp.json');
                }
                else{
                    ourRequest.open('GET', 'js/cvs_content.json');
                }
                ourRequest.onload = function () {
                    if (ourRequest.status >= 200 && ourRequest.status < 400) { 
                        ourData = JSON.parse(ourRequest.responseText);
                         
                        var loc_str='';
                        if(location_selected.indexOf(',')>=0){
                            var loc_data = location_selected.split(',');
                           
                            for(var j=0; j < loc_data.length ; j++) {
                                if(loc_data[j].indexOf('Cali') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='cali';
                                    }else{
                                        loc_str +=',cali';
                                    }
                                }
                             if(loc_data[j].indexOf('Hawa') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='hawaii';
                                    }else{
                                        loc_str +=',hawaii';
                                    }
                                }
                                if(loc_data[j].indexOf('Dall') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='dal';
                                    }else{
                                        loc_str +=',dal';
                                    }
                                }
                                  if(loc_data[j].indexOf('Pho') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='phx';
                                    }else{
                                        loc_str +=',phx';
                                    }
                                } if(loc_data[j].indexOf('Puert') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='rico';
                                    }else{
                                        loc_str +=',rico';
                                    }
                                }  
                                if(loc_data[j].indexOf('Most') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='most';
                                    }else{
                                        loc_str +=',most';
                                    }
                                }  
                                if(loc_data[j].indexOf('Chic') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='chg';
                                    }else{
                                        loc_str +=',chg';
                                    }
                                }  
                                if(loc_data[j].indexOf('Geor') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='grg';
                                    }else{
                                        loc_str +=',grg';
                                    }
                                }  
                                if(loc_data[j].indexOf('Hou') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='hou';
                                    }else{
                                        loc_str +=',hou';
                                    }
                                }  
                                if(loc_data[j].indexOf('San An') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='ant';
                                    }else{
                                        loc_str +=',ant';
                                    }
                                }  
                                if(loc_data[j].indexOf('MD/VA') >=0 ){
                                    if(loc_str == ''){
                                        loc_str ='mvd';
                                    }else{
                                        loc_str +=',mvd';
                                    }
                                }  

                            }
                            var location_data =loc_str.split(','); 
                        }else{
                            var location_data = new Array();
                            if(location_selected.indexOf('Cali') >=0 ){ 
                                loc_str ='cali'; 
                            } if(location_selected.indexOf('Dal') >=0 ){ 
                                loc_str ='dal';                                                 
                            } if(location_selected.indexOf('Pho') >=0 ){
                                    loc_str ='phx';
                            } if(location_selected.indexOf('Most') >=0 ){
                                loc_str ='most';
                            } if(location_selected.indexOf('Hawa') >=0 ){                                              
                                loc_str ='hawaii';
                            } if(location_selected.indexOf('Puer') >=0 ){                                              
                                loc_str ='rico';
                            }
                            if(location_selected.indexOf('Chic') >=0 ){                                              
                                loc_str ='chg';
                            }
                            if(location_selected.indexOf('Geor') >=0 ){                                              
                                loc_str ='grg';
                            }
                            if(location_selected.indexOf('San An') >=0 ){                                              
                                loc_str ='ant';
                            }
                            if(location_selected.indexOf('Hous') >=0 ){                                              
                                loc_str ='hou';
                            }
                            if(location_selected.indexOf('MD/VA') >=0 ){                                              
                                loc_str ='mvd';
                            }
                            location_data[0]= loc_str ;
                        }
                        var hr='';

                        if(hours.indexOf(',')>=0){
                            var hr_data = hours.split(',');
                           
                            for(var j=0; j < hr_data.length ; j++) {
                                if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                    if(hr == ''){
                                        hr ='full';
                                    }else{
                                        hr +=',full';
                                    }
                                }
                             if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                    if(hr == ''){
                                        hr ='part';
                                    }else{
                                        hr +=',part';
                                    }
                                }
                                 
                            }
                            var hr_data =hr.split(',');
                        }else{
                            var hr_data = new Array();
                           
                            if(hours.toLowerCase().indexOf('full') >= 0 ){ 
                                hr ='full'; 
                            } if(hours.toLowerCase().indexOf('part') >=0 ){ 
                                hr ='part';                                                 
                            } 
                            hr_data[0]=hr; 
                        } 

                        tile_data  =[];
                        for(var x=0; x< ourData.length ; x++){
                            var lan=0;
                            var lang= ourData[x].language;
                            
                            if(lang == language_sel){
                                 lan++;
                                    var loc = 0;    

                                    if ((ourData[x].location.length) >= 1) {
                                        for (j = 0; j < ourData[x].location.length; j++) {
                                            for(var l =0; l <location_data.length ;l++){
                                                if (location_data[l] === ourData[x].location[j]) {
                                                    loc++;
                                                }
                                            }
                                        }
                                    } 
                                    var stat = 0;                                  

                                    if ((ourData[x].status.length) >= 1) {

                                        for (j = 0; j < ourData[x].status.length; j++) {
                                             for(var l =0; l <hr_data.length ;l++){
                                                if (hr_data[l] === ourData[x].status[j]) {
                                                    stat++;
                                                }    
                                            }
                                        }
                                    }

                            } 
                           
                             title='';
                            
                            if(ourData[x].title.indexOf("(") < 0){
                                if(ourData[x].filename.indexOf('-m-') >=0 ){
                                     title = ourData[x].title + " (Most US Locations)";     
                                }
                                else if(ourData[x].filename.indexOf('-h-') >=0 ){
                                     title = ourData[x].title + " (Hawaii)";  
                                }
                                else if(ourData[x].filename.indexOf('-c-') >=0 ){
                                     title = ourData[x].title + " (California)";                                                    
                                 
                                }
                                else if(ourData[x].filename.indexOf('-d-') >=0 ){
                                     title = ourData[x].title + " (Dallas)";                                                    
                                 
                                }
                                else if(ourData[x].filename.indexOf('-p-') >=0 ){
                                     title = ourData[x].title + " (Phoenix)";                                                    
                                 
                                }
                                else if(ourData[x].filename.indexOf('-r-') >=0 ){
                                     title = ourData[x].title + " (Puerto Rico)";                                                                                                          
                                }  
                                 else if(ourData[x].filename.indexOf('-chg-') >=0 ){
                                     title = ourData[x].title + " (Chicago)";                                                                                                          
                                }  
                                 else if(ourData[x].filename.indexOf('-grg-') >=0 ){
                                     title = ourData[x].title + " (Georgia)";                                                                                                          
                                }  
                                 else if(ourData[x].filename.indexOf('-hou-') >=0 ){
                                     title = ourData[x].title + " (Houston)";                                                                                                          
                                } 
                                 else if(ourData[x].filename.indexOf('-mvd-') >=0 ){
                                     title = ourData[x].title + " (MD/VA/D.C.)";                                                                                                          
                                }  
                                 else if(ourData[x].filename.indexOf('-ant-') >=0 ){
                                     title = ourData[x].title + " (San Antonio)";                                                                                                          
                                } else{ 
                                     title = ourData[x].title;
                                 }

                            }else{
                                  title = ourData[x].title;                                                                                                            
                            }

                            if (lan > 0 && loc > 0 && stat > 0) {
                                tile_data.push(
                                { 
                                    "id": ourData[x].id, 
                                     "title": title
                                }); 
                            }


                            //cloud based tiles added
                            for(var i=0; i<nPage.length ; i++){
                                var nlang=0;
                                var nloc_str='';
                                if(nPage[i]['language'].toLowerCase() == language_sel){
                                    nlang++;
                                    var nloc = 0;  
                                    if(nPage[i]['population'].indexOf(',')>=0){
                                        var nloc_data = nPage[i]['population'].split(',');
                           
                                        for(var j=0; j < nloc_data.length ; j++) {
                                            if(nloc_data[j].indexOf('Cali') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='cali';
                                                }else{
                                                    nloc_str +=',cali';
                                                }
                                            }
                                            if(nloc_data[j].indexOf('Hawa') >=0 ){
                                                    if(nloc_str == ''){
                                                        nloc_str ='hawaii';
                                                    }else{
                                                        nloc_str +=',hawaii';
                                                    }
                                            }
                                            if(nloc_data[j].indexOf('Dall') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='dal';
                                                }else{
                                                    nloc_str +=',dal';
                                                }
                                            }
                                              if(nloc_data[j].indexOf('Pho') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='phx';
                                                }else{
                                                    nloc_str +=',phx';
                                                }
                                            } if(nloc_data[j].indexOf('Puert') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='rico';
                                                }else{
                                                    nloc_str +=',rico';
                                                }
                                            }  
                                            if(nloc_data[j].indexOf('Most') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='most';
                                                }else{
                                                    nloc_str +=',most';
                                                }
                                            }  
                                            if(nloc_data[j].indexOf('Chic') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='chg';
                                                }else{
                                                    nloc_str +=',chg';
                                                }
                                            }  
                                            if(nloc_data[j].indexOf('Geor') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='grg';
                                                }else{
                                                    nloc_str +=',grg';
                                                }
                                            }  
                                            if(nloc_data[j].indexOf('Hous') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='hou';
                                                }else{
                                                    nloc_str +=',hou';
                                                }
                                            }  
                                            if(nloc_data[j].indexOf('San An') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='ant';
                                                }else{
                                                    nloc_str +=',ant';
                                                }
                                            }  
                                            if(nloc_data[j].indexOf('MD/VA') >=0 ){
                                                if(nloc_str == ''){
                                                    nloc_str ='mvd';
                                                }else{
                                                    nloc_str +=',mvd';
                                                }
                                            }  

                                        }
                                         var nlocation_data =loc_str.split(','); 
                                    }else{
                                        var nlocation_data = new Array();
                                        if(nPage[i]['population'].indexOf('Cali') >=0 ){ 
                                            nloc_str ='cali'; 
                                        } if(nPage[i]['population'].indexOf('Dal') >=0 ){ 
                                            nloc_str ='dal';                                                 
                                        } if(nPage[i]['population'].indexOf('Pho') >=0 ){
                                                nloc_str ='phx';
                                        } if(nPage[i]['population'].indexOf('Most') >=0 ){
                                            nloc_str ='most';
                                        } if(nPage[i]['population'].indexOf('Hawa') >=0 ){                                              
                                            nloc_str ='hawaii';
                                        } if(nPage[i]['population'].indexOf('Puer') >=0 ){                                              
                                            nloc_str ='rico';
                                        }
                                        if(nPage[i]['population'].indexOf('Chic') >=0 ){                                              
                                            nloc_str ='chg';
                                        }
                                        if(nPage[i]['population'].indexOf('Geor') >=0 ){                                              
                                            nloc_str ='grg';
                                        }
                                        if(nPage[i]['population'].indexOf('Hous') >=0 ){                                              
                                            nloc_str ='hou';
                                        }
                                        if(nPage[i]['population'].indexOf('San An') >=0 ){                                              
                                            nloc_str ='ant';
                                        }
                                        if(nPage[i]['population'].indexOf('MD/VA') >=0 ){                                              
                                            nloc_str ='mvd';
                                        }
                                        nlocation_data[0]= loc_str ;
                                    }


                                    if ((ourData[x].location.length) >= 1) {
                             
                                        for (j = 0; j < ourData[x].location.length; j++) {
                                            for(var l =0; l <nlocation_data.length ;l++){
                                                if (nlocation_data[l] == ourData[x].location[j]) {
                                                    nloc++;
                                                }
                                            }
                                        }
                                    } 
                                     nhr= nPage[i]['hours'];
                                       if(nhr.indexOf(',')>=0){
                                        var hr_data = nhr.split(',');
                                       
                                        for(var j=0; j < hr_data.length ; j++) {
                                            if(hr_data[j].toLowerCase().indexOf('full') >=0 ){
                                                if(hr == ''){
                                                    hr ='full';
                                                }else{
                                                    hr +=',full';
                                                }
                                            }
                                         if(hr_data[j].toLowerCase().indexOf('part') >=0 ){
                                                if(hr == ''){
                                                    hr ='part';
                                                }else{
                                                    hr +=',part';
                                                }
                                            }
                                             
                                        }
                                        var hr_data =hr.split(',');
                                    }else{
                                        var hr_data = new Array();
                                       
                                        if(nhr.toLowerCase().indexOf('full') >= 0 ){ 
                                            hr ='full'; 
                                        } if(nhr.toLowerCase().indexOf('part') >=0 ){ 
                                            hr ='part';                                                 
                                        } 
                                        hr_data[0]=hr; 
                                    } 

                                    var nstat = 0;
                                    if ((ourData[x].status.length) >= 1) {

                                        for (j = 0; j < ourData[x].status.length; j++) {
                                             for(var l =0; l <hr_data.length ;l++){
                                                if (hr_data[l] === ourData[x].status[j]) {
                                                    nstat++;
                                                }    
                                            }
                                        }
                                    }
                                }
                                if (nlang > 0 && nloc > 0 && nstat > 0) {
                                    if(node.title != nPage[i].title){
                                        tile_data.push(
                                        { 
                                            "id": nPage[i].tileId, 
                                             "title": nPage[i].title
                                        }); 
                                    }
                                }

                            }
                        } //ourdata ends
                        tile= getUniqueValuesOfKey(tile_data,'title');
                      
                        //sort by title
                        tile.sort(function(a, b){
                            if(a.title < b.title) return -1;
                            if(a.title > b.title) return 1;
                            return 0;
                        });
                        //remove empty titles
                         tile = tile.filter(function(x) { return x['title'] !== '' });
                                         

                        //set value with id from json                
                        var selectHTML="";
                        for(i=0; i<tile.length; i++){
                            selectHTML+= "<option value='"+tile[i]['id']+"'>"+ tile[i]['title']+"</option>";
                        }        
                   
                        var allRelated_select=$('[name=extRelate]');        

                        allRelated_select[1].innerHTML= selectHTML;

                        //highlight already selected related ID
                        var allSelects = document.getElementsByTagName("select");
                        var lastSelect = allSelects[allSelects.length-1];
                        var alId = lastSelect.getAttribute('id')
                        
                        if(extRelatedID != null){
                            var extRelate = extRelatedID.split(',');
                            if(extRelate.length > 0 ){
                                var c = $('#'+alId)[0];
                                var x = c.options;
                                for(i=0; i<tile_data.length; i++){
                                    for(j =0; j<extRelate.length ; j++){    

                                        if(extRelate[j] == tile_data[i]['id']){
                                          $('#'+alId).find("option[value='"+tile_data[i]['id']+"']").addClass("relateHighlight"); 
                                        }
                                    }
                                }
                            }
                        }
                    }                        
                }                       
                ourRequest.onerror = function () {
                      console.log("Connection error");
                };

                ourRequest.send();  
                $(".alpaca-form-button.alpaca-form-button-submit.btn.btn-default").attr('disabled',false);
                
            }
    });
    $(".push").css('height','0px');
    $(".footer").css('height','0px');

    $('.alpaca-form-button-Preview').append('Preview');
    $('.alpaca-form-button-Approve').append('Approve');

   
} //alpaca   

function clean(obj) {
  for (var propName in obj) { 
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
}


 
var timer;

function setTimer() {
    timer = setTimeout(function() {
        location.reload();
    }, 900000);
}

function clearTimer() {
    clearTimeout(timer);
}

 

function submitForm() {
    var formData = new FormData($("#frmeditSubmitForm5")[0]);

    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
    var form = $("#frmeditSubmitForm5");
    var ContainerId="85392d705ff0c4e25d99";
    $.ajax({
        type: "POST",
        url: "https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/" + ContainerId + "/attachments/" + ($("#uploadFilenameEdit5").val()).replace(" ", "_") + "/",
        data: formData,
        contentType: false,
        processData: false,
        headers: {
            authorization: authorizationHeader
        },
        success: function (response) {
            getAttachments('image');

            $("#frmeditSubmitForm5").css('display','none');
           // $("#imgtbl").css('display','block');
        }
    });
}

function logout() {
    Gitana.deleteCookie("password", "/secure-bsc-admin");
    Gitana.deleteCookie("username", "/secure-bsc-admin");
    Gitana.deleteCookie("password", "/localhost");
    Gitana.deleteCookie("username", "/localhost");
    Gitana.deleteCookie("password", "/");
    Gitana.deleteCookie("username", "/");

    platform.logout();
    open("index.html", "_self");
}



//This is form upload scripting here--------------------------------------------

var fl = document.getElementById('myFileUpload5');
 

$("#uploadFilenameEdit5").on('change keyup paste mouseup', function() {
    $("#myFileName").html($("#uploadFilenameEdit5").val());
    var tx = "https://a980f94f-6083-4374-8d7f-9a4a9f042a9b-hosted.cloudcms.net/static/test.pdf?repositories=0da4c0b255d99e3fea3a&branches=93ac3d94f366fcaa21c5&node=85392d705ff0c4e25d99&attachment=";
    $("#lnk1").html(tx + $("#uploadFilenameEdit5").val());
});

function getImg(){
    getImages('dialog1');
    $('#dialog-modal1').dialog('open');

}
function copyToClipboard(element) { 
    var targetId = "_hiddenCopyText_";
    //var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var isInput='';
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = element;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
          succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}

//This ends form upload scripting-----------------------------------------------

$(document).ready(function () {
   
     $('#dialog-modal1').dialog({
        modal: true,
        autoOpen: false,
        width:900,
        buttons : {
            "Confirm" : function(val) { 
                  //var bg=($('.image.active').children().css('background-image'));
                  var bg=$('.thumb.active').css('background-image');
                bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
                
                var imgUr = document.getElementsByName('imageURL');
                
                var doc_cookie= document.cookie.split(';');
              
                for(var i = 0; i < doc_cookie.length ; i++){
                    var name= doc_cookie[i].split("=")[0].trim();
                    if(name=='tileCreat')
                         var tileCreate= doc_cookie[i].split("=")[1];
                    if(name=='tileExists')
                         var tileExists= doc_cookie[i].split("=")[1];
                }
                
                if(tileCreate == "true" && (tileExists == "false" || tileExists == undefined)){   
                    imgUr[0].value='';                   
                    imgUr[0].value =bg.substr(bg.lastIndexOf('/')+1);
                }
                else{
                
                   imgUr[1].value='';
                   imgUr[1].value =bg.substr(bg.lastIndexOf('/')+1);
                
                }
               
                //$("#"+ x.id).val(bg);
               
                $(this).dialog("close");
            },
            "Cancel" : function() {
              $(this).dialog("close");
            } 
        }
    });

   $('#dialog-modal').dialog({
        modal: true,
        autoOpen: false,
        width:900,
        buttons : {
            "Confirm" : function(val) { 
                var bg=($('.image.active').children().css('background-image'));
                bg = bg.replace('url(','').replace(')','').replace(/\"/gi, ""); 
                var imgUr = document.getElementsByName('imageURL'); 
              
                imgUr[0].value =bg.substr(bg.lastIndexOf('/')+1);
                $(this).dialog("close");
            },
            "Cancel" : function() {
              $(this).dialog("close");
            } 
        }
    });  
   
    $('#dialog-modal2').dialog({
        modal: true,
        autoOpen: false,
        width:450,
        height:250
    });

});

function getUniqueValuesOfKey(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};
    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }


    return newArray;
}       
 

function sendEmail() {
    console.log("sending email with draft node Id of " + draftNodeId);
    node.subchain(platform).then(function () {
        // NOTE: this = platform
        var workflowConfig = {};
        workflowConfig.context = {};
        workflowConfig.context.projectId = projectId;
        workflowConfig.payloadType = "content";
        workflowConfig.payloadData = {
            "repositoryId": repositoryId,
            "branchId": branchId
        };
        console.log(repositoryId + '  -->  '+ branchId)
        workflowConfig.runtime = {};
        workflowConfig.runtime.applicationId = applicationId;
        workflowConfig.runtime.emailProviderId = emailProviderId;
        workflowConfig.runtime.repositoryId = repositoryId;
        workflowConfig.runtime.branchId = branchId;


        // auth info
        var authInfo = platform.getDriver().authInfo;

        // find the current user
        this.readDomain(authInfo.principalDomainId).readPrincipal(authInfo.principalId).then(function () {
            //var currentUser = this;
            var user = authInfo['user'];
            var currentUser = user.email;
            console.log(currentUser);

            // create workflow and include the current user's email
            this.subchain(platform).createWorkflow(workflowId, workflowConfig).then(function () {
                this.addResource(node);
                var data = {
                    "coreNodeId": node._doc,
                    "draftNodeId": draftNodeId,
                    "email": currentUser
                }
                this.start(data).then(function () {
                });
            });
        });
    });
}
