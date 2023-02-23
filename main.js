function make_brawler_question() {
    document.getElementById("the good shit").innerHTML += "<div class='content starting_questions' id='brawler question'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("brawler question").innerHTML += "<label for='starting question 2'>Choose an option</label><br><br>"
    document.getElementById("brawler question").innerHTML += "<input class='standard button' type='button' value='Standard Calculation' id='standard' onclick=''><br><br>"
    document.getElementById("brawler question").innerHTML += "<input class='fast button' type='button' value='Fast Calculation: less questions, less time, less accurate' id='standard' onclick=''><br><br>"
}

function make_result_place() {
    document.getElementById("the good shit").innerHTML += "<div class='content result' id='the result'> "
    document.getElementById("the good shit").innerHTML += "</div>"
}

function yes_4_pass() {
    document.getElementById("restart button").className = "restart button"
    var clicked = document.getElementById("yes 4 pass");
    clicked.className = "yes button clicked"
    var not_clicked = document.getElementById("no 4 pass");
    not_clicked.className = "no button"
    have_pass = true
}

function no_4_pass() {
    document.getElementById("restart button").className = "restart button"
    var clicked = document.getElementById("no 4 pass");
    clicked.className = "no button clicked"
    var not_clicked = document.getElementById("yes 4 pass");
    not_clicked.className = "yes button"
    have_pass = false
}

function restart_ready() {
    document.getElementById("restart button").className = "restart button"
}

function restart() {
    document.getElementById("credit amount").value = ""
    document.getElementById("needed credit amount").value = ""
    document.getElementById("no 4 pass").className = "no button"
    document.getElementById("yes 4 pass").className = "yes button"
    document.getElementById("restart button").className = "restart button clicked"
    document.getElementById("done button").value = "Done"
    document.getElementById("done button").className = "done button"
    document.getElementById("the result").innerHTML = "Results will be here."
}

function check() {
    if(document.getElementById("yes 4 pass").className == "yes button" && document.getElementById("no 4 pass").className == "no button")
        return true
    if (document.getElementById("credit amount").value == "")
        return true
    if (document.getElementById("needed credit amount").value == "")
        return true
    return false
}

function cal() {
    var day = 600 + 30 + 7*5 +10 + 60/4
    var weekend_events = 50 + 500
    if (have_pass) {week_seasonal = 250 * 5 + 500 * 3} 
    else {week_seasonal = 250 * 4 + 500 * 2}
    var one_week_tok = day * 7 + week_seasonal + weekend_events
    var one_day_tok = one_week_tok / 7
    var cal_day_cre = one_day_tok/500*25
    return cal_day_cre
}
function solve() {
    var credit_amount = document.getElementById("credit amount").value;
    var needed_credit_amount = document.getElementById("needed credit amount").value;
    var needed_credits = needed_credit_amount - credit_amount
    if(check())
    {
        alert("You haven't answered all questions!")
        return 0
    }
    document.getElementById("done button").value = "WOO!"
    document.getElementById("done button").className = "done button clicked"
    var one_day_cre = cal()
    var days_needed = Math.ceil(needed_credits / one_day_cre)
    make_result_place()
    var the_result = document.getElementById("the result");
    the_result.innerHTML = `It'll take ${days_needed} days to get your brawler`
    the_result.innerHTML += `<br>`
    the_result.innerHTML += `You'll get around ${Math.floor(one_day_cre*145)} ~ ${Math.floor(one_day_cre*229)} coins`
    window.scrollBy(0, 500);
}