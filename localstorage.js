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
        case 50:
              document.getElementById("show").innerHTML="  \t 0.5";
              starvalue=0.5;
              break;
        case 1:
              document.getElementById("show").innerHTML="  1";
              starvalue=1;
              break;
        case 15:
              document.getElementById("show").innerHTML="  1.5";starvalue=1.5;break;
        case 2:document.getElementById("show").innerHTML="  2";starvalue=2;break;
        case 25:document.getElementById("show").innerHTML="  2.5";starvalue=2.5;break;
        case 3:document.getElementById("show").innerHTML="  3";starvalue=3;break;
        case 35:document.getElementById("show").innerHTML="  3.5";starvalue=3.5;break;
        case 4:document.getElementById("show").innerHTML="  4";starvalue=4;break;
        case 45:document.getElementById("show").innerHTML="  4.5";starvalue=4.5;break;
        case 5:document.getElementById("show").innerHTML="  5";starvalue=5;break;
       
    }
}











function saveMy(){
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

                          // document.getElementById('textfield2').value = data[0].name;
                          // document.getElementById('textfield3').value = data[0].comment;
                          // document.getElementById('textfield4').value = data[1].name;
                          // document.getElementById('textfield5').value = data[1].comment;
                  console.log(data.length);





                var myTableDiv = document.getElementById("dt");
                  
                var table = document.createElement('TABLE');

                // table.border='none';
                
                var tableBody = document.createElement('TBODY');
                table.appendChild(tableBody);
                  
                var counter=0;

                for (var i=0; i<data.length; i++)
                {

                   var tr = document.createElement('TR');
                   tableBody.appendChild(tr);
                   console.log(i);
                  // var y=document.getElementByTagName('TR');                  
                  //   if(i%2==0)
                  //   {
                  //     y[i].style.backgroundColor="yellow";
                  //   }

                  if(i%2==0)
                  {
                    // tr.style.backgroundColor="#292929";
                    tr.style.backgroundColor="black";
                    // tr.rowspan=
                    // tr.style.fontColor="black";
                  }

                       for (var j=0; j<3; j++)
                       {
                           var td = document.createElement('TD');
                           td.style.Color="white";
                            
                                // td.appendChild(document.createElement("BR"));
                                      if(j==0){
                                        td.width=220;
                                        td.style.fontWeight="bold";
                                        td.style.fontSize="18px";
                                        td.appendChild(document.createTextNode(data[counter].name));
                                            }
                                       

                                       else if(j==1){
                                        td.width=220;
                                        td.appendChild(document.createTextNode(data[counter].stars));
                                            }
                                        else{ 
                                        td.width=550;                      
                                           td.appendChild(document.createTextNode(data[counter].comment));
                                        }

                               tr.appendChild(td);
                        }
                           counter++;
                 }

                        myTableDiv.appendChild(table);

      }