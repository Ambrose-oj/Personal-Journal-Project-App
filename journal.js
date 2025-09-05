const myEntries = [
    {
        title: "A Day of Small Wins", 
        date:"2025-07-27", 
        content:"Today was surprisingly productive. I managed to finish my portfolio website. It's the small victories that often feel the most satisfying."},

    {
        title: "Exploring a Resturants", 
        date:"2025-07-28", 
        content:"Found a local restuarant down the road with the best Amala and Ewa-goyin I've had in ages. I think I've found my new favorite spot."},

];

console.log(myEntries);


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
const imageInput = document.getElementById('image-upload');

let imageURL = '';

if (imageInput.files && imageInput.files[0]) {
  imageURL = URL.createObjectURL(imageInput.files[0]);
}
  
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
            <p class="entry-date"><img class="btn-cal" src="calendar.png" />  ${dateValue}</p>
            <button class="content-btn">View Content</button>
            ${imageURL ? `<img class="content-image hide" src="${imageURL}" />` : ''}
            <p class="content-text hide">${content}</p>
            <img class="btn-delete" src="trash-can.png" />
        `;

        journalList.prepend(newEntry);

        let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        entries.unshift({ title, date: dateValue, content, imageURL });
        localStorage.setItem('journalEntries', JSON.stringify(entries));

               
        journalForm.reset();
});


// entries from localStorage on page load

document.addEventListener('DOMContentLoaded', function() {
    let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    entries.forEach(function(entry) {
        const newEntry = document.createElement('li');
        newEntry.className = 'journal-entry';

        newEntry.innerHTML = `
            <h3>${entry.title}</h3>
            <p class="entry-date"><img class="btn-cal" src="calendar.png" /> ${entry.date}</p>
            <button class="content-btn">View Content</button>
            <img class="content-image hide" src="${entry.imageURL}" />
            <p class="content-text hide">${entry.content}</p>
            <img class="btn-delete" src="trash-can.png" />
        `;

        journalList.appendChild(newEntry);
    });
});



           //      SEARCH INPUT     // 

    const searchInput = document.getElementById('search-input');

        searchInput.addEventListener('input', function(event) {
            const searchTerm = event.target.value.toLowerCase();
            const entries = document.querySelectorAll('.journal-entry');

            // Loop through all the journal entries
            entries.forEach(function(entry) {
                // Get the text content of the title and body
                const title = entry.querySelector('h3').textContent.toLowerCase();
                const content = entry.querySelector('p').textContent.toLowerCase();

                // Check if the search term is in the title or content
                const isMatch = title.includes(searchTerm) || content.includes(searchTerm);

                // Show or hide the entry based on whether it matches
                // If it's a match, display it as a block element. If not, hide it.
                entry.style.display = isMatch ? 'block' : 'none';
            });
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
        const targetText = e.target.closest('.journal-entry');

        // From within that specific entry, find its content paragraph
        const contentText = targetText.querySelector('.content-text');
        
        if (contentText) {
            contentText.classList.toggle('hide');
        }
    }
});

// FOR MY JOURNAL IMAGES
journalList.addEventListener('click', function(e) {
    
    if (e.target.classList.contains('content-btn')) {

        const targetImage = e.target.closest('.journal-entry');

        const contentImage = targetImage.querySelector('.content-image');
        
        if (contentImage) {
            contentImage.classList.toggle('hide');
        }
    }
});


 
 //  // DELETE ENTRY   //  //  //
 

//  Add event listener to the parent container (journal list)
// document.querySelector('.journal-list').addEventListener('click', function(e) {
    
//     // Check if the clicked element is a delete button
//     if (e.target.classList.contains('btn-delete')) {

//         // Find the closest li element and remove it
//         const listItem = e.target.closest('li');
        
//                 if (listItem) { 
//             if (confirm('Are you sure you want to delete this entry?')) {
//                 listItem.remove();

//                 let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

//             // remove the entry that matches the title and date
//             const title = listItem.querySelector('h3').textContent;
//             const date = listItem.querySelector('p').textContent;
//             entries = entries.filter(entry => 
//                 !(entry.title === title && entry.date === date)
//             );

//             // Update localStorage with the filtered entries
//             localStorage.setItem('journalEntries', JSON.stringify(entries));
//             }
//         }
//     }
// });

journalList.addEventListener('click', function(e) {
    // Check if the clicked element is a delete button
    if (e.target.classList.contains('btn-delete')) {
        // Find the closest li element and remove it
        const listItem = e.target.closest('li');
        if (listItem) {
            if (confirm('Are you sure you want to delete this entry?')) {
                listItem.remove();

                // Parse current entries from localStorage
                let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

                // Get title and date from the removed list item
                const title = listItem.querySelector('h3').textContent;
                const date = listItem.querySelector('p').textContent;

                // Filter out the entry that matches both title and date
                entries = entries.filter(entry => !(entry.title === title && entry.date === date));

                // Update localStorage with the filtered entries
                localStorage.setItem('journalEntries', JSON.stringify(entries));
            }
        }
    }
});


console.log('Loaded entries:', entries)































//     WITH MENTOR PSAMI



//  //  // ADD NEW ENTRY //  //  //

// const journalForm = document.querySelector('.journal-form-section form');
  
// const journalList = document.querySelector('.journal-list');
// const imageInput = document.getElementById('image-upload');
// imageInput.addEventListener("change", function (event) {
//     const previewImageElement = document.getElementById('preview-image')
//     previewImageElement.src = event.target.value
// })

// journalForm.addEventListener('submit', function (event) {
//     event.preventDefault(); 
 
// const titleInput = document.getElementById('entry-title');    
// const dateInput = document.getElementById('entry-date');
// const contentInput = document.getElementById('entry-content');
// const imageInput = document.getElementById('image-upload');

// let imageURL = '';

// // if (imageInput.files && imageInput.files[0]) {
// //   imageURL = URL.createObjectURL(imageInput.files[0]);
// // }
// // console.log(imageInput.files[0])
// imageURL = imageInput.value
  
//     const title = titleInput.value;
//     const dateValue = dateInput.value;
//     const content = contentInput.value;
        
    
//     if (title === '' || dateValue === '' || content === '') {
//             alert('Please fill out all fields to add an entry.');
//             return;  
//         }

//     // const newEntry = document.createElement('li');
//     //     newEntry.className = 'journal-entry';
 
//     //     newEntry.innerHTML =
//     //     `
//     //         <h3>${title}</h3>
//     //         <p class="entry-date"><img class="btn-cal" src="calendar.png" />  ${dateValue}</p>
//     //         <button class="content-btn">View Content</button>
//     //         ${imageURL ? `<img class="content-image hide" src="${imageURL}" />` : ''}
//     //         <p class="content-text hide">${content}</p>
//     //         <img class="btn-delete" src="trash-can.png" />
//     //     `;

