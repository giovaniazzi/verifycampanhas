// Lista de campanhas
const campanhas = [
    "Itajai 2 Dr José Bonifácio", "Passos MG", "Duque de Caxias RJ", 
    "Montes Claros MG", "São Caetano do Sul", "Maringá",
    "Sorriso - ESTÁ RODANDO CLÍNICO JUNTO", "Muriaé", "Votuporanga",
    "Sinop - RODANDO CLÍNICO JUNTO", "Barreiras BA - IMPLANTE JUNTO",
    "Ourinhos", "Itajai 1", "ITU", "Dois Vizinhos",
    "Hortolândia", "Campo Bom RS", "Itaúna - sem grátis",
    "Itapira SP - IMP E ORTO - sem grátis", "Santa ROSA - sem grátis",
    "Bagé RS", "Chapecó - Orthodontic", "Jaru", 
    "Jaraguá do Sul", "ODC IBATÉ", 
    "Alegra Odonto Colatina", "Coife Quixeramobim CE",
    "COIFE BACABAL", "ARTE DE SORRIR GOIANIA",
    "IMPERATRIZ MA", "ORAL SIN IBATÉ IMPLANTE",
    "PRUDENTÓPOLIS", "DUO PIEDADE"
];

// Renderizar lista de campanhas
const checklist = document.getElementById("checklist");
campanhas.forEach(campanha => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox"> ${campanha}`;
    checklist.appendChild(li);
});

// Limpar checklist
function resetChecklist() {
    document.querySelectorAll("#checklist input").forEach(input => input.checked = false);
}

// Salvar anotações no LocalStorage
function salvarAnotacoes() {
    const texto = document.getElementById("anotacoesTexto").value;
    localStorage.setItem("anotacoes", texto);
}

// Carregar anotações salvas
document.getElementById("anotacoesTexto").value = localStorage.getItem("anotacoes") || "";

// Cronômetro
let timerInterval;
let timeLeft = 600; // Tempo inicial em segundos (10 minutos)

function startTimer() {
    if (timerInterval) return; // Evitar múltiplos timers

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            document.getElementById("timer").textContent = "Tempo esgotado!";
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
            const seconds = (timeLeft % 60).toString().padStart(2, '0');
            document.getElementById("timer").textContent = `${minutes}:${seconds}`;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 600; // Reiniciar para os mesmos 10 minutos
    document.getElementById("timer").textContent = "10:00";
}
