function verifyChar(name)
{
	var alphabetBox = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','.','-','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var	nameArray = name.split('');
	var	temp = 0;
		for (var i = 0; i < nameArray.length; i++) {
			for (var j = 0; j < alphabetBox.length; j++) {
				if (nameArray[i] == alphabetBox[j]) {
					if((i==0) && (alphabetBox[j]==" "||alphabetBox[j]=="."||alphabetBox[j]=="-"))
					{
						temp=temp;
					}
					else
					{
						if(nameArray[i]==" ")
						{
							if(nameArray[i+1]==" "||nameArray[i-1]==" "||nameArray[i+1]=="."||nameArray[i+1]=="-")
							{
								temp=temp;
							}
							else
								temp+=1;
						}
						else if(nameArray[i]==".")
						{
							if(nameArray[i+1]=="-"||nameArray[i+1]==".")
							{
								temp=temp;
							}
							else
								temp+=1;
						}
						else if(nameArray[i]=="-")
						{
							if(nameArray[i+1]=="-"||nameArray[i+1]==".")
							{
								temp=temp;
							}
							else
								temp+=1;
						}
						else
							temp+=1;
					}
				}
				else
					temp=temp;
			}
		}
		//var n = verifyChar(name);
		if(temp==name.length)
		{
			var s = name.split(' ');
			//msg.innerHTML = n;
			if(s.length<2)
			{
				return false; 
			}
			else if(s.length>=2)
			{
				if(name.charAt(name.indexOf(' ')+1)=="")
				{
					return false; 
				}
				else
					return true;
			}
			else if(name.length==n)
			{
				return true;
			}
			else
				return false;
		}
		else
		{
			return false;
		}
}


function verifyExistance(text, handler)
{
	var pos = text.indexOf(handler);
	return pos;
}

function verifyEmail(email)
{
	var pos = verifyExistance(email,'@');
	if(email.charAt(0)==" "||email.charAt(0)=="@")
	{
		return false;
	}
	else
	{
		if(pos == -1)
		{
			return false;
		}
		else
		{
			var array = email.split('@');
			var dotPos = verifyExistance(array[1],'.');

			if(array[1].charAt(0)==" "||array[1].charAt(0)==".")
			{
				return false;
			}
			else
			{
				if(dotPos == -1)
				{
					return false;
				}
				else
				{
					var array2 = array[1].split('.');
					//array[1].charAt(array[1].indexOf('.')+1)==" "||array[1].charAt(array[1].indexOf('.')+1)==""||array[1].charAt(array[1].indexOf('.')-1)==" "
					if(array2[1]!="com")
					{
						return false;
					}
					else
						return true;
				}
			}
		}
	}
}

function verifyGender()
{
	var g = document.getElementsByName('gender');
	
	for (var i = 0; i < g.length; i++) {
		var detect = "";
		if(g[i].checked)
		{
			detect += g[i].value;
			break;
		}
		else
		{
			detect += "No Value";
		}
	}
	return detect;
}

function verifyDegree()
{
	var g = document.getElementsByName('degree');
	
	var selectedItems="";
	for(var i=0; i<g.length; i++)
	{
		//var selectedItems="";
		if(g[i].type=='checkbox' && g[i].checked==true)
			selectedItems+=g[i].value+"\n";
	}
	return selectedItems;
}

function verifyBG()
{
	//var g = document.getElementsByName('blood')[0].value;
	var group = document.getElementById('bg');
	var Group = group.options[group.selectedIndex].text;
	var msg = document.getElementById('bgDiv');
	
		if(Group=="")
		{
			msg.innerHTML="Select Your Blood Group";
		}
		else
			{msg.innerHTML=Group;}
}

function verifyUsername(uname)
{
	var numberBox = ['0','1','2','3','4','5','6','7','8','9'];
	var	unameArray = uname.split('');
	var	temp = 0;
		for (var i = 0; i < unameArray.length; i++) {
			for (var j = 0; j < numberBox.length; j++) 
			{
				if(unameArray[i]==numberBox[j])
				{
					temp+=1
				}
				else
					temp=temp;
			}
		}
		if(uname.charAt(0)=="")
		{
			return false;
		}
		else
		{
			if(uname.length==temp)
			{
				return true;
			}
			else
				return false;
		}
}

function verifyDate(day,month,year)
{
	var D = verifyUsername(day);
	var M = verifyUsername(month);
	var Y = verifyUsername(year);
	if(D==false||M==false||Y==false)
	{
		return false;
	}
	else
	{
		if((Number(day) > 31 || Number(day) < 1) || (Number(month) > 12 || Number(month) < 1) || (Number(year) > 2016 || Number(year) < 1900))
			{
				//alert(e);
				return false;
			}
			else
				return true;
	}
}

