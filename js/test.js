// alert(1111); コメントアウト

console.log("じゃんけんアプリ");
var vid = $("#sazaevideo")
const url = "https://www.youtube.com/embed/mo_G0GhsniU" 

$(document).ready(function(){
    vid.attr("src", url)
})

function play(player) {
    //var player = ['グー','チョキ','パー'];
    var random = Math.floor(Math.random()*3);

    var playerText=getText(player);
    var computerText=getText(random);
    var computerImageFile=getImage(random);
    $("#computerImage").attr("src", computerImageFile)
    $("#computerImage").show()

    if (random === player) {
        console.log("あいこ");
        $("#result").text("あいこ");
    } 
    else if (random === 0 && player === 1) {
        console.log("あなたの【勝ち】");
        $("#result").text("あなたの【勝ち】");
    } 
    else if (random === 1 && player === 2) {
        console.log("あなたの【勝ち】");
        $("#result").text("あなたの【勝ち】");
    }
    else if (random === 2 && player === 0) {
        console.log("あなたの【勝ち】");
        $("#result").text("あなたの【勝ち】");
    }
    else{
        $("#result").text("あなたの【負け】");
    }

    $("#player").text("あなた： " + playerText);
    $("#computer").text("サザエさん： " + computerText);
}

function R_Click(player) {
    var newUrl = url+"?autoplay=1&end=4"
    vid.attr("src", newUrl)
    setTimeout(function(){
        play(player)
    }, 5000)
}
function getText(number) {
    if(number===0){
        return "グー";
    }
    if(number===1){
        return "パー";
    }
    if(number===2){
        return "チョキ";
    }
}

function getImage(number) {
    if(number===0){
        return "img/rock.jpeg";
    }
    if(number===1){
        return "img/paper.jpeg";
    }
    if(number===2){
        return "img/scissors.jpeg";
    }
}
    
function video_play() {
   video.play();
}
























    //<! MEMO   >



// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5");


// var name="粟津"
// console.log(name);

// var hako=3;
// if(hako===1){
    // console.log("1が入っています");
// }else if(hako===2){
    // console.log("2が入っています");
// }else if (hako===3){
    // console.log("3が入っています");}


    // var point = 90;
// if (point >= 80) {
    // console.log("素晴らしい！おめでとう！");
// }else{console.log("もっと頑張りましょう！");}

// var random = Math.floor(Math.random()*3);
// console.log(random,"ランダムな数字");

// if (random === 0) {
    // console.log("グー");
//   } else if (random === 1) {
    // console.log("チョキ");
//   } else if (random === 2) {
    // console.log("パー");
//   } 


//   $(".b").on("click", function () {
    //
    // $(".a").css("color", "red");
    // $(".a").fadeOut(2000);
    // $(".a").fadeIn(2000);
    //