const arrayQuestions = [];

class Question
{
   //In JS, you must define your properties inside of your constructor and you must do so via the keyword this
    constructor(q,oA,oB,oC,oD,cA)
    {
        this.questions=q;
        this.optionA=oA;
        this.optionB=oB;
        this.optionC=oC;
        this.optionD=oD;
        this.correctAnswer=cA;
    }

}

arrayQuestions.push(new Question("Inside which HTML element do we put the JavaScript?","js","javascript","script","scripting", 3));

arrayQuestions.push(new Question("How many continents are there in the world?","5", "3", "9", "7", 4));

arrayQuestions.push(new Question("Where is the correct place to insert a JavaScript?","body", "both head and body","head","None", 2));

arrayQuestions.push(new Question("What is node.js?", "backend javascript", "front-end language", "a way of running your code","a language like english", 1));

arrayQuestions.push(new Question("What is the largest planet in our solar system?", "Jupiter","Pluto", "Earth","Saturn", 1));

arrayQuestions.push(new Question("What temperature is the same in celsius and fahrenheit?","0","+100","-40","+40", 3));

arrayQuestions.push(new Question("What did Alfred Nobel develop?","Atomic bomb","Dynamite","Nobelium","Gunpowder", 2));

arrayQuestions.push(new Question("How many blue stripes does the USA nation flag have?","0","7","6","13", 1));

arrayQuestions.push(new Question("How many spaces are on a standard Monopoly board?","80", "40","60","20", 2));

arrayQuestions.push(new Question("According to persian folklore, who is the storyteller of 'One Thousand and One Nights?","Hatshepsut", "Homer","Scheherazade","Kanaan", 3));

arrayQuestions.push(new Question("Which country hosted the summer olympics of in 2016?", "Spain","Greece","China","Brazil", 4));

arrayQuestions.push(new Question("What restuarant franchise advises you to 'Eat Fresh'?", "Mcdonald's", "KFC","Taco Bell", "Subway", 4));

arrayQuestions.push(new Question("What is the name for the jewish new year?","Hanukkah","Kwanzaa","Yom Kippur","Rosh Hashanah", 4));

arrayQuestions.push(new Question("What religion is the most practiced in India?","Islam","Sikhism","Hinduism","Shinto", 3));

arrayQuestions.push(new Question("What was the first successful vaccine developed in history?","Scarlet Fever","Smallpox","Cholera","Rabies", 2));

arrayQuestions.push(new Question("What is the largest country, by area, that has only one time zone?","Russia","Australia","Turkey","China", 4));

arrayQuestions.push(new Question("Which of these antagonist characters was created by novelist J.K. Rowling?","Lord Voldemort","Professor Moriarty","Lord Farqaad","Darth Vader", 1));

arrayQuestions.push(new Question("Which truck is produced by the Ford Motor Company?","F-150","RAV4","CR-V","Silverado 1500", 1));

arrayQuestions.push(new Question("What is the color of Donald Duck's bowtie?","Yellow","Green","Blue","Red", 4));

arrayQuestions.push(new Question("Which of these cities is closest to London, UK?","Miami, FL","Boston, MA","New York, NY","Atlanta, GA", 2));

arrayQuestions.push(new Question("Which US president is the most to the left of the Mount Rushmore National Memorial?","George Washington","Abraham Lincoln","Theodore Roosevelt","Thomas Jefferson", 1));

arrayQuestions.push(new Question("Which of these NBA franchises has never signed Lebron James?","Cleveland", "Boston","Miami","Los Angeles", 2));

arrayQuestions.push(new Question("How much does an average human brain weigh?","14 grams","1.4 kilograms","14 kilograms","1.4 pounds", 2));

arrayQuestions.push(new Question("As your brain developed during early pregnancy, how fast did your neurons multiply?","250,000 per minute","250,000 per hour","250,000 per day","250,000 per 48 hours", 1));

arrayQuestions.push(new Question("Which side of your brain has more neurons?","right","left","both the same","they can't be calculated", 2));