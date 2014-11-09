//生成数字的动画效果
function showNumAnimate(i, j, randNum) {
    var numCell=$("#number-cell-"+i+"-"+j);
	numCell.css("background-color",getNumBackgroundColor( randNum ));
	numCell.css("color",getNumColor( randNum ));
	numCell.text(randNum);
	
	numCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i),
		left:getPosLeft(j)
	  },
	  600
	);
}

//显示分数的动画效果
function showScoreAnimate(score){
    
	var oscoreDom=$("#score");
	var ascoreDom=$("#oa");
	oscoreNum=parseInt(oscoreDom.text())+score;

    ascoreDom.text("+"+score);
	ascoreDom.fadeIn(300).fadeOut(300);
	oscoreDom.text(oscoreNum);
}

// 游戏结束时的动画效果
function showGameoverAnimate(){
	var ascoreDom=$("#oa");
	ascoreDom.text("Game Over!");
	ascoreDom.fadeIn(1000).fadeOut(3000);
}