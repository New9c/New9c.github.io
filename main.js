function start_everything(){
    document.getElementById("disclaimer").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content starting_questions' id='starting_questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("starting_questions").innerHTML += "<label for='starting question 1'>What do you wanna know?</label><br><br>"
    document.getElementById("starting_questions").innerHTML += `<input class='brawler button' type='button' value="Know when I'll get my new brawler" id='brawler button' onclick='make_question(1)'><br>`
    document.getElementById("starting_questions").innerHTML += `<input class='future_days button' type='button' value="Know the rewards I'll get in ? days" id='future_days button' onclick='make_question(2)'>`
}

function make_question(type) {
    if(type == 1)
        var things = ["New Brawler", "brawler"]
    if(type == 2)
        var things = ["Days of Rewards", "future_days"]
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text starting_questions' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `${things[0]} >`
    document.getElementById("the good shit").innerHTML += `<div class="content starting_questions" id="${things[1]} question">`
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById(`${things[1]} question`).innerHTML += "<label for='starting question 2'>Choose an option</label><br><br>"
    document.getElementById(`${things[1]} question`).innerHTML += `<input class="standard button" type="button" value="Standard Calculation" id="standard" onclick="make_${things[1]}_question(1)"><br>`
    document.getElementById(`${things[1]} question`).innerHTML += `<input class="fast button" type="button" value="Fast Calculation" id="fast" onclick="make_${things[1]}_question(2)"><br>`
}

function make_brawler_question(type_sf){
    if(type_sf == 1)
        var things = ["Standard", "standard"]
    if(type_sf == 2)
        var things = ["Fast", "fast"]
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `New Brawler > ${things[0]} >`
    document.getElementById("the good shit").innerHTML += "<div class='content rarity question' id='rarity question'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("rarity question").innerHTML += "<label for='starting question 2'>What rarity is your brawler?</label><br><br>"
    document.getElementById("rarity question").innerHTML += `<input class='rare button' type='button' value='Rare' id='rare' onclick='make_brawler_${things[1]}_questions(160)'> `
    document.getElementById("rarity question").innerHTML += `<input class='super_rare button' type='button' value='Super Rare' id='super rare' onclick='make_brawler_${things[1]}_questions(430)'> `
    document.getElementById("rarity question").innerHTML += `<input class='epic button' type='button' value='Epic' id='epic' onclick='make_brawler_${things[1]}_questions(925)'> `
    document.getElementById("rarity question").innerHTML += `<input class='mythic button' type='button' value='Mythic' id='mythic' onclick='make_brawler_${things[1]}_questions(1900)'> `
    document.getElementById("rarity question").innerHTML += `<input class='legendary button' type='button' value='Legendary' id='legendary' onclick='make_brawler_${things[1]}_questions(3800)'> `
    document.getElementById("rarity question").innerHTML += `<input class='chromatic button' type='button' value='Chromatic' id='chromatic' onclick=''> `
    document.getElementById("rarity question").innerHTML += `<input class="starting button" type="button" value="Starting Brawler" id="starting" onclick="starting('${things[0]}')">`
}

function starting(text_4_tracker){
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `New Brawler > ${text_4_tracker} > Starting Brawler`
    document.getElementById("the good shit").innerHTML += "<div class='content result' id='result'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("result").innerHTML += "For new players:<br>"
    document.getElementById("result").innerHTML += "Shelly is the one and only starting brawler. You'll get her the moment you download brawl stars.<br><br>"
    document.getElementById("result").innerHTML += "For the rest of ya:<br>"
    document.getElementById("result").innerHTML += "You just like clicking buttons do ya? Fine, have another one.<br><br>"
    document.getElementById("result").innerHTML += "<a href='https://www.youtube.com/watch?v=fC7oUOUEEi4' class='stick button'>Totally not a rickroll</a>"
}

