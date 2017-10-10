var showQuote = function (data) {
    $('#mainContent').html(data.value);
};

var handleCategoryChange = function () {
    var categoryName = $("#categories").val();

    var randomJokeUrl = 'https://api.chucknorris.io/jokes/random?category=' + categoryName;

    $.ajax({url: randomJokeUrl, method: 'GET'}).done(
        function (data) {
            $("#joke").html(data.value);
        }
    );
};

var loadCategories = function (data) {
    for (var i = 0; i < data.length; i++) {
        $('#categories').append('<option>' + data[i] + '</option>');
    }
    $("#categories").change(handleCategoryChange);
};

$.ajax(
    {
        url: 'https://api.chucknorris.io/jokes/categories',
        method: 'GET'
    }
).done(loadCategories);

