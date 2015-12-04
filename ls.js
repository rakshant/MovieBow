var starvalue;
 var startotal;
function star(str) {

    // document.getElementById("show").innerHTML=;
    switch (str) {
        case 50:
            document.getElementById("show").innerHTML = "0.5";
            starvalue = 10;
            break;
        case 1:
            document.getElementById("show").innerHTML = "1";
            starvalue = 20;
            break;
        case 15:
            document.getElementById("show").innerHTML = "1.5";
            starvalue = 30;
            break;
        case 2:
            document.getElementById("show").innerHTML = "2";
            starvalue = 40;
            break;
        case 25:
            document.getElementById("show").innerHTML = "2.5";
            starvalue = 50;
            break;
        case 3:
            document.getElementById("show").innerHTML = "3";
            starvalue = 60;
            break;
        case 35:
            document.getElementById("show").innerHTML = "3.5";
            starvalue = 70;
            break;
        case 4:
            document.getElementById("show").innerHTML = "4";
            starvalue = 80;
            break;
        case 45:
            document.getElementById("show").innerHTML = "4.5";
            starvalue = 90;
            break;
        case 5:
            document.getElementById("show").innerHTML = "5";
            starvalue = 100;
            break;

    }
}


function saveMyRating() {


    console.log("hello" + starvalue);
    if (localStorage.getItem('names')) {
        data = JSON.parse(localStorage.getItem('names'));
    } else {
        data = [];
    }
    var object = {
        stars: "",
        name: "",
        comment: ""
    }
    var flag = true;
    var ld = JSON.parse(localStorage.getItem('logindata'));
    for (i = 0; i < data.length; i++) {
        console.log(data[i].uname);
        if (data[i].uname === ld[0].uname) {
            flag = false;
        }
    }
    if (flag) {
        object.stars = starvalue;
        object.name = document.getElementById('name').value;
        object.uname = ld[0].uname;
        object.comment = document.getElementById('com').value;
        data.push(object);
        console.log(object);
        localStorage.setItem('names', JSON.stringify(data));
    } else {
        alert("You can comment only one time!!!!!")
    }



    window.location.reload();
}



function loading() {
    ldata = JSON.parse(localStorage.getItem('logindata'));
    console.log(ldata)
    if (document.getElementById("commentsection") && !ldata) {
        var a = document.getElementById("commentsection");
        a.style.display = 'none';
    }

    // document.getElementById('textfield2').value = ldata[0].uname;
    // document.getElementById('textfield3').value = ldata[0].pword;
    if (ldata) {
        document.getElementById("load3").innerHTML = '<div id="signup"><a href="hometrial.html">Logout</a> </div>';
    } else {
        document.getElementById("load1").innerHTML = '<div id="signup"><a href="#popup2">SIGN UP </a></div>';
        document.getElementById("load2").innerHTML = '<div id="signup"><a href="#popup3">LOGIN </a></div>';

    }



    if (document.getElementById("commentsection")) {
        load();
    }
}





function load() {

    if (localStorage.getItem('names')) {
        data = JSON.parse(localStorage.getItem('names'));
    } else {
        data = [];
    }
    console.log(data);
    console.log(data.length);





    var mylistDiv = document.getElementById("dt");

    var list = document.createElement('ul');
    var counter = 0;
    startotal = 0;

    for (var i = 0; i < data.length; i++) {



        var l = document.createElement('li');


        for (var j = 0; j < 4; j++) {
                       var dv = document.createElement('div');


            if (j == 0) {

                dv.setAttribute("class", "dv1");
                dv.appendChild(document.createTextNode(data[counter].uname));
            } 


            else if(j==1){
                dv.setAttribute("class", "dv4");

                dv.appendChild(document.createTextNode(data[counter].name));

            }

            else if (j == 3) {

                dv.setAttribute("class", "dv2");
                dv.setAttribute("id", "star");
                //dv.appendChild(document.createTextNode(data[counter].stars));
                dv.style.width = parseInt(data[counter].stars) + "px";
                 startotal=parseInt(startotal)+parseInt(data[counter].stars);
            console.log(startotal);

            } else {

                dv.setAttribute("class", "dv3");
                dv.appendChild(document.createTextNode(data[counter].comment));
            }
            l.appendChild(dv);

        }
        list.appendChild(l);

        counter++;
    }

    mylistDiv.appendChild(list);
    console.log(data.length);
    var staravg=(startotal/data.length);  //ADDDEDDDD

                        console.log(staravg);
                        document.getElementById("ratingvalue").style.width=parseInt(staravg)+"px";

}


function saveMy() {


    if (localStorage.getItem('nd')) {
        newdata = JSON.parse(localStorage.getItem('nd'));
    } else {
        newdata = [];
    }

    var userobject = {
        username: "",
        email: "",
        pw: ""
    }
    userobject.username = document.getElementById('signup1').value;
    userobject.email = document.getElementById('signup2').value;
    userobject.pw = document.getElementById('signup3').value;
    console.log(userobject);
    newdata.push(userobject);
    console.log(userobject);
    localStorage.setItem('nd', JSON.stringify(newdata));


}


function check() {
    var u = document.getElementById('login1').value;
    var p = document.getElementById('login2').value;
    newdata = JSON.parse(localStorage.getItem('nd'));
    var f = 0;

    for (i = 0; i < newdata.length; i++) {
        if (newdata[i].username == u || newdata[i].pw == p) {

            f = 1;
        }

    }

    if (f == 1) {
        if (localStorage.getItem('logindata')) {
            ldata = JSON.parse(localStorage.getItem('logindata'));
        } else {
            ldata = [];
        }
        ldata = [];
        var lobject = {
            uname: "",
            pword: ""
        }

        lobject.uname = document.getElementById('login1').value;
        lobject.pword = document.getElementById('login2').value;
        console.log(lobject);
        ldata.push(lobject);
        localStorage.setItem('logindata', JSON.stringify(ldata));

    }

    if (f == 0)
        alert("Wrong username or password");




}


function logcheck() {
    localStorage.removeItem('logindata');
    document.getElementById("load1").innerHTML = '<div id="signup"><a href="#popup2">SIGN UP </a></div>';
    document.getElementById("load2").innerHTML = '<div id="signup"><a href="#popup3">LOGIN </a></div>';

}
