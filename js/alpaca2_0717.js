
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

var globaLanguage = 'English';

var en_actualJson=[
 {"id":"1","title": "Medical and Prescription (Most U.S. Locations)"}, {"id":"2","title": "Medical and Prescription (California)"}, {"id":"3","title": "Medical and Prescription (Dallas)"}, {"id":"4","title": "Medical and Prescription (Phoenix)"}]
var en_relatedJson=["Medical and Prescription (Most U.S. Locations)","Medical and Prescription (California)","Medical and Prescription (Dallas)","Medical and Prescription (Phoenix)"]


var sp_actualJson=[
 {"id":"1","title": "Planes médicos y de medicamentos por receta  (La mayoría de las localidades de Estados)"}, {"id":"2","title": "Planes médicos y de medicamentos por receta  (California)"}, {"id":"3","title": "Planes médicos y de medicamentos por receta (Dallas)"}, {"id":"4","title": "Planes médicos y de medicamentos por receta (California)"}]
var sp_relatedJson=["Planes médicos y de medicamentos por receta  (La mayoría de las localidades de Estados))","Planes médicos y de medicamentos por receta  (California)","Planes médicos y de medicamentos por receta (Dallas)","Planes médicos y de medicamentos por receta (Phoenix)"]



function checkCred(){

 $("#loginContainer").append('<div id="dialog" title="Please Log In."><label>Username:</label><input id="txtUsername" name="txtUsername" type="text"><label>Password:</label><input id="txtPassword" name="txtPassword" type="password"><input id="submitButton" onclick="getPage()" name="Submit" type="button" value="Submit"><label id="lblLoginLable"></label></div>');
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
                $(this).css("maxWidth", "300px");
            }

        });
}

