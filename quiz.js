const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "Pick an aesthetic landscape:",
    answers: [
      {
        text: "1",
        image: "https://images.unsplash.com/photo-1496459169807-866e74594fa8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww",
        alt: "a landscape with mountains",
        credit: "Jingwei Ke"
      },
      {
        text: "2",
        image: "https://images.unsplash.com/photo-1430414734948-17ebbe665afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNldCUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "a landscape where the sun is setting behind rocks in the ocean",
        credit: "Heejing KIM"
      },
      {
        text: "3",
        image: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "a dark landscape with mountains",
        credit: "Daniel Leone"
      },
      {
        text: "4",
        image: "https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9yZXN0JTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        alt: "a landscape in the early morning amongst lots of vegetation and greenery",
        credit: "Eutah Mizushima"
      }
    ]
  },
/* */
  {
    id: 1,
    text: "Pick an animal:",
    answers: [
      {
        text: "Butterfly",
        image: "https://images.unsplash.com/photo-1484704193309-27eaa53936a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1dHRlcmZseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "a orange monarch butterfly",
        credit: "Gary Bendig"
      },
      {
        text: "Dog",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvcmdpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        alt: "a golden retriever and terrier",
        credit: "Alvan Nee"
      },
      {
        text: "Dolphin",
        image: "https://images.unsplash.com/photo-1495368008737-9d436e094dd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRvbHBoaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        alt: "a dolphin peeking out of the ocean",
        credit: "Damian Patkowski"
      },
      {
        text: "Turtle",
        image: "https://images.unsplash.com/photo-1496196614460-48988a57fccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHVydGxlfGVufDB8fDB8fHww",
        alt: "a turtle",
        credit: "Randall Ruiz"
      }
    ]
  },
  /* */
  {
    id: 2,
    text: "Choose a personality trait:",
    answers: [
      {
        text: "Ambitious",
        image: "https://images.unsplash.com/photo-1640077362729-37fb5471add0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYml0aW9ufGVufDB8fDB8fHww",
        alt: "ambitious",
        credit: "Paolo Margari"
      },
      {
        text: "Beauty / Charm",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "beauty / charm",
        credit: "Element5 Digital"
      },
      {
        text: "Calm",
        image: "https://images.unsplash.com/photo-1499810631641-541e76d678a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsbXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "calm",
        credit: "Ravi Pinisetti"
      },
      {
        text: "Intelligence / Creativity",
        image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "intelligence / creativity",
        credit: "Christopher Burns"
      }
    ]
  },
  /* */
  {
    id: 3,
    text: "Choose a dessert:",
    answers: [
      {
        text: "Flan",
        image: "https://images.unsplash.com/photo-1610360147031-26a1d395726e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZsYW58ZW58MHx8MHx8fDA%3D",
        alt: "flan",
        credit: "Atikah Akhtar"
      },
      {
        text: "Sugar Cookie",
        image: "https://images.unsplash.com/photo-1633362218447-b80f27dc2ada?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VnYXIlMjBjb29raWV8ZW58MHx8MHx8fDA%3D",
        alt: "sugar cookie",
        credit: "Project 290"
      },
      {
        text: "Brownie",
        image: "https://images.unsplash.com/photo-1588539543889-20cc7ce4df55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "brownie",
        credit: "iMattSmart"
      },
      {
        text: "Cake",
        image: "https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNha2V8ZW58MHx8MHx8fDA%3D",
        alt: "cake",
        credit: "Caitlyn de Wild"
      }
    ]
  },
  /* */
  {
    id: 4,
    text: "Choose a supernatural creature:",
    answers: [
      {
        text: "Fairy",
        image: "https://t4.ftcdn.net/jpg/06/09/11/27/360_F_609112767_zz1xKYJoobHXUozInc3VFmDZS6Nl1XQO.jpg",
        alt: "fairy",
        credit: "Adobe Stock"
      },
      {
        text: "Phoenix",
        image: "https://images.unsplash.com/photo-1625082688687-e4b9d610652f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvZW5peCUyMGJpcmR8ZW58MHx8MHx8fDA%3D",
        alt: "phoenix",
        credit: "Marek Piwnicki"
      },
      {
        text: "Mermaid",
        image: "https://images.unsplash.com/photo-1471927866530-2b87d315d8b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVybWFpZHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "mermaid",
        credit: "Jeremy Bishop"
      },
      {
        text: "Dragon",
        image: "https://images.unsplash.com/photo-1512522156303-e02eda5e76e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyYWdvbnxlbnwwfHwwfHx8MA%3D%3D",
        alt: "dragon",
        credit: "Mendar Bouchali"
      }
    ]
  }
]

