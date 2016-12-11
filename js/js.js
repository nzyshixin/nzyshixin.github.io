$(function(){
//	var bs=0;
//	setInterval(function(){
//		bs+=1;
//		if(bs==1){
//			$('#tx').css({boxShadow:'none',transition: '1s'});
//		}else if(bs==2){
//			$('#tx').css({boxShadow:' 0 0 30px #fff',transition: '1s'});
//			bs=0;
//		}
//	},1000);
	$('#tx').mouseover(function(){
//		$('#tx').css({transform:'rotateY(360deg)',transition:'1s'})
		$('#tx').css({boxShadow:' 0 0 30px #fff',transition:'1s'})
	})
	$('#tx').mouseout(function(){
//		$('#tx').css({transform:'rotateY(0deg)',transition:'1s'})
		$('#tx').css({boxShadow:'none',transition:'1s'})
	})
})
