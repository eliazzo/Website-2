// Website text

document.getElementById("nationality-description").innerText = "In 19XX my grandparents moved from Malta to London, where my Dad was born. My mother is daughter to an American and an Englishman who met in the Congo, 1962. I was born and raised in Highbury, London.";
document.getElementById("degree-description").innerText = "I graduated in July 2022 with first class honours from the Unviversity of Manchester. My degree was evenly split between Spanish and Linguistics. I studied hispanic literature, film, history and politics alongside the language. I studied linguistics from sociological, philosophical and psychological perspectives.";
document.getElementById("job-description").innerText = "I'm currently working at a secondary school in Hackney. My role is divided between the English department and the SEN department. I tutor small groups of GCSE students with a particular focus on English Language. I also support students with additional learning needs, such as ASD. The school has many students who speak English as a second language and I provide support to some of the Spanish speaking students.";
document.getElementById("hobby-description").innerText = "I love to move! I have a passion for yoga and hold a RYT 200 teaching qualification. Movement brings me joy. Whether that be through yoga, dancing, walking or going to the gym. "

document.getElementById("language-text").innerText = "I have a passion for languages and had the privilege of immersing myself in the study of languages during my four years at Manchester. I speak Spanish and have attempted French on various occasions. I love to travel and have visited Europe, Latin America and most recently, East Africa. I was lucky enough to live in Seville for 6 months as part of my Spanish studies. \n\n When a friend spoke to me about his journey to becoming a web developer, I was intrigued but felt my background had no relation to coding. However, when he started to talk about functions and expressions, I was reminded of the Formal Semantics I studied in the final year of my linguistics degree. We studied boolean logic and used existential (Ǝ) and universal (ᗄ) quantifiers to translate sentences. We then moved on to use the lambda (𝛌) function to develop a set of lexical translation rules for English lexemes. \n\n For example,";
document.getElementById("translation-example").innerText = "Harriet gave the parcel to Donald. \n GIVE (h, the-parcel, d) \n 𝛌x [Harriet gave x to Donald] \n 𝛌x [GIVE (h, x, d)] \n \n Let h = Harriet, d = Donald and x = the-parcel \n In this example x was 𝛌-abstracted";
document.getElementById("language-text-continued").innerText = "It was intimidating at first. But I threw myself into it and eventually found my feet. I suppose it's given me the confidence to pursue a career in coding."
document.getElementById("learning-text").innerText = "As the above text hopefully demonstrates, I loved being an undergraduate. Learning brings me great joy and if education was free I could happily spend the rest of my life moving from degree to degree. I often thought about (and still think about) applying for a masters. However, while I am thrilled to have the skills to analyse and critique the use of the Supernatural in Latin American fiction, or translate English lexemes using lamda expression (among other, obscure skills), I am hesitant to pursue more education without a definitive end goal. That's where Founders and Coders comes in. Since joining the FAC community I have rediscovered a space where peer learning and support is at it's core. I am delighted with the prospect of a career that involves daily research and learning. Joining FAC would enable me to continute my education, learn a multitude of new skills and provide me with an exciting career path - all of which I am currently searching for!";

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

function imageChange4(){
    yogaList.style.left = ("-1600px"); // Sets the css left property to -800px
    imagePosition = 4;
}

function imageChange5(){
    yogaList.style.left = ("-2000px"); // Sets the css left property to -800px
    imagePosition = 5;
}

function imageChange6(){
    yogaList.style.left = ("-2400px"); // Sets the css left property to -800px
    imagePosition = 6;
}


//Project gallery cards

function revealHobbyText(){
    const hobbyText = "This is a simple web page using HTML and CSS to display information about asana in yoga. I have used JavaScript to display the current date at the top of the page."
    document.getElementById("hobby-text").innerText = hobbyText
}

function revealMovieText(){
    const movieText = "This is a user interface populated with data provided by FAC. The information you see on the page has all been manipulated from the movieData object onto the HTML page. Hover, click and double click to interact with the page. There is also the option to add your own movie rating to the movieData object and display it on the webpage."
    document.getElementById('movie-text').innerText= movieText
}

function revealFeatureText(){
    const featureText = "This is an automated image carousel featuring David Hockney's 20th century artwork. Users can click backwards and forwards or watch the slideshow play out automatically. Alternatively, they can use the dots to navigate the carousel. "
    document.getElementById("feature-text").innerText= featureText
}


