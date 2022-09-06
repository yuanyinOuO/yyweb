/*
var music123 = {
    "【東方Vocal】Riverside｜酔花" : "https://drive.google.com/uc?export=download&id=1EXMxMyXlcDiM0kWVB2Jz82pe9KLSAxx7",
    "【凋叶棕】竹ノ花 " : "https://drive.google.com/uc?export=download&id=1nnKDEBzdGHEPbplooAtRQLA_rkhMlW0n",
    "【東方ボーカル】 「零れ桜」 【幽閉サテライト】.mp3" : "https://drive.google.com/uc?export=download&id=1i1Q6NydQmZebmX2-EEVtcH2jTuV0Bh31",
    "【東方Vocal／Traditional Rock】 「心綺楼」 「凋叶棕」 【ENG Subs】" : "https://drive.google.com/uc?export=download&id=1eEgCvnQdVKqmNCWXyGnq_KSMOILkFN0T",
    "【東方Vocal PV】 花月夜 .mp3" : "https://drive.google.com/uc?export=download&id=1auDWY7x-Lza0hBbiLLIKNxY605kfX-Rk"
}
*/
var music123 = ["https://drive.google.com/uc?export=download&id=1nnKDEBzdGHEPbplooAtRQLA_rkhMlW0n",
                "https://drive.google.com/uc?export=download&id=1auDWY7x-Lza0hBbiLLIKNxY605kfX-Rk",
                "https://drive.google.com/uc?export=download&id=1EXMxMyXlcDiM0kWVB2Jz82pe9KLSAxx7",
                "https://drive.google.com/uc?export=download&id=1i1Q6NydQmZebmX2-EEVtcH2jTuV0Bh31",
                "https://drive.google.com/uc?export=download&id=1eEgCvnQdVKqmNCWXyGnq_KSMOILkFN0T"];

        
var audio = document.getElementById("audio"),
    play = document.getElementById("play"),
    pause = document.getElementById("pause"),
    previous = document.getElementById("previous"),
    next = document.getElementById("next")


play.onclick = function(){
    if(audio.paused){
        audio.play();
        play.className = 'bx bx-pause';
    }
    else if(audio.played){
        audio.pause();
        play.className = 'bx bx-play';
    }
}
var num = 0;
next.onclick = function(){
    if(num<4){
        audio.src = music123[num+1];
        audio.play();
        play.className = 'bx bx-pause';
        num++;
    }
    else{
        num = 0;
    }
}
previous.onclick = function(){
    if(num>0){
        audio.src = music123[num-1]
        audio.play();
        play.className = 'bx bx-pause';
        num--;
    }
    else{
        num = 4;
    }
}