document.addEventListener("DOMContentLoaded", () => {
    // Interactive album click
    const albums = document.querySelectorAll(".interactive");
    albums.forEach(album => {
        album.addEventListener("click", () => {
            alert("Playing a sample from this album!");
        });
    });

    // Load upcoming gigs dynamically
    const gigs = [
        { date: "2024-12-01", location: "Tokyo, Japan" },
        { date: "2025-01-15", location: "Osaka, Japan" },
        { date: "2025-02-10", location: "Seoul, South Korea" },
    ];

    const gigsContainer = document.getElementById("gigs-container");
    gigs.forEach(gig => {
        const gigDiv = document.createElement("div");
        gigDiv.className = "gig";
        gigDiv.innerHTML = <strong>${gig.date}</strong> - ${gig.location};
        gigsContainer.appendChild(gigDiv);
    });

    // Booking form submission
    const form = document.getElementById("booking-form");
    form.addEventListener("submit", event => {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        form.reset();
    });
});