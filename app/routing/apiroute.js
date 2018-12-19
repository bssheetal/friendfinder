var friendsdata = require("../data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsdata);
    });

    app.post("/api/friends", function (req, res) {
        var newperson = req.body;

        //res.send(newperson);
        var difference;
        var totaldiff;
        var totaldiffndata = [];
        var smallest;
        var matchname;
        var matchimage;
        for (var i = 0; i < friendsdata.length; i++) {
            totaldiff = 0;
            var scores = friendsdata[i].scores;
            console.log("scores in friends array is" + scores);
            console.log("scores of new person is" + newperson.scores);

            for (var j = 0; j < scores.length; j++) {

                if (scores[j] >= newperson.scores[j]) {
                    difference = scores[j] - newperson.scores[j];
                    
                }
                else if (newperson.scores[j] > scores[j]) {
                    difference = newperson.scores[j] - scores[j];
                    
                }

                console.log("difference of scores of newperson and friendsarray is:" + difference);
                totaldiff = difference + totaldiff;
                console.log("total diffn is" + totaldiff);
            }


            totaldiffndata.push(totaldiff);
            

        }
        findbestmatch();
        displaybestmatch();


        function findbestmatch() {
           
            smallest=Math.min.apply(Math,totaldiffndata);           
            console.log("Smallest no is" + smallest);
            return smallest;
        }
        

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