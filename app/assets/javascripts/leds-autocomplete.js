const codeAutocomplete = document.querySelector('#code');
if (codeAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: codeAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const countryAutocomplete = document.querySelector('#country');
if (countryAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: countryAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const modelAutocomplete = document.querySelector('#model');
if (modelAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: modelAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const actCodeAutocomplete = document.querySelector('#act-code');
if (actCodeAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: actCodeAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const fouCodeAutocomplete = document.querySelector('#fou-code');
if (fouCodeAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: fouCodeAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const reaCodeAutocomplete = document.querySelector('#rea-code');
if (reaCodeAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: reaCodeAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const resCodeAutocomplete = document.querySelector('#res-code');
if (resCodeAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: resCodeAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const losCodeAutocomplete = document.querySelector('#los-code');
if (losCodeAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: losCodeAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const losCode2Autocomplete = document.querySelector('#los-code-2');
if (losCode2Autocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: losCode2Autocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const losCreatorAutocomplete = document.querySelector('#los-creator');
if (losCreatorAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: losCreatorAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const blockCodeAutocomplete = document.querySelector('#block-code');
if (blockCodeAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: blockCodeAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const bodyAutocomplete = document.querySelector('#body');
if (bodyAutocomplete) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: bodyAutocomplete,
      showAllValues: true,
      preserveNullOptions: false,
      confirmOnBlur: false
    });
}

const poaRadios = document.querySelectorAll('input[name="poa"]');

if (poaRadios && poaRadios.length > 0) {
    poaRadios.forEach((input) => {
        input.addEventListener('change', handleBail);
    });

    function handleBail(e) {
        toggleBail(e.target);
    }

    function toggleBail(radio) {
        if (radio.value === 'Warrant' || radio.value === 'Conditional warrant') {
            toggleBailOn();
        } else {
            toggleBailOff();
        }
    }

    function toggleBailOn() {
        const wbfbField = document.querySelector('#wbfb-wrapper');
        wbfbField.classList.remove('hidden');
    }
    function toggleBailOff() {
        const wbfbField = document.querySelector('#wbfb-wrapper');
        wbfbField.classList.add('hidden');
    }

    const preSelectedValue = document.querySelector('input[name="poa"]:checked');
    if (preSelectedValue) {
        toggleBail(preSelectedValue);
    }
}

const addressTypeRadios = document.querySelectorAll('input[name="addressType"]');

if (addressTypeRadios && addressTypeRadios.length > 0) {
    addressTypeRadios.forEach((input) => {
        input.addEventListener('change', handleOther);
    });

    function handleOther(e) {
        toggleOther(e.target);
    }

    function toggleOther(radio) {
        if (radio.value === 'Other') {
            toggleOtherOn();
        } else {
            toggleOtherOff();
        }
    }

    function toggleOtherOn() {
        const otherFieldWrapper = document.querySelector('#otherField-wrapper');
        otherFieldWrapper.classList.remove('hidden');
    }
    function toggleOtherOff() {
        const otherFieldWrapper = document.querySelector('#otherField-wrapper');
        otherFieldWrapper.classList.add('hidden');
    }

    const preSelectedValue = document.querySelector('input[name="addressType"]:checked');
    if (preSelectedValue) {
        toggleOther(preSelectedValue);
    }
}
