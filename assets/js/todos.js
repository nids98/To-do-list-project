//check off the specific todo by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adding a listener to text input
$("input[type='text']").keypress(function(){
	if(event.which===13){
		//grabbing text from the input
		var todoText=$(this).val();
		$(this).val("");
		//create a new li and append it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});
//making the plus sign work for taggling input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(20);
});