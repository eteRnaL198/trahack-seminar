const getDomElementModule = {
        getId: (id) => {
            const element = document.getElementById(id);
            console.log(element.innerText);
        },
        getClasses: (className) => {
            const classes = document.getElementsByClassName(className);
            for(const classNode of classes) {
                console.log(classNode.innerText);
            }
        },
        submitForm: () => {
            const forms = document.forms.demoForm;
            const title = forms.title.value;
            const description = forms.description.value;
            let checkedLanguages = [];
            for (const language of forms.languages) {
                if(language.checked) {
                    checkedLanguages.push(language.value);
                }
            }
            console.log(
                "title: " + title,
                "description: " + description,
                "language: " + checkedLanguages
            );
        }
};