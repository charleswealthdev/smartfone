$(document).ready(function(){
$("#selectproduct").change(function(){
	var sp=selectproduct.value;
if (sp=="airtime") {
$("#selectnetworkbox").addClass('show');
$("#selectcable").removeClass('show');

}


else if (sp=='cabletv') {

$("#selectcable").addClass('show');
$("#selectnetworkbox").removeClass('show');
$("#selectamountbox").removeClass('show');
$("#selectquantitybox").removeClass('show');


}

})
});



$(document).ready(function(){
$("#selectnetwork").change(function(){
	var sn=selectnetwork.value;
if (sn=="mtn" || sn=="glo" || sn=="airtel" || sn=="etisalat") {
$("#selectamountbox").addClass('show');

$("#selectquantitybox").addClass('show');


}

})
})

function generate(){
var sa=selectamount.value;
var sq=selectquantity.value;
var sn=selectnetwork.value;


 var airtime1=Math.ceil(Math.random()*10000);
 var airtime2=Math.ceil(Math.random()*10000);
 var airtime3=Math.ceil(Math.random()*10000);
  var airtime4=Math.ceil(Math.random()*10000);
var airtimepin = airtime1  +"-"+ airtime2 +"-"+ airtime3+"-"+ airtime4;

var airtime11=Math.ceil(Math.random()*10000);
 var airtime22=Math.ceil(Math.random()*10000);
 var airtime33=Math.ceil(Math.random()*10000);
 var airtime44=Math.ceil(Math.random()*10000);
var airtimepin1 = airtime11  +"-"+ airtime22 +"-"+ airtime33+"-"+ airtime44;

var airtime111=Math.ceil(Math.random()*10000);
 var airtime222=Math.ceil(Math.random()*10000);
 var airtime333=Math.ceil(Math.random()*10000);
 var airtime444=Math.ceil(Math.random()*10000);
var airtimepin2 = airtime111  +"-"+ airtime222 +"-"+ airtime333+"-"+ airtime444;

var airtime1111=Math.ceil(Math.random()*10000);
 var airtime2222=Math.ceil(Math.random()*10000);
 var airtime3333=Math.ceil(Math.random()*10000);
 var airtime4444=Math.ceil(Math.random()*10000);
var airtimepin3 = airtime1111  +"-"+ airtime2222 +"-"+ airtime3333+"-"+ airtime4444;

var airtime11111=Math.ceil(Math.random()*10000);
 var airtime22222=Math.ceil(Math.random()*10000);
 var airtime33333=Math.ceil(Math.random()*10000);
 var airtime44444=Math.ceil(Math.random()*10000);
var airtimepin4 = airtime11111  +"-"+ airtime22222 +"-"+ airtime33333+"-"+ airtime44444;

$('#displayboxdate').addClass('show');

$('#print').addClass('show');




if ( sa=="100"  && sq=='1' && sn=="mtn") {
	$('#displayboxdate').addClass('show');
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
	$("#displayboxanimate").animate({width:'100px',height:'20px'},1000)
$("#displayboxanimate").animate({width:'60px',height:'40px'},1000)
$("#displayboxanimate").animate({width:'220px',height:'40px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');

}

else if ( sa=="100"  && sq=='2' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
	document.getElementById('displaybox1').innerHTML= airtimepin1;
	$("#displayboxanimate").animate({width:'100px',height:'20px'},1000)
$("#displayboxanimate").animate({width:'60px',height:'40px'},1000)
$("#displayboxanimate").animate({width:'220px',height:'40px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');

}

else if ( sa=="100"  && sq=='3' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML= airtimepin2;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn3').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');


}



else if ( sa=="100"  && sq=='4' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn4').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');



}



else if ( sa=="100"  && sq=='5' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
document.getElementById('displaybox4').innerHTML=airtimepin4;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn5').addClass('show');
$('#activatebtn4').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');


}







else if ( sa=="200"  && sq=='1' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');

}

else if ( sa=="200"  && sq=='2' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="200"  && sq=='3' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
$('#activatebtn3').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="200"  && sq=='4' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn4').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');


}

