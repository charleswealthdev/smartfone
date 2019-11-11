$(document).ready(function(){
$("#menu").click(function(){
	$("#div1").animate({width:'toggle',height:'toggle'},300).removeClass('show');

$("#menulistbox").animate({width:'toggle',height:'toggle'},300).addClass('show');
$("#smartphoneinside2").hide();
$("#dialpage").removeClass('show');
$("#choosesimpage").removeClass('show')
$("#contactcontainer").animate({width:'toggle',height:'toggle'},300).removeClass('show');
$("#smartphoneinside2").removeClass('show');
})
})




$(document).ready(function(){
$("#menup2").click(function(){
	$("#div1p2").animate({width:'toggle',height:'toggle'},300).removeClass('show');

$("#menulistboxp2").animate({width:'toggle',height:'toggle'},300).addClass('show');
$("#smartphoneinside2p2").hide();
$("#dialpagep2").removeClass('show');
$("#choosesimpagep2").removeClass('show')
$("#contactcontainerp2").animate({width:'toggle',height:'toggle'},300).removeClass('show');

})
})


 


$(document).ready(function(){
$("#pickphone").click(function(){
	
$("#smartphone").animate({width:'toggle',height:'toggle'},900).addClass('show');
$("#vouchercontainer").hide();
$("#pickphone").addClass('hide');
$("#smartphoneinside2").addClass('hide');
$("#poweroffpage").addClass('show');

})
})


$(document).ready(function(){
$("#maindialbutton").click(function(){
	
$("#menulistbox").removeClass('show');
$("#dialpage").animate({width:'toggle',height:'toggle'},300).addClass('show');
$("#smartphoneinside2").removeClass('show')
})
})


$(document).ready(function(){
$("#maindialbuttonp2").click(function(){
	
$("#menulistboxp2").removeClass('show');
$("#dialpagep2").animate({width:'toggle',height:'toggle'},300).addClass('show');

})
})


$(document).ready(function(){
$("#calculator").click(function(){
	
$("#menulistbox").removeClass('show');
$("#div1").animate({width:'toggle',height:'toggle'},300).addClass('show');
$("#smartphoneinside2").removeClass('show')
})
})


$(document).ready(function(){
$("#calculatorp2").click(function(){
	
$("#menulistboxp2").removeClass('show');
$("#div1p2").animate({width:'toggle',height:'toggle'},300).addClass('show');

})
})

$(document).ready(function(){
$("#contactbutton").click(function(){
	
$("#menulistbox").removeClass('show');
$("#contactcontainer").animate({width:'toggle',height:'toggle'},300).addClass('show');
$("#smartphoneinside2").removeClass('show')
})
})


$(document).ready(function(){
$("#contactbuttonp2").click(function(){
	
$("#menulistboxp2").removeClass('show');
$("#contactcontainerp2").animate({width:'toggle',height:'toggle'},300).addClass('show');

})
})



$(document).ready(function(){
$("#search").click(function(){
	
$("#searchbox").animate({width:'toggle',height:'toggle'},300).removeClass('hide');
$("#oldsearchcontainer").addClass('hide');
$("#smartphoneinside2").removeClass('show')
})
})



$(document).ready(function(){
$("#backtooldsearch").click(function(){
	
$("#searchbox").animate({width:'toggle',height:'toggle'},300).addClass('hide');
$("#oldsearchcontainer").removeClass('hide');
$("#smartphoneinside2").removeClass('show')
})
})

$(document).ready(function(){
$("#scientifictoggle").click(function(){
	
$("#basical").addClass('hide');
$("#table2").animate({width:'toggle',height:'toggle'},300).removeClass('hide');

})
})


$(document).ready(function(){
$("#scientifictogglep2").click(function(){
	
$("#basicalp2").addClass('hide');
$("#table2p2").animate({width:'toggle',height:'toggle'},300).removeClass('hide');

})
})

$(document).ready(function(){
$("#plus").click(function(){
	
$("#contactcontainer").removeClass('show');
$("#savecontactcontainer").animate({width:'toggle',height:'toggle'},300).addClass('show');

})
})


$(document).ready(function(){
$("#homebutton").click(function(){
$("#menulistbox").removeClass('show');
$("#dialpage").removeClass('show');
$("#div1").animate({width:'toggle',height:'toggle'},300).removeClass('show');
$("#contactcontainer").animate({width:'toggle',height:'toggle'},300).removeClass('show');

})
})



