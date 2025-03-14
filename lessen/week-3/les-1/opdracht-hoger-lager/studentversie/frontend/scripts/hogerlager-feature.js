import {Model} from "./model.js";

const model = new Model();

class HogerLagerFeature{
    async init(){
        console.log('HogerLagerFeature init');

        //#student-start

        if(window.location.href.split("?")[1]){
            try{
                let answer = await model.getAnswer(
                    window.location.href.split("?")[1].split("=")[1]
                );
                document.getElementById("answer").textContent = answer;
            } catch (e) {
                console.log(e);
            }

        }
        //#student-end

    }

    eventListeners(){
        document.getElementById('btnSubmit')
            .addEventListener('click', this.submitGuess);
    }

    async submitGuess(event){
        
    }
}

export {HogerLagerFeature};
