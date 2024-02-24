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
        text: "Loving",
        image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWVzdGhldGljJTIwZ2FsYXh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        alt: "loving",
        credit: "Jeremy Thomas"
      },
      {
        text: "Beauty / Charm",
        image: "https://images.unsplash.com/photo-1612694537513-b772cb21f725?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFlc3RoZXRpYyUyMGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "beauty / bharm",
        credit: "Tengyart"
      },
      {
        text: "Ambitious",
        image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwZ2FsYXh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        alt: "ambitious",
        credit: "Jeremy Thomas"
      },
      {
        text: "Intelligence / Creativity",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFlc3RoZXRpYyUyMGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "intelligence / creativity",
        credit: "Vincentiu Solomon"
      }
    ]
  },
  /* */
  {
    id: 3,
    text: "Choose a constellation:",
    answers: [
      {
        text: "1",
        image: "https://starregistration.net/media/wysiwyg/Constellations/Cancer.png",
        alt: "the constellation of Cancer",
        credit: "Star Registration"
      },
      {
        text: "2",
        image: "https://starregistration.net/media/wysiwyg/Constellations/Leo.png",
        alt: "the constellation of Leo",
        credit: "Star Registration"
      },
      {
        text: "3",
        image: "https://theplanets.org/123/2021/01/Gemini-2.png",
        alt: "the constellation of Gemini",
        credit: "THEPlanets.Org"
      },
      {
        text: "4",
        image: "https://starregistration.net/media/wysiwyg/Constellations/Pisces.png",
        alt: "the constellation of Pisces",
        credit: "Star Registration"
      }
    ]
  },
  /* */
  {
    id: 4,
    text: "Choose a color:",
    answers: [
      {
        text: "Blue",
        image: "",
        alt: "blue and gray clouds",
        credit: "Egor Myznik"
      },
      {
        text: "Yellow/Orange",
        image: "",
        alt: "a yellow and orange gradient",
        credit: "Dave"
      },
      {
        text: "Brown",
        image: "",
        alt: "a brown and orange marble swirl background",
        credit: "Pawel Czerwinski"
      },
      {
        text: "Green",
        image: "",
        alt: "a blurry glimmering background of rain drops",
        credit: "Mike Castro Demaria"
      }
    ]
  }
]

const answers = [
    {
        combination: ["1", "Butterfly", "Loving", "1", "Blue"],
        text: "Moon",
        subtext: "You got the Moon! You are dreamy, creative, soft-hearted, and kind. You try to go with the flow and be spontaneous. You feel your feelings and are in tune with your emotions.",
        image: "https://images.unsplash.com/photo-1459909633680-206dc5c67abb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        alt: "the moon"
    }
]

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
    let result
    answers.forEach(answer => {
        if (chosenAnswers.toString() == answer.combination.toString()) {
            result = answer;
            return
            } 
        else if (!result) {
            result = answers[51];
        }
    })

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