$(document).ready(function(){
$("#homebuttonp2").click(function(){
$("#menulistboxp2").removeClass('show');
$("#dialpagep2").removeClass('show');
$("#div1p2").animate({width:'toggle',height:'toggle'},300).removeClass('show');
$("#contactcontainerp2").animate({width:'toggle',height:'toggle'},300).removeClass('show');

})
})


$(document).ready(function(){
$("#envelope").click(function(){
$("#ringpage").addClass('show');
$("#menulistboxp2").removeClass('show');
$("#dialpagep2").removeClass('show');




})

})


$(document).ready(function(){
$("#envelope1").click(function(){
$("#poweroffpage").addClass('show');
$("#menulistbox").removeClass('show');
$("#dialpage").removeClass('show');




})

})

// $(document).ready(function(){
// 	$("#cutbutton").click(function(){

//  $('#simoutput').addClass('show');

// })

// })

function clickdigit(a){

dialdisplay.value+=a;

}




function clickdigits(a){

dialdisplayp2.value+=a;

}
function del(){

var prevalue=dialdisplay.value;
dialdisplay.value=prevalue.substr(0,prevalue.length-1);

}



function delp2(){

var prevaluep2=dialdisplayp2.value;
dialdisplayp2.value=prevaluep2.substr(0,prevaluep2.length-1);

}


var a = setInterval(clock);
function clock(){

var d = new Date();


document.getElementById('time').innerHTML = d.getHours() +":"+d.getMinutes();
document.getElementById('datebox').innerHTML = d.toUTCString();
document.getElementById('displayboxdate').innerHTML='dateprinted:'+d.toDateString();

}



$(document).ready(function(){
$("#dialbutton").click(function(){
$("#dialpage").removeClass('show');
$("#choosesimpage").addClass('show');
$("#menulistbox").removeClass('show');
$("#simoutput").removeClass('show');
$("#simbox").addClass('show');

$("#smartphoneinside2").removeClass('show')

})
})



$(document).ready(function(){
$("#dialbuttonp2").click(function(){
$("#dialpagep2").removeClass('show');
$("#choosesimpagep2").addClass('show');
$("#menulistboxp2").removeClass('show');
$("#simoutputp2").removeClass('show');
$("#simboxp2").addClass('show');



})
})

$(document).ready(function(){
$("#siminbox1").click(function(){
$("#simoutput").animate({width:'toggle',height:'toggle'},200).addClass('show');
$("#simbox").removeClass('show');
$("#menulistbox").removeClass('show');

$("#smartphoneinside2").removeClass('show')
})
})


$(document).ready(function(){
$("#siminbox1p2").click(function(){
$("#simoutputp2").animate({width:'toggle',height:'toggle'},200).addClass('show');
$("#simboxp2").removeClass('show');
$("#menulistboxp2").removeClass('show');

$("#smartphoneinside2").removeClass('show')
})
})


$(document).ready(function(){
$("#siminbox2").click(function(){
$("#simoutput").animate({width:'toggle',height:'toggle'},200).addClass('show');
$("#simbox").removeClass('show');
$("#menulistbox").removeClass('show');


})
})




$(document).ready(function(){
$("#siminbox2p2").click(function(){
$("#simoutputp2").animate({width:'toggle',height:'toggle'},200).addClass('show');
$("#simboxp2").removeClass('show');
$("#menulistboxp2").removeClass('show');


})
})


$(document).ready(function(){
$("#okaybutton").click(function(){
$("#dialpage").addClass('show');
$("#choosesimpage").removeClass('show');
$("#menulistbox").removeClass('show');


})
})



$(document).ready(function(){
$("#okaybuttonp2").click(function(){
$("#dialpagep2").addClass('show');
$("#choosesimpagep2").removeClass('show');
$("#menulistboxp2").removeClass('show');


})
})



function power(){

poweroffpage.style.backgroundImage="url('plastic.gif')";
poweroffpage.style.height="447px";
poweroffpage.style.width="245px";
poweroffpage.style.backgroundSize="cover";
poweroffpage.style.backgroundPosition="center";

setTimeout(phonename,4000)


function phonename(){
	// poweroffpage.style.background="white";
	
	// poweroffpage.style.color="black"
	// $("#poweroffpage").animate({width:'toggle',height:'toggle'},2000).removeClass('show');
$("#smartphoneinside").removeClass('show');

	poweroffpage.style.backgroundImage="url('source.gif')";
poweroffpage.style.height="447px";
poweroffpage.style.width="245px";
poweroffpage.style.backgroundSize="cover";
poweroffpage.style.backgroundPosition="center";

	// $("#poweronpage").addClass('show');
	
setTimeout(phonescreen,3000)


}

function phonescreen(){
		poweroffpage.style.backgroundImage="url('c-fone.png')";
poweroffpage.style.height="447px";
poweroffpage.style.width="245px";
poweroffpage.style.backgroundSize="100% 100%";
poweroffpage.style.backgroundPosition="center";
setTimeout(phonescreen1,2000)


}

function phonescreen1(){
$("#poweroffpage").animate({width:'toggle',height:'toggle'},2000).removeClass('show');

$("#smartphoneinside2").addClass('show');
$("#smartphone").addClass('show');
menu.disabled=false;
// document.getElementById('power').style.backgroundColor="transparent";
// document.getElementById('power').style.color="white";
power:hover=false;

}

}

