	 d= new Date();
	 y=d.getYear()+1900,m=d.getMonth()+1;
//获取初始值当前日期
	function impr(){
	 	init_y=prompt("您好，欢迎使用万年历查询系统！\n\n请输入1900年后的年份：",2017);
		 	if(parseInt(init_y-0)==parseFloat(init_y-0)&&parseInt(init_y)>=1900){
		 		init_m=prompt("请输入月份：",12);
		 		if(parseInt(init_m-0)==parseFloat(init_m-0)&&parseInt(init_m)>=1&&parseInt(init_m)<=12){
		 			  y=parseInt(init_y),m=parseInt(init_m);
		 		}
		 		else if(init_m!=null){
		 			alert("输入有误请重新输入！");
	 				impr();
		 		}
		 	}
		 	else if(init_y!=null){
	 		alert("输入有误请重新输入！");
	 		impr();
	 	}
	}//输入及验证
window.onload=function(){
			var nextt=document.getElementById("nextt");
			var lastt=document.getElementById("lastt");
			lastt.onclick=function(){
				if(m==1){
					m=12;
					y=y-1;
				}
				else{
					m-=1;
				}
				switch(m){
					case 2:back_li[3].className="dong current";back_li[0].className="chun hidd";
					break;
					case 5:back_li[0].className="chun current";back_li[1].className="xia hidd";
					break;
					case 8:back_li[1].className="xia current";back_li[2].className="qiu hidd";
					break;
					case 11:back_li[2].className="qiu current";back_li[3].className="dong hidd";
			}//倒序向季节背景变换
				if(y>=1900){
					wanNL();
				}
				else{
					y=1900;
					wanNL();
				}
			
			}//绑定前翻月份查询按钮
			nextt.onclick=function(){
				if(m==12){
					m=1;
					y=y+1;
				}
				else{
					m+=1;
				}
				wanNL();
				background_2();//正向季节背景变换
		}//绑定后翻月份查询按钮
			var tit=document.getElementById("title");
			var tab=document.getElementById("calendar");
			var tab_td=tab.getElementsByTagName("td");	
			tit.onclick=function(){
					impr();
					background_1();
					wanNL();
				}
			var back=document.getElementById("back");
			var back_li=back.getElementsByTagName("li");
			var content=document.getElementById("content");
			//以上为事件绑定
		function background_1(){
						var i=0;
						while(i<back_li.length){
							back_li[i].className="";
							i++;
						}
						switch(m){
							case 12:
							case 1:;
							case 2:back_li[3].className="dong xian";
							break;
							case 3:
							case 4:;
							case 5:back_li[0].className="chun xian";
							break;
							case 6:
							case 7:;
							case 8:back_li[1].className="xia xian";
							break;
							case 9:
							case 10:;
							case 11:back_li[2].className="qiu xian";
							break;
						}//初始背景
			}
		function background_2(){
			switch(m){
					case 12:back_li[3].className="dong current";back_li[2].className="qiu hidd";
					break;
					case 3:back_li[0].className="chun current";back_li[3].className="dong hidd";
					break;
					case 6:back_li[1].className="xia current";back_li[0].className="chun hidd";
					break;
					case 9:back_li[2].className="qiu current";back_li[1].className="xia hidd";
				}
		}
			function wanNL(){
						var year=y;
						var month=m;
						var prin="";
						var tianshu=0;
							year--;
						while(year>=1900){
							if(year%4==0&&year%100!=0||year%400==0){
								tianshu+=366;
								year--;
							}
							else{
								tianshu+=365;
								year--;
							} 
						}
						switch(month){
							case 12:tianshu+=30;
							case 11:tianshu+=31;
							case 10:tianshu+=30;
							case 9:tianshu+=31;
							case 8:tianshu+=31;
							case 7:tianshu+=30;
							case 6:tianshu+=31;
							case 5:tianshu+=30;
							case 4:tianshu+=31;
							case 3:if(y%4==0&&y%100!=0||y%400==0){
							tianshu+=29;
							}
							else{
								tianshu+=28;
							};
							case 2:tianshu+=31;
							case 1:break;
						}
						var a=tianshu%7+1;
						var day=0;
						switch(month){
							case 1:;
							case 3:;
							case 5:;
							case 7:;
							case 8:;
							case 10:;
							case 12:day=31;break;
							case 4:;
							case 6:;
							case 9:;
							case 11:day=30;break;
							case 2:
							if(y%4==0&&y%100!=0||y%400==0){
							day=29;
							}
							else{
							day=28;
							} break;
						}
						var i=0,qiany=0;
						var qian="";
						switch(month-1){
							case 1:;
							case 3:;
							case 5:;
							case 7:;
							case 8:;
							case 10:;
							case 0:qiany=31;break;
							case 4:;
							case 6:;
							case 9:;
							case 11:qiany=30;break;
							case 2:
							if(y%4==0&&y%100!=0||y%400==0){
							qiany=29;
							}
							else{
							qiany=28;
							} break;
						}
						while(i<a){
							qian+=qiany--+"ko";
							i++;
						}
						var j=1,k=1;
						while(j<=day){
							prin+=j+"ko";
							j++;
						}
						i=1;
						var hou="";
						while(i<=42-a-day){
							hou+=i+"ko";
								i++;
						}
						var str=y+"年"+month+"月";
						tit.innerHTML=str;
						var i=0,k=0,x=0,z=0;
						var arr=qian.split("ko"),brr=prin.split("ko"),crr=hou.split("ko");
						for(var i=0;i<42;i++){
							tab_td[i].className="";
							if(k<a){
								tab_td[i].innerHTML=arr[a-1-k];
								tab_td[i].className="hui"
								k++;
							}
							else if(x<day){
							tab_td[i].innerHTML=brr[x];
							var newday=new Date();
							if(y==newday.getYear()+1900&&m==newday.getMonth()+1&&tab_td[i].innerHTML==newday.getDate()){
								tab_td[i].className="current";
								}
								x++;
							}
							else{
								tab_td[i].innerHTML=crr[z];
								tab_td[i].className="hui"
								z++;
							}			
						}//计算日期，将日期内容灌入table
			}
			background_1();
	       	wanNL();
	    function updat(){
	      	var upd=new Date();
	      	if(d.getDate()!=upd.getDate()){
	      		d=upd;
	      		y=d.getYear()+1900;
	      		m=d.getMonth()+1;
	      		background_2();
	       		wanNL();
	       }
	    }//00点更新背景及日历
		   setInterval(function(){updat();},500);//500毫秒调用一次“00点更新背景及日历”函数；setInterval的的第一个参数类型不同，作用域不同
			////页面打开时以初始当前时间执行wanNL函数,刷新背景，显示当前日历。
}

