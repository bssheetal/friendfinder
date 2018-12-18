var friendsdata = require("../data/friends.js")

module.exports = function(app){

    app.get("/api/friends", function (req, res) {
        res.json(friendsdata);
    });

    app.post("/api/friends", function (req, res) {       
        var newperson=req.body;
        console.log(newperson);
        var difference=[];
        // for(var i=0;i<friendsdata.length;i++)
        // {
        //    var scores=friendsdata[i].scores;
        //    for(var j=0;j<scores.length;j++)
        //    {
              
        //        difference=scores[i]-newperson.scores[i];
        //    }
        // }


        // for(var i=0;i<difference.length;i++)
        // {
        //     totaldiff=0;
        //     var totaldiff=difference[i]+totaldiff;
        // }
        // friendsdata.push(newperson);
    });
}