// $(document).ready(function(){
// $("#backhome").click(function(){



// })
// })


var sound = new Audio();
sound.src = 'thanksgiving.mp3';



function dialnum(){


	


	var mtncheck = "*556#";
	var glocheck="#124#";
 	var mtnpulse="*406*1#";
 	var mtnbeta="*123*1*6#";
	var sn=selectnetwork.value;
	

	

	var dialscreen = dialdisplay.value;
var dialscreen = dialdisplay.value;
var btnvalue=siminbox1.value;
 		
	var fetch=Object.keys(localStorage);

          	 	 for(var n=0;n<fetch.length;n++){
 var parse = JSON.parse(localStorage.getItem(fetch[n]));


				var charge = parse.code;
	
                var chargeglo = parse.glocode;
	
                
					var sa=parse.amount;
 				
					var sn=parse.network;
					var recharge=charge;
var bal=localStorage.getItem('Mtnbalance');
var global=localStorage.getItem('Globalance');
var diff=parse.diff;
var time=parse.time;
var timerate=parse.timerate;
var rate=parse.rate;
var tarriff=tarriff;

// var sound = new Audio();
// sound.src = 'alarm.mp3';


					 var add = parseInt(bal) + parseInt(parse.amount);
var gloadd = parseInt(global) + parseInt(parse.amount);


					 if (btnvalue=="MTN NG") {


     

 if( dialscreen == mtncheck){
           
            
            document.getElementById("simoutput1").innerHTML="your mtn main balance is:N"+localStorage.getItem('Mtnbalance')+".please you can dial *555* to recharge more";
            
            $('#dialdisplay').css('font-size','14px');

                

        }   



 

     else  if (dialscreen == recharge){



             	 localStorage.setItem('Mtnbalance',add);
             	 localStorage.removeItem(fetch[n]);
                         

					

                         document.getElementById("simoutput1").innerHTML="you successfully recharge an mtn card of N"+parse.amount+".please you can dial *556# to check balance.";
       }          





 else  if (dialscreen == chargeglo){
      

					

                         document.getElementById("simoutput1").innerHTML="dear customer,this is not available for this network";
       }   

else  if (dialscreen == glocheck){
      

					

                         document.getElementById("simoutput1").innerHTML="wrong command! please change your format";
       } 



	       else if (dialscreen == mtnpulse) {
	       	
		var rate=0.1;
		
	  	var time=sec1.innerHTML;
	  	
	  	var timerate=rate * time;

	  	var tarriff="mtn pulse";
	  	var stotarrif = Object.keys(localStorage);

	  	var bal=parseInt(localStorage.getItem('Mtnbalance'));
	  	var diff=bal-timerate;

	for (var i = 0; i < stotarrif.length; i++) {
	localStorage.removeItem(stotarrif);
		
	    

	var tarrif=("tarrif");
	   var objtar = {timerate:timerate,tarrif:tarriff,time:time,rate:rate,diff:diff};
		


	var obt=JSON.stringify(objtar);
	localStorage.setItem(tarrif,obt);


	}

	 document.getElementById("simoutput1").innerHTML="you  have been successfully migrated to mtnpulse";


}




else if (dialscreen.match(/070|080|081|090/)){
  
$("#menulistbox").removeClass('show');
$("#dialpage").removeClass('show');
$("#dialpad").addClass('show');
$("#choosesimpage").removeClass('show');
$("#simbox").removeClass('show');
$("#phone2").addClass('show');




$("#ringpage").addClass('show');
 document.getElementById('ringnumber').innerHTML="07035708027";
 document.getElementById('div3').innerHTML=dialscreen;

 setTimeout(delayring,3000)

 function delayring(){
$("#networkt").addClass('show');

sound.play();

}
 stop();

var stopint = 1;
function stop(){



stopint=2;
}


 stint = setInterval(start1,22000);	





function stopfak(){

      clearInterval(stint);



}


function start1(){
	if (stopint==1) {

var timesecs=parseInt(sec1.innerHTML)+1;

sec1.innerHTML=timesecs;
console.log(timesecs);

var stotarrif = Object.keys(localStorage);
var parse = JSON.parse(localStorage.getItem(fetch[n]));
var tarriff="mtn pulse";
if (tarriff=="mtn pulse") {

	  	

var timesec=document.getElementById('sec1').innerHTML;





var rate=0.001; 
var timerate=timesec*rate;

       


	    var stotarrif = Object.keys(localStorage);

for (var i = 0; i < stotarrif.length; i++) {
	

	  	var bal=localStorage.getItem('Mtnbalance');


	 

	  	
	  	var diff=Math.floor(bal-timerate);

	

localStorage.setItem('Mtnbalance',diff);

	console.log(diff)
}
 };



  

// document.getElementById('div3').innerHTML=dialscreen;
// document.getElementById('div2').innerHTML=btnvalue;


	} else{
			
	};




}

}


// else{

//  $(document).ready(function(){
// $("#backhome").click(function(){

	
// 	clearInterval(stint);
// 	$("#dialpage").removeClass('show');
// $("#choosesimpage").removeClass('show');
// $("#menulistbox").removeClass('show');
// $("#simoutput").addClass('show');

// })
// })

// }



    else if (dialscreen == mtnbeta) {
	       	var count=0;
			count++;
		var rate=0.4;
		var d = new Date();
	  	var time=Math.floor(d.setSeconds(0)*0.000000000001);
	  	var realtime=time * count;
	  	var timerate=rate * time;

	  	var tarriff="mtn betatalk";
	  	var stotarrif = Object.keys(localStorage);
	  	var oldtarriff=localStorage.getItem(stotarrif);
	  	var bal=localStorage.getItem('Mtnbalance');
	  	var diff=bal-timerate;

	for (var i = 0; i < stotarrif.length; i++) {
	// localStorage.removeItem(oldtarriff);
		
	    

	var tarrif=("tarrif");
	   var objtar = {timerate:timerate,tarrif:tarriff,time:time,rate:rate,realtime:realtime,diff:diff};
		


	var obt=JSON.stringify(objtar);
	localStorage.setItem(tarrif,obt);



	 document.getElementById("simoutput1").innerHTML="you  have been successfully migrated to mtnbetatalk";



   }
    
	}





 






			
        
 		}
           

 




            
}

 }




















 function  dialnumglo() {
 	var mtncheck = "*556#";
	
 var glocheck="#124#";
 var dialscreen = dialdisplay.value;
var fetch=Object.keys(localStorage);

          	 	 for(var n=0;n<fetch.length;n++){
 var parse = JSON.parse(localStorage.getItem(fetch[n]));


				var charge = parse.code;
	
                var chargeglo = parse.glocode;
	
                
					var sa=parse.amount;
 				
					var sn=parse.network;
					
var global=localStorage.getItem('Globalance');


					 
var gloadd = parseInt(global) + parseInt(parse.amount);



if (dialscreen==glocheck) {





document.getElementById("simoutput1").innerHTML="your glo main balance is:N"+localStorage.getItem('Globalance')+".please you can dial *123* to recharge more";
           

           }


            else  if (dialscreen == chargeglo){



             	 localStorage.setItem('Globalance',gloadd);
             	 // localStorage.removeItem(fetch[n]);
                         

					

                         document.getElementById("simoutput1").innerHTML="you successfully recharge a glo card of N"+parse.amount+".please you can dial #124# to check balance.";
       }     

 else  if (dialscreen == charge){
      

					

                         document.getElementById("simoutput1").innerHTML="dear customer,this is not available for this network";
       }   

else  if (dialscreen == mtncheck){
      

					

                         document.getElementById("simoutput1").innerHTML="wrong command! please change your format";
       }   


        }

 }

