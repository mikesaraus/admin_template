// flatpickr


// Chocies Select plugin
document.addEventListener('DOMContentLoaded', function() {
    var genericExamples = document.querySelectorAll('[data-trigger]');
    for (i = 0; i < genericExamples.length; ++i) {
        var element = genericExamples[i];
        new Choices(element, {
            searchPlaceholderValue: 'Type to search',
        });
    }
})

flatpickr('#datepicker-basic')