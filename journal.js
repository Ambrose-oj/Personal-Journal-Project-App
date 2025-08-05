const entries = [
    {
        title: "A Day of Small Wins", 
        date:"2025-07-27", 
        content:"Today was surprisingly productive. I managed to finish my portfolio website. It's the small victories that often feel the most satisfying."},

    {
        title: "Exploring a Resturants", 
        date:"2025-07-28", 
        content:"Found a local restuarant down the road with the best Amala and Ewa-goyin I've had in ages. I think I've found my new favorite spot."},

];

console.log(entries);


// const firstEntry = {
//     title: "A Day of Small Wins",
//     date: "2025-07-27",
//     content: "Today was surprisingly productive. I managed to finish my portfolio website. It's the small victories that often feel the most satisfying",

// }; 

// const firstentry = Object.entries(firstEntry);
// console.log(firstentry);




// const secondEntry = {
//     title: "Exploring a Resturants",
//     date: "2025-07-28",
//     content: "Found a local restuarant down the road with the best Amala and Ewa-goyin I've had in ages. I think I've found my new favorite spot",

// }; 

// const secondentry = Object.entries(secondEntry);
// console.log(secondentry);






// TOGGLE EVENTS 

// let contentText = document.querySelector('.content-text');
// // let showHiddenContent = true;

// // function hideContentText() {
// //     if(showHiddenContent){
// //         contentText.style.display = "none";
// //         showHiddenContent = false;

// //     }
// //     else {
// //         contentText.style.display = "block";
// //         showHiddenContent = true;
// //     }
// // }

// function showHiddenContent() {
//     contentText.classList.toggle("hide");
// }
  
// // let contentTextII = document.querySelector('.content-text-II');

// // function showHiddenContentII() {
// //     contentTextII.classList.toggle("hide");
// // }


// // // DELETE ENTRY ACTION

// const button = document.querySelector('.btn-delete')

// button.addEventListener("click", remove);

// function remove(){
//     alert("Are you sure?")
//     button.parentElement.remove();
// }






//  //  // ADD NEW ENTRY //  //  //

const journalForm = document.querySelector('.journal-form-section form');
  
const journalList = document.querySelector('.journal-list');

journalForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
 
const titleInput = document.getElementById('entry-title');    
const dateInput = document.getElementById('entry-date');
const contentInput = document.getElementById('entry-content');
  
    const title = titleInput.value;
    const dateValue = dateInput.value;
    const content = contentInput.value;

    if (title === '' || dateValue === '' || content === '') {
            alert('Please fill out all fields to add an entry.');
            return;  
        }

    const newEntry = document.createElement('li');
        newEntry.className = 'journal-entry';
 
        newEntry.innerHTML =
        `
            <h3>${title}</h3>
            <p class="entry-date">${dateValue}</p>
            <button class="content-btn">View Content</button>
            <button class="btn-delete">Delete Entry</button>
            <p class="content-text hide">${content}</p>
        `;

        journalList.prepend(newEntry);
               
        journalForm.reset();
});




//  //  // VIEW CONTENT  //  //  //

// let contentText = document.querySelector('.content-text');
 
// function showHiddenContent() {
//     contentText.classList.toggle("hide");
// }
 

 
//  Find the main list that holds all your journal entries (that is the declaration i did below)   
// ( i already delared this in the beginning) const journalList = document.querySelector('.journal-list');

// Adding an event listener to the entire list
journalList.addEventListener('click', function(e) {
    
    // calling for click on the view-content button
    if (e.target.classList.contains('content-btn')) {

        // Find the parent list item (the <li>) for the view-content button that was clicked
        const currentEntry = e.target.closest('.journal-entry');

        // From within that specific entry, find its content paragraph
        const content = currentEntry.querySelector('.content-text'); 

        if (content) {
            content.classList.toggle('hide');
        }
    }
});

 
//  //  // DELETE ENTRY ACTION   //  //  //
 

 // Add event listener to the parent container (journal list)
document.querySelector('.journal-list').addEventListener('click', function(e) {
    
    // Check if the clicked element is a delete button
    if (e.target.classList.contains('btn-delete')) {

        // Find the closest li element and remove it
        const listItem = e.target.closest('li');
        // listItem.remove();
        if (listItem) { 
            if (confirm('Are you sure you want to delete this entry?')) {
                listItem.remove();
            }
        }
    }
});


