// blog.js
// Implement logic to fetch and display blog content here
// You can use dummy blog data for now
const blogContent = document.getElementById("blogContent");

const dummyBlogData = [
    { title: "Blog Post 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Blog Post 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    // Add more dummy blog posts as needed
];

function displayBlogContent() {
    // Display blog content in the blogContent container
    dummyBlogData.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogContent.appendChild(postElement);
    });
}

// Call the function to display blog content
displayBlogContent();

// Add event listener for the 'Go to Search' button
document.getElementById("toSearchBtn").addEventListener("click", function() {
    // Redirect to the search page (replace 'search.html' with your actual filename)
    window.location.href = "search.html";
});
