var inquirer = require("inquirer");
var fs = require('fs');
var mysql = require("mysql");

var app = inquirer();

var PORT = process.env.PORT || 8080;

var conncection = mysql.creatConnection({
    host: "localhost",
    port: 3306,
    user: "root"
    password: "GreenLakes34!",
    database: "emplyoee_trackerdb"
});

conncection.connect(function(err) {
    if (err) {
        console.err("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + conncection.threadID);
});

app.get("/", function(req, res) {
    conncection.query("SELECT * FROM department;", function(err, data) {
        if (err) {
            return res.status(500).end();
        }
    });

app.post("/Sales", function(req, res) {
    conncection.query("INSERT INTO department (name) VALUES (?, ?)", [req.body.department, req.body. sales], function(
        err,
        result
    ) {
        if (err) {
            return res.status(500).end();
        }

        res.json({ id: result.insertID});

    })
});
});

app.delete("department/:id", fucntion(req, res) {
    connection.query("DELET FROM department WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        else if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

app.put("/department/:id", function(req, res) {
    connection.query(
        "UPDATE department SET sales = ?, quote = ? WHERE id = ?",
        [req.body.sales, req.dody.department, req.params.id],
        function(err, result) {
            if (err) {
                return res.status(500).end();
            }
            else if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
})

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:8080" + PORT);
})