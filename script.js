const formTag=document.getElementById('siteForm');
formTag.addEventListener('submit',validateInfoForm,false);

const developersField=formTag.elements.sitedevelopers;
developersField.addEventListener('blur',validateDevelopersField,false);

const sitenameField=formTag.elements.sitename;
sitenameField.addEventListener('blur',validateSitenameField,false);

const siteurlField=formTag.elements.siteurl;
siteurlField.addEventListener('blur',validateSiteurlField,false);

const sitedateField=formTag.elements.sitedate;
sitedateField.addEventListener('input',validateSitedateField,false);
sitedateField.addEventListener('blur',validateSitedateField,false);

const visitorsField=formTag.elements.visitors;
visitorsField.addEventListener('blur',validateVisitorsField,false);
visitorsField.addEventListener('change',validateVisitorsField,false);

const emailField=formTag.elements.email;
emailField.addEventListener('blur',validateEmailField,false);

const divisionField=formTag.elements.division;
divisionField.addEventListener('blur',validateDivisionField,false);
divisionField.addEventListener('change',validateDivisionField,false);

const radioField=formTag.elements.payment;
const labelRadio=document.getElementById('radio');
labelRadio.addEventListener('change',validateRadioField,false);

const checkboxField=formTag.elements.votes;
checkboxField.addEventListener('change',validateCheckboxField,false);

const descriptionField=formTag.elements.description;
descriptionField.addEventListener('blur',validateDescriptionField,false);

