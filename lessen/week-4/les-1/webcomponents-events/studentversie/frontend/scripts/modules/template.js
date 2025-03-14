
const appTemplate = {
    id: 'app-click-cirkel-tpl',
    template: `
    <div id="app-click-cirkel" class="app">
    <h1>Click de cirkel</h1>
        <div class="cirkels">
            <click-cirkel id="cirkel-1" color="red">a</click-cirkel>
            <click-cirkel id="cirkel-2" color="blue">b</click-cirkel>
            <click-vierkant id="vierkant-1" color="blue">default value - geen webcomponent</click-vierkant>
            <click-driehoek id="driehoek-1" color="blue"></click-driehoek>
        </div>
    </div> 
    `
}

const cirkelTemplate = {
    id: 'click-cirkel-tpl',
    template: `
    <div class="cirkel">
        <p data-bind="cirkelClicks"></p>
    </div> 
    `
}

const vierkantTemplate = {
    id: 'click-vierkant-tpl',
    template: `
    <div class="vierkant">
        <p data-bind="vierkantClicks">vierkant</p>
    </div> 
    `
}

const driehoekTemplate = {
    id: 'click-driehoek-tpl',
    template: `
    <div class="driehoek">
        <p data-bind="driehoekClicks">driehoek</p>
    </div> 
    `
}

class Template{

    attachTemplates(){
        this.attachTemplate(appTemplate);
        this.attachTemplate(cirkelTemplate);
        this.attachTemplate(vierkantTemplate);
        this.attachTemplate(driehoekTemplate);
    }

    attachTemplate(tplObject){
        const templateNode = document.createElement('template');
        templateNode.id = tplObject.id;
        templateNode.innerHTML = tplObject.template;
        const body = document.querySelector('body');
        body.appendChild(templateNode);
    }

}

const template = new Template();

export {template};
