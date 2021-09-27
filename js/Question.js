class Question {

  constructor() {
  
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name");
    this.input2 = createInput("").attribute("placeholder", "Option:(one or more ＼(^o^))");
    this.input3 = createInput("").attribute("placeholder", "Custom option");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.option5 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.input3.hide();
    this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.option5.hide();
  }

  static handleMousePressed() {
    this.button.mousePressed(() => {
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.input3.hide();
      this.option.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.option5.hide();
    });
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What more can I do in my projects? (besides being on time 😅) " );
    this.question.position(150, 80);
    this.option1.html("1: Add more creative stuff like art and animations!" );
    this.option1.position(150, 100);
    this.option2.html("2: Add sound effects more often!" );
    this.option2.position(150, 120);
    this.option3.html("3: Use html and css for designing purposes!" );
    this.option3.position(150, 140);
    this.option4.html("4: Have more math involved in your code!" );
    this.option4.position(150, 160);
    this.option5.html("5:" );
    this.option5.position(150, 180);


    this.input1.position(150, 250);
    this.input2.position(350, 250);
    this.button.position(290, 300);
    this.input3.position(170, 200);



   this.button.mousePressed(()=>{
   
      this.message.html("Thank You, Your Answer Has Been Submitted!");
      this.message.position(350, 350);
      this.input1.position(180000000, 250);
    this.input2.position(1800000000, 250);
    this.button.position(18900000000, 300);
    this.input3.position(1870000000, 200);
    this.option5.position(1800000000000000000000000000000000000000000000000000000000000, 180);
    girl = createSprite(600, 250);
    girl.addImage("grlimg", gimg)
    girl.scale = 0.3;
    });
 
  }
}
