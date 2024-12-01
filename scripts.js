/* General Styles */
body {
    font - family: Arial, sans - serif;
    margin: 0;
    padding: 0;
    background - color: #e8d5d0;
    color: #333;
    line - height: 1.6;
}

header {
    background - color: #d9b5ae;
    color: #333;
    padding: 20px;
    text - align: center;
}

header h1 {
    margin: 0;
}

nav a {
    margin: 0 15px;
    text - decoration: none;
    color: #333;
    font - weight: bold;
}

nav a:hover {
    color: #883d3d;
}

main {
    padding: 20px;
}

section {
    margin - bottom: 20px;
    background: #fff;
    padding: 15px;
    border - radius: 10px;
    box - shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.album - cover {
    width: 150px;
    height: 150px;
    background: #ccc;
    margin: 10px auto;
    border - radius: 50 %;
}

.song img {
    width: 100px;
    height: 100px;
    border - radius: 5px;
}

footer {
    background - color: #d9b5ae;
    text - align: center;
    padding: 10px;
}

/* Additional Styles from index.html and about.html */

/* Navigation Bar */
nav {
    background - color: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100 %;
    z - index: 100;
    backdrop - filter: blur(10px);
}

nav ul {
    display: flex;
    justify - content: center;
    list - style: none;
    gap: 2rem;
}

nav a {
    text - decoration: none;
    color: #333;
    font - weight: 500;
    transition: color 0.3s;
}

nav a:hover {
    color: #6b8e23;
}

/* Hero Section */
.hero {
    height: 100vh;
    align - items: center;
    justify - content: center;
    background - color: #e8f5e9;
    position: relative;
    overflow: hidden;
}

.hero::after {
    content: "↓";
    position: absolute;
    bottom: 2rem;
    font - size: 2rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0 %, 20 %, 50 %, 80 %, 100 % {
        transform: translateY(0);
    }
    40 % {
        transform: translateY(-30px);
    }
    60 % {
        transform: translateY(-15px);
    }
}

/* Featured Section */
.featured - section {
    padding: 4rem 2rem;
    background: #fff;
}

/* Latest Release Section */
.latest - release {
    padding: 4rem 2rem;
    background: #f3e5f5;
}

.latest - album {
    display: flex;
    flex - direction: column;
    align - items: center;
    justify - content: center;
    text - align: center;
    margin: 0 auto;
    max - width: 500px; /* Adjust this for desired width */
    width: 100 %;
    padding: 20px;
}

.latest - img {
    width: 100 %;
    max - width: 400px; /* Adjust this for desired image size */
    height: auto;
    max - height: 250px; /* Control the height */
    object - fit: cover;
    border - radius: 8px;
}






/* Song Grid */
.song - grid {
    display: grid;
    grid - template - columns: repeat(auto - fit, minmax(300px, 1fr));
    gap: 2rem;
    max - width: 1200px;
    margin: 0 auto;
}

.song - card {
    background: white;
    padding: 1.5rem;
    border - radius: 8px;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(50px);
    opacity: 0;
}

.placeholder - img {
    width: 100 %;
    aspect - ratio: 16 / 9;
    background - color: #ddd;
    border - radius: 8px;
    overflow: hidden;
}

.placeholder - img img {
    width: 100 %;
    height: 100 %;
    object - fit: cover;
}

/* About Page Styles */
.about - hero {
    height: 70vh;
    display: flex;
    align - items: center;
    justify - content: center;
    background - color: #e8f5e9;
    padding: 2rem;
    margin - top: 60px;
}

.about - content {
    max - width: 800px;
    margin: 0 auto;
    padding: 4rem 2rem;
    opacity: 0;
    transform: translateY(50px);
}

.discography {
    background: #fff;
    padding: 4rem 2rem;
}

.album - grid {
    display: grid;
    grid - template - columns: repeat(auto - fit, minmax(250px, 1fr));
    gap: 2rem;
    max - width: 1200px;
    margin: 0 auto;
}

.album - card {
    background: white;
    padding: 1.5rem;
    border - radius: 8px;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(50px);
}

footer {
    background: #333;
    color: white;
    text - align: center;
    padding: 2rem;
}

.hero.placeholder - img img {
    opacity: 0.5;
    transition: opacity 0.3s ease;
}
