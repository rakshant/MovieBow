// var stars;

// function stars()
// {
//   stars=document.getElementById("stars").value;
//   document.getElementById("show")=stars;
// }

// var starvalue;
// function star(str)
// {
//     // document.getElementById("show").innerHTML=;
//     switch(str)
//     {
//         case 1:starvalue="1";break;
//         case 2:starvalue="2";break;
//         case 3:starvalue="3";break;
//         case 4:starvalue="4";break;
//         case 5:starvalue="5";break;
//         // case 6:starvalue="your rating:6";break;
//     }
// }

// console.log(starvalue);


 var starvalue;
function star(str)
{

    // document.getElementById("show").innerHTML=;
    switch(str)
    {
        case 50:document.getElementById("show").innerHTML="0.5";
       starvalue = 10;
        break;
        case 1:document.getElementById("show").innerHTML="1";
        starvalue = 20;
        break;
        case 15:document.getElementById("show").innerHTML="1.5";
        starvalue = 30;
        break;
        case 2:document.getElementById("show").innerHTML="2";
        starvalue = 40;
        break;
        case 25:document.getElementById("show").innerHTML="2.5";
        starvalue = 50;
        break;
        case 3:document.getElementById("show").innerHTML="3";
        starvalue = 60;
        break;
        case 35:document.getElementById("show").innerHTML="3.5";
        starvalue = 70;
        break;
        case 4:document.getElementById("show").innerHTML="4";
        starvalue = 80;
        break;
        case 45:document.getElementById("show").innerHTML="4.5";
starvalue = 90;
        break;
        case 5:document.getElementById("show").innerHTML="5";
        starvalue = 100;
        break;
       
    }
}


function saveMy(){

                console.log("hello"+starvalue);
                if(localStorage.getItem('names')){
                data=JSON.parse(localStorage.getItem('names'));
                }else{
                    data=[];
                }
                var object={
                        stars:"",
                        name:"",
                        comment:""
                    }
               object.stars = starvalue;
               object.name = document.getElementById('name').value;
               object.comment = document.getElementById('com').value;
               data.push(object);
               console.log(object);
               localStorage.setItem('names', JSON.stringify(data));
             }

              function load(){

                 data = JSON.parse(localStorage.getItem('names'));
                  console.log(data);
                  console.log(data.length);





                var mylistDiv = document.getElementById("dt");

                 var list = document.createElement('ul');

                  
                var counter=0;

                for (var i=0; i<data.length; i++)
                {



                  var l = document.createElement('li');


                       for (var j=0; j<3; j++)
                       {
                           var dv = document.createElement('div');
                           

                          
                                      if(j==0){
                                    
                                          dv.setAttribute("class","dv1");
                                          dv.appendChild(document.createTextNode(data[counter].name));
                                            }
                               
                                       else if(j==1){
                                   
                                          dv.setAttribute("class","dv2");
                                         
                                         var dv1 = document.createElement('div');
                                         dv.dv1.setAttribute("id","star");
                                        //dv.appendChild(document.createTextNode(data[counter].stars));
                                        dv1.style.width=parseInt(data[counter].stars)+"px";
                                            }

                                        else{ 
                                       
                                         dv.setAttribute("class","dv3");                    
                                           dv.appendChild(document.createTextNode(data[counter].comment));
                                        }
                                   l.appendChild(dv);
                              
                        }
                              list.appendChild(l);
                        
                           counter++;
                 }

                        mylistDiv.appendChild(list);

      }