function make_brawler_standard_questions(credits_needed) {
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += "New Brawler > Standard >"
    document.getElementById("the good shit").innerHTML += "<div class='content question' id='brawler standard questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='restart button disabled' type='button' value='Restart' id='restart button' onclick='restart()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='credit amount'>Credit amount(bottom left of the brawler's face):</label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='credit amount' oninput='restart_ready()'><br><br>"
    needed_credit_amount = credits_needed;
    document.getElementById("brawler standard questions").innerHTML += "<label for='current token amount'>Current token amount(left bottom corner): </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='current token amount' oninput='restart_ready()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='tier'>Which tier are you at?(Use 70 if higher than 69): </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='range' min='0' max='70' class='tier' id='tier' oninput='put_slider_value()'>"
    document.getElementById("brawler standard questions").innerHTML += "<p id='slider value'>35</p><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='have pass'>Do you have the brawl pass this season? </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass' onclick='yes_4_pass()'> "
    document.getElementById("brawler standard questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass' onclick='no_4_pass()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='have pass'>Will you have the brawl pass right away next season? </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass 2' onclick='yes_4_pass_2()'> "
    document.getElementById("brawler standard questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass 2' onclick='no_4_pass_2()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='done button'  type='button' value='Done' id='done button' onclick=''>"
}

function put_slider_value(){
    document.getElementById("slider value").innerHTML = document.getElementById("tier").value
    if(document.getElementById("tier").value == 70)
        document.getElementById("slider value").innerHTML = "69+"
}

function make_brawler_fast_questions(credits_needed) {
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += "New Brawler > Fast > Rarity >"
    document.getElementById("the good shit").innerHTML += "<div class='content question' id='brawler fast questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("brawler fast questions").innerHTML += "<input class='restart button disabled' type='button' value='Restart' id='restart button' onclick='restart()'><br><br>"
    document.getElementById("brawler fast questions").innerHTML += "<label for='credit amount'>Credit amount(bottom left of the brawler's face):</label><br>"
    document.getElementById("brawler fast questions").innerHTML += "<input type='text' id='credit amount' oninput='restart_ready()'><br><br>"
    needed_credit_amount = credits_needed;
    document.getElementById("brawler fast questions").innerHTML += "<label for='have pass'>Do you have the brawl pass this season? </label><br>"
    document.getElementById("brawler fast questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass' onclick='yes_4_pass()'> "
    document.getElementById("brawler fast questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass' onclick='no_4_pass()'><br><br>"
    document.getElementById("brawler fast questions").innerHTML += "<input class='done button'  type='button' value='Done' id='done button' onclick='solve_brawler(2)'>"
}

function make_future_days_question(type_sf) {
    if(type_sf == 1)
        var things = ["Standard", "standard"]
    if(type_sf == 2)
        var things = ["Fast", "fast"]
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `Days of Rewards > ${things[0]} >`
    document.getElementById("the good shit").innerHTML += `<div class="content question" id="future_days ${things[1]} question">`
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById(`future_days ${things[1]} question`).innerHTML += "<input class='restart button disabled' type='button' value='Restart' id='restart button' onclick='restart()'><br><br>"
    document.getElementById(`future_days ${things[1]} question`).innerHTML += "<label for='how many days?'>How many days of rewards do you want to know about?</label><br>"
    document.getElementById(`future_days ${things[1]} question`).innerHTML += "<input type='text' id='days asked' oninput='restart_ready()'><br>"
    document.getElementById(`future_days ${things[1]} question`).innerHTML += "<label for='have pass'>Do you have the brawl pass this season? </label><br>"
    document.getElementById(`future_days ${things[1]} question`).innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass' onclick='yes_4_pass()'> "
    document.getElementById(`future_days ${things[1]} question`).innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass' onclick='no_4_pass()'><br><br>"
    document.getElementById(`future_days ${things[1]} question`).innerHTML += `<input class="done button"  type="button" value="Done" id="done button" onclick="solve_future_days(${type_sf})">`
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

function yes_4_pass_2() {
    document.getElementById("restart button").className = "restart button"
    var clicked = document.getElementById("yes 4 pass 2");
    clicked.className = "yes button clicked"
    var not_clicked = document.getElementById("no 4 pass 2");
    not_clicked.className = "no button"
    have_pass_2 = true
}

function no_4_pass_2() {
    document.getElementById("restart button").className = "restart button"
    var clicked = document.getElementById("no 4 pass 2");
    clicked.className = "no button clicked"
    var not_clicked = document.getElementById("yes 4 pass 2");
    not_clicked.className = "yes button"
    have_pass_2 = false
}

function restart_ready() {
    document.getElementById("restart button").className = "restart button"
}

function restart() {
    
    document.getElementById("no 4 pass").className = "no button"
    document.getElementById("yes 4 pass").className = "yes button"
    document.getElementById("restart button").className = "restart button disabled"
    try{
        document.getElementById("credit amount").value = ""
    }catch(TypeError){}

    try{
        document.getElementById("days asked").value = ""
    }catch(TypeError){}

    try{
        document.getElementById("current token amount").value = ""
        document.getElementById("tier").value = 35
        document.getElementById("slider value").innerHTML = "35"
        document.getElementById("no 4 pass 2").className = "no button"
        document.getElementById("yes 4 pass 2").className = "yes button"
    }catch(TypeError){}
    
}

function check() {
    if(document.getElementById("yes 4 pass").className == "yes button" && document.getElementById("no 4 pass").className == "no button")
        return true
    try{
        if(document.getElementById("credit amount").value == "")
            return true
    }catch(TypeError){}

    try{
        if(document.getElementById("current token amount").value == "")
            return true
        if(document.getElementById("yes 4 pass 2").className == "yes button" && document.getElementById("no 4 pass 2").className == "no button")
            return true
    }catch(TypeError){}

    try{
        if(document.getElementById("days asked").value == "")
            return true
    }catch(TypeError){}

    return false
}

function cal() {
    var day = 600 + 30 + 7*5 +10 + 60/4
    var weekend_events = 50 + 500
    if (have_pass) {week_seasonal = 250 * 5 + 500 * 3} 
    else {week_seasonal = 250 * 4 + 500 * 2}
    var one_week_tok = day * 7 + week_seasonal + weekend_events
    var one_day_tok = one_week_tok / 7
    var cal_day_end_rewards = one_day_tok/500
    return cal_day_end_rewards
}
function solve_brawler(type) {
    if(check())
    {
        alert("You haven't answered all questions!")
        return 0
    }
    var credit_amount = document.getElementById("credit amount").value;
    var needed_credits = needed_credit_amount - credit_amount
    var one_day_cre = cal()*25
    var days_needed = Math.ceil(needed_credits / one_day_cre)
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += "New Brawler > Fast > Rarity > Results"
    make_result_place()
    var the_result = document.getElementById("the result");
    the_result.innerHTML = `It'll take ${days_needed} days to get your brawler`
    the_result.innerHTML += `<br>`
    the_result.innerHTML += `You'll get around ${Math.floor(days_needed*145)} ~ ${Math.floor(days_needed*229)} coins`
}

function solve_future_days(type) {
    if(check())
    {
        alert("You haven't answered all questions!")
        return 0
    }
    days_asked = document.getElementById("days asked").value
    var one_day_cre = cal()*25
    var one_day_end_rewards = cal()
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += "Days of Rewards > Fast > Results"
    make_result_place()
    var the_result = document.getElementById("the result");
    the_result.innerHTML = `In ${days_asked} days, you'll get around ${Math.floor(days_asked*one_day_cre)} credits.`
    the_result.innerHTML += `<br>`
    the_result.innerHTML += `Also, you'll get around ${Math.floor(days_asked*one_day_end_rewards*145)} coins and ${Math.floor(days_asked*one_day_end_rewards*42)} power points`
    the_result.innerHTML += `<br>`
    the_result.innerHTML += `or ${Math.floor(days_asked*one_day_end_rewards*229)} coins or in between depending on whether your power point bank is full.`
}