else if ( sa=="200"  && sq=='5' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
document.getElementById('displaybox4').innerHTML=airtimepin4;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

$('#activatebtn5').addClass('show');
$('#activatebtn4').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');

}






else if ( sa=="400"  && sq=='1' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;

	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');

}





else if ( sa=="400"  && sq=='2' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');

}


else if ( sa=="400"  && sq=='3' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn3').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');

}






else if ( sa=="400"  && sq=='4' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
$('#activatebtn4').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn1').addClass('show');

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}

else if ( sa=="400"  && sq=='5' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
document.getElementById('displaybox4').innerHTML=airtimepin4;
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn4').addClass('show');
$('#activatebtn5').addClass('show');

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}




else if ( sa=="500"  && sq=='1' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="500"  && sq=='2' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');

}


else if ( sa=="500"  && sq=='3' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');

}






else if ( sa=="500"  && sq=='4' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn4').addClass('show');

}

else if ( sa=="500"  && sq=='5' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
document.getElementById('displaybox4').innerHTML=airtimepin4;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn4').addClass('show');
$('#activatebtn5').addClass('show');

}







else if ( sa=="1000"  && sq=='1' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');

}





else if ( sa=="1000"  && sq=='2' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');

}


else if ( sa=="1000"  && sq=='3' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');


}






else if ( sa=="1000"  && sq=='4' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;

$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn4').addClass('show');

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}

else if ( sa=="1000"  && sq=='5' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML= airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
document.getElementById('displaybox4').innerHTML=airtimepin4;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn4').addClass('show');
$('#activatebtn5').addClass('show');


}



else if ( sa=="1500"  && sq=='1' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');

}





else if ( sa=="1500"  && sq=='2' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');

}


else if ( sa=="1500"  && sq=='3' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');

}






else if ( sa=="1500"  && sq=='4' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn4').addClass('show');

}

else if ( sa=="1500"  && sq=='5' && sn=="mtn") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin;
document.getElementById('displaybox1').innerHTML=airtimepin1;
document.getElementById('displaybox2').innerHTML=airtimepin2;
document.getElementById('displaybox3').innerHTML=airtimepin3;
document.getElementById('displaybox4').innerHTML=airtimepin4;


$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');
$('#activatebtn2').addClass('show');
$('#activatebtn3').addClass('show');
$('#activatebtn4').addClass('show');
$('#activatebtn5').addClass('show');


}



