function validateDevelopersField() {

    const valueField=developersField.value;
    const labelElem=document.getElementById("sitedevelopers");
    const spanElem = document.getElementById('errorMessage-developers');
    if ( (!valueField || valueField.length>30)  && !spanElem ) {
        const spanElem = document.createElement("span");
        spanElem.className = "longtext-span";
        spanElem.setAttribute('id', 'errorMessage-developers');
        const textError = document.createTextNode("поле не заполнено или превышает 30 символов");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
        //developersField.focus();
    } else if (valueField && valueField.length<=30 && spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateSitenameField() {

    const valueField=sitenameField.value;
    const labelElem=document.getElementById("sitename");
    const spanElem = document.getElementById('errorMessage-sitename');
    if (  (!valueField || valueField.length>30) && !spanElem ) {
        const spanElem = document.createElement("span");
        spanElem.className = "longtext-span";
        spanElem.setAttribute('id', 'errorMessage-sitename');
        const textError = document.createTextNode("поле не заполнено или превышает 30 символов");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    } else if (valueField && valueField.length<=30 && spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateSiteurlField() {

    const valueField=siteurlField.value;
    const labelElem=document.getElementById("siteurl");
    const spanElem = document.getElementById('errorMessage-siteurl');
    if (  (!valueField || valueField.length>30) && !spanElem ) {
        const spanElem = document.createElement("span");
        spanElem.className = "longtext-span";
        spanElem.setAttribute('id', 'errorMessage-siteurl');
        const textError = document.createTextNode("поле не заполнено или превышает 30 символов");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    } else if (valueField && valueField.length<=30 && spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateSitedateField() {

    const valueField=sitedateField.value;
    const labelElem=document.getElementById("sitedate");
    const spanElem = document.getElementById('errorMessage-date');
    if (  !valueField && !spanElem ) {
        const spanElem = document.createElement("span");
        spanElem.className = "number-span";
        spanElem.setAttribute('id', 'errorMessage-date');
        const textError = document.createTextNode("поле не заполнено");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    } else if (valueField && spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateVisitorsField() {

    const valueField=visitorsField.value;
    const labelElem=document.getElementById("visitors");
    const spanElem = document.getElementById('errorMessage-visitors');
    if ( (!valueField || valueField < 0) && !spanElem ) {
        const spanElem = document.createElement("span");
        spanElem.className = "number-span";
        spanElem.setAttribute('id', 'errorMessage-visitors');
        const textError = document.createTextNode("поле не заполнено или значение отрицательное");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    } else if (valueField && valueField >= 0 && spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateEmailField() {

    const valueField=emailField.value;
    const labelElem=document.getElementById("email");
    const spanElem = document.getElementById('errorMessage-email');
    if ( (!valueField || valueField.length>25) && !spanElem) {
        const spanElem = document.createElement("span");
        spanElem.className = "shorttext-span";
        spanElem.setAttribute('id', 'errorMessage-email');
        const textError = document.createTextNode("поле не заполнено или превышает 25 символов");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    } else if (valueField && valueField.length<=25 && spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateDivisionField() {

    const valueField=divisionField.value;
    const labelElem=document.getElementById("division");
    const spanElem = document.getElementById('errorMessage-division');
    if ( valueField === "3" && !spanElem) {
        const spanElem = document.createElement("span");
        spanElem.className = "shorttext-span";
        spanElem.setAttribute('id', 'errorMessage-division');
        const textError = document.createTextNode("пожалуйста, выберите другую рубрику");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    } else if (valueField !== "3" && spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateRadioField() {

    const valueField=radioField.value;
    const labelElem=document.getElementById("radio");
    const spanElem = document.getElementById('errorMessage-radio');
    if ( valueField === "3") {
        const spanElem = document.createElement("span");
        spanElem.className = "radio-span";
        spanElem.setAttribute('id', 'errorMessage-radio');
        const textError = document.createTextNode("VIP размещение недоступно");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    } 
    if ( valueField === "" && !spanElem) {
        const spanElem = document.createElement("span");
        spanElem.className = "radio-span";
        spanElem.setAttribute('id', 'errorMessage-radio');
        const textError = document.createTextNode("поле не заполнено");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    } else if (spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateCheckboxField() {

    const labelElem=document.getElementById("checkbox");
    const spanElem = document.getElementById('errorMessage-checkbox');
    if ( !checkboxField.checked && !spanElem) {
        const spanElem = document.createElement("span");
        spanElem.className = "check-span";
        spanElem.setAttribute('id', 'errorMessage-checkbox');
        const textError = document.createTextNode("поле не заполнено");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    }  else if (checkboxField.checked && spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateDescriptionField() {

    const valueField=descriptionField.value;
    const labelElem=document.getElementById("description");
    const spanElem = document.getElementById('errorMessage-description');
    if (  !valueField && !spanElem ) {
        const spanElem = document.createElement("span");
        spanElem.className = "longtext-span";
        spanElem.setAttribute('id', 'errorMessage-description');
        const textError = document.createTextNode("поле не заполнено");
        spanElem.appendChild(textError);
        labelElem.appendChild(spanElem);
    } else if (valueField && spanElem) {
        labelElem.removeChild(spanElem);  
    }
}

function validateInfoForm(eo) {
    eo=eo||window.event;

    if ( !developersField.value || developersField.value.length>30 ) {
        validateDevelopersField();
        eo.preventDefault(); 
    } 
    if (  !sitenameField.value || sitenameField.value.length>30 ) {
        validateSitenameField();
        eo.preventDefault(); 
    } 
    if (  !siteurlField.value || siteurlField.value.length>30 ) {
        validateSiteurlField();
        eo.preventDefault();
    }
    if (  !sitedateField.value ) {
        validateSitedateField();
        eo.preventDefault(); 
    }
    if (  !visitorsField.value || visitorsField.value < 0 ) {
        validateVisitorsField();
        eo.preventDefault(); 
    }
    if (  !emailField.value || emailField.value.length>25 ) {
        validateEmailField();
        eo.preventDefault(); 
    }
    if (  divisionField.value === "3" ) {
        validateDivisionField();
        eo.preventDefault(); 
    }
    if (  radioField.value === "" || radioField.value === "3" ) {
        validateRadioField();
        eo.preventDefault(); 
    }
    if (  !checkboxField.checked ) {
        validateCheckboxField();
        eo.preventDefault(); 
    }
    if (  !descriptionField.value ) {
        validateDescriptionField();
        eo.preventDefault(); 
    }

    const arr = [ developersField, sitenameField, siteurlField, 
        sitedateField, visitorsField, emailField,
        divisionField, radioField, checkboxField, descriptionField ];
    
    for (let elem of arr) {
        if (elem === developersField ||
            elem === sitenameField ||
            elem === siteurlField) {
                if (!elem.value || elem.value.length>30) {
                    elem.focus();
                    break;
                }
        } else if (elem === sitedateField || 
            elem === descriptionField) {
            if (!elem.value) {
                elem.focus();
                break;
            }
        } else if (elem === visitorsField) {
            if (!elem.value || elem.value < 0) {
                elem.focus();
                break;
            }
        } else if (elem === emailField) {
            if (!elem.value || elem.value.length>25) {
                elem.focus();
                break;
            }
        } else if (elem === divisionField) {
            if (elem.value === "3") {
                elem.focus();
                break;
            }
        } else if (elem === radioField) {
            if (elem.value === "" || elem.value === "3") {
                document.getElementById('radio').scrollIntoView();
                break;
            }
        } else if (elem === checkboxField) {
            if (!elem.checked) {
                document.getElementById("checkbox").scrollIntoView();
                break;
            }
        }
    }

}

