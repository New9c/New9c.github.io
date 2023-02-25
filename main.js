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
    document.getElementById(`${things[1]} question`).innerHTML += "<label for='starting question 2'>Choose an option (Fast = less questions & less accurate)</label><br><br>"
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
    document.getElementById("tracker").innerHTML += "New Brawler > Standard > Rarity >"
    document.getElementById("the good shit").innerHTML += "<div class='content question' id='brawler standard questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='restart button disabled' type='button' value='Restart' id='restart button' onclick='restart()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='credit amount'>Credit amount(bottom left of the brawler's face):</label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='credit amount' oninput='restart_ready()'> credits<br><br>"
    needed_credit_amount = credits_needed;
    document.getElementById("brawler standard questions").innerHTML += "<label for='current token amount'>Current token amount(left bottom corner): </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='current token amount' oninput='restart_ready()'> tokens<br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='tier'>Which tier are you at? (Use 69+ if higher than 69)</label>"
    document.getElementById("brawler standard questions").innerHTML += "<p id='slider value'>35</p>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='range' min='0' max='70' class='tier' id='tier' oninput='put_slider_value()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='days left'>How many days & hours till season ends? </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='days left' oninput='restart_ready()'> days<br>"
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='hours left' oninput='restart_ready()'> hours<br>"
    document.getElementById("brawler standard questions").innerHTML += "(No hours = 0 hours. Round down minutes.)<br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='days left'>Are there any daily quests you can do right now?</label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='daily yes' onclick='daily_yes()'> "
    document.getElementById("brawler standard questions").innerHTML += "<input class='no button' type='button' value='No' id='daily no' onclick='daily_no()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='have pass'>Do you have the brawl pass this season? </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass' onclick='yes_4_pass()'> "
    document.getElementById("brawler standard questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass' onclick='no_4_pass()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<label for='have pass'>Will you have the brawl pass right away next season? </label><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass 2' onclick='yes_4_pass_2()'> "
    document.getElementById("brawler standard questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass 2' onclick='no_4_pass_2()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='done button'  type='button' value='Done' id='done button' onclick='solve_brawler(1)'>"
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

function daily_yes() {
    document.getElementById("restart button").className = "restart button"
    var clicked = document.getElementById("daily yes");
    clicked.className = "yes button clicked"
    var not_clicked = document.getElementById("daily no");
    not_clicked.className = "no button"
    daily_ava = true
}

function daily_no() {
    document.getElementById("restart button").className = "restart button"
    var clicked = document.getElementById("daily no");
    clicked.className = "no button clicked"
    var not_clicked = document.getElementById("daily yes");
    not_clicked.className = "yes button"
    daily_ava = false
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
        if(document.getElementById("daily yes").className == "yes button" && document.getElementById("daily no").className == "no button")
            return true
        if(document.getElementById("days left").value == "")
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
    return one_day_tok
}

function season_end_cal() {
    var day_left = document.getElementById("days left").value
    if(daily_ava)
        day_left += 1
    return day_left
}

function make_date(add_days) {
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + add_days);
    var dd = targetDate.getDate();
    var mm = targetDate.getMonth() + 1;
    var yyyy = targetDate.getFullYear();

    var dateString = `${yyyy}-${mm}-${dd}`
    return dateString
}
function solve_brawler(type) {
    if(check())
    {
        alert("You haven't answered all questions!")
        return 0
    }
    var credit_amount = document.getElementById("credit amount").value;
    var needed_credits = needed_credit_amount - credit_amount
    if(type==2){
        var one_day_cre = cal()/500*25
        var days_needed = Math.ceil(needed_credits / one_day_cre)
        var less_gold = Math.floor(days_needed*cal()/500*145)
        var more_gold = Math.floor(days_needed*cal()/500*229)
        var tracke = "Fast"
    }
    if(type==1){
        pass_arr = [0,
            75, 75, 100, 150, 200, 300, 400, 400, 400, 400,
            400, 400, 400, 400, 400, 400, 400, 400, 400, 400,
            500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
            500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
            600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
            600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
            600, 600, 600, 600, 600, 600, 600, 600, 600, 600]
        
        credit_pass_arr = [95,
            0, 0, 0, 95, 0, 0, 0, 95, 0, 0,
            0, 95, 0, 0, 0, 95, 0, 0, 0, 95,
            0, 0, 0, 0, 95, 0, 0, 0, 0, 95,
            0, 0, 95, 0, 0, 0, 0, 95, 0, 0,
            0, 0, 95, 0, 0, 0, 0, 0, 95, 0,
            0, 0, 0, 95, 0, 0, 0, 95, 0, 0,
            0, 0, 95, 0, 0, 0, 0, 95, 0, 0]
        
        gem_credit_pass_arr = [95,
            0, 45, 0, 95, 45, 0, 0, 140, 0, 0,
            0, 140, 0, 0, 45, 95, 0, 45, 0, 95,
            0, 45, 0, 0, 140, 0, 0, 45, 0, 95,
            0, 45, 95, 0, 0, 45, 0, 95, 0, 45,
            0, 0, 95, 0, 0, 0, 45, 0, 95, 45,
            0, 0, 0, 95, 0, 45, 0, 95, 0, 0,
            0, 0, 95, 45, 0, 0, 0, 95, 0, 0]
        
        gold_pass_arr = [0,
            0, 0, 640, 0, 0, 640, 0, 0, 640, 0,
            0, 0, 640, 0, 0, 0, 0, 640, 0, 0,
            0, 0, 0, 640, 0, 0, 0, 640, 0, 0,
            0, 640, 0, 0, 0, 0, 640, 0, 0, 0,
            640, 0, 0, 0, 640, 0, 0, 640, 0, 0,
            640, 0, 0, 0, 0, 640, 0, 0, 0, 640,
            0, 0, 0, 0, 0, 0, 640, 0, 0, 0]

        gem_gold_pass_arr = [0,
            0, 0, 975, 0, 0, 975, 0, 0, 975, 0,
            0, 0, 975, 0, 0, 335, 0, 640, 335, 0,
            0, 0, 335, 640, 0, 335, 0, 640, 0, 0,
            0, 640, 0, 335, 0, 0, 640, 335, 0, 0,
            640, 335, 0, 0, 640, 335, 0, 975, 0, 0,
            640, 335, 0, 0, 0, 640, 0, 0, 0, 975,
            0, 335, 0, 0, 0, 0, 640, 335, 0, 0]

        job_done = false
        total_done = false
        all_gold_rewards = 0
        this_tier_time = 0

        one_day_tok = cal()
        season_ends = season_end_cal()
        season_ends = parseInt(season_ends)
        cur_tok = document.getElementById("current token amount").value
        cur_tok = parseInt(cur_tok)
        available_tokens = season_ends * one_day_tok + cur_tok
        tier_now = document.getElementById("tier").value
        tier_now = parseInt(tier_now)
        if (tier_now != 70)
        {
            tier_now = tier_now + 1
            tier_now_s = tier_now
            if (have_pass)
            {
                while(true)
                {
                    available_tokens -= pass_arr[tier_now]
                    if (available_tokens <= 0)
                        break
                    needed_credits -= gem_credit_pass_arr[tier_now]
                    all_gold_rewards += gem_gold_pass_arr[tier_now]
                    if (needed_credits <= 0)
                        break
                    tier_now += 1
                    if (tier_now > 70)
                        break
                }
            }
            else
            {
                while (true)
                {
                    available_tokens -= pass_arr[tier_now]
                    if (available_tokens <= 0)
                        break
                    needed_credits -= credit_pass_arr[tier_now]
                    all_gold_rewards += gold_pass_arr[tier_now]
                    if (needed_credits <= 0)
                        break
                    tier_now += 1
                    if (tier_now > 70)
                        break
                }
            }
            if(needed_credits <= 0)
            {
                the_sweet_tier = [tier_now, 1]
                k = tier_now_s
                needed_tier_tokens = 0
                while (k <= tier_now)
                {
                    needed_tier_tokens += pass_arr[k]
                    k += 1
                }
                time = (needed_tier_tokens - cur_tok) / one_day_tok
                time_r = Math.ceil(time)

                days_needed = time_r
                less_gold = -1
                more_gold = Math.floor(all_gold_rewards)

                job_done = true
            }
        }
        if (available_tokens <= 0)
        {
            tier = 0
            if(have_pass_2)
            {
                while(true)
                {
                    needed_credits -= gem_credit_pass_arr[tier]
                    all_gold_rewards += gem_gold_pass_arr[tier]
                    if (needed_credits <= 0)
                        break
                    tier += 1
                    if (tier > 70)
                        break
                }
            }
            else{
                while(true)
                {
                    needed_credits -= credit_pass_arr[tier]
                    all_gold_rewards += gold_pass_arr[tier]
                    if (needed_credits <= 0)
                        break
                    tier += 1
                    if (tier > 70)
                        break
                }
            }
            if (tier>70)
            {
                all_needed_tokens = 34500 + Math.ceil(needed_credits / 25) * 500
                console.log(season_ends)
                console.log("+")
                console.log(all_needed_tokens)
                console.log("/")
                console.log(one_day_tok)
                console.log("=")
                
                time = season_ends + all_needed_tokens / one_day_tok
                console.log(time)
                time_r = Math.ceil(time)

                days_needed = time_r

                all_gold_rewards += 229 * Math.ceil(needed_credits / 25)
                not_full_pp_gold_m = 84 * Math.ceil(needed_credits / 25)

                less_gold = Math.floor(all_gold_rewards - not_full_pp_gold_m)
                more_gold = Math.floor(all_gold_rewards)
            }
            else
            {
                the_sweet_tier = [tier, 2]

                i = 0
                needed_tier_tokens = 0
                while (i <= tier)
                    needed_tier_tokens += pass_arr[i]
                    i += 1
                time = season_ends + needed_tier_tokens / one_day_tok
                time_r = Math.ceil(time)

                days_needed = time_r
                less_gold = -1
                more_gold = Math.floor(all_gold_rewards)
            }
        }
        else if (job_done==false)
        {
            ori_season_ends = season_ends
            season_ends = Math.floor(available_tokens / one_day_tok)
            this_tier_time = ori_season_ends - season_ends
            cur_tok = available_tokens % one_day_tok
            time = (Math.ceil(needed_credits / 25) * 500 - cur_tok) / one_day_tok
            time_r = Math.ceil(time)
            if (time_r > season_ends)
            {
                needed_credits_2 = needed_credits - Math.floor((one_day_tok * season_ends + cur_tok) / 500) * 25
                all_gold_rewards += 15 / 4 * season_ends
                all_gold_rewards += 229 * Math.floor((one_day_tok * season_ends + cur_tok) / 500)
                not_full_pp_gold_m = 84 * Math.floor((one_day_tok * season_ends + cur_tok) / 500)

                tier = 0
                if (have_pass_2)
                {
                    while (true)
                    {
                        needed_credits_2 -= gem_credit_pass_arr[tier]
                        all_gold_rewards += gem_gold_pass_arr[tier]
                        if (needed_credits_2 <= 0)
                            break
                        tier += 1
                        if (tier > 70)
                            break
                    }
                }
                else
                {
                    while (true)
                    {
                        needed_credits_2 -= credit_pass_arr[tier]
                        all_gold_rewards += gold_pass_arr[tier]
                        if (needed_credits_2 <= 0)
                            break
                        tier += 1
                        if (tier > 70)
                            break
                    }
                }
                if (tier > 70)
                {
                    all_needed_tokens = 34500 + Math.ceil(needed_credits_2 / 25) * 500
                    time = ori_season_ends + all_needed_tokens / one_day_tok
                    time_r = Math.ceil(time)

                    days_needed = time_r

                    all_gold_rewards += 15 / 4 * (time_r - ori_season_ends)
                    all_gold_rewards += 229 * Math.ceil(needed_credits_2 / 25)
                    not_full_pp_gold_m += 84 * Math.ceil(needed_credits_2 / 25)

                    less_gold = Math.floor(all_gold_rewards - not_full_pp_gold_m)
                    more_gold = Math.floor(all_gold_rewards)
                }
                else
                {
                    the_sweet_tier = [tier, 2]

                    i = 0
                    needed_tier_tokens = 0
                    while (i <= tier)
                    {
                        needed_tier_tokens += pass_arr[i]
                        i += 1
                    }
                    time = ori_season_ends + needed_tier_tokens / one_day_tok
                    time_r = Math.ceil(time)

                    days_needed = time_r
                    less_gold = Math.floor(all_gold_rewards - not_full_pp_gold_m)
                    more_gold = Math.floor(all_gold_rewards)
                }
            }
            else
            {
                days_needed = time_r + this_tier_time

                all_gold_rewards += 229 * Math.ceil(needed_credits / 25)
                not_full_pp_gold_m = 84 * Math.ceil(needed_credits / 25)

                less_gold = Math.floor(all_gold_rewards - not_full_pp_gold_m)
                more_gold = Math.floor(all_gold_rewards)
            }
        }
        var tracke = "Standard"
        if(daily_ava && days_needed>0)
            days_needed-=1
        hours = document.getElementById("hours left").value
        hours = parseInt(hours)
        if(hours<12 && days_needed>0)
            days_needed-=1
    }
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `New Brawler > ${tracke} > Rarity > Questions > Results`
    make_result_place()
    var the_result = document.getElementById("the result");
    the_result.innerHTML += "Results:<br>"
    try
    {
        if(the_sweet_tier[1]=='1')
            the_result.innerHTML += `You'll get your brawler at tier ${the_sweet_tier[0]} this season.<br>`
        else
            the_result.innerHTML += `You'll get your brawler at tier ${the_sweet_tier[0]} next season.<br>`
    }catch(ReferenceError){}
    
    
    the_result.innerHTML += `It'll take around ${days_needed} days to get your brawler.<br>`
    the_result.innerHTML += `(which is around ${make_date(days_needed)})<br><br>`

    if(less_gold < 0)
        the_result.innerHTML += `You'll get around ${more_gold} coins.`
    else
    {
        the_result.innerHTML += `You'll get around ${less_gold} ~ ${more_gold} coins.`
        the_result.innerHTML += `<br>`
        the_result.innerHTML += `(Min: Unlocked all end of pass rewards without a full power point bank. Max: Vice Versa)`
    }
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
    document.getElementById("tracker").innerHTML += "Days of Rewards > Fast > Questions > Results"
    make_result_place()
    var the_result = document.getElementById("the result");
    the_result.innerHTML = `In ${days_asked} days, you'll get around ${Math.floor(days_asked*one_day_cre)} credits.`
    the_result.innerHTML += `<br>`
    the_result.innerHTML += `Also, you'll get around ${Math.floor(days_asked*one_day_end_rewards*145)} coins and ${Math.floor(days_asked*one_day_end_rewards*42)} power points`
    the_result.innerHTML += `<br>`
    the_result.innerHTML += `or ${Math.floor(days_asked*one_day_end_rewards*229)} coins or in between depending on whether your power point bank is full.`
}
