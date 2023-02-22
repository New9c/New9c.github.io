
function yes_4_pass() {
    var clicked = document.getElementById("yes 4 pass");
    clicked.className = "yes button clicked"
    var not_clicked = document.getElementById("no 4 pass");
    not_clicked.className = "no button"
    have_pass = true
}

function no_4_pass() {
    var clicked = document.getElementById("no 4 pass");
    clicked.className = "no button clicked"
    var not_clicked = document.getElementById("yes 4 pass");
    not_clicked.className = "yes button"
    have_pass = false
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
    var one_day_cre = cal()
    var days_needed = Math.ceil(needed_credits / one_day_cre)
    var the_result = document.getElementById("the result");
    the_result.style.display = "undefined"
    the_result.innerHTML = "It'll take "+days_needed+" days to get your brawler <br> You'll get around "+Math.floor(one_day_cre*145)+" ~ "+Math.floor(one_day_cre*229)+" coins"
}