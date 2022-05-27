class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    this.input.hide();
    this.button.hide();
    this.title.hide();

    background("#FFFF00");

    textSize(30);
    text("Game Over", 120, 100);
    Player.getPlayerInfo();

    if(allContestants!==undefined){
      fill("Blue");
      textsize(20);
      TextTrack ("Jogador que respondeu a resposta correta é destacado na cor verde",130,230);
    }

    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
        fill("Green")
      else
        fill("red");
    }

   



    
    
  }

}