//         // journalList.prepend(newEntry);

//         let entries = JSON.parse(localStorage.getItem('journalEntries') || "[]") || [];
//         entries.unshift({ title, date: dateValue, content, imageURL });
//         localStorage.setItem('journalEntries', JSON.stringify(entries));

               
//         journalForm.reset();
// });


// // entries from localStorage on page load

// document.addEventListener('DOMContentLoaded', function() {
//     let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
//     entries.forEach(function(entry) {
//         const newEntry = document.createElement('li');
//         newEntry.className = 'journal-entry';

//         newEntry.innerHTML = `
//             <h3>${entry.title}</h3>
//             <p class="entry-date">${entry.date}</p>
//             <button class="content-btn">View Content</button>
//             <p class="content-text hide">${entry.content}</p>
//             <img class="content-image hide" src="${entry.imageURL}" />
//             <img class="btn-delete" src="trash-can.png" />
//         `;

//         journalList.appendChild(newEntry);
//     });
// });



//            //      SEARCH INPUT     // 

//     const searchInput = document.getElementById('search-input');

//         searchInput.addEventListener('input', function(event) {
//             const searchTerm = event.target.value.toLowerCase();
//             const entries = document.querySelectorAll('.journal-entry');

//             // Loop through all the journal entries
//             entries.forEach(function(entry) {
//                 // Get the text content of the title and body
//                 const title = entry.querySelector('h3').textContent.toLowerCase();
//                 const content = entry.querySelector('p').textContent.toLowerCase();

//                 // Check if the search term is in the title or content
//                 const isMatch = title.includes(searchTerm) || content.includes(searchTerm);

//                 // Show or hide the entry based on whether it matches
//                 // If it's a match, display it as a block element. If not, hide it.
//                 entry.style.display = isMatch ? 'block' : 'none';
//             });
//         });


// //  //  // VIEW CONTENT  //  //  //

// // let contentText = document.querySelector('.content-text');
 
// // function showHiddenContent() {
// //     contentText.classList.toggle("hide");
// // }
 

 
// //  Find the main list that holds all your journal entries (that is the declaration i did below)   
// // ( i already delared this in the beginning) const journalList = document.querySelector('.journal-list');

// // Adding an event listener to the entire list
// journalList.addEventListener('click', function(e) {
    
//     // calling for click on the view-content button
//     if (e.target.classList.contains('content-btn')) {

//         // Find the parent list item (the <li>) for the view-content button that was clicked
//         const targetText = e.target.closest('.journal-entry');

//         // From within that specific entry, find its content paragraph
//         const contentText = targetText.querySelector('.content-text');
        
//         if (contentText) {
//             contentText.classList.toggle('hide');
//         }
//     }
// });

// // FOR MY JOURNAL IMAGES
// journalList.addEventListener('click', function(e) {
    
//     if (e.target.classList.contains('content-btn')) {

//         const targetImage = e.target.closest('.journal-entry');

//         const contentImage = targetImage.querySelector('.content-image');
        
//         if (contentImage) {
//             contentImage.classList.toggle('hide');
//         }
//     }
// });


 
//  //  // DELETE ENTRY  //  //  //
 