function nameCheck()
{
	var id = document.getElementById('myName').value;
	var msg = document.getElementById('nameDiv');

	if(verifyChar(id))
	{
		msg.innerHTML = "Valid";
		msg.style.color = 'green';
	}
	else
	{
		msg.innerHTML = "Invalid";
		msg.style.color = 'red';
	}
	
}
function  emailCheck()
{
	var id = document.getElementById('myEmail').value;
	var msg = document.getElementById('emailDiv');

	if(verifyEmail(id))
	{
		msg.innerHTML = "Valid";
		msg.style.color = 'green';
	}
	else
	{
		msg.innerHTML = "Invalid";
		msg.style.color = 'red';
	}
}

function  unameCheck()
{
	var id = document.getElementById('myUname').value;
	var msg = document.getElementById('unameDiv');

	if(verifyUsername(id))
	{
		msg.innerHTML = "Valid";
		msg.style.color = 'green';
	}
	else
	{
		msg.innerHTML = "Invalid";
		msg.style.color = 'red';
	}
}

function dateCheck()
{
	var d = document.getElementById('day').value;
	var m = document.getElementById('month').value;
	var y = document.getElementById('year').value;
	var msg = document.getElementById('dateDiv');

	if(verifyDate(d,m,y))
	{
		msg.innerHTML = "Valid";
		msg.style.color = 'green';
	}
	else
	{
		msg.innerHTML = "Invalid";
		msg.style.color = 'red';
	}
}

function passCheck()
{
	var Pass = document.getElementById('myPass').value;
  	var Cpass = document.getElementById('myCpass').value;
  	var msg = document.getElementById('passDiv');

  	if(Pass==Cpass)
	{
		msg.innerHTML = "Matched";
		msg.style.color = 'green';
	}
	else
	{
		msg.innerHTML = "Not Matched";
		msg.style.color = 'red';
	}
}

function reset()
{
	var name = document.getElementById('myName').value;
	var email = document.getElementById('myEmail').value;
	var uname = document.getElementById('myUsername').value;
	var pass = document.getElementById('myPass').value;
	var cpass = document.getElementById('myCpass').value;
	var gender = document.getElementById('gender').value;
	var day = document.getElementById('day').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;

	name = "";
	email = "";
	uname = "";
	pass = "";
	cpass = "";
	day = "";
	month = "";
	year = "";
	gender = "";
}

function loadDoc() 
{
  var xhttp = new XMLHttpRequest();
  var Name = document.getElementById('myName').value;
  var Email = document.getElementById('myEmail').value;
  var Uname = document.getElementById('myUname').value;
  var Pass = document.getElementById('myPass').value;
  var Cpass = document.getElementById('myCpass').value;
  var d = document.getElementById('day').value;
  var m = document.getElementById('month').value;
  var y = document.getElementById('year').value;
  var Gender = verifyGender();
  var Degree = verifyDegree();
  var _Date = verifyDate(d,m,y);
  var group = document.getElementById('bg');
  var Group = group.options[group.selectedIndex].text;
  xhttp.open("POST", "PHP.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  if(Name==""||Email==""||Uname==""||Pass==""||Cpass==""||d==""||m==""||y==""||Degree==""||Group=="")
  {
  	xhttp.send("get=invalid");
  }
  else
  {
	  if(_Date==false)
	  {
	  	xhttp.send("get=invalid");
	  }	
	  else
	  {
	  	if(Gender=="No Value")
	  	{
	  		xhttp.send("get=invalid");
	  	}
		 else
		{
		  	if(Pass!=Cpass)
		  	{
		  		xhttp.send("get=invalid");
		  	}
		  	else
		  	{
		  		var VC = verifyChar(Name);
		  		var VE = verifyEmail(Email);
		  		var VU = verifyUsername(Uname);
		  		if(VC==true&&VE==true&&VU==true)
				{
					xhttp.send("getName="+Name+"&getEmail="+Email+"&getUname="+Uname+"&getPass="+Pass+"&getDay="+d+"&getMonth="+m+"&getYear="+y+"&getGender="+Gender+"&getDegree="+Degree+"&getBG="+Group);
				}
				else
					xhttp.send("get=invalid");
		  	}
		}
	  }
  }
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("show").innerHTML = this.responseText;
     //document.getElementById("show").innerHTML = "";
    }
  };
}