//Switching from local developement to production will require switching config objects
//getPage(showForm);
function getConfig(){
    username = $("#txtUsername").val();
    password = $("#txtPassword").val();

     var config = {
        "clientKey": "35b028e7-1f30-47fe-8574-d7ffca4ca967",
        "clientSecret": "TsPd9+05+Gmz9mrv40/pJ7rE6v3h5nw78vE5mo+iDAAcA6R2IlwngWll+xcXl+pgy38+6//boG1LeAw5deRSQccka0xxU5ZUgRQx5FAf7pY=",
        "username": username,
        "password": password,
        "baseURL": "https://api.cloudcms.com",
        "application": "6af9084e0eec8c4756c6"
    };
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
    var config = {
        "clientKey": "35b028e7-1f30-47fe-8574-d7ffca4ca967",
        "clientSecret": "TsPd9+05+Gmz9mrv40/pJ7rE6v3h5nw78vE5mo+iDAAcA6R2IlwngWll+xcXl+pgy38+6//boG1LeAw5deRSQccka0xxU5ZUgRQx5FAf7pY=",
        "username": "06fa5ef3-2815-4c06-90b8-936188d17cb1",
        "password": "roY8ZcOnEKbM5ns8a8qjCJg+xXEdyDslz4Ta4EKGWXNKsqjN2ty2yDJ7BJRYEVPjo0MEryrzHCoTsQET23f2Oe8CNqkcY3fGuYlmjOIfcDs=",
        "baseURL": "https://api.cloudcms.com",
        "application": "6af9084e0eec8c4756c6"
    };

    Gitana.connect(config).then(function () {
           platform = this; 
        this.readRepository(repositoryId).then(function () {
            this.readBranch('master').then(function () {
                branch = this;
                var query = {
                    "_type": { "$in": ["custom:specialpag0"] }
                };
                var pagination = {
                    "sort": {
                        "priority": 1
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
                    fileldValues['key']= this.title;
                    fileldValues['titles']= this.getId(); 
                    
                    
                    
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
 
   /* var config = {
        "clientKey": "26f9385c-5993-4fdb-b18b-a537e16cc721",
        "clientSecret": "Bi+EneT8H7oVSdFM3/zXilvt+FPDQrZC3RsWQb31OS4psIp/mbbfdnkHFN2GLDl4DFbJt52iQFQoohmdO0cC6TT6qQ/pqWKRM6IqBnemDSo=",
        "username": username,
        "password": password,
        "baseURL": "https://api.cloudcms.com",
        "application": "ae4e45352206df5ebff3"
    };
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
               
                    //get all the navbar nodes from cloud
                    var newData= new Array(); 
                    branch.queryNodes({
                        "_type": "custom:navbar0"
                    }).each(function(id ,i,key) {
                    
                        var fileldValues = {};
                        fileldValues['key']= this.title;
                        fileldValues['titles']= this.getId(); 
                        
                       //newData[i]=fileldValues;
                        
                        nData.push(fileldValues);
                          
                    }).then(function(){
                        getNavbarDetails(nData); 
                            
                    });

                    //get all the page nodes from cloud
                    var newData_page= new Array(); 
                    branch.queryNodes({
                        "_type": "custom:page0"
                    }).each(function(id ,i,key) {
                    
                        var fileldValues = {};
                        fileldValues['key']= this.title;
                        fileldValues['titles']= this.getId(); 
                        
                       //newData[i]=fileldValues;
                        
                        newData_page.push(fileldValues);
                          
                    }).then(function(){
                        getPageDetails(newData_page); 
                            
                });                
            });
        }); 
    
    });*/
}

function getImages(){
    username = $("#txtUsername").val();
    password = $("#txtPassword").val();

     var config = {
        "clientKey": "35b028e7-1f30-47fe-8574-d7ffca4ca967",
        "clientSecret": "TsPd9+05+Gmz9mrv40/pJ7rE6v3h5nw78vE5mo+iDAAcA6R2IlwngWll+xcXl+pgy38+6//boG1LeAw5deRSQccka0xxU5ZUgRQx5FAf7pY=",
        "username": "06fa5ef3-2815-4c06-90b8-936188d17cb1",
        "password": "roY8ZcOnEKbM5ns8a8qjCJg+xXEdyDslz4Ta4EKGWXNKsqjN2ty2yDJ7BJRYEVPjo0MEryrzHCoTsQET23f2Oe8CNqkcY3fGuYlmjOIfcDs=",
        "baseURL": "https://api.cloudcms.com",
        "application": "6af9084e0eec8c4756c6"
    };
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
                
                 /* node = this.readNode(pageIdToLoad).then(function () {
                    callback && callback();
                });*/
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
                            for ( var i=0; i < response['rows'].length; i++){
                                var data_arr={};
                                x= response['rows'][i];                               
                                
                                if(x['filename'].substr(x['filename'].indexOf('.')+1) == 'jpg' || x['filename'].substr(x['filename'].indexOf('.')+1) == 'png') {
                                     
                                    data_arr ['pic'] = count;
                                    data_arr ['ar'] = ct + '/' + x['attachmentId'];
                                    data_arr ['cpy'] = ct + '/' + x['filename'];
                                    newData.push(data_arr);
                                    count++;
                                }                                    
                            }
                            document.cookie = "image_data =" + JSON.stringify(newData);                           
                        }
                    });
            });
        });

       

    });
                     
} 

