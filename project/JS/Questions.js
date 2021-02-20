var questionDiv = document.getElementById("Question");  //our questions div
var buNext =document.getElementById("next");            //next button
var buPrev =document.getElementById("prev");            //prev button
var Result=[];                                          //result Array                            
var generalIndex=0;                                     //our general iterator
var RadioGroubForm = document.answers.answer;           //selects radio groub of answers by name
var markedQuestions=[];                                 //our Array of marked questions to be shown in div
var markedDiv =document.getElementById("MarkDiv");      //our marked questions Div

function Question(q,answers,solutionNo){
    this.q=q; 
    this.answers=answers;
    this.solutionNo=solutionNo;
}

Question.prototype.checkSolution=function(sNum){
    if(sNum==this.solutionNo)
    {
        return 1;
    }
    else{
        return 0;
    }
}


function MarkedQ(question,index){//class of marked question ,and its order in the main  quesions
    this.question =question;
    this.index =index;
}

//our ten questions
var q1 = new Question("what ___ your name?",["is","am","are","have"],0);
var q2 = new Question("how ___ you ?",["is","am","are","have"],2);
var q3 = new Question("____ you play football?",["can","could","shall","Would"],0);
var q4 = new Question("can you ____ under Pressure?",["works","work","working","worked"],1);
var q5 = new Question("how old ___ you ??",["is","am","are","have"],2);
var q6 = new Question("_____ are you from?",["what","who","when","where"],3);
var q7 = new Question("___ you love chicken?",["have","does","did","do"],3);
var q8 = new Question("who took the best player prizes in 2020?",["Lewandewiski","Messi","Ronaldo","MoSalah"],0);
var q9 = new Question("you ___ go to the doctor",["shall","should","must","mustn't"],1);
var q10= new Question("are you _____ to travel",["is going","goes","go to","going"],3);

function shuffle(o) {                  // to randomize the questions order to every new user
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


var arr=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
var qArray =shuffle(arr);                //random order array of question


/*labels to set answers*/
var l1 = document.getElementById("l1");
var l2 = document.getElementById("l2");
var l3 = document.getElementById("l3");
var l4 = document.getElementById("l4");

//show first question and its answer 
questionDiv.innerText="Q"+(generalIndex+1+" ")+qArray[0].q;
l1.innerText =qArray[0].answers[0];
l2.innerText =qArray[0].answers[1];
l3.innerText =qArray[0].answers[2];
l4.innerText =qArray[0].answers[3];


function goNext(){                            //when next button is pressed
    for (var i = 0; i < RadioGroubForm.length; i++) {
        RadioGroubForm[i].checked =false;              //make the answers unchecked
    }

    generalIndex ++;
    if(generalIndex<10){
        //questionDiv.innerText="";
        questionDiv.innerText="Q"+(generalIndex+1+" ")+qArray[generalIndex].q;

        l1.innerText =qArray[generalIndex].answers[0];
        l2.innerText =qArray[generalIndex].answers[1];
        l3.innerText =qArray[generalIndex].answers[2];
        l4.innerText =qArray[generalIndex].answers[3];
    }
    else{
        buNext.hidden=true;
    }

    if(generalIndex==0){
        buPrev.style.display="none";
    }
    else{
        buPrev.style.display="inline";
    }

    if(generalIndex==9){
        buNext.style.display="none";
    }

}

function goPrev(){
    for (var i = 0; i < RadioGroubForm.length; i++) {
        RadioGroubForm[i].checked =false;
    }

    generalIndex--;
    if(generalIndex>=0){
        if(buNext.style.display=="none"){
            buNext.style.display="inline";
        }
        questionDiv.innerText="Q"+(generalIndex+1+" ")+qArray[generalIndex].q;
        l1.innerText =qArray[generalIndex].answers[0];
        l2.innerText =qArray[generalIndex].answers[1];
        l3.innerText =qArray[generalIndex].answers[2];
        l4.innerText =qArray[generalIndex].answers[3];
    }
    if(generalIndex==0){
        buPrev.style.display="none";
    }

    if(generalIndex==9){
        buNext.style.display="inline";
    }


}

for (var i = 0; i < RadioGroubForm.length; i++) {
    RadioGroubForm[i].addEventListener('change', function() {
        var selectedIndex;  
        if(this!=null){
            selectedIndex = this.value;
        }
        Result[generalIndex]=qArray[generalIndex].checkSolution(selectedIndex);
        console.log(Result);
    });
}


function submit(){
    var sum=0;
    for(var i=0;i<Result.length;i++){
        sum +=parseInt(Result[i]);
    }
    setCookies("result",sum,300);
    location.replace("result.html")
}


function mark(){
    var flag=1;
    var markedq=new MarkedQ(qArray[generalIndex],generalIndex);

    //the first marked question
    if(markedQuestions.length==0){
        // markedQuestions.push(new MarkedQ(qArray[generalIndex],generalIndex));
        markedQuestions.push( markedq);
    }
    for(var i=0;i<markedQuestions.length;i++){
        if(generalIndex==markedQuestions[i].index)
        flag=0;
    }
    if(flag==1){
        // markedQuestions.push(new MarkedQ(qArray[generalIndex],generalIndex));
        markedQuestions.push( markedq);
    }
    
    if(markedQuestions!=null){
        markedDiv.innerHTML="";
        for(var i=0;i<markedQuestions.length;i++){
            var button = document.createElement("button");
            button.id="mark"+markedQuestions[i].index;
            button.className="MQ";
            button.textContent = "Mark Question"+" "+(parseInt(markedQuestions[i].index)+1);



            button.addEventListener("click",function(){        //when the marked question button in marked panel is pressed
                var x =this.id.split("mark")[1];
                questionDiv.innerText="Q"+(parseInt(x)+1)+" "+qArray[x].q;
                l1.innerText = qArray[x].answers[0];
                l2.innerText = qArray[x].answers[1];
                l3.innerText = qArray[x].answers[2];
                l4.innerText = qArray[x].answers[3];
                generalIndex =x;
                markedQuestions.splice(markedQuestions.indexOf(markedq),1);
                this.remove();
            }
            );
            markedDiv.appendChild(button);
        }
    }
}

setTimeout(function(){ 
    submit();
}, 1000*60);








//console.log(qArray);


/*
make mark up list when he add markup add to array that will be show in the right list
*/


// shuffle functions ways
/*
var numbers = [1, 2, 3, 4];
And then shuffle it:

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var random = shuffle(numbers);
*/

/*
for (var a = [0, 1, 2, 3, 4], i = a.length; i--; ) {
    var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    console.log(random);
}
*/