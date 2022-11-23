// Website text

document.getElementById("nationality-description").innerText = "My grandparents are first generation immigrants and moved to London in 19XX from Malta where my Dad was born. My mother is daughter to an American and an Englishman who met in the Congo in 1962. I was born and raised in Highbury, London.";
document.getElementById("degree-description").innerText = "I graduated in July 2022 with first class honours from the Unviversity of Manchester. My degree was evenly split between Spanish, which involved the study of hispanic literature, film, history and politics, alongisde the language. And, Linguistics, which I studied from sociological, philosophical and psychological perspecives.";
document.getElementById("job-description").innerText = "I'm currently working at a secondary school in Hackney. My role is divided between the English department and the SEN department. I tutor small groups of GCSE students with a particular focus on their English Language GCSE. I also support students with additional learning needs, such as Autism Spectrum Disorder. The school has many students who speak English as a second language and my role includes providing support to some of the Spanish speaking students.";
document.getElementById("hobby-description").innerText = "I love to move! I have a passion for yoga and hold a RYT 200 teaching qualification. Movement brings me joy. Whether that be through yoga, dancing, walking or going to the gym. "

document.getElementById("language-text").innerText = "I have a passion for languages and had the privilege of immersing myself in the study of languages during my four years at Manchester. I speak Spanish and have attempted French on various occasions. I love to travel and have visited Europe, Latin America and most recently, East Africa. I was lucky enough to live in Seville for 6 months as part of my Spanish studies. When a friend spoke to me about his journey to becoming a web developer, I was intrigued but felt my background had no relation to coding. However, when he started to talk about functions and expressions, I was reminded of the Formal Semantics I studied in the final year of my linguistics degree. We studied boolean logic and used existential (Ǝ) and universal (ᗄ) quantifiers to translate sentences. We then moved on to use the lambda (𝛌) function to develop a set of lexical translation rules for English lexemes. For example,";
document.getElementById("translation-example").innerText = "Harriet gave the parcel to Donald. \n GIVE (h, the-parcel, d) \n 𝛌x [Harriet gave x to Donald] \n 𝛌x [GIVE (h, x, d)] \n \n Let h = Harriet, d = Donald and x = the-parcel \n In this example x was 𝛌-abstracted";
document.getElementById("language-text-continued").innerText = "It won't lie to you, it was challenging. But I threw myself into it and eventually found my feet. I suppose it's given me the confidence to pursue a career in coding."
document.getElementById("learning-text").innerText = "As the above text hopefully demonstrates, I loved being an undergraduate. Learning brings me such joy and if I had unlimited amounts of money I could happily spend the rest of my life moving from degree to degree. I often thought about (and still think about) applying for a masters. However, while I am thrilled to have the skills to analyse and critique the use of the Supernatural in Latin American fiction, or translate English lexemes (among other, obscure skills), I am hesitant to pursue more education without a definitive end goal. That's where Founders and Coders come in! Since joining the FAC community I have rediscovered a community where peer learning and support is central. I am delighted with the prospect of a career that involves continuously researching and learning. Joining FAC would enable me to continute my education, learn a multitude of new skills and provide me with an exciting career path - all of which I am desperately searching for!";

// Yoga carousel

let yogaList = document.getElementById("yoga-list");
const yogaListItems = document.querySelectorAll("li");
const numberOfYogaListItems = yogaListItems.length;

function imageChange0(){
    yogaList.style.left = ("0px"); // Sets the css left property to 0px
    imagePosition = 0;
}

function imageChange1(){
    yogaList.style.left = ("-400px"); // Sets the css left property to -400px
    imagePosition = 1;
}

function imageChange2(){
    yogaList.style.left = ("-800px"); // Sets the css left property to -800px
    imagePosition = 2;
}

function imageChange3(){
    yogaList.style.left = ("-1200px"); // Sets the css left property to -800px
    imagePosition = 3;
}

