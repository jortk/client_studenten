class StoereTitel extends HTMLElement {
    shadowRoot;
    constructor() {
        super();
        console.log('hi');
        this.shadowRoot = this.attachShadow({ mode: 'open' });

        const span = document.createElement('span');
        span.setAttribute('class', 'small');
        span.innerHTML = '<h1>Hoi groot</h1>';

        const button = document.createElement('button');
        button.id = 'klikker';
        button.textContent = 'Klik';
        span.appendChild(button);

        const p = document.createElement('p');
        p.appendChild(span);
        const Count = document.getElementById("count");
        this.shadowRoot.appendChild(p);

        button.addEventListener('click', (e) => {
            Count.textContent++;
            console.log('Button clicked:', e);
        });

        const myEvent = new CustomEvent("jors-event", {
            cancelable: true,
            composed: true,
        });
        this.dispatchEvent(myEvent);
    }
}

customElements.define('stoere-titel', StoereTitel);
