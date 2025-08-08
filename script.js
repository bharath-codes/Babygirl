document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseDiv = document.getElementById('response');
    const container = document.querySelector('.container');

    yesBtn.addEventListener('click', () => {
        responseDiv.textContent = "Thank you! I love you more than anything. ❤️";
        responseDiv.style.color = 'var(--green-color)';
        // Hide the 'No' button forever
        noBtn.style.display = 'none';
    });

    // Make the 'No' button run away on hover
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton); // Also move on click as a backup

    function moveButton() {
        // Get the boundaries of the container
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        // Calculate a new random position within the container
        const newTop = Math.random() * (containerRect.height - btnRect.height);
        const newLeft = Math.random() * (containerRect.width - btnRect.width);

        noBtn.style.position = 'absolute'; // Ensure position is absolute
        noBtn.style.top = `${newTop}px`;
        noBtn.style.left = `${newLeft}px`;

        // Make the 'Yes' button bigger to encourage clicking it
        yesBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            yesBtn.style.transform = 'scale(1)';
        }, 300);
    }
});