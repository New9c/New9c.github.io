function make_brawler_question() {
    if(document.getElementById("brawler button").className != "brawler button")
        return 0
    document.getElementById("brawler button").className = "brawler button clicked"
    document.getElementById("future_days button").className = "future_days button disabled"
    document.getElementById("the good shit").innerHTML += "<div class='content starting_questions' id='brawler question'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("brawler question").innerHTML += "<label for='starting question 2'>Choose an option</label><br><br>"
    document.getElementById("brawler question").innerHTML += "<input class='standard button' type='button' value='Standard Calculation' id='standard' onclick='make_brawler_standard_questions()'><br><br>"
    document.getElementById("brawler question").innerHTML += "<input class='fast button' type='button' value='Fast Calculation' id='fast' onclick='make_brawler_fast_questions()'><br><br>"
    window.scrollBy(0, 500);
}

function make_brawler_standard_questions() {
    if(document.getElementById("standard").className != "standard button")
        return 0
    document.getElementById("standard").className = "standard button clicked"
    document.getElementById("fast").className = "fast button disabled"
    document.getElementById("the good shit").innerHTML += "<div class='content restart_holder' id='restart_holder'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("restart_holder").innerHTML += "<input class='restart button disabled' type='button' value='Restart' id='restart button' onclick='restart()'>"
    document.getElementById("the good shit").innerHTML += "<div class='content question' id='brawler standard questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='credit amount'>Credit amount(bottom left of the brawler's face):</label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='credit amount' onchange='restart_ready()'><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='needed credit amount'>Needed credit amount(bottom right of the brawler's face): </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='needed credit amount' onchange='restart_ready()'><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='current token amount'>Current token amount(left bottom corner): </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='current token amount' onchange='restart_ready()'><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='tier'>Which tier are you at?(Use 70 if higher than 69): </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='range' min='0' max='70' class='tier' id='tier' oninput='put_slider_value()'>"
    document.getElementById("brawler standard questions").innerHTML += "<p id='slider value'>35</p><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='have pass'>Do you have the brawl pass this season? </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass' onclick='yes_4_pass()'>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass' onclick='no_4_pass()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='done button'  type='button' value='Done' id='done button' onclick=''>"
    window.scrollBy(0, 500);
}
function put_slider_value(){
    document.getElementById("slider value").innerHTML = document.getElementById("tier").value
    if(document.getElementById("tier").value == 70)
        document.getElementById("slider value").innerHTML = "69+"
}
function make_brawler_fast_questions() {
    if(document.getElementById("fast").className != "fast button")
        return 0
    document.getElementById("fast").className = "fast button clicked"
    document.getElementById("standard").className = "standard button disabled"
    document.getElementById("the good shit").innerHTML += "<div class='content restart_holder' id='restart_holder'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("restart_holder").innerHTML += "<input class='restart button disabled' type='button' value='Restart' id='restart button' onclick='restart()'>"
    document.getElementById("the good shit").innerHTML += "<div class='content question' id='brawler fast questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("brawler fast questions").innerHTML += "<label for='credit amount'>Credit amount(bottom left of the brawler's face):</label><br>"
    document.getElementById("brawler fast questions").innerHTML += "<input type='text' id='credit amount' onchange='restart_ready()'><br>"
    document.getElementById("brawler fast questions").innerHTML += "<label for='needed credit amount'>Needed credit amount(bottom right of the brawler's face): </label><br>"
    document.getElementById("brawler fast questions").innerHTML += "<input type='text' id='needed credit amount' onchange='restart_ready()'><br>"
    document.getElementById("brawler fast questions").innerHTML += "<label for='have pass'>Do you have the brawl pass this season? </label><br>"
    document.getElementById("brawler fast questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass' onclick='yes_4_pass()'>"
    document.getElementById("brawler fast questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass' onclick='no_4_pass()'><br><br>"
    document.getElementById("brawler fast questions").innerHTML += "<input class='done button'  type='button' value='Done' id='done button' onclick='solve()'>"
    window.scrollBy(0, 500);
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
    document.getElementById("restart button").className = "restart button disabled"
    document.getElementById("done button").value = "Done"
    document.getElementById("done button").className = "done button"
    document.getElementById("the result").innerHTML = "(Results will be here.)"
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
    if(check())
    {
        alert("You haven't answered all questions!")
        return 0
    }
    if(document.getElementById("yes 4 pass").className == "yes button clicked")
        document.getElementById("no 4 pass").className = "no button disabled"
    else
        document.getElementById("yes 4 pass").className = "yes button disabled"
    var credit_amount = document.getElementById("credit amount").value;
    var needed_credit_amount = document.getElementById("needed credit amount").value;
    var needed_credits = needed_credit_amount - credit_amount
    document.getElementById("done button").value = "WOO!"
    document.getElementById("done button").className = "done button disabled"
    var one_day_cre = cal()
    var days_needed = Math.ceil(needed_credits / one_day_cre)
    make_result_place()
    var the_result = document.getElementById("the result");
    the_result.innerHTML = `It'll take ${days_needed} days to get your brawler`
    the_result.innerHTML += `<br>`
    the_result.innerHTML += `You'll get around ${Math.floor(one_day_cre*145)} ~ ${Math.floor(one_day_cre*229)} coins`
    window.scrollBy(0, 500);
}