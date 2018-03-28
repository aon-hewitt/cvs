var repositoryId = "762dfadfb9251fdd8d66";
var branchId = "";
var nodeId = "92cdc4826e9c96b5fd66";
var pages = [];
var navBar = [];
var branch;

   var config = {
        "clientKey": "35b028e7-1f30-47fe-8574-d7ffca4ca967",
        "clientSecret": "TsPd9+05+Gmz9mrv40/pJ7rE6v3h5nw78vE5mo+iDAAcA6R2IlwngWll+xcXl+pgy38+6//boG1LeAw5deRSQccka0xxU5ZUgRQx5FAf7pY=",
        "username": "06fa5ef3-2815-4c06-90b8-936188d17cb1",
        "password": "roY8ZcOnEKbM5ns8a8qjCJg+xXEdyDslz4Ta4EKGWXNKsqjN2ty2yDJ7BJRYEVPjo0MEryrzHCoTsQET23f2Oe8CNqkcY3fGuYlmjOIfcDs=",
        "baseURL": "https://api.cloudcms.com",
        "application": "6af9084e0eec8c4756c6"
    };

Gitana.connect(config).then(function () {
    this.readRepository(repositoryId).then(function () {
        this.readBranch('master').then(function () {
            branch = this;
            var query = {
                "_type": 'custom:specialpag0'
            };
            var pagination = {
                "sort": {
                    "priority": 1
                },
                "limit": 9999
            };

            this.queryNodes(query, pagination).then(function () {
                totalObjects = this.__size();
                console.log(totalObjects);
            }).each(function () {
                pages.push(this);
            })
             .then(function () {
                sessionStorage.setItem("pages", JSON.stringify(pages));  
            });//end page query
        })//ends read branch
    })//read repository
});//ends config
 