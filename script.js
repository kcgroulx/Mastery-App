// script.js
// Author: Kyle Groulx
// Date:   Dec 11th, 2023

function changeHeadingColor() 
{
    var heading = document.querySelector('h1');
    heading.style.color = 'red';
}

function showAlert() 
{
    alert('Hello, this is an alert!');
}

function updateParagraph()
{
    var paragraph = document.getElementById('myParagraph');
    paragraph.innerHTML = 'Paragraph Updated!'
}


function fetchData() 
{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
        })
        .catch(error => {
            console.error('Error during fetch:', error);
        });
}