if ( sa=="100"  && sq=='1' && sn=="glo") {
	$('#displayboxdate').addClass('show');
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin;
	$("#displayboxanimate").animate({width:'100px',height:'20px'},1000)
$("#displayboxanimate").animate({width:'60px',height:'40px'},1000)
$("#displayboxanimate").animate({width:'220px',height:'40px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
$('#activatebtn1').addClass('show');

}

else if ( sa=="100"  && sq=='2' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin1;
	$("#displayboxanimate").animate({width:'100px',height:'20px'},1000)
$("#displayboxanimate").animate({width:'60px',height:'40px'},1000)
$("#displayboxanimate").animate({width:'220px',height:'40px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="100"  && sq=='3' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:MTN'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}



else if ( sa=="100"  && sq=='4' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin2+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');



}



else if ( sa=="100"  && sq=='5' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin3+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin4;


$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}



else if ( sa=="200"  && sq=='1' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="200"  && sq=='2' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:MTN'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="200"  && sq=='3' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="200"  && sq=='4' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}

else if ( sa=="200"  && sq=='5' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin4;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}






else if ( sa=="400"  && sq=='1' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin;

	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="400"  && sq=='2' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="400"  && sq=='3' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="400"  && sq=='4' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}

else if ( sa=="400"  && sq=='5' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin4;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}




else if ( sa=="500"  && sq=='1' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="500"  && sq=='2' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="500"  && sq=='3' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="500"  && sq=='4' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}

else if ( sa=="500"  && sq=='5' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+ 'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin1+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin4;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}







else if ( sa=="1000"  && sq=='1' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="1000"  && sq=='2' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="1000"  && sq=='3' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="1000"  && sq=='4' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+ 'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}

else if ( sa=="1000"  && sq=='5' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin3+'<br>'+ 'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin4;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}



else if ( sa=="1500"  && sq=='1' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="1500"  && sq=='2' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="1500"  && sq=='3' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2;

	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="1500"  && sq=='4' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+ 'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin2+'<br>'+ 'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin3;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="1500"  && sq=='5' && sn=="glo") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:GLO'+'<br>'+ airtimepin4;



$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}


















if ( sa=="100"  && sq=='1' && sn=="airtel") {
	$('#displayboxdate').addClass('show');
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin;
	$("#displayboxanimate").animate({width:'100px',height:'20px'},1000)
$("#displayboxanimate").animate({width:'60px',height:'40px'},1000)
$("#displayboxanimate").animate({width:'220px',height:'40px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="100"  && sq=='2' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin1;
	$("#displayboxanimate").animate({width:'100px',height:'20px'},1000)
$("#displayboxanimate").animate({width:'60px',height:'40px'},1000)
$("#displayboxanimate").animate({width:'220px',height:'40px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="100"  && sq=='3' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}



else if ( sa=="100"  && sq=='4' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin2+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');



}



else if ( sa=="100"  && sq=='5' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin3+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin4;


$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}



else if ( sa=="200"  && sq=='1' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="200"  && sq=='2' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="200"  && sq=='3' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="200"  && sq=='4' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}

else if ( sa=="200"  && sq=='5' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin4;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}






else if ( sa=="400"  && sq=='1' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin;

	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="400"  && sq=='2' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="400"  && sq=='3' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="400"  && sq=='4' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}

else if ( sa=="400"  && sq=='5' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin4;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}




else if ( sa=="500"  && sq=='1' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="500"  && sq=='2' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="500"  && sq=='3' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="500"  && sq=='4' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}

else if ( sa=="500"  && sq=='5' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+ 'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin1+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin4;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}







else if ( sa=="1000"  && sq=='1' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="1000"  && sq=='2' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="1000"  && sq=='3' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="1000"  && sq=='4' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+ 'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}

else if ( sa=="1000"  && sq=='5' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin3+'<br>'+ 'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin4;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}



else if ( sa=="1500"  && sq=='1' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="1500"  && sq=='2' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="1500"  && sq=='3' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2;

	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="1500"  && sq=='4' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+ 'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin2+'<br>'+ 'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin3;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="1500"  && sq=='5' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin4;



$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}







else if ( sa=="100"  && sq=='1' && sn=="etisalat") {
	$('#displayboxdate').addClass('show');
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin;
	$("#displayboxanimate").animate({width:'100px',height:'20px'},1000)
$("#displayboxanimate").animate({width:'60px',height:'40px'},1000)
$("#displayboxanimate").animate({width:'220px',height:'40px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="100"  && sq=='2' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin1;
	$("#displayboxanimate").animate({width:'100px',height:'20px'},1000)
$("#displayboxanimate").animate({width:'60px',height:'40px'},1000)
$("#displayboxanimate").animate({width:'220px',height:'40px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="100"  && sq=='3' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2;
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}



else if ( sa=="100"  && sq=='4' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin2+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');



}



else if ( sa=="100"  && sq=='5' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin3+'<br>'+ 'MYGLOBAL LIMITED N100' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin4;


$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}



else if ( sa=="200"  && sq=='1' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="200"  && sq=='2' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="200"  && sq=='3' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="200"  && sq=='4' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}

else if ( sa=="200"  && sq=='5' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N200' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin4;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}






else if ( sa=="400"  && sq=='1' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin;

	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="400"  && sq=='2' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="400"  && sq=='3' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="400"  && sq=='4' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}

else if ( sa=="400"  && sq=='5' && sn=="airtel") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N400' +'<br>'+'TYPE:AIRTEL'+'<br>'+ airtimepin4;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}




else if ( sa=="500"  && sq=='1' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="500"  && sq=='2' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="500"  && sq=='3' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="500"  && sq=='4' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}

else if ( sa=="500"  && sq=='5' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+ 'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin1+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin4;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}







else if ( sa=="1000"  && sq=='1' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="1000"  && sq=='2' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="1000"  && sq=='3' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="1000"  && sq=='4' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+ 'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin3;

$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');
}

else if ( sa=="1000"  && sq=='5' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin3+'<br>'+ 'MYGLOBAL LIMITED N1000' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin4;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}



else if ( sa=="1500"  && sq=='1' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}





else if ( sa=="1500"  && sq=='2' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}


else if ( sa=="1500"  && sq=='3' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2;

	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}






else if ( sa=="1500"  && sq=='4' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+ 'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin2+'<br>'+ 'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin3;
	
$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');

}

else if ( sa=="1500"  && sq=='5' && sn=="etisalat") {
	
	document.getElementById('displaybox').innerHTML='MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+airtimepin +'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin1+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin2+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin3+'<br>'+'MYGLOBAL LIMITED N1500' +'<br>'+'TYPE:etisalat'+'<br>'+ airtimepin4;



$("#displayboxanimate").animate({width:'220px',height:'20px'},1000).addClass('show').addClass('displayboxanimateclass').addClass('text-light');


}













}




function activate(){

	var sn=selectnetwork.value;
var sn= selectnetwork.value;

var selectq = selectquantity.value;
		var selecta		=	selectamount.value
var screendetails = displaybox.innerHTML;
var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');
var screendetailjsplit= screendetailsjoin.split("MYGLOBAL LIMITED N100<br>TYPE:MTN<br>");

var screenffjoin= screendetailjsplit.join('');
var screenj= screenffjoin.split("MYGLOBAL LIMITED N400<br>TYPE:MTN<br>");
var screenjoin=screenj.join('');
var screenjoin1=screenjoin.split('MYGLOBAL LIMITED N500<br>TYPE:MTN<br>');
var screenjoinw=screenjoin1.join('');
var screenjoin2=screenjoinw.split('MYGLOBAL LIMITED N1000<br>TYPE:MTN<br>');
var screenjoin3=screenjoin2.join('');
var screenjoin4=screenjoin3.split('MYGLOBAL LIMITED N1500<br>TYPE:MTN<br>');
var screenjoin5=screenjoin4.join('');
var screenjoin6=screenjoin5.split('MYGLOBAL LIMITED N200<br>TYPE:MTN<br>');
var screenjoin7=screenjoin6.join('');

var splitglo=screenjoin5.split('MYGLOBAL LIMITED N100<br>TYPE:GLO<br>');
var joinglo=splitglo.join('');



 var credit = screenjoin7;
 var creditglo = joinglo;


 var code = "*555*"+credit+"#";

var glocode = "*123*"+creditglo+"#";

 var sto = Object.keys(localStorage);


var success="success";
alert(success);

for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:selecta,network:sn,loading:credit,code:code};
	


var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);

};





	var count=0;
		count++;
	var rate=0.2;
	var d = new Date();
  	var time=Math.floor(d.setSeconds(0)*0.000000000001);
  	var realtime=time * count;
  	var timerate=rate * time;

  	var tarriff="mtn mega";
  	var stotarrif = Object.keys(localStorage);

  	var bal=localStorage.getItem('Mtnbalance');
  	var diff=bal-timerate;


for (var i = 0; i < stotarrif.length; i++) {
	
    

var tarrif=("tarrif");
   var objtar = {timerate:timerate,tarrif:tarriff,time:time,rate:rate,realtime:realtime,diff:diff};
	


var obt=JSON.stringify(objtar);
localStorage.setItem(tarrif,obt);

}

  if(localStorage.getItem('Mtnbalance') == null){
  
        	 localStorage.setItem('Mtnbalance',0);
        	 
}

        
        if(localStorage.getItem('Globalance') == null){
             localStorage.setItem('Globalance',0);
        }
        if(localStorage.getItem('Airtelbalance') == null){
             localStorage.setItem('Airtelbalance',0);
        }


if(localStorage.getItem('tarriff') == null){
             localStorage.setItem('tarriff',"tarrif");
        }

 if(localStorage.getItem('Mtnbalancep2') == null){
        	 localStorage.setItem('Mtnbalancep2',0);
        }
        if(localStorage.getItem('Globalancep2') == null){
             localStorage.setItem('Globalance',0);
        }
        if(localStorage.getItem('Airtelbalancep2') == null){
             localStorage.setItem('Airtelbalancep2',0);
        }



if (sn=="glo") {
for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:selecta,network:sn,loading:creditglo,glocode:glocode};
	


var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);
};




}
}


function  activate1() {
	var sn=selectnetwork.value;

var sn= selectnetwork.value;

var selectq = selectquantity.value;
		var selecta		=	selectamount.value;
	var screendetails = displaybox1.innerHTML;
	var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');

 var credit = screendetailsjoin;
 
 var code = "*555*"+credit+"#";


var glocode = "*123*"+credit+"#";
 
 var sto = Object.keys(localStorage);


var success="success";
alert(success);

for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:selecta,network:sn,loading:credit,code:code};
	


var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);
};

  if(localStorage.getItem('Mtnbalance') == null){
        	 localStorage.setItem('Mtnbalance',0);
        }
        if(localStorage.getItem('Globalance') == null){
             localStorage.setItem('Globalance',0);
        }
        if(localStorage.getItem('Airtelbalance') == null){
             localStorage.setItem('Airtelbalance',0);
        }





 


if (sn=="glo") {
for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:selecta,network:sn,loading:credit,code:glocode};
	


var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);
};


};

}



function  activate2() {
	var sn=selectnetwork.value;

var sn= selectnetwork.value;

var selectq = selectquantity.value;
		var selecta		=	selectamount.value;
	var screendetails = displaybox2.innerHTML;
var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');

 var credit = screendetailsjoin;
 
 var code = "*555*"+credit+"#";


 var sto = Object.keys(localStorage);


var success="success";
alert(success);


for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:selecta,network:sn,loading:credit,code:code};
	

var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);
};

  if(localStorage.getItem('Mtnbalance') == null){
        	 localStorage.setItem('Mtnbalance',0);
        }
        if(localStorage.getItem('Globalance') == null){
             localStorage.setItem('Globalance',0);
        }
        if(localStorage.getItem('Airtelbalance') == null){
             localStorage.setItem('Airtelbalance',0);
        }






}






function  activate3() {
	var sn=selectnetwork.value;

var sn= selectnetwork.value;

var selectq = selectquantity.value;
		var selecta		=	selectamount.value;
	var screendetails = displaybox3.innerHTML;
var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');

 var credit = screendetailsjoin;
 
 var code = "*555*"+credit+"#";


 var sto = Object.keys(localStorage);

var success="success";
alert(success);


for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:selecta,network:sn,loading:credit,code:code};
	


var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);

};

  if(localStorage.getItem('Mtnbalance') == null){
        	 localStorage.setItem('Mtnbalance',0);
        }
        if(localStorage.getItem('Globalance') == null){
             localStorage.setItem('Globalance',0);
        }
        if(localStorage.getItem('Airtelbalance') == null){
             localStorage.setItem('Airtelbalance',0);
        }






}



function  activate4() {
	var sn=selectnetwork.value;

var sn= selectnetwork.value;

var selectq = selectquantity.value;
		var selecta		=	selectamount.value;
	var screendetails = displaybox4.innerHTML;
var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');

 var credit = screendetailsjoin;
 
 var code = "*555*"+credit+"#";


 var sto = Object.keys(localStorage);

var success="success";
alert(success);

for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:selecta,network:sn,loading:credit,code:code};
	


var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);

};

  if(localStorage.getItem('Mtnbalance') == null){
        	 localStorage.setItem('Mtnbalance',0);
        }
        if(localStorage.getItem('Globalance') == null){
             localStorage.setItem('Globalance',0);
        }
        if(localStorage.getItem('Airtelbalance') == null){
             localStorage.setItem('Airtelbalance',0);
        }






}



function print(){
	// $('#displaybox').css('border','10px solid darkblue')
var printdiv = document.getElementById('displaybox');
var printdiv1 = document.getElementById('displayboxdate');
var printarea = window.open();

$('#displaybox').css('border','2px solid darkblue')
printarea.document.write(printdiv.innerHTML+'<br>'+printdiv1.innerHTML);

printarea.document.close();
printarea.focus();
printarea.print();
printarea.close();


}






