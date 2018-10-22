/* Gets the data stored in JSON-file and adds that to te function and starts it */ 
$.getJSON('/json/navbar.json', navbarfunction);

/*Creates a function named navbarfunction, which expects to get data it will store inside the variable "language_data" */
function navbarfunction(language_data) {

    /*Hides the OLD html code from navbar*/
    $(document.getElementById('nav')).hide();

    /*Creates an empty unsorted list (will add the navbar in here)*/
    let ul_sv = $('<ul/>').attr('class','navbar-nav');
    let ul_en = $('<ul/>').attr('class','navbar-nav');

    /*Create four empty sorted lists (will add the idividual items (higscor, historia etc)into these lists. */
    let navitem1_sv = $('<li/>').attr('class','nav-item active');
    let navitem2_sv = $('<li/>').attr('class', 'nav-item');
    let navitem3_sv = $('<li/>').attr('class', 'nav-item');
    let navitem4_sv = $('<li/>').attr('class', 'nav-item');

    /*Create four empty sorted lists (will add the idividual items (higscor, history etc)into these lists. */
    let navitem1_en = $('<li/>').attr('class', 'nav-item active');
    let navitem2_en = $('<li/>').attr('class', 'nav-item');
    let navitem3_en = $('<li/>').attr('class', 'nav-item');
    let navitem4_en = $('<li/>').attr('class', 'nav-item');

    /* Append adds the text stored in language-date (taken from JSON file)and html-code to the navbar item (empty list)*/
    navitem1_sv.append('<a class="nav-link" href="/">'+ language_data.sv[0] + '<span class="sr-only">(current)</span></a>');
    navitem2_sv.append('<a class="nav-link" href="/game">' + language_data.sv[1] + '</a>');
    navitem3_sv.append('<a class="nav-link" href="/highscore">' + language_data.sv[2] + '</a>');
    navitem4_sv.append('<a class="nav-link" href="/history">' + language_data.sv[3] + '</a>');

    /* Append adds the text stored in language-date (taken from JSON file)and html-code to the navbar item (empty list)*/
    navitem1_en.append('<a class="nav-link" href="/">' + language_data.en[0] + '<span class="sr-only">(current)</span></a>');
    navitem2_en.append('<a class="nav-link" href="/game">' + language_data.en[1] + '</a>');
    navitem3_en.append('<a class="nav-link" href="/highscore">' + language_data.en[2] + '</a>');
    navitem4_en.append('<a class="nav-link" href="/history">' + language_data.en[3] + '</a>');

    /* Adds the navitems to the unsorted list*/ 
    ul_sv.append(navitem1_sv);
    ul_sv.append(navitem2_sv);
    ul_sv.append(navitem3_sv);
    ul_sv.append(navitem4_sv);

    ul_en.append(navitem1_en);
    ul_en.append(navitem2_en);
    ul_en.append(navitem3_en);
    ul_en.append(navitem4_en);

    /*Adds the unsorted list that stores the sorted list to the navbar*/ 
    $(document.getElementById('navbarNavDropdown')).append(ul_sv);
    $(document.getElementById('navbarNavDropdown')).append(ul_en);

    /*The English are hidden (until English flag is clicked on)*/
    ul_en.hide();

    /* When the Swedish flag is clicked on, the Swedish is shown and the English is hidden*/
    $('.svflag').click(function(){
        ul_sv.show();
        ul_en.hide();
    });
    /* When the English flag is clicked on, the English is shown and Swedish is hidden*/ 
    $('.ukflag').click(function(){
        ul_sv.hide();
        ul_en.show();
    });

    }