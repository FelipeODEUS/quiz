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
    question.hide(); //Tinha que mandar esconder o question, e não o input/button/title

    background("#FFFF00");

    textSize(30);
    text("Game Over", 120, 50); //Ajustei a posição Y do texto
    Contestant.getPlayerInfo(); //Ao invés de Player no começo, tinha que ser Contestant

    if(allContestants!==undefined){
      var display_Answers = 230; //Criei uma variável para mostrar as respostas, pois daí ele ajusta de acordo com o jogador
      fill("Blue");
      textSize(20); //Aqui estava textsize com o S do size minúsculo
      text("Jogador que respondeu a resposta correta é destacado na cor verde",130,230);
    

    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
        fill("Green")
      else
        fill("red");
    
      //Para fechar, só tinha que colocar um texto para mostrar o nome do jogador e a resposta dele
    display_Answers+=30; //Aqui aumenta o valor da variável para posicionar o nome dos jogadores
    text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)

    //Além disso, fiz os ajustes das chaves do loop if que começa na linha 40 e do loop for que começa
    //na linha 47 (os dois casos, as chaves deveriam ficar aqui embaixo, separadas de tudo)

}
} 
}
}
