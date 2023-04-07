// const tecnologias = [
//     "java", "react", "node", "python", "php"
// ]
// const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)];
// const letrasErradas = [];
// const letrasCorretas = [];
// document.addEventListener("keydown", (evento) => {
//     const codigo = evento.keyCode;
//     if (isLetra(codigo)){
//         const letra = evento.key;
//         if (letrasErradas.includes(letra)) {
//             mostrarAvisoLetraRepetida();
//         } else {
//             if (palavraSecreta.includes(letra)){
//                 letrasCorretas.push(letra);
//             } else {
//                 letrasErradas.push(letra);
//             }
//         }
//         atualizarJogo()
//     }
// })

// function atualizarJogo() {
//     mostrarLetrasErradas();
//     mostrarLetrasCertas();
//     desenharForca();
// }

// function mostrarLetrasErradas() {
//     const div = document.querySelector(".letras-erradas-container");
//     div.innerHTML = "<h3>Letras erradas</h3>";
//     letrasErradas.forEach(letra => {
//         div.innerHTML += `<span>${letra}</span>`;
//     });
// }

// function mostrarLetrasCertas() {
//     const container = document.querySelector(".palavra-secreta-container");
//     container.innerHTML = "";
//     palavraSecreta.split("").forEach(letra => {
//         if(letrasCorretas.includes(letra)) {
//             container.innerHTML += `<span>${letra}</span>`;
//         } else{
//             container.innerHTML += `<span>_</span>`;
//         }
//     })
// }

// function desenharForca() {

// }

// function  mostrarAvisoLetraRepetida() {
//     const aviso = document.querySelector(".aviso-palavra-repetida");
//     aviso.classList.add("show");
//     setTimeout(() => {
//         aviso.classList.remove("show");
//     }, 1000);
// }
