const clinics = [
    "Itajai 2 Dr José Bonifácio", "Passos MG", "Duque de Caxias RJ", 
    "Montes Claros MG", "São Caetano do Sul", "Maringá", 
    "Sorriso - ESTÁ RODANDO CLÍNICO JUNTO", "Muriaé", "Votuporanga", 
    "Sinop - RODANDO CLÍNICO JUNTO", "Barreiras BA - IMPLANTE JUNTO", 
    "Ourinhos", "Itajai 1", "ITU", "Dois Vizinhos", 
    "Hortolândia", "Campo Bom RS", "Itaúna - sem gratis", 
    "Itapira SP - IMP E ORTO - sem gratis", "Santa ROSA - sem gratis", 
    "Bagé RS", "Chapecó - Orthodontic", "Jaru", 
    "Jaraguá do Sul", "ODC IBATÉ", "Alegra Odonto Colatina", 
    "Coife Quixeramobim CE", "COIFE BACABAL", "ARTE DE SORRIR GOIANIA", 
    "IMPERATRIZ MA", "ORAL SIN IBATÉ IMPLANTE", "PRUDENTÓPOLIS", 
    "DUO PIEDADE"
];

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

function loadClinics() {
    const list = document.getElementById("campaignList");
    list.innerHTML = "";
    clinics.forEach((clinic, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="clinic${index}"> ${clinic}`;
        list.appendChild(li);
    });
}

function clearChecks() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
}

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

window.onload = loadClinics;
