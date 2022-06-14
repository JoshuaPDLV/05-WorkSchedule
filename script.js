for (var i = 9; i < 18; i++) {
    var currentHour = moment().hours(); // Number
    var colorKey = ""; 
    if (currentHour > i) {
        colorKey = "past"
    }
    else if (currentHour === i) {
        colorKey = "present"
    }
    else {
        colorKey = "future"
    }
    var hourDisplay = ""
    if (i < 12) {
        hourDisplay = i+"am"
    }
    else if ( i === 12) {
        hourDisplay = i+ "pm"
    }
    else {
        hourDisplay = i-12+ "pm"
    }
    var rowDiv = $("<div>").addClass("row time-block").attr("id",i)
    var hourDiv = $("<div>").addClass("col-2 hour").text(hourDisplay)
    var textAreaDiv = $("<textarea>").addClass("col-8 border border-dark description "+colorKey).val(localStorage.getItem(i))
    var btnDiv = $("<div>").addClass("col-2")
    var saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("Save")
    $(".container").append(rowDiv.append(hourDiv,textAreaDiv,btnDiv.append(saveBtn)))
}
$(".saveBtn").on("click",function(){
    var activity = $(this).parent().siblings(".description").val().trim()
    var hour = $(this).parent().parent().attr("id")
    localStorage.setItem(hour, activity)
})