// alert(1111); コメントアウト

console.log("じゃんけんアプリ");

function R_Click(player) {
    //var player = ['グー','チョキ','パー'];
    var random = Math.floor(Math.random()*3);

    var playerText=getText(player);
    var computerText=getText(random);

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