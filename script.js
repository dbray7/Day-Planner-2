var date = moment().format("MMM Do YY");
var getTime = moment().format('H');
var past;
var present;
var future;
var currentDay;
var dayTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

function updatetime() {
    for (var i = 0; i < dayTime.length; i++) {
        if (parseInt(dayTime[i]) > getTime) {
            $("#" + dayTime[i]).addClass("past");
        }
        else if (parseInt(dayTime[i]) < getTime) {
            $("#" + dayTime[i]).addClass("future");
        }
        else if (parseInt(dayTime[i]) == getTime) {
            $("#" + dayTime[i]).addClass("present");

        }
    }
}
updatetime();
$("#currentDate").append(date);
$("#saveBtn").on("click", function () {
    var dayTime = $(this).parent().attr("id");
    var textInput = $("input").val().trim();

    localStorage.setItem(dayTime, textInput);
    console.log(dayTime, textInput);
});
$("#9am").children("input").val(localStorage.getItem("9am"));

$("#10am").children("input").val(localStorage.getItem("10am"));

$("#11am").children("input").val(localStorage.getItem("11am"));

$("#12pm").children("input").val(localStorage.getItem("12pm"));

$("#1pm").children("input").val(localStorage.getItem("1pm"));

$("#2pm").children("input").val(localStorage.getItem("2pm"));

$("#3pm").children("input").val(localStorage.getItem("3pm"));

$("#4pm").children("input").val(localStorage.getItem("4pm"));

$("#5pm").children("input").val(localStorage.getItem("5pm"));
