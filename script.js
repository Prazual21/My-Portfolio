function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("Section not found:", sectionId);
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
