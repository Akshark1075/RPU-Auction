var pla=["Ashwath","Maddy","Keertha","Sharky","Rajesh","Sanjeevi","Rajil","Abijith","Jeff","Reva","Boomi","Jagan","Sudhar","Sanjith","Andrew","Venkatesan","Kutti","Rohit"]

var team1=[]
var team2=[]
var team3=[]
var aneed=true
var bneed=true
var cneed=true
var input

var minbid=0
var team1bal=100
var team2bal=100
var team3bal=100
var currentbid=0
var teamlist=["Team A","Team B","Team C"]
var teamdup=["Team A"]
var need=[false,false,false]
var first=true;

$("#spldiv").css("display","none");
function checkteam(){
  if (team1.length==6 || team1bal==0){
            var index1=teamlist.indexOf("Team A")
            teamlist.splice(index1,1)
            need.splice(index1,1)
            }
         if(team2.length==6 || team2bal==0){
            var index2=teamlist.indexOf("Team B")
            teamlist.splice(index2,1)
               need.splice(index2,1)
        }
         if(team3.length==6 || team3bal==0){
           var index3=teamlist.indexOf("Team C")
            teamlist.splice(index3,1)
               need.splice(index3,1)
        }
        teamdup=[teamlist[0]]

}

function minbidreset(){
if (["Sijin","Maddy","Keertha","Sharky","OX","Sanjeevi","Rajil","Venkatesan","Sudhar"].includes(pla[0])){
            minbid=5
           
			currentbid=minbid;
        }
        else if( ["Abijith","Jeff","Reva","Boomi","Jagan","Yomi","Ashwath","Rohit"].includes(pla[0])){
            minbid=7
            
			currentbid=minbid;
        }
        else if(["Sundu","Andrew","Naveenjii","Ajmal","Rajesh","Sanjith","Kutti"].includes(pla[0]) ){
           minbid=10 
           
			currentbid=minbid;
        }
    }

    minbidreset()
    checkteam()
start()

function start(){
		$("#bala").text(team1bal);
	$("#balb").text(team2bal);
	$("#balc").text(team3bal);
	if(teamlist.length==0){
$("#spldiv").css("display","none");
  $("#btndiv").css("display","none");	
    $("#bidtext").css("display","none");	
    $("#mbid").css("display","none");
     $("#cbid").css("display","none");
$("#teamname").css("display","none");

      $("#yoyo").text("Let's rock n'd roll");
	}

else{		

$("#spldiv").css("display","none");

$("#teamname").text(teamdup[0]);

$("#bidtext").text("Do you want "+ pla[0]+" to play for your team?");
$("#mbid").text(minbid);
$("#cbid").text(currentbid);
}

}


function spl(){
    $("#btndiv").css("display","block");


$("#spldiv").css("display","none");
var tempo=Number(currentbid);
if($("input").val()<tempo || $("input").val()=="" ){
currentbid=tempo+1;
}
else{
	currentbid=$("input").val();
}

$("#cbid").text(currentbid);
$("input").val("")
var ind=teamlist.indexOf(teamdup[0]);
if(ind==teamlist.length-1){
	 teamdup.pop();
	
	teamdup.push(teamlist[0])
	start();


}
else{
   teamdup.pop();
	teamdup.push(teamlist[ind+1])
	start();
	} 

}

 function btn1clk(){
 	var ind=teamlist.indexOf(teamdup[0]);
 	need[ind]=true;

 	if(need.length==1 && need[0]==true){
	if(teamlist[0]=="Team A"){
			team1.push(pla[0]);
			team1bal-=currentbid

$("#alist").append(" <li class='list-group-item' style='background:transparent'><strong>"+pla[0]+"</strong></li>")
	}
	else if(teamlist[0]=="Team B"){
			team2.push(pla[0]);
			team2bal-=currentbid
			
$("#blist").append(" <li class='list-group-item' style='background:transparent'><strong>"+pla[0]+"</strong></li>")
	}
	else if(teamlist[0]=="Team C"){
			team3.push(pla[0]);
			team3bal-=currentbid

$("#clist").append(" <li class='list-group-item' style='background:transparent'><strong>"+pla[0]+"</strong></li>")
	}

currentbid=0
	alert(pla[0]+" sold to "+teamlist[0]);
	pla.splice(pla[0],1);
	first=true
	need=[false,false,false]
	teamlist=["Team A","Team B","Team C"]
	teamdup=[teamlist[0]]
	checkteam()
	minbidreset()
	start()
}

 	else if(!first){
 $("#btndiv").css("display","none");


 $("#spldiv").css("display","block");

}
else{
first=false
currentbid=minbid;

if(ind<2){
	teamdup.pop();
	teamdup.push(teamlist[ind+1])
	start();
	 
}


}

}

function btn2clk(){
var ind=teamlist.indexOf(teamdup[0]);

if(need.length==1 && need[0]==false){
var temp=pla.splice(pla[0],1);
pla.push(temp);
currentbid=0
need=[false,false,false]
teamlist=["Team A","Team B","Team C"]
teamdup=[teamlist[0]]
first=true
checkteam()
	minbidreset()
	start()
}
else if(need.length==1 && need[0]==true){
	if(teamlist[0]=="Team A"){
			team1.push(pla[0]);
			team1bal-=currentbid

$("#alist").append(" <li class='list-group-item' style='background:transparent'><strong>"+pla[0]+"</strong></li>")
	}
	else if(teamlist[0]=="Team B"){
			team2.push(pla[0]);
			team2bal-=currentbid

$("#blist").append(" <li class='list-group-item' style='background:transparent'><strong>"+pla[0]+"</strong></li>")
	}
	else if(teamlist[0]=="Team C"){
			team3.push(pla[0]);
			team3bal-=currentbid


$("#clist").append(" <li class='list-group-item' style='background:transparent'><strong>"+pla[0]+"</strong></li>")
	}
currentbid=0

	alert(pla[0]+" sold to "+teamlist[0]);

	pla.splice(pla[0],1);
	first=true
	need=[false,false,false]
	teamlist=["Team A","Team B","Team C"]
	teamdup=[teamlist[0]]
	checkteam()
	minbidreset()
	start()
}



else{ 

	var ind=teamlist.indexOf(teamdup[0]);
	
need.splice(ind,1);
teamlist.splice(ind,1);
teamdup.splice(0,1);
if(need.length==1 && need[0]==true){
	if(teamlist[0]=="Team A"){
			team1.push(pla[0]);
			team1bal-=currentbid

$("#alist").append(" <li class='list-group-item' style='background:transparent'><strong>"+pla[0]+"</strong></li>")
	}
	else if(teamlist[0]=="Team B"){
			team2.push(pla[0]);
			team2bal-=currentbid

$("#blist").append(" <li class='list-group-item' style='background:transparent'><strong>"+pla[0]+"</strong></li>")
	}
	else if(teamlist[0]=="Team C"){
			team3.push(pla[0]);
			team3bal-=currentbid

$("#clist").append(" <li class='list-group-item' style='background:transparent'><strong>"+pla[0]+"</strong></li>")
	}
	currentbid=0

	alert(pla[0]+" sold to "+teamlist[0]);
	pla.splice(pla[0],1);
	
	need=[false,false,false]
	teamlist=["Team A","Team B","Team C"]
	teamdup=[teamlist[0]]
	first=true
	checkteam()
	minbidreset()
	start()
}
else if(ind<=need.length-1){
	teamdup=[teamlist[ind]]
	start()
}
else{
	teamdup=[teamlist[0] ]

	start()
}

}
}