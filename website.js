// Website text

document.getElementById("nationality-description").innerText = "In 1963 my grandparents moved from Malta to North London, where my Dad was born. My mother is daughter to an American and an Englishman who met in the Congo, 1962. I was born and raised in Highbury, London.";

document.getElementById("degree-description").innerText = "I graduated in July 2022 with first class honours from the University of Manchester. My degree was evenly split between Spanish and Linguistics. I studied hispanic literature, film, history and politics alongside, of course, the language itself. Similarly, Linguistics was very broad and my studies included psycholinguistics, sociolinguistics and formal semantics, which has roots in logic and the philosophy of language.";
document.getElementById("job-description").innerText = "I'm currently working at a secondary school in Hackney. My role is divided between the English department and the SEN department. I tutor small groups of GCSE students with a particular focus on English Language. I also support students with additional learning needs, such as Autism Spectrum Disorder. The school has many students who speak English as a second language and I provide support to some of the Spanish speaking students.";
document.getElementById("hobby-description").innerText = "I love to move! I have a passion for yoga and hold a RYT 200 teaching qualification. Movement brings me joy. Whether that be through yoga, dancing, walking or going to the gym. "

document.getElementById("language-text").innerText = "I have a passion for languages and had the privilege of immersing myself in the study of linguistics during my four years at Manchester. I speak Spanish and have attempted French on various occasions. I love to travel and have visited Europe, Latin America and most recently, East Africa. The gallery section above displays some images taken in Rwanda this summer, where I co-lead a team researching the impact of a local businesses community work. I was lucky enough to live in Seville for 6 months as part of my Spanish studies. \n\n When a friend spoke to me about his journey to becoming a web developer, I was intrigued but felt my background had no relation to coding. However, when he started to talk about functions and expressions, I was reminded of the formal semantics I studied in the final year of my linguistics degree. Formal semantics draws upon logic and theoretical computer science to study grammatical meaning in natural language. We studied propositional and predicate logic and used existential (Ǝ) and universal (ᗄ) quantifiers to translate sentences. We later used the lambda (𝛌) function to develop a set of lexical translation rules for English lexemes. For example, \n";
document.getElementById("translation-example").innerText = "Harriet gave the parcel to Donald. \n GIVE (h, the-parcel, d) \n 𝛌x [Harriet gave x to Donald] \n 𝛌x [GIVE (h, x, d)] \n \n Let h = Harriet, d = Donald and x = the-parcel \n In this example x was 𝛌-abstracted";
document.getElementById("language-text-continued").innerText = "It was difficult at first, and unlike anything I had studied previously. But I enjoy problem solving, and after breaking down the process into smaller sections it became very manageable. For many reasons, the journey I underwent to understand predicate logic has given me the confidence to pursue a career in coding."
document.getElementById("learning-text").innerText = "I loved being an undergraduate. Learning brings me great joy and if money were no object I could easily spend the rest of my life moving from degree to degree. I have often considered continuing my education with a masters. However, while I thoroughly enjoyed analysing and critiquing the use of the Supernatural in Latin American fiction, or translating English lexemes into predicate logic, I am hesitant to pursue more education without a decided end goal. \n\n That's where Founders and Coders come in! Since joining the FAC community I have rediscovered a community where peer learning and support is paramount. I am delighted with the prospect of a career that involves daily learning. Joining FAC would enable me to learn a multitude of new skills and help me to build a network so I can enter into a career in web development.";


//Color changes
function changeHeadingColor(){
    const newHeadingColor = document.getElementById("heading-color").value;
    const whyHeading = document.getElementById("why-heading");
    whyHeading.style.color = newHeadingColor;
}
function changeBackroundColor(){
    const newBackgroundColor = document.getElementById("text-background-color").value;
    const whyBackground = document.getElementById("why");
    whyBackground.style.backgroundColor = newBackgroundColor;
}
function changeTextColor(){
    const newTextColor = document.getElementById("text-color").value
    // console.log(newColor)
    const languageTitle = document.getElementById("language-title");
    // console.log(languageTitle);
    languageTitle.style.color = newTextColor;

    const languageText = document.getElementById("language-text");
    languageText.style.color = newTextColor;

    const translationExample = document.getElementById("translation-example");
    translationExample.style.color = newTextColor;

    const languageTextContinued = document.getElementById("language-text-continued");
    languageTextContinued.style.color = newTextColor;

    const learningTitle = document.getElementById("learning-title");
    learningTitle.style.color = newTextColor;

    const learningText = document.getElementById("learning-text");
    learningText.style.color = newTextColor;
   }

//END




// Image carousel

const imageDescriptionElement = document.getElementById("image-description") // Selects image desciption p element

let imageList = document.getElementById("image-list");
// const imageListItems = document.querySelectorAll("li");
// const numberOfImageListItems = imageListItems.length;

function imageChange0(){
    imageList.style.left = ("0px"); // Sets the css left property to 0px
    imagePosition = 0;
    imageDescriptionElement.innerText = "Boat taxis on Lake Kivu"
}

function imageChange1(){
    imageList.style.left = ("-400px"); // Sets the css left property to -400px
    imagePosition = 1;
    imageDescriptionElement.innerText = "Orange dyed sisal, the natural fibre used to weave baskets"
}

function imageChange2(){
    imageList.style.left = ("-800px"); // Sets the css left property to -800px
    imagePosition = 2;
    imageDescriptionElement.innerText = "A view from the boat on Lake Kivu"
}

function imageChange3(){
    imageList.style.left = ("-1200px"); // Sets the css left property to -800px
    imagePosition = 3;
    imageDescriptionElement.innerText = "A finished bowl, woven by one of the local artisan women"
}

function imageChange4(){
    imageList.style.left = ("-1600px"); // Sets the css left property to -800px
    imagePosition = 4;
    imageDescriptionElement.innerText = "The local sewing shop where seamsters rent a space to work from"
}

function imageChange5(){
    imageList.style.left = ("-2000px"); // Sets the css left property to -800px
    imagePosition = 5;
    imageDescriptionElement.innerText = "Banana plants"
}

function imageChange6(){
    imageList.style.left = ("-2400px"); // Sets the css left property to -800px
    imagePosition = 6;
    imageDescriptionElement.innerText = "A woman showing us to her village in Muhanga District"
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

//Revert gallery card buttons to original text on mouseout
function buttonTextOriginal(){
    const originalButtonText = "What's it all about?";
    const buttonList = document.querySelectorAll(".button-text");
    console.log(buttonList)

    for(let i = 0; i < buttonList.length; i++){
        buttonList[i].innerHTML = originalButtonText
    }

}

