export class MModal {
    constructor() {

    }

    getFormFieldsValue(form){
        const formData = new FormData(form);
        return {
            name: formData.get("card"),
            matiere: formData.get("matiere")
        }
    }
}