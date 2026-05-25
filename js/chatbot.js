document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("chatbotBtn");
    const chat = document.getElementById("chatbotChat");
    const close = document.getElementById("chatbotClose");
    const body = document.getElementById("chatbotBody");

    /* ABRIR */
    btn.addEventListener("click", () => {
        chat.style.display = "block";
        btn.style.display = "none";
        startChat();
    });

    /* CERRAR */
    close.addEventListener("click", () => {
        chat.style.display = "none";
        btn.style.display = "flex";
    });

    /* INICIO CHAT */
    function startChat(){
        body.innerHTML = "";

        addBot("¡Hola! 👋 ¿En qué podemos ayudarte?");
        
        addOption("Información sobre hojas de vida", () => optionHV());
        addOption("Servicios de maquila, congelación y transporte", () => optionServicios());
    }

    /* MENSAJES */
    function addBot(text){
        const msg = document.createElement("div");
        msg.className = "message bot";
        msg.innerText = text;
        body.appendChild(msg);
        scroll();
    }

    function addUser(text){
        const msg = document.createElement("div");
        msg.className = "message user";
        msg.innerText = text;
        body.appendChild(msg);
        scroll();
    }

    function addOption(text, callback){
        const msg = document.createElement("div");
        msg.className = "message option";
        msg.innerText = text;
        msg.onclick = callback;
        body.appendChild(msg);
        scroll();
    }

    function scroll(){
        body.scrollTop = body.scrollHeight;
    }

    /* OPCIONES */
    function optionHV(){
        addUser("Información sobre hojas de vida");
        addBot("Perfecto 👍 Puedes escribirnos directamente aquí:");
        
        setTimeout(() => {
            window.open("https://wa.me/573106847615?text=Hola,%20quiero%20información%20sobre%20hojas%20de%20vida");
        }, 1000);
    }

    function optionServicios(){
        addUser("Servicios de maquila, congelación y transporte");
        addBot("Claro 👍 Te atendemos por este medio:");
        
        setTimeout(() => {
            window.open("https://wa.me/573146826579?text=Hola,%20quiero%20información%20sobre%20servicios%20de%20maquila,%20congelación%20y%20transporte");
        }, 1000);
    }

});