function pick(){
// var sound = new Audio();
// sound.src = 'alarm.mp3';
sound.pause();

	change();
	start();
 function change(){

   if(document.getElementById('min').innerHTML == "60"){
   	 document.getElementById('hr').innerHTML=parseInt(document.getElementById('hr').innerHTML) + 1;
   	 document.getElementById('min').innerHTML="0";
   	 document.getElementById('min').innerHTML="0";

   }
   else if(document.getElementById('sec').innerHTML == "60"){
   	 document.getElementById('min').innerHTML=parseInt(document.getElementById('min').innerHTML) + 1;
   	 document.getElementById('sec').innerHTML ="0";
   }
   else{
   	var data=parseInt(document.getElementById('sec').innerHTML) + 1;
   document.getElementById('sec').innerHTML=data;
   }



    if(document.getElementById('minp2').innerHTML == "60"){
   	 document.getElementById('hrp2').innerHTML=parseInt(document.getElementById('hr').innerHTML) + 1;
   	 document.getElementById('minp2').innerHTML="0";
   	 document.getElementById('minp2').innerHTML="0";
   }
   else if(document.getElementById('secp2').innerHTML == "60"){
   	 document.getElementById('minp2').innerHTML=parseInt(document.getElementById('min').innerHTML) + 1;
   	 document.getElementById('secp2').innerHTML ="0";
   }
   else{
   	var data=parseInt(document.getElementById('secp2').innerHTML) + 1;
   document.getElementById('secp2').innerHTML=data;
   }
  
   
 var stint1;



$('#pickbutton').addClass('hide');
	$('#cutbutton').addClass('show');
	$('#div4p2').addClass('show');
	$('#div4').addClass('show');
}



	function start(){

      stint1=   setInterval(change,1000);
}
}

