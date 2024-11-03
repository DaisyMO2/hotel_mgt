!DOCTYPE>
<html>
<head>
    <title>Hotel Management System</title>
    rel="stylesheet" href="style.css"
</head>
<body>
    <header>
        <h1>Hotel Management System</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">Room Management</a></li>
            <li><a href="#">Reservation Management</a></li>
            <li><a href="#">Guest Management</a></li>
            <li><a href="#">Staff Management</a></li>
        </ul>
    </nav>
    <main>
        </main>
    <footer>
        <p>&copy; 2023 Hotel Management System</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

// Example: Dynamically loading content based on navigation clicks
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const contentDiv = document.querySelector('main');
            const targetContent = link.getAttribute('href');

            // Load the appropriate content based on the target URL
            if (targetContent === '#room-management') {
                // Load room management content
            } else if (targetContent === '#reservation-management') {
                // Load reservation management content
            }
            // ... and so on for other sections
        });
    });
})
