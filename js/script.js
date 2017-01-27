window.onload = function() {
var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];
audio.play();
//music stop action
audio.addEventListener("ended", function(event) {
    music.setAttribute("class", "");
}, false)

//music.onclick = function() {
//    if (audio.paused) {
//        audio.play();
//        this.setAttribute("class", "play");
//    } else {
//        audio.pause();
//        this.setAttribute("class", "");
//    };
//};

music.addEventListener("touchstart", function(event) {
        if (audio.paused) {
            audio.play();
            this.setAttribute("class", "play");
        } else {
            audio.pause();
            this.setAttribute("class", "");
        };
    },false);

page1.addEventListener("touchstart",function(event){
	page1.style.display = "none";
	page2.style.display = "block";
	page3.style.display = "block";
	page3.style.top="100%";

	setTimeout(function(){
		page2.setAttribute("class","page fadeOut");
		page3.setAttribute("class","page fadeIn");
	},5500);
},false);

var cara = parseInt(Math.random() * 10, 10);
    var wish = document.getElementById('wish')

    switch (cara) {
        case 0:
            wish.innerHTML = '一帆风顺吉星照，万事如意步步高。四季平安春常在，财源滚滚福年来。金牛扬鞭辞旧岁，五虎长啸迎春来。旧岁再添几个喜，鸡年更上一层楼。除夕祝你万事如意!';
            break;
        case 1:
            wish.innerHTML = '吉祥如意庆新喜，百福齐聚贺新春;在一起团圆美满，聚一家和睦多福;恭喜发财财源广，喜迎好运运道旺。在春节即将来临之际，恭祝：新春愉快!';
            break;
        case 2:
            wish.innerHTML = '春风吹进年的门槛儿，温暖涌进你的心坎儿;春联贴在年的门槛儿，吉祥驻在你的心坎儿;春节的短信挤满年的门槛儿，春天的祝福填满你的心坎儿!';
            break;
        case 3:
            wish.innerHTML = '风柔雨润好月圆,良辰美景年年盼.幸福生活天天随,冬去春来似水如烟.流年不复返,人生须尽欢.说一声珍重道一声平安,祝您新年快乐!';
            break;
        case 4:
            wish.innerHTML = '如期而至的不仅是春节，还有幸福和快乐；日渐增加的不只是岁月；还有友情和健康，在新年来临之际，祝福您及您家人：幸福安康！新年大吉！';
            break;
        case 5:
            wish.innerHTML = '平安皮儿包着如意馅，用真情煮熟，吃一口快乐、两口幸福、三口顺利，然后喝全家健康汤，回味是温馨，余香是祝福。鸡年万事顺意，平安幸福!';
            break;
        case 6:
            wish.innerHTML = '一点喜，两点乐，三点美，四点欢，五点福，六点禄，七点吉，八点财，九点寿，十点富，十一点运，十二点子时钟声响，新年好运!鸡年万事顺意，平安幸福!';
            break;
        case 7:
            wish.innerHTML = '团团圆圆新年到，欢欢喜喜迎新年，平平安安身体健，开开心心好运来，顺顺利利万事顺，幸幸福福吉祥到，快快乐乐过大年，舒舒服服过春节，祝鸡年万事顺意，平安幸福!';
            break;
        case 8:
            wish.innerHTML = '新春佳节到，拜年要趁早，好运跟你跑，吉祥围你绕，财源进腰包，心想事就成，春节齐欢笑!我的祝福如此早，请你一定要收到。';
            break;
        case 9:
            wish.innerHTML = '新春到来喜事多，合家团圆幸福多心情愉快朋友多，身体健康快乐多;一切顺利福气多新年吉祥生意多;祝您好事多!多!多!新年快乐!';
            break;
    }
};//script finish
