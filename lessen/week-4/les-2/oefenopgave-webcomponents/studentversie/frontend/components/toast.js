class Toast extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.attachStyling();
        this.attachContent();
        const button = document.getElementById("klik");
        button.addEventListener("click", e=> {
            console.log("hoi")
            this.deattachContent();
        })
    }

    attachStyling(){
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/style.css");
        this.shadowRoot.appendChild(linkElem);
        linkElem.onload = () => console.log("Stylesheet loaded successfully");
        linkElem.onerror = (e) => console.error("Failed to load stylesheet", e);
    }

    attachContent() {
        const div = document.createElement("div");
        div.setAttribute("class", "toast");
        div.textContent = "Waddup";
        this.shadowRoot.appendChild(div);
    }

    deattachContent(){
        document.removeChild("div");

    }
}


customElements.define('toast-template', Toast);