var friendsdata = require("../data/friends.js")

module.exports = function (app) {
   
    //This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friendsdata);
    });

    //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {
        var newperson = req.body;

        //res.send(newperson);
        var difference;
        var totaldiff;
        var totaldiffndata = [];
        var smallest;
        var matchname;
        var matchimage;

        //outerloop to iterate over friends array
        for (var i = 0; i < friendsdata.length; i++) {
            totaldiff = 0;
            var scores = friendsdata[i].scores;
            console.log("scores in friends array is" + scores);
            console.log("scores of new person is" + newperson.scores);

            //inner loop to iterate over the scores of friends array
            for (var j = 0; j < scores.length; j++) {
                 
                //find the difference of scores from newperson entered from the interface and array of friends
                if (scores[j] >= newperson.scores[j]) {
                    difference = scores[j] - newperson.scores[j];
                    
                }
                //Making sure the number isn't negative from the difference
                else if (newperson.scores[j] > scores[j]) {
                    difference = newperson.scores[j] - scores[j];
                    
                }

                console.log("difference of scores of newperson and friendsarray is:" + difference);
                //find the sum of difference of each person and store in a variable totaldiff
                totaldiff = difference + totaldiff;
                console.log("total diffn is" + totaldiff);
            }

            //push all the total diffrences of each person in to totaldiffndata array
            totaldiffndata.push(totaldiff);
            

        }

        //call the best match function where the closest match will be the user with the least amount of difference.
        findbestmatch();

        //call the function to display the bestmatch with name and image having least amount of difference
        displaybestmatch();

       //This function determines the smallest number in the totaldiffndata array
        function findbestmatch() {
           
            smallest=Math.min.apply(Math,totaldiffndata);           
            console.log("Smallest no is" + smallest);
            return smallest;
        }
        
       // once the smallest no is found compare it with totaldiffndata and get the name and image
        function displaybestmatch() {

            for (var i = 0; i < friendsdata.length; i++) {

                if (smallest === totaldiffndata[i]) {
                    console.log("Total difference in displaybestmatchloop" + totaldiffndata[i]);
                    matchname = friendsdata[i].name;
                    matchimage = friendsdata[i].photo;
                    res.json({ status: 'OK', name: matchname, photo: matchimage });
                }

            }

        }

        friendsdata.push(newperson);
    });
}