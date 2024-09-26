// Define current page and video elements
let currentPage = 0;
const videos = {
    1: document.getElementById('video1'),
    2: document.getElementById('video2'),
    3: document.getElementById('video3')
};

// Handle page turning and video playing
function turnPage(pageNumber) {
    const frontCover = document.getElementById('cover-front');
    const backCover = document.getElementById('cover-back');
    const current = document.getElementById(`page-${currentPage}`);
    const next = document.getElementById(`page-${pageNumber}`);

    // Handle front cover
    if (currentPage === 0) {
        frontCover.style.transform = 'rotateY(-180deg)';
    } else if (currentPage > 0) {
        current.style.transform = 'rotateY(180deg)';
    }

    if (pageNumber > 0 && pageNumber < 4) {
        next.style.transform = 'rotateY(0deg)';
    }

    // Handle back cover
    if (pageNumber === 4) {
        backCover.style.transform = 'rotateY(0deg)';
    }

    // Stop previous video and play new one
    if (videos[currentPage]) {
        videos[currentPage].pause();
        videos[currentPage].currentTime = 0;
    }

    if (videos[pageNumber]) {
        videos[pageNumber].play();
    }

    currentPage = pageNumber;
}
