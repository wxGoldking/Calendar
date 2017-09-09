	function datt(){
					var riqi=document.getElementById("riqi");
					var neda=new Date()
					riqi.innerHTML=neda;		
				}
				datt();
				setInterval("datt()",100);//100ms输出显示一次当前时间