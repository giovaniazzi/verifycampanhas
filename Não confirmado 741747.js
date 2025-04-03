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

window.onload = loadClinics;
