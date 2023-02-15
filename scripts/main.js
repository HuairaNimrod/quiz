const url = "https://huairanimrod.github.io/TA/questions.json";

var answer = [];
let userAns = [];
async function getQuestionsData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.quiz);
    displayPresentations(data.quiz);
  }

  getQuestionsData(url);

  
  const displayPresentations = (questions) =>{

    const exam = document.querySelector('div.quiz');

    questions.forEach(premise => {
        let question= document.createElement('div');
        let h4 = document.createElement('h4');
        
        
  

        h4.textContent = premise.question;
        answer.push(premise.answer);
        userAns.push("a");
        question.appendChild(h4);
        var i =0;
        // option.textContent = premise.options;
        (premise.options).forEach(element => {
            
            let option= document.createElement('div');
            let input = document.createElement('input');
            let label = document.createElement('label');
            
            input.type = "radio";
            input.id = element;
            input.value = i;
            input.name = premise.answer;
            input.addEventListener("click", function(){
                console.log(input.value);
                console.log(userAns);
                let index = questions.indexOf(premise); //captures the index of the question
                userAns[index]=input.value;
            });

            label.for = element;
            label.innerText = element;

            option.appendChild(input);
            option.appendChild(label);
            question.appendChild(option);
           
            i++;

            
       });

       
        // question.appendChild(option);
        exam.appendChild(question);

       
    });
       

};

function grade(){
    
    const found = userAns.find(element => element=="a"); //find helps to find  an element in an array
    // console.log("------>"+found);
    if(found == "a"){
        if(confirm("You have remaining questions without answer, are you sure you want to submit it?")){
            nextWindow();
        };

    }
    else{
        nextWindow();
    }
    
}

function nextWindow(){

    
    document.querySelector('div.quiz').style.display = "none";
    document.querySelector('button').style.display = "none";
    document.querySelector('main').style.display = "none";

   
    console.log(answer);
    console.log(userAns);

    var score = answer.length;
    var total = 0;
    var num = 0;

    for (question of answer) { 
        console.log(userAns[num]);
        if(question == userAns[num] ){
            total++;
        }
        num++;
        console.log(num);
      }
        
        // console.log(num);
   

    score = total/score;
    score = score.toFixed(2) * 100;
    // console.log(score);
   
    const span = document.querySelector('span');
    span.innerText = `Your score is ${score}%`;
    score=0;
    total = 0;
    num = 0;

}

