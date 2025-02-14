function amigoSecreto(participantes) {
    if (participantes.length < 3) {
        return "Se necesitan al menos 3 participantes para jugar.";
    }

    const participantesCopia = [...participantes];

    for (let i = participantesCopia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [participantesCopia[i], participantesCopia[j]] = [participantesCopia[j], participantesCopia[i]];
    }

    const parejas = {};
    for (let i = 0; i < participantes.length; i++) {
        parejas[participantes[i]] = participantesCopia[i];
    }

    return parejas;
}

function jugarAmigoSecreto() {
    const input = document.getElementById("participantes").value;
    const listaParticipantes = input.split(",").map(p => p.trim()).filter(p => p !== "");

    const resultado = amigoSecreto(listaParticipantes);
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "";

    if (typeof resultado === "string") {
        resultadoElemento.innerHTML = `<li>${resultado}</li>`;
    } else {
        for (const persona in resultado) {
            const li = document.createElement("li");
            li.textContent = `${persona} le regala a ${resultado[persona]}`;
            resultadoElemento.appendChild(li);
        }
    }
}
