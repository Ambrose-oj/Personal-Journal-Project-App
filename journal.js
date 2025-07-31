// const MyEntries = [
//     {title: "A Day of Small Wins", date:"2025-07-27", content:"Today was surprisingly productive. I managed to finish my portfolio website. It's the small victories that often feel the most satisfying."},
//     {title: "Exploring a Resturants", date:"2025-07-28", content:"Found a local restuarant down the road with the best Amala and Ewa-goyin I've had in ages. I think I've found my new favorite spot."},

// ];

// console.log(MyEntries);


const firstEntry = {
    title: "A Day of Small Wins",
    date: "2025-07-27",
    content: "Today was surprisingly productive. I managed to finish my portfolio website. It's the small victories that often feel the most satisfying",

}; 

const firstentry = Object.entries(firstEntry);
console.log(firstentry);




const secondEntry = {
    title: "Exploring a Resturants",
    date: "2025-07-28",
    content: "Found a local restuarant down the road with the best Amala and Ewa-goyin I've had in ages. I think I've found my new favorite spot",

}; 

const secondentry = Object.entries(secondEntry);
console.log(secondentry);






// TOGGLE EVENTS 

let contentText = document.querySelector('.content-text');
// let showHiddenContent = true;

// function hideContentText() {
//     if(showHiddenContent){
//         contentText.style.display = "none";
//         showHiddenContent = false;

//     }
//     else {
//         contentText.style.display = "block";
//         showHiddenContent = true;
//     }
// }

function showHiddenContent() {
    contentText.classList.toggle("hide");
}



let contentTextII = document.querySelector('.content-text-II');

function showHiddenContentII() {
    contentTextII.classList.toggle("hide");
}


