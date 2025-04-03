function showSection(section) {
    document.querySelectorAll('.section').forEach(el => el.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

function saveNotes() {
    const notes = document.getElementById("notesArea").value;
    localStorage.setItem("userNotes", notes);
    alert("Anotações salvas!");
}

document.getElementById("notesArea").value = localStorage.getItem("userNotes") || "";

let timer;
let timeLeft = 600;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 600;
    updateTimer();
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("⏰ Tempo esgotado!");
    } else {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        document.getElementById("countdown").textContent = `${minutes}:${seconds}`;
    }
}
