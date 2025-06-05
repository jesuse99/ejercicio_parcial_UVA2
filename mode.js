$('#mode_light').click(setModeLight);
$('#mode_dark').click(setModeDark);
getMode();

function setModeLight() {
    $('#mode_icon').removeClass('bi-moon-fill').addClass('bi-sun-fill');

    $('body').removeClass('bg-black').addClass('bg-white');
    $('nav').removeClass('bg-dark').addClass('bg-danger');

    const title = $('#title');
    if (title) {
        title.removeClass('bg-primary');
        title.css('background', '#2f4f4f');
    }

    const table = $('table');
    if (table) {
        table.removeClass('table-dark');
        table.addClass('table-light');
    }

    const sections = $('.section');
    if (sections) {
        sections.each(function () {
            $(this).removeClass('text-white').addClass('text-black');
            $(this).removeClass('bg-dark').addClass('bg-body-tertiary');
        }).get();
    }

    const lists = $('.list');
    if (lists) {
        lists.each(function () {
            $(this).attr('data-bs-theme', 'light');
        }).get()
    }

    const card = $('#card');
    if (card) {
        card.attr('data-bs-theme', 'light');
    }

    const form = $('#formulario');
    if (form) {
        form.attr('data-bs-theme', 'light');
        form.removeClass('bg-dark');
        form.addClass('bg-light').addClass('text-black');
    }

    $('footer').removeClass('bg-dark').addClass('bg-danger');

    localStorage.setItem("pageMode", 0);
};

function setModeDark() {
    $('#mode_icon').removeClass('bi-sun-fill').addClass('bi-moon-fill');

    $('body').removeClass('bg-white').addClass('bg-black');
    $('nav').removeClass('bg-danger').addClass('bg-dark');

    const title = $('#title');
    if (title) {
        title.removeClass('bg-primary');
        title.css('background', '#0D6EFD');
    }

    const table = $('table');
    if (table) {
        table.removeClass('table-light');
        table.addClass('table-dark');
    }

    const sections = $('.section');
    if (sections) {
        sections.each(function () {
            $(this).removeClass('text-black').addClass('text-white');
            $(this).removeClass('bg-body-tertiary').addClass('bg-dark');
        }).get();
    }

    const lists = $('.list');
    if (lists) {
        lists.each(function () {
            $(this).attr('data-bs-theme', 'dark');
        }).get()
    }

    const card = $('#card');
    if (card) {
        card.attr('data-bs-theme', 'dark');
    }

    const form = $('#formulario');
    if (form) {
        form.attr('data-bs-theme', 'dark');
        form.removeClass('bg-light').removeClass('text-black');
        form.addClass('bg-dark');
    }

    $('footer').removeClass('bg-danger').addClass('bg-dark');

    localStorage.setItem("pageMode", 1);
};

function getMode() {
    const pageMode = localStorage.getItem("pageMode");
    if (pageMode && pageMode == 0) {
        setModeLight();
    } else {
        setModeDark();
    }
}

