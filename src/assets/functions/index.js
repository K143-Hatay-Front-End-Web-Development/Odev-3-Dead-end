import { STRINGS } from '../strings';

const { ADDITION, SUBSTRACTION, MULTIPLICATION, DIVISION } = STRINGS;

const randomIntegerBetween = (min, max) => Math.floor(min + (max - min + 1) * Math.random());

function randomNumber(type) {
   const lowerBound = [MULTIPLICATION, DIVISION].includes(type) ? 2 : 10;
   const upperBound = [MULTIPLICATION, DIVISION].includes(type) ? 9 : type === ADDITION ? 49 : 99;

   let first = randomIntegerBetween(lowerBound, upperBound);
   let second = randomIntegerBetween(lowerBound, upperBound);

   if ([SUBSTRACTION, DIVISION, MULTIPLICATION].includes(type)) {
      const max = Math.max(first, second);
      const min = Math.min(first, second);
      first = max; second = min;
   }

   return { first, second };
};

export function createQuestion(type) {
   let answer; let decoy1; let decoy2; let points; let operation;

   let { first, second } = randomNumber(type);

   switch (type) {
      case ADDITION:
         answer = first + second;
         decoy1 = answer >= 90 ? answer - 10 : answer + 10;
         decoy2 = answer + 1;
         points = 1;
         operation = '+';
         break;
      case SUBSTRACTION:
         answer = first - second;
         decoy1 = answer + 10;
         decoy2 = answer + 1;
         points = 2;
         operation = '-';
         break;
      case MULTIPLICATION:
         answer = first * second;
         decoy1 = (first - 1) * second;
         decoy2 = first * (second + 1);
         points = 3;
         operation = 'x';
         break;
      case DIVISION:
         answer = first;
         first = first * second;
         decoy1 = answer - 1;
         decoy2 = answer + 1;
         points = 4;
         operation = '/';
         break;
      default:
         break;
   }

   return { first, operation, second, points, choices: [answer, decoy1, decoy2] };
};

// const checkAnswer = (q, a) => q.choices[0] === a;

// const createQuestions = type => new Array(10).fill(null).map(() => createQuestion(type));