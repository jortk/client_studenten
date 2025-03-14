class Data {

    async getAnswer(gok) {

        //#student-start
        const res = await fetch("http://127.0.0.1:3000/getal?gok=" + gok);
        const data = await res.json();
        return data;
        //#student-end
    }
}
export {Data};
