

// // Get the main list element
// const journalList = document.querySelector('.journal-list');

// // --- LOCAL STORAGE FUNCTIONS ---

// // Function to get all entries from Local Storage
// function getEntriesFromStorage() {
//     const entries = localStorage.getItem('journalEntries');
//     // If no entries exist, return an empty array, otherwise parse the JSON string
//     return entries ? JSON.parse(entries) : [];
// }

// // Function to save all entries to Local Storage
// function saveEntriesToStorage(entries) {
//     localStorage.setItem('journalEntries', JSON.stringify(entries));
// }

// // --- RENDER FUNCTION ---

// // Function to display all journal entries on the page
// function displayEntries() {
//     // Clear the current list to avoid duplicates
//     journalList.innerHTML = '';
//     const entries = getEntriesFromStorage();

//     entries.forEach(entry => {
//         // Create the list item element for each entry
//         const newEntry = document.createElement('li');
//         newEntry.className = 'journal-entry';
//         // Add a 'data-id' attribute to uniquely identify each entry
//         newEntry.setAttribute('data-id', entry.id);

//         // Determine if the image and content should be hidden or not
//         const imageHideClass = entry.imageUrl ? '' : 'hide';
//         const contentHideClass = 'hide'; // Content is hidden by default

//         newEntry.innerHTML = `
//             <h3>${entry.title}</h3>
//             <p class="entry-date"> <img class="btn-cal" src="calendar.png" /> ${entry.date}</p>
//             <button class="btn content-btn">View Content</button>
//             <img class="content-image hide" src="${entry.imageUrl}" />
//             <p class="content-text hide">${entry.content}</p>
//             <img class="btn-delete" src="trash-can.png" />
//         `;
//         // Use prepend to add the newest entry to the top
//         journalList.prepend(newEntry);
//     });
// }


// // Your existing journalForm variable
// const journalForm = document.querySelector('.journal-form-section form');

// journalForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const titleInput = document.getElementById('entry-title');
//     const dateInput = document.getElementById('entry-date');
//     const contentInput = document.getElementById('entry-content');
//     const imageInput = document.getElementById('image-upload');

//     // Basic validation
//     if (!titleInput.value || !dateInput.value || !contentInput.value) {
//         alert('Please fill out all fields to add an entry.');
//         return;
//     }

//     // Get the current entries from storage
//     const entries = getEntriesFromStorage();

//     // Create a new entry object
//     const newEntryObject = {
//         // Use a timestamp for a simple unique ID
//         id: Date.now(),
//         title: titleInput.value,
//         date: dateInput.value,
//         content: contentInput.value,
//         // Handle the image URL
//         imageUrl: imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : ''
//     };

//     // Add the new entry to the beginning of the array
//     entries.unshift(newEntryObject);

//     // Save the updated array back to Local Storage
//     saveEntriesToStorage(entries);

//     // Re-render all entries on the page
//     displayEntries();

//     // Reset the form
//     journalForm.reset();
// });


// journalList.addEventListener('click', function(e) {
//     // --- DELETE LOGIC ---
//     if (e.target.classList.contains('delete')) {
//         if (confirm('Are you sure you want to delete this entry?')) {
//             // Find the closest parent 'li' element
//             const listItem = e.target.closest('.journal-entry');
//             // Get the unique ID from the data-id attribute and convert to a number
//             const entryId = Number(listItem.dataset.id);

//             // Get current entries
//             let entries = getEntriesFromStorage();
//             // Filter out the entry that matches the ID
//             entries = entries.filter(entry => entry.id !== entryId);

//             // Save the new, filtered array back to storage
//             saveEntriesToStorage(entries);

//             // Re-render the list to show the change
//             displayEntries();
//         }
//     }

//     // --- VIEW CONTENT & IMAGE LOGIC (can remain mostly the same) ---
//     if (e.target.classList.contains('content-btn')) {
//         const listItem = e.target.closest('.journal-entry');
//         const contentText = listItem.querySelector('.content-text');
//         const contentImage = listItem.querySelector('.content-image');

//         if (contentText) {
//             contentText.classList.toggle('hide');
//         }
//         if (contentImage && contentImage.src) { // Only toggle if an image exists
//             contentImage.classList.toggle('hide');
//         }
//     }
// });


// // Add this to the end of your journal.js file

// // Initial display of entries when the page loads
// document.addEventListener('DOMContentLoaded', displayEntries);
