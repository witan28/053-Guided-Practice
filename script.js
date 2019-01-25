$("#replyYes").click(function() {
    $("#homers-reply").text("Mmm donuts...");
});

$("#replyNo").click(function() {
    $("#homers-reply").text("Doh!");
    $("body").css("background-color","red");
    $("h1").css("color","green");
    $("img").css("width","350px");
    $("img").css("background-image","url(https://www.seaoatsrentals.com/wp-content/uploads/2015/06/DonutsVariety.jpg");
});