function stop(){

     clearInterval(stint1);
     setTimeout(action,2000);
     function action(){

     $('#div4p2').removeClass('show');
     
     $('#ringpage').removeClass('show');
      $('#dialpad').removeClass('show');
       // $('#smartphoneinside').removeClass('show');
      $('#simoutput').addClass('show');

      $('#menulistbox').addClass('show');
      $("#networkt").removeClass('show');

     // document.getElementById("simoutput1").innerHTML="your glo main balance is:N"+localStorage.getItem('Globalance')+".please you can dial *123* to recharge more";
}

}





	



function dialnump2(){
	var mtncheck = "*556#";
	var glocheck="#124#";
 	var mtnpulse="*406*1#";
 	var mtnbeta="*123*1*6#";
	var sn=selectnetwork.value;
	

	

	var dialscreen = dialdisplayp2.value;
var dialscreen = dialdisplayp2.value;
var btnvalue=siminbox1p2.value;
 		
	var fetch=Object.keys(localStorage);

          	 	 for(var n=0;n<fetch.length;n++){
 var parse = JSON.parse(localStorage.getItem(fetch[n]));


				var charge = parse.code;
	
                var chargeglo = parse.glocode;
	
                
					var sa=parse.amount;
 				
					var sn=parse.network;
					var recharge=charge;
var bal=localStorage.getItem('Mtnbalancep2');
var global=localStorage.getItem('Globalancep2');
var diff=parse.diff;
var time=parse.time;
var timerate=parse.timerate;
var rate=parse.rate;
var tarriff=tarriff;


					 var add = parseInt(bal) + parseInt(parse.amount);
var gloadd = parseInt(global) + parseInt(parse.amount);


					 if (btnvalue=="MTN NG") {


     

 if( dialscreen == mtncheck){
           
            
            document.getElementById("simoutput1p2").innerHTML="your mtn main balance is:N"+localStorage.getItem('Mtnbalancep2')+".please you can dial *555* to recharge more";
            
            $('#dialdisplay').css('font-size','14px');

                

        }   



 

     else  if (dialscreen == recharge){



             	 localStorage.setItem('Mtnbalancep2',add);
             	 localStorage.removeItem(fetch[n]);
                         

					

                         document.getElementById("simoutput1p2").innerHTML="you successfully recharge an mtn card of N"+parse.amount+".please you can dial *556# to check balance.";
       }          





 else  if (dialscreen == chargeglo){
      

					

                         document.getElementById("simoutput1p2").innerHTML="dear customer,this is not available for this network";
       }   

else  if (dialscreen == glocheck){
      

					

                         document.getElementById("simoutput1p2").innerHTML="wrong command! please change your format";
       } 



	       else if (dialscreen == mtnpulse) {
	       	
		var rate=0.1;
		
	  	var time=sec1.innerHTML;
	  	
	  	var timerate=rate * time;

	  	var tarriff="mtn pulse";
	  	var stotarrif = Object.keys(localStorage);

	  	var bal=parseInt(localStorage.getItem('Mtnbalance'));
	  	var diff=bal-timerate;

	for (var i = 0; i < stotarrif.length; i++) {
	localStorage.removeItem(stotarrif);
		
	    

	var tarrif=("tarrif");
	   var objtar = {timerate:timerate,tarrif:tarriff,time:time,rate:rate,diff:diff};
		


	var obt=JSON.stringify(objtar);
	localStorage.setItem(tarrif,obt);


	}

	 document.getElementById("simoutput1p2").innerHTML="you  have been successfully migrated to mtnpulse";


}


}}}