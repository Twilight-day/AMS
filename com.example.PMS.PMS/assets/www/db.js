function db_lockUI() {
	$("db_buttons_div").style.visible = "hidden";
}
function db_unlockUI() {
	$("db_buttons_div").style.visible = "visible";
}
function openDB() {
	db_lockUI();
	db = droid.openDatabase("Ramen2.db");
	droid.executeSql(db, "CREATE TABLE IF NOT EXISTS RamenDB2 (name,kind,place,rate,coment)",
			function() {
				alert('Open database!');
				db_unlockUI();gol
			}, function(e) {
				alert('Create database error:' + e);
				db_unlockUI();
			});
}
function insertDB() {
	if (db == null) {
		alert('DB not opened.');
		return;
	}
	var TRNO =document.getElementById("trno").value;
	var TNNA =document.getElementById("tnna").value;
	var SYNA =document.getElementById("name").value;
	var AJI =document.getElementById("kind").value;
	var TIKU =document.getElementById("place").value;
	var HYK =document.getElementById("rate").value;
	var CMNT =document.getElementById("coment").value;
	var TYMD =document.getElementById("tymd").value;
	db_lockUI();
	rate = parseInt(rate);
	droid.executeSql(db, "INSERT INTO RamenDB2 (name,kind,place,rate,coment)VALUES('" + name + "','"
			+ kind + "','" + place + "'," + rate + ",'" + coment + "')", function() {
		alert("success!");
		showDB();
		db_unlockUI();
	}, function(e) {
		alert("insert error:" + e);
		db_unlockUI();
	});
}
function showDB() {
    if (db == null) { alert('DB not opened.'); return; }
    droid.executeSql(db,
        "SELECT * FROM RamenDB2",
        testDB_selectResult,
        function(e){alert("select error:" + e); db_unlockUI();}
    );
}
function testDB_selectResult(result) {
    var txt = "";
    for (var i in result) {
        var line = result[i];
        for (var key in line) {
            txt += key + ":" + line[key] + "<br/>";
        }
    }
    $("db_div").innerHTML = txt;
    db_unlockUI();
}
function clearDB() {
    db_lockUI();
    droid.executeSql(db,
        "DELETE from RamenDB2",
        function(){ alert("success!"); db_unlockUI(); },
        function(e){alert("insert error:" + e); db_unlockUI(); }
    );
    $('db_div').innerHTML = "clear";
}
