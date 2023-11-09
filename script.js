function checkAnswers(){
    let score=0
    let result=0
    let quiz=document.forms.quiz.elements; //go to the quiz form. take EVERYTHING from that form. this is 1 variable now :]
    let answer1=quiz.colour.value;

    if(answer1=="pink"){
        score+=1;
    }
    else if(answer1=="yellow"){
        score+=2
    }
    else if(answer1=="green"){
        score+=3
    }
    else{
        score+=4
    }

    let answer2=quiz.animal.value;
    if(answer2=="red-panda"){
        score+=1;
    }
    else if(answer2=="giraffe"){
        score+=2
    }
    else if(answer2=="jaguar"){
        score+=3
    }
    else{
        score+=4
    }

    let answer3=quiz.music.value;
    if(answer3=="jungle"){
        score+=1;
    }
    else if(answer3=="nightcore"){
        score+=2
    }
    else if(answer3=="weird-core"){
        score+=3
    }
    else{
        score+=4
    }

    let answer4=quiz.hobby.value;
    if(answer4=="eat"){
        score+=1;
    }
    else if(answer4=="sleep"){
        score+=2
    }
    else if(answer4=="game"){
        score+=3
    }
    else{
        score+=4
    }

    if(score<6){
        alert("You are BANBAN from GARTEN OF BANBAN!");
    }
    else if(score<10){
        alert("You are BANBALINA from GARTEN OF BANBAN!!!!");
    }
    else if(score<14){
        alert("You are NABBNAB from GARTEN OF BANBAN!!");
    }
    else{
        alert("You are BITTERGIGGLE from GARTEN OF BANBAN!!!!");
    }
}