// //  Add event listener to the parent container (journal list)
// document.querySelector('.journal-list').addEventListener('click', function(e) {
    
//     // Check if the clicked element is a delete button
//     if (e.target.classList.contains('btn-delete')) {

//         // Find the closest li element and remove it
//         const listItem = e.target.closest('li');
        
//                 if (listItem) { 
//             if (confirm('Are you sure you want to delete this entry?')) {
//                 listItem.remove();

//             //     let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

//             // // remove the entry that matches the title and date
//             // const title = listItem.querySelector('h3').textContent;
//             // const date = listItem.querySelector('p').textContent;
//             // entries = entries.filter(entry => 
//             //     !(entry.title === title && entry.date === date)
//             // );

//             // // Update localStorage with the filtered entries
//             // localStorage.setItem('journalEntries', JSON.stringify(entries));
//             }
//         }
//     }
// });













































 
//         WITHOUT LOCAL STORAGE


// //  //  // ADD NEW ENTRY //  //  //

// const journalForm = document.querySelector('.journal-form-section form');
  
// const journalList = document.querySelector('.journal-list');

// journalForm.addEventListener('submit', function (event) {
//     event.preventDefault(); 
 
// const titleInput = document.getElementById('entry-title');    
// const dateInput = document.getElementById('entry-date');
// const contentInput = document.getElementById('entry-content');
// const imageInput = document.getElementById('image-upload');

// let imageURL = '';

// if (imageInput.files && imageInput.files[0]) {
//   imageURL = URL.createObjectURL(imageInput.files[0]);
// }
  
//     const title = titleInput.value;
//     const dateValue = dateInput.value;
//     const content = contentInput.value;
        
    
//     if (title === '' || dateValue === '' || content === '') {
//             alert('Please fill out all fields to add an entry.');
//             return;  
//         }

//     const newEntry = document.createElement('li');
//         newEntry.className = 'journal-entry';
 
//         newEntry.innerHTML =
//         `
//             <h3>${title}</h3>
//             <p class="entry-date"><img class="btn-cal" src="calendar.png" />  ${dateValue}</p>
//             <button class="content-btn">View Content</button>
//             ${imageURL ? `<img class="content-image hide" src="${imageURL}" />` : ''}
//             <p class="content-text hide">${content}</p>
//             <img class="btn-delete" src="trash-can.png" />
//         `;

//         journalList.prepend(newEntry);
               
//         journalForm.reset();
// });


//            //      SEARCH INPUT     // 

//     const searchInput = document.getElementById('search-input');

//         searchInput.addEventListener('input', function(event) {
//             const searchTerm = event.target.value.toLowerCase();
//             const entries = document.querySelectorAll('.journal-entry');

//             // Loop through all the journal entries
//             entries.forEach(function(entry) {
//                 // Get the text content of the title and body
//                 const title = entry.querySelector('h3').textContent.toLowerCase();
//                 const content = entry.querySelector('p').textContent.toLowerCase();

//                 // Check if the search term is in the title or content
//                 const isMatch = title.includes(searchTerm) || content.includes(searchTerm);

//                 // Show or hide the entry based on whether it matches
//                 // If it's a match, display it as a block element. If not, hide it.
//                 entry.style.display = isMatch ? 'block' : 'none';
//             });
//         });


// //  //  // VIEW CONTENT  //  //  //

// // let contentText = document.querySelector('.content-text');
 
// // function showHiddenContent() {
// //     contentText.classList.toggle("hide");
// // }
 

 
// //  Find the main list that holds all your journal entries (that is the declaration i did below)   
// // ( i already delared this in the beginning) const journalList = document.querySelector('.journal-list');

// // Adding an event listener to the entire list
// journalList.addEventListener('click', function(e) {
    
//     // calling for click on the view-content button
//     if (e.target.classList.contains('content-btn')) {

//         // Find the parent list item (the <li>) for the view-content button that was clicked
//         const targetText = e.target.closest('.journal-entry');

//         // From within that specific entry, find its content paragraph
//         const contentText = targetText.querySelector('.content-text');
        
//         if (contentText) {
//             contentText.classList.toggle('hide');
//         }
//     }
// });

// // FOR MY JOURNAL IMAGES
// journalList.addEventListener('click', function(e) {
    
//     if (e.target.classList.contains('content-btn')) {

//         const targetImage = e.target.closest('.journal-entry');

//         const contentImage = targetImage.querySelector('.content-image');
        
//         if (contentImage) {
//             contentImage.classList.toggle('hide');
//         }
//     }
// });

 
// //  //  // DELETE ENTRY ACTION   //  //  //
 

//  // Add event listener to the parent container (journal list)
// document.querySelector('.journal-list').addEventListener('click', function(e) {
    
//     // Check if the clicked element is a delete button
//     if (e.target.classList.contains('btn-delete')) {

//         // Find the closest li element and remove it
//         const listItem = e.target.closest('li');
        
//                 if (listItem) { 
//             if (confirm('Are you sure you want to delete this entry?')) {
//                 listItem.remove();
//             }
//         }
//     }
// });