const possibleAnswers = [
    {
        text: "Purple",
        subtext: "Your color aesthetic is purple! Check out the Photo Gallery to view photos and get inspiration related to your color aesthetic!",
        image: "https://i.pinimg.com/564x/c2/54/73/c254736fe556346938dcaf28666aa44f.jpg",
        alt: "purple"
    },
    {
        text: "Pink",
        subtext: "Your color aesthetic is pink! Check out the Photo Gallery to view photos and get inspiration related to your color aesthetic!",
        image: "https://i.pinimg.com/564x/e1/d2/00/e1d200b65875b572a39d95907e9537f2.jpg",
        alt: "pink"
    },
    {
        text: "Blue",
        subtext: "Your color aesthetic is blue! Check out the Photo Gallery to view photos and get inspiration related to your color aesthetic!",
        image: "https://i.pinimg.com/564x/da/73/aa/da73aa32eda0e65b72645bb76f4ab4fd.jpg",
        alt: "blue"
    },
    {
        text: "Green",
        subtext: "Your color aesthetic is green! Check out the Photo Gallery to view photos and get inspiration related to your color aesthetic!",
        image: "https://i.pinimg.com/564x/4c/95/c1/4c95c1f58511d1576427145c09a8e5b2.jpg",
        alt: "green"
    }
]

const purpleOptions = ["1", "Butterfly", "Ambitious", "Flan", "Fairy"];
const pinkOptions = ["2", "Dog", "Beauty / Charm", "Sugar Cookie", "Phoenix"];
const blueOptions = ["3", "Dolphin", "Calm", "Brownie", "Mermaid"];
const greenOption = ["4", "Turtle", "Intelligence / Creativity", "Cake", "Dragon"];


const purple = 0;
const pink = 0;
const blue = 0;
const green = 0;

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div');
        titleBlock.id = question.id;
        titleBlock.classList.add('title-block');
      
        const titleHeading = document.createElement('h2');
        titleHeading.textContent = question.text;
      
        titleBlock.append(titleHeading);
        questionDisplay.append(titleBlock);

        const answersBlock = document.createElement('div');
        answersBlock.id = question.id + "-questions";
        answersBlock.classList.add('answer-options');

        unansweredQuestions.push(question.id);

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div');
            answerBlock.classList.add('answer-block');
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text));
          
            const answerImage = document.createElement('img');
            answerImage.setAttribute('src', answer.image);
            answerImage.setAttribute('alt', answer.alt);

            const answerTitle = document.createElement('h3');
            answerTitle.textContent = answer.text;

            const answerInfo = document.createElement('p');
          
            const imageLink = document.createElement('a');
            imageLink.setAttribute('href', answer.image);
            imageLink.textContent = answer.credit;

            answerInfo.append(imageLink);

            answerBlock.append(answerImage, answerTitle, answerInfo);
            answersBlock.append(answerBlock);
        })

        questionDisplay.append(answersBlock);

    })
}

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId)) {
      chosenAnswers.push(chosenAnswer);
    }
  
    const itemToRemove = unansweredQuestions.indexOf(questionId);
    if (itemToRemove > -1) {
      unansweredQuestions.splice(itemToRemove, 1);
    }
  
    console.log(chosenAnswers);
    console.log(unansweredQuestions);

    disableQuestionBlock(questionId, chosenAnswer);
    const lowestQuestionId = Math.min(...unansweredQuestions);
    location.href = '#' + lowestQuestionId;

    if (!unansweredQuestions.length) {
        location.href = '#answer';
        showAnswer();
    }
}

const showAnswer = () => {
    chosenAnswers.forEach(answer => {
        if (purpleOptions.includes(answer)) {
            purple++;
        } 
        else if (pinkOptions.includes(answer)) {
            pink++;
        }
        else if (blueOptions.includes(answer)) {
            blue++;
        }
        else {
            green++;
        }
    })

    let possibilities = [purple, pink, blue, green];
    let result = possibleAnswers[possibilities.indexOf(Math.max(possibilities))];

    const answerBlock = document.createElement('div');
    answerBlock.classList.add('result-block');
  
    const answerTitle = document.createElement('h3');
    answerTitle.classList.add('result')
    answerTitle.textContent = result.text;

    const answerDesc = document.createElement('h3');
    answerDesc.classList.add('result-desc')
    answerDesc.textContent = result.subtext;
  
    const answerImage = document.createElement('img');
    answerImage.setAttribute('src', result.image);
    answerImage.setAttribute('alt', result.alt);

    answerBlock.append(answerTitle, answerDesc, answerImage);

    answerDisplay.append(answerBlock);

    const allAnswerBlocks = document.querySelectorAll('.answer-block');
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)));

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions");

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%";
        }
    })
}