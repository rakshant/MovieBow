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
            alert("yo");
            f = 1;
        }

    }

    if(f==1){
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
function loading(){

    ldata = JSON.parse(localStorage.getItem('logindata'));
                  console.log(ldata)

                          // document.getElementById('textfield2').value = ldata[0].uname;
                          // document.getElementById('textfield3').value = ldata[0].pword;

                          if(ldata){
                            document.getElementById("load3").innerHTML='<div id="signup"><a href="hometrial.html">Logout</a> </div>';
                          }

                          else{
                            document.getElementById("load1").innerHTML='<div id="signup"><a href="#popup2">SIGN UP </a></div>';
                             document.getElementById("load2").innerHTML='<div id="signup"><a href="#popup3">LOGIN </a></div>';

                          }



                          load();


    
}







function logcheck(){
    localStorage.removeItem('logindata');
    document.getElementById("load1").innerHTML='<div id="signup"><a href="#popup2">SIGN UP </a></div>';
    document.getElementById("load2").innerHTML='<div id="signup"><a href="#popup3">LOGIN </a></div>';

}
