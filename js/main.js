/**
 * Created by Artem on 09.08.2016.
 */

$(document).ready(function () {
    $(".dropdown").hover(function () {
        $("#menu").css("display", "block");
        $(".dropdown").addClass("aboutBlueButton");
    }, function () {
        $("#menu").css("display", "none");
        $(".dropdown").removeClass("aboutBlueButton");
    });
    $(".slide_container").hover(function () {
        $("#menu").css("display", "block");
        $(".dropdown").addClass("aboutBlueButton");
    }, function () {
        $("#menu").css("display", "none");
        $(".dropdown").removeClass("aboutBlueButton");
    });
});
;