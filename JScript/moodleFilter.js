$(document).ready(function() {
    $("body").data("listBefore", addInputFilter());

    $(document).on("click", "#btn-filter", function() {
        filterList();
    });
});

function addInputFilter() {
    var list = $(".block_course_list .list");

    var doc = document;
    var div = doc.createElement("div");
    var input = doc.createElement("input");
    var button = doc.createElement("button");

    $(input).attr("id", "filter");
    $(button).attr("id", "btn-filter");
    $(button).attr("onclick", "filterList();");
    $(button).text("Filter");

    $(div).append(input);
    $(div).append(button);
    $(div).append($(list).html());

    $(list).html(div)

    return $(list).html();
}

function filterList() {
    var filter = $("#filter").val();
    var listBefore = $("body").data("listBefore");
    var list = $(".block_course_list .list");
    $(list).html(listBefore);

    var listLi = list.find("li");
    var total = listLi.length;

    listLi.each(function() {
        var link = $(this).find("a");
        var title = link.attr("title");

        if (title.indexOf(filter) == -1)
            $(this).remove();
    });
}
