$("ul").on("click","li",function(){
	$(this).toggleClass("toggle")
})
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// event.stopPropagation();
});
$("input").keypress(function(event){
	if(event.which===13){
		var Todotext=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+Todotext +"</li>")
		
	}
}); 
$(".fa-plus").click(function(){
	$("input").fadeToggle();
})