document.addEventListener("DOMContentLoaded", function () {
    const animationVideo = document.getElementById("animation");
    const homepage = document.querySelector(".homepage");

    // Play the video when the page loads
    animationVideo.play();

    // Add an event listener to show the homepage when the video ends
    animationVideo.addEventListener("ended", function () {
        // Hide the video
        animationVideo.style.display = "none";

        window.location.href = "CNT 1st.html";
    });
});


