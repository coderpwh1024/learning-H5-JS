var EvenUtil ={
   addHandler:function(element,type,handler){
     if(element.addEventListener){
		 element.addEventListener(type,handler,false);
	 }

   }
}