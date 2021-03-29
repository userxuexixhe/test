// JavaScript Document
function read() {
	 if (document.getElementById("nicheng").value=="123456")//判断用户名是已经被注册
	 { 
   		alert("该用户名已经被注册");//如果用户名已经被注册，则提示用户另选用户名
  	 	return false; 
     };
     var strFile = "D:\\test.txt";//如果用户名没有被注册，则继续执行这句，给保存用户名的文件取名
     var objFSO = new ActiveXObject("Scripting.FileSystemObject");//生成一个文件变量
     // 检查文件是否存在

     if (!objFSO.FileExists(strFile)) //判断目标文件夹下面是否有同名文件
	 {
      // 创建文本文件
         var objStream = objFSO.CreateTextFile(strFile, true);//生成txt文件的数据流
		 objStream.Write("性 别："+document.getElementById("radio").value);
		 objStream.WriteBlankLines(1);
		 objStream.Write("用户名："+document.getElementById("nicheng").value);
		 objStream.WriteBlankLines(1);
         objStream.Write("注册方式："+document.getElementById("one").value);//获取用户注册方式，并写入文件
         objStream.WriteBlankLines(1) ;//换行
         objStream.Write("注册邮箱/手机："+document.getElementById("youxiang").value);//获取用户邮箱，并写入文件
		 objStream.WriteBlankLines(1) ;//换行
		 objStream.Write("设置密码："+document.getElementById("passwd").value);//获取用户密码，并写入文件
		 objStream.WriteBlankLines(1) ;//换行
		 objStream.Write("确认密码："+document.getElementById("r_passwd").value);//获取用户密码，并写入文件
         //获取用户昵称，并写入文件
         objStream.Close(); // 关闭文件
         alert("ok");
     }
	 
     else 
	 {
         alert("文本文件: " + strFile + "已经存在<br>");
     };
} 