function getPageDetails(nPageData){
    
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
                    }
                }
            },
            "form": {
                "buttons": {
                      "addRow": {
                        "title": "Add New tile",
                        "click": function() {
                            $("#tileDisp").css('display','none');
                            $("#tileDisp1").css('display','block');
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
                                             location.reload();
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
    getImages();

    //get images from cookie 
    var x  = document.cookie;
    var doc_cookie = document.cookie.split(";");
    for(var i = 0; i < doc_cookie.length ; i++){
        var name= doc_cookie[i].split("=")[0].trim();
        if(name=='image_data')
            var language_1= doc_cookie[i].split("=")[1]; 
    }
    //parsed images
    var actual_img = JSON.parse(language_1);
    var img_data_capture = [];
    for(i=0;i<actual_img.length;i++){
        img_data_capture[i]=actual_img[i]['ar']
    }
  
  
    //add new page
   $("#tileDisp1").alpaca({
       "view": "bootstrap-edit",
        "data": node,
        "schema": { 
            "type": "object",
              "properties": {
                    "title": {
                        "type": "string",
                        "title": "title"
                    },
                    "priority": {
                        "type": "string",
                        "title": "Priority"
                    },
                    "section": {
                        "type": "string",
                        "title": "Section",
                        "enum": ["Learn","Decide","Enroll"]
                    },               
                    "population": {
                         "type": "string",
                        "title": "Population",
                        "enum": ["Most US Locations", "California","Dallas", "Hawaii","Phoenix","Puerto Rico"]
                    },
                    "language": {
                        "type": "string",
                        "title": "Language",
                        "enum": ["English","Spanish"]
                    },
                    "hours": {
                        "type": "string",
                        "title": "Hours",
                        "enum": ["Full-time","Part-time"]
                    },
                    "startDate": {                    
                        "format":"date" 
                    },
                    "endDate": {
                        "format":"date" 
                    },
                    "bgImage": {
                        "type": "boolean",
                        "title": "bgImage"
                    },
                    "imageURL": {
                        "type": "string",
                        "title": "imageURL"
                    },
                    "existingImage":{
                        "title": "Existing images",
                        "type": "select",
                         "enum":img_data_capture
                    },
                      
                    "color": {
                        "type": "string",
                        "title": "Color",
                        "enum": ["cvs-red","cvs-gray","cvs-green"]
                    },
                    "tags": {
                        "type": "string",
                        "title": "Tags"
                    },
                    "body": {
                        "type": "string",
                        "title": "MainBody"
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
                    "allRelated": {
                        "type": "string",
                        "title": "Related",
                        "enum": en_relatedJson
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
                            console.log(value);
                             var related_title  = value.allRelated;
                               
                                var relatedId = '';
                                related_title.sort;
                                if(globaLanguage == undefined){
                                    globaLanguage= value.language;
                                }
                                if(globaLanguage == 'English'){

                                    for(i=0;i < en_actualJson.length; i++){    
                                        for(j=0;j<related_title.length ; j++){ 
                                            if(en_actualJson[i]['title']== related_title[j]){
                                                if(relatedId == '')
                                                    relatedId += en_actualJson[i]['id'];
                                                else    
                                                    relatedId += "," +  en_actualJson[i]['id'];
                                            }
                                        }
                                    }
                                }else if(globaLanguage =='Spanish'){
                                    for(i=0;i < sp_actualJson.length; i++){    
                                        for(j=0;j<related_title.length ; j++){   
                                        
                                            if(sp_actualJson[i]['title']== related_title[j]){
                                                if(relatedId == '')
                                                    relatedId += sp_actualJson[i]['id'];
                                                else    
                                                    relatedId += "," +  sp_actualJson[i]['id'];
                                            }
                                        }
                                    }
                                }

                            branch.createNode({
                                "title": value.title,
                                "priority": value.priority,
                                "section" : value.section,
                                "population" : value.population,
                                "language" : value.language,
                                "hours" : value.hours,
                                "startDate" : value.startDate,
                                "endDate" : value.endDate,                                                  
                                "bgImage" : value.bgImage,
                                "imageURL" : value.imageURL,
                                "color" : value.color,
                                "tags" : value.tags,
                                "body" : value.body,
                                "accordions" : value.accordions,
                                "allRelated" : relatedId,                                
                                "_type": 'custom:specialpag0'
                            
                            }).then(function () {
                                alert("Tile Item created successfully.");
                                location.reload();
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
                    "priority": {
                        "type": "text"
                    },
                    "section": {
                       "optionLabels": ["Learn", "Decide", "Enroll"]
                    },
                    "population": {
                        "type":"checkbox",
                        "optionLabels": ["Most US Locations", "California","Dallas", "Hawaii","Phoenix","Puerto Rico"]
                    },
                    "language": {
                        "optionLabels": ["English","Spanish"]
                    },
                    "hours": {
                        "type":"checkbox",
                        "optionLabels": ["Full-time","Part-time"]
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
                        
                    },
                    "imageURL": {
                        "type": "text"
                    },
                    "existingImage":{                        
                        "type": "select"                        
                    },
                      
                    "color": {
                        "optionLabels": ["cvs-red","cvs-gray","cvs-green"]
                    },
                    "tags": {
                        "type": "text"
                    },
                    "body": {
                        "type": "ckeditor",
                         "ckeditor": {
                            "toolbar": [
                                ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
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
                     "allRelated": {
                        "type": "select",
                        "multiple": true,
                        "size": 3                         
                    } 
            }
        },
        "postRender": function(control) {
                var new_image = control.childrenByPropertyId["existingImage"];
                   
                new_image.on('change', function(val) {               
                    this.schema.data = val;     
                    var x=  this.schema.data.target.value ;
                    $('#dialog-modal').dialog('open');
                     $("#dimg").attr('src',x);  
                    // document.cookie="selected_image="+x;                     
                });  
            } 
    });


    
}
   
function loadPage(pageId) {
    pageIdToLoad = pageId || "9bccae4f5d0cc8ed0ed4";
    //reShowForm();
     //console.log('alpaca vale' + $("#alpaca3").val());
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
    $("#myform").html(""); 

    //parse image data from cookie    
    var doc_cookie = document.cookie.split(";");
    for(var i = 0; i < doc_cookie.length ; i++){   
        var name= doc_cookie[i].split("=")[0].trim();
        if(name=='image_data')
            var language_1= doc_cookie[i].split("=")[1];        
    }
    var actual_img = JSON.parse(language_1);     
    var img_data_capture = [];
    for(i=0;i<actual_img.length;i++){
        img_data_capture[i]=actual_img[i]['ar']
    }
     var ourData;
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
                    "priority": {
                        "type": "string",
                        "title": "Priority"
                    },
                    "section": {
                        "type": "string",
                        "title": "Section",
                        "enum": ["Learn","Decide","Enroll"]
                    },               
                    "population": {
                         "type": "string",
                        "title": "Population",
                        "enum": ["Most US Locations", "California","Dallas", "Hawaii","Phoenix","Puerto Rico"]
                    },
                    "language": {
                        "type": "string",
                        "title": "Language",
                        "enum": ["English","Spanish"]
                    },
                    "hours": {
                        "type": "string",
                        "title": "Hours",
                        "enum": ["Full-time","Part-time"]
                    },
                    "startDate": {                    
                        "format":"date" 
                    },
                    "endDate": {
                        "format":"date" 
                    },
                    "bgImage": {
                        "type": "boolean",
                        "title": "bgImage"
                    },
                    "imageURL": {
                        "type": "string",
                        "title": "imageURL"
                    },
                   "existingImage":{
                        "title": "Existing images",
                        "type": "select",
                         "enum":img_data_capture
                    },
                      
                    "color": {
                        "type": "string",
                        "title": "Color",
                        "enum": ["cvs-red","cvs-gray","cvs-green"]
                    },
                    "tags": {
                        "type": "string",
                        "title": "Tags"
                    },
                    "body": {
                        "type": "string",
                        "title": "MainBody"
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
                        "title": "Existing Related IDs"                 
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
                        "submit": {
                            "click": function() {
                                clearTimer();
                                console.log("Timer Cleared");
                                setTimer();
                                console.log("Timer Set");

                                var value = this.getValue();
                                var related_title  = value.allRelated;
                                
                                var relatedId = '';
                                related_title.sort;
                                if(globaLanguage == undefined){
                                    globaLanguage= value.language;
                                }
                                if(globaLanguage == 'English'){
                                    var s= $("#alpaca65")[0].selectedOptions;                                    
                                    for(i=0;i < en_actualJson.length; i++){ 
                                      for(j=0;j < s.length ; j++){   
                                            if(en_actualJson[i]['title']== s[j].value){
                                                if(relatedId == '')
                                                    relatedId += en_actualJson[i]['id'];
                                                else    
                                                    relatedId += "," +  en_actualJson[i]['id'];
                                            }
                                        }
                                    }
                                }else if(globaLanguage =='Spanish'){
                                    var s= $("#alpaca65")[0].selectedOptions;       
                                    for(i=0;i < sp_actualJson.length; i++){    
                                          for(j=0;j < s.length ; j++){   
                                            if(sp_actualJson[i]['title']== s[j].value){
                                                if(relatedId == '')
                                                    relatedId += sp_actualJson[i]['id'];
                                                else    
                                                    relatedId += "," +  sp_actualJson[i]['id'];
                                            }
                                        }
                                    }
                                }
                                node.title = value.title;
                                node.priority = value.priority;
                                node.population = value.population;
                                node.language = value.language;
                                node.hours = value.hours;
                                node.startDate = value.startDate;
                                node.endDate = value.endDate;
                                node.bgImage = value.bgImage;                            
                                node.imageURL = value.imageURL;
                                node.color = value.color;
                                node.tags = value.tags;
                                node.body = value.body;
                                node.accordions = value.accordions;
                                node.allRelated  = relatedId;
                                
 
                                 
                                node.update().then(function() {
                                    alert("Form Submitted")
                                });
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
                    "priority": {
                        "type": "text"
                    },
                    "section": {
                       "optionLabels": ["Learn", "Decide", "Enroll"]
                    },
                    "population": {
                        "type":"checkbox",
                        "optionLabels": ["Most US Locations", "California","Dallas","Hawaii","Phoenix","Puerto Rico"]
                    },
                    "language": {
                        "optionLabels": ["English","Spanish"]
                    },
                    "hours": {
                        "type":"checkbox",
                        "optionLabels": ["Full-time","Part-time"]
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
                        
                    },
                    "imageURL": {
                        "type": "text"
                    },                   
                   "existingImage":{                      
                        "type": "select"
                    },
                    "color": {
                        "optionLabels": ["cvs-red","cvs-gray","cvs-green"]
                    },
                    "tags": {
                        "type": "text"
                    },
                    "body": {
                        "type": "ckeditor",
                         "ckeditor": {
                            "toolbar": [
                                ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
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
                        "size": 3                         
                    },
                    "allRelated":{
                        "type": "text"     
                    }
                }

            },
            "postRender": function(control) {
                var new_image = control.childrenByPropertyId["existingImage"];
                   
                new_image.on('change', function(val) {               
                    this.schema.data = val;     
                    var x=  this.schema.data.target.value ;
                    $('#dialog-modal').dialog('open');
                    $("#dimg").attr('src',x);                                 
                });                      
                var language_selected = control.childrenByPropertyId["language"];                
                    //set value with id from json
                    if(language_selected['data']== 'English'){
                        var selectHTML="";
                        for(i=0; i<ourData.length; i++){
                            selectHTML+= "<option value='"+ourData[i]['title']+"'>"+ ourData[i]['title']+"</option>";
                        }                        
                        var allRelated_select=$('[name=extRelate]');                                          
                        allRelated_select[0].innerHTML= selectHTML;

                    }else if(language_selected['data'] == 'Spanish'){
                        var selectHTML="";
                        for(i=0; i<sp_relatedJson.length; i++){
                           selectHTML+= "<option value='"+sp_actualJson[i]['title']+"'>"+sp_actualJson[i]['title']+"</option>";
                        }                        
                        var allRelated_select=$('[name=extRelate]');

                        allRelated_select[0].innerHTML= selectHTML;
                    }

                //change value for related item based on language selection
                language_selected.on('click', function(val) {       
                    this.schema.data =  val['currentTarget']['innerText'];
                    globaLanguage = this.schema.data;
                    if(this.schema.data== 'English'){
                        var selectHTML="";
                        for(i=0; i<en_actualJson.length; i++){
                           selectHTML+= "<option value='"+en_actualJson[i]['title']+"'>"+en_en_actualJson[i]['title']+"</option>";
                        }                        
                        var allRelated_select=$('[name=extRelate]');                        
                        allRelated_select[1].innerHTML= selectHTML;

                    }else if(this.schema.data == 'Spanish'){
                        var selectHTML="";
                        for(i=0; i<sp_relatedJson.length; i++){
                           selectHTML+= "<option value='"+sp_actualJson[i]['title']+"'>"+sp_actualJson[i]['title']+"</option>";
                        }                        
                        var allRelated_select=$('[name=extRelate]');
                        allRelated_select[1].innerHTML= selectHTML;
                    }
                });
                var allRelatedData = control.childrenByPropertyId["allRelated"]['data'];   
                 
                 
                   /*
                   not working as taking multiselect needs value and text same
                    //set value with id from json
                    if(language_selected['data']== 'English'){
                        var selectHTML="";
                        for(i=0; i<en_actualJson.length; i++){
                            selectHTML+= "<option value='"+en_actualJson[i]['id']+"'>"+ en_actualJson[i]['title']+"</option>";
                        }                        
                        var allRelated_select=$('[name=extRelate]');                                          
                        allRelated_select[0].innerHTML= selectHTML;

                    }else if(language_selected['data'] == 'Spanish'){
                        var selectHTML="";
                        for(i=0; i<sp_relatedJson.length; i++){
                           selectHTML+= "<option value='"+sp_actualJson[i]['id']+"'>"+sp_actualJson[i]['title']+"</option>";
                        }                        
                        var allRelated_select=$('[name=extRelate]');

                        allRelated_select[0].innerHTML= selectHTML;
                    }

                //change value for related item based on language selection
                language_selected.on('click', function(val) {       
                    this.schema.data =  val['currentTarget']['innerText'];
                    globaLanguage = this.schema.data;
                    if(this.schema.data== 'English'){
                        var selectHTML="";
                        for(i=0; i<en_actualJson.length; i++){
                           selectHTML+= "<option value='"+en_actualJson[i]['id']+"'>"+en_en_actualJson[i]['title']+"</option>";
                        }                        
                        var allRelated_select=$('[name=extRelate]');                        
                        allRelated_select[1].innerHTML= selectHTML;

                    }else if(this.schema.data == 'Spanish'){
                        var selectHTML="";
                        for(i=0; i<sp_relatedJson.length; i++){
                           selectHTML+= "<option value='"+sp_actualJson[i]['id']+"'>"+sp_actualJson[i]['title']+"</option>";
                        }                        
                        var allRelated_select=$('[name=extRelate]');
                        allRelated_select[1].innerHTML= selectHTML;
                    }
                });

                var allRelatedData = control.childrenByPropertyId["allRelated"]['data'];   
               
                var extRelateData = control.childrenByPropertyId["extRelate"]
                
                var dataarray=allRelatedData.split(",");
                $("#alpaca65").val(dataarray);*/


            } 
    });


  //var form = $("#myform").alpaca("get");
             //           form.show();

} //alpaca   


var timer;

function setTimer() {
    timer = setTimeout(function() {
        location.reload();
    }, 900000);
}

function clearTimer() {
    clearTimeout(timer);
}

 
function getAttachments(type){
    $("#imgtbl").css('display','none');
    $("#doctbl").css('display','none');
    username = $("#txtUsername").val();
    password = $("#txtPassword").val();
    var config = {
        "clientKey": "35b028e7-1f30-47fe-8574-d7ffca4ca967",
        "clientSecret": "TsPd9+05+Gmz9mrv40/pJ7rE6v3h5nw78vE5mo+iDAAcA6R2IlwngWll+xcXl+pgy38+6//boG1LeAw5deRSQccka0xxU5ZUgRQx5FAf7pY=",
        "username": "06fa5ef3-2815-4c06-90b8-936188d17cb1",
        "password": "roY8ZcOnEKbM5ns8a8qjCJg+xXEdyDslz4Ta4EKGWXNKsqjN2ty2yDJ7BJRYEVPjo0MEryrzHCoTsQET23f2Oe8CNqkcY3fGuYlmjOIfcDs=",
        "baseURL": "https://api.cloudcms.com",
        "application": "6af9084e0eec8c4756c6"
    };

    Gitana.connect(config, function(err) {
        if (err) {
            
        }
    }).then(function() {
        platform = this; 
        this.readRepository(repositoryId).then(function() {
            repository = this;
 
            this.readBranch(branchId).then(function() {
                branch = this;         
 
                
               var ContainerId = 'be1d4801be57fd2423db';
                  node = this.readNode(ContainerId).then(function () {                 
                    
                    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
                    
                    ct="https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/85392d705ff0c4e25d99/attachments" ;
                    $.ajax({
                        type: "GET",
                        url: ct, 
                        headers: {
                            authorization: authorizationHeader
                        },
                        success: function (response) {
                            $("#imgtbl").css('display','block');
                            var count=0; 
                            var newData= new Array(); 

                            for ( var i=0; i < response['rows'].length; i++){
                                    var data_arr={};

                                x= response['rows'][i];                               
                                if(type=='image'){
                                    var extn = x['filename'].substr(x['filename'].indexOf('.')+1);
                                    if( extn.toUpperCase() == 'JPG' || extn.toUpperCase() == 'PNG' || extn.toUpperCase() == 'GIF' || extn.toUpperCase() == 'JPEG') {
                                         
                                        data_arr ['pic'] = count;
                                        data_arr ['ar'] = ct + '/' + x['attachmentId']
                                        data_arr ['cpy'] = ct + '/' + x['filename'] 
                                        newData.push(data_arr); 
                                        count++; 
                                    }    
                                }
                            }                      
                            if(count > 0){                              
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
                                                     "copyUrl": {
                                                        "type": "boolean",
                                                        "title": "Copy URL"
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
                                                        }
                                                    }  
                                                },
        
                                                "form": {
                                                    "buttons": {
                                                          "addRow": {
                                                            "title": "Upload New Image",
                                                            "click": function() {
                                                                 $("#frmeditSubmitForm5").css('display','block');
                                                            }
                                                        },
                                                        "submit": {
                                                            "click": function() {
                                                                var value = this.getValue();                        
                                                                for ( var i=0; i < value.length;i++) {
                                                                    
                                                                    if(value[i].copyUrl==true){    
                                                                      copyReturn =  copyToClipboard(value[i].ar);
                                                                      if(copyReturn ){
                                                                        alert("Click Ctrl+V to see clipboard contents");
                                                                      }
                                                                    }  
                                                                    if(value[i].delete==true){
                                                                        if(type=='image'){
                                                                            ct_del=value[i].ar ;
                                                                            $.ajax({                                                                       
                                                                                url: ct_del, 
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
                                                                      /*  node = branch.readNode('22c94d3907b196478201').then(function () {
                                                                        console.log(node);
                                                                         /* node.del().then(function () {
                                                                             alert("Navbar Item deleted successfully.");
                                                                             location.reload();
                                                                        }); 
                                                                            
                                                                    });  */                                
                                                                   }

                                                                }   
                                                            }
                                                        }
                                                    }
                                                }
                                                
                                        },
                                         "postRender": function() {
                                            
                                            var control = $("#imgtbl").alpaca("get");
                                            control.refresh(function() {
                                                // behold, i am the callback that is fired once the refresh completes
                                            });
                                        }
                                    });
                            }
                             },
                             error: function(jqXHR, textStatus, errorThrown) { 
                              console.log(jqXHR + "---" + textStatus + '//' + errorThrown);
                            }
                     });



                });
            });
        });      

    });

}

function getDocuments(type){
    $("#doctbl").css('display','none');
    $("#imgtbl").css('display','none');
    username = $("#txtUsername").val();
    password = $("#txtPassword").val();
    var config = {
        "clientKey": "26f9385c-5993-4fdb-b18b-a537e16cc721",
        "clientSecret": "Bi+EneT8H7oVSdFM3/zXilvt+FPDQrZC3RsWQb31OS4psIp/mbbfdnkHFN2GLDl4DFbJt52iQFQoohmdO0cC6TT6qQ/pqWKRM6IqBnemDSo=",
        "username":username,
        "password":password,
        "baseURL": "https://api.cloudcms.com",
        "application": "ae4e45352206df5ebff3"
    };

    Gitana.connect(config, function(err) {
        if (err) {
            
        }
    }).then(function() {
        platform = this; 
        this.readRepository(repositoryId).then(function() {
            repository = this;
 
            this.readBranch(branchId).then(function() {
                branch = this;     
               var ContainerId = 'be1d4801be57fd2423db';
                  node = this.readNode(ContainerId).then(function () {                 
                     
                    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
                    
                    ct="https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/be1d4801be57fd2423db/attachments" ;
                    $.ajax({
                        type: "GET",
                        url: ct, 
                        headers: {
                            authorization: authorizationHeader
                        },
                        success: function (response) {
                            $("#doctbl").css('display','block');
                            var count=0; 
                            var newData= new Array(); 

                            for ( var i=0; i < response['rows'].length; i++){
                                    var data_arr={};

                                x= response['rows'][i];  
                                                             
                                  if(type=='doc'){
                                    var ctnType= x['contentType'];                                
                                    var extn = x['filename'].substr(x['filename'].indexOf('.')+1);
                                     if((ctnType.indexOf('image') == -1)) {
                                        data_arr ['doc'] = x['filename'];
                                        data_arr ['ar'] = ct + '/' + x['attachmentId']
                                        data_arr ['cpy'] = ct + '/' + x['filename'] 
                                        newData.push(data_arr); 
                                        count++; 
                                    }
                                } 
                            }                             
                            if(count > 0){                              
                                  $("#doctbl").alpaca({
                                        "data": JSON.stringify(newData),
                                         "schema": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "doc": {
                                                        "type": "string",
                                                        "title": "Document"
                                                    },                                                    
                                                    "ar": {
                                                        "type": "string",
                                                        "title": "Images"
                                                    }, "cpy": {
                                                        "type": "string",
                                                        "title": "Images"
                                                    }, 
                                                     "copyUrl": {
                                                        "type": "boolean",
                                                        "title": "Copy URL"
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
                                                        "doc":{
                                                            "type":"text"
                                                         },  
                                                         "cpy":{
                                                            "type":"hidden"
                                                         },                          
                                                        "ar": {
                                                            "type": "hidden"                                 
                                                            
                                                        }
                                                    }  
                                                },
        
                                                "form": {
                                                    "buttons": {
                                                          "addRow": {
                                                            "title": "Upload New Document",
                                                            "click": function() {
                                                                 $("#frmeditSubmitForm5").css('display','block');
                                                            }
                                                        },
                                                        "submit": {
                                                            "click": function() {
                                                                var value = this.getValue();                        
                                                                for ( var i=0; i < value.length;i++) {
                                                                    
                                                                    if(value[i].copyUrl==true){    
                                                                      copyReturn =  copyToClipboard(value[i].cpy);
                                                                      if(copyReturn ){
                                                                        alert("Click Ctrl+V to see clipboard contents");
                                                                      }
                                                                    }  
                                                                    if(value[i].delete==true){
                                                                        
                                                                            ct_del=value[i].ar ;
                                                                            $.ajax({                                                                       
                                                                                url: ct_del, 
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
                                                
                                        },
                                         "postRender": function() {
                                            
                                            var control = $("#imgtbl").alpaca("get");
                                            control.refresh(function() {
                                                // behold, i am the callback that is fired once the refresh completes
                                            });
                                        }
                                    });
                                }
                             },
                             error: function(jqXHR, textStatus, errorThrown) { 
                              console.log(jqXHR + "---" + textStatus + '//' + errorThrown);
                            }
                     });



                });
            });
        });      

    });

}

function submitForm() {
    var formData = new FormData($("#frmeditSubmitForm5")[0]);

    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
    var form = $("#frmeditSubmitForm5");
    var ContainerId="be1d4801be57fd2423db";
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
    open("admin.html", "_self");
}



//This is form upload scripting here--------------------------------------------

var fl = document.getElementById('myFileUpload5');
 

$("#uploadFilenameEdit5").on('change keyup paste mouseup', function() {
    $("#myFileName").html($("#uploadFilenameEdit5").val());
    var tx = "http://9e95a79f-43c0-4714-b0a3-aca3b0c6afa7-hosted.cloudcms.net/static/test.pdf?repository=762dfadfb9251fdd8d66&branch=c758483caa8ad40584ff&node=be1d4801be57fd2423db&attachment=";
    $("#lnk1").html(tx + $("#uploadFilenameEdit5").val());
});


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

    $('#dialog-modal').dialog({
        modal: true,
        autoOpen: false,
        width:900,
        buttons : {
            "Confirm" : function() { 
                    //get images from  cookie
                var doc_cookie = document.cookie.split(";");                  
                for(var i = 0; i < doc_cookie.length ; i++){
                    var name= doc_cookie[i].split("=")[0].trim();
                    if(name=='image_data')
                        var image_data= doc_cookie[i].split("=")[1];                   
                }

                //get bodyImage alpaca id to place new image url
                var c = $('.container').find("[data-alpaca-container-item-name='imageURL']").children();
                var d= c[1];               
                var x = d.children[1];
                var id= x.id;
                var nxt=id.substr(id.length-2,2);
                var ext_img = "alpaca" + (parseInt(nxt)+2);

                var img = JSON.parse(image_data);

                $("#"+ x.id).val(img[0]['cpy']);   
                
                $(this).dialog("close");
             
            },
            "Cancel" : function() {
              $(this).dialog("close");
            } 
        }
    });  
   

});

 