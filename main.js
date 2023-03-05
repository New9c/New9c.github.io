function start_everything(){
    document.getElementById("disclaimer").innerHTML = ""
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content starting_questions' id='starting_question'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("starting_question").innerHTML += "What do you wanna use?<br><br>"
    document.getElementById("starting_question").innerHTML += "<label for='starting question'>Brawler Predictors (Fast = less questions & less accurate)</label><br><br>"
    document.getElementById("starting_question").innerHTML += `<input class="standard button" type="button" value="Standard Version" id="standard" onclick="make_brawler_question(1)"><br>`
    document.getElementById("starting_question").innerHTML += `<input class="fast button" type="button" value="Fast Version" id="fast" onclick="make_brawler_question(2)"><br><br>`
    document.getElementById("starting_question").innerHTML += "<label for='starting question'>Brawl Calculator </label><br><br>"
    document.getElementById("starting_question").innerHTML += `<input class="calculator button" type="button" value="Brawl Calculator" id="cal" onclick="the_calculator()"><br>`
}

function the_calculator(){
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `Brawl Calculator (result will emerge instantly once all necessary inputs are in!)`
    document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='start_everything()'>`
    document.getElementById("the good shit").innerHTML += "<div class='content cal question' id='cal questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"

    document.getElementById("cal questions").innerHTML += "(Click on the buttons to toggle between 'with' or 'without', and click 'back' above from here to go back to the main page :D)<br><br>"
    
    document.getElementById("cal questions").innerHTML += "<input class='without pass button' type='button' value='Without a brawl pass' id='da ya pass' onclick='pass_button()'>,<br>"
    document.getElementById("cal questions").innerHTML += "from tier <input type='text' id='sta tier' oninput='tier_result()'>"
    document.getElementById("cal questions").innerHTML += " to tier <input type='text' id='end tier' oninput='tier_result()'>"
    document.getElementById("cal questions").innerHTML += " you'll get (tier 0 = free gift at the start): <br>"
    document.getElementById("cal questions").innerHTML += "<div class='tier to tier' id='tier to tier'>"
    document.getElementById("cal questions").innerHTML += "</div><br>"
    document.getElementById("tier to tier").innerHTML = "? resources"

    
    document.getElementById("cal questions").innerHTML += "<input class='without bank button' type='button' value='Without a full power point bank' id='da ya bank' onclick='bun_button()'>,<br>"
    document.getElementById("cal questions").innerHTML += "<input type='text' id='bundles' oninput='bun_result_s()'> end reward bundles "
    document.getElementById("cal questions").innerHTML += ` will give you:<br>`
    document.getElementById("cal questions").innerHTML += "<div class='bun result_s' id='bun result_s'>"
    document.getElementById("cal questions").innerHTML += "</div><br>"
    document.getElementById("bun result_s").innerHTML = "? resources"

    document.getElementById("cal questions").innerHTML += "To get a brawler from <br>power <input type='text' id='sta power' oninput='cost_result()'>"
    document.getElementById("cal questions").innerHTML += " -> power <input type='text' id='end power' oninput='cost_result()'><br>"
    document.getElementById("cal questions").innerHTML += "+ <input type='text' id='gad amount' oninput='cost_result()'> gadgets<br>"
    document.getElementById("cal questions").innerHTML += "+ <input type='text' id='star amount' oninput='cost_result()'> star powers<br>"
    document.getElementById("cal questions").innerHTML += "+ <input type='text' id='rare gear' oninput='cost_result()'> super rare gears<br>"
    document.getElementById("cal questions").innerHTML += "+ <input type='text' id='epic gear' oninput='cost_result()'> epic gears<br>"
    document.getElementById("cal questions").innerHTML += "+ <input type='text' id='mythic gear' oninput='cost_result()'> mythic gears<br>"
    document.getElementById("cal questions").innerHTML += "<div class='cost' id='cost'>"
    document.getElementById("cal questions").innerHTML += "</div><br>"
    document.getElementById("cost").innerHTML = "You'll need ? resources"

    document.getElementById("cal questions").innerHTML += "<input type='text' id='ppz' oninput='p_to_coiz()'> power points<br>"
    document.getElementById("cal questions").innerHTML += "<div class='p_to_coiz' id='p_to_coiz'>"
    document.getElementById("cal questions").innerHTML += "</div><br>"
    document.getElementById("p_to_coiz").innerHTML = "= ? coins"

    document.getElementById("cal questions").innerHTML += "60 * <input type='text' id='cp' oninput='c_to_p()'> club coins<br>"
    document.getElementById("cal questions").innerHTML += "<div class='c_to_p' id='c_to_p'>"
    document.getElementById("cal questions").innerHTML += "</div><br>"
    document.getElementById("c_to_p").innerHTML = "= ? power points"

    document.getElementById("cal questions").innerHTML += "100 * <input type='text' id='cc' oninput='c_to_coiz()'> club coins<br>"
    document.getElementById("cal questions").innerHTML += "<div class='c_to_coiz' id='c_to_coiz'>"
    document.getElementById("cal questions").innerHTML += "</div>"
    document.getElementById("c_to_coiz").innerHTML = "= ? coins"
}

function p_to_coiz(){
    if(document.getElementById("ppz").value == "")
    {
        document.getElementById("p_to_coiz").innerHTML = "= ? coins"
        return 0;
    }
    ppz = parseInt(document.getElementById("ppz").value) 
    document.getElementById("p_to_coiz").innerHTML = `= ${ppz*2} coins`
}

function c_to_p(){
    if(document.getElementById("cp").value == "")
    {
        document.getElementById("c_to_p").innerHTML = "= ? power points"
        return 0;
    }
    club_coins = parseInt(document.getElementById("cp").value) 
    document.getElementById("c_to_p").innerHTML = `= ${club_coins*60} club coins<br>`
    document.getElementById("c_to_p").innerHTML += `= ${club_coins*100} power points`
}

function c_to_coiz(){
    if(document.getElementById("cc").value == "")
    {
        document.getElementById("c_to_coiz").innerHTML = "= ? coins"
        return 0;
    }
    club_coins = parseInt(document.getElementById("cc").value) 
    document.getElementById("c_to_coiz").innerHTML = `= ${club_coins*100} club coins<br>`
    document.getElementById("c_to_coiz").innerHTML += `= ${club_coins*250} power points`
}

function bun_button(){
    if(document.getElementById("da ya bank").value == "Without a full power point bank")
    {
        document.getElementById("da ya bank").value = "With a full power point bank"
        document.getElementById("da ya bank").className = "with bank button"
    }
    else
    {
        document.getElementById("da ya bank").value = "Without a full power point bank"
        document.getElementById("da ya bank").className = "without bank button"
    }
    bun_result_s()
}

function bun_result_s(){
    if(document.getElementById("bundles").value == "")
    {
        document.getElementById("bun result_s").innerHTML = "? resources"
        return 0;
    }  
    if(document.getElementById("da ya bank").value == "Without a full power point bank")
    {
        bundles = document.getElementById("bundles").value
        bundles = parseInt(bundles)
        document.getElementById("bun result_s").innerHTML = `${145*bundles} coins, ${42*bundles} power points and ${25*bundles} credits.`
    }
    else
    {
        bundles = document.getElementById("bundles").value
        bundles = parseInt(bundles)
        document.getElementById("bun result_s").innerHTML = `${229*bundles} coins and ${25*bundles} credits.`
    }
}

function cost_result(){
    answer = 0
    pp_answer = 0
    if(document.getElementById("sta power").value == "")
    {
        document.getElementById("cost").innerHTML = "You'll need ? resources"
        return 0;
    }
    if(document.getElementById("end power").value == "")
    {
        document.getElementById("cost").innerHTML = "You'll need ? resources"
        return 0;
    }
    if(parseInt(document.getElementById("sta power").value) > parseInt(document.getElementById("end power").value))
    {
        document.getElementById("cost").innerHTML = "bruh (start power > end power)"
        return 0;
    }
    gold_arr = [0, 0, 20, 55, 130, 270, 560, 1040, 1840, 3090, 4965, 7765]
    power_points_arr = [0, 0, 20, 50, 100, 180, 310, 520, 860, 1410, 2300, 3740]
    answer += gold_arr[parseInt(document.getElementById("end power").value)] - gold_arr[parseInt(document.getElementById("sta power").value)]
    pp_answer += power_points_arr[parseInt(document.getElementById("end power").value)] - power_points_arr[parseInt(document.getElementById("sta power").value)]
    if(document.getElementById("gad amount").value != "")
        answer += parseInt(document.getElementById("gad amount").value)*1000
    if(document.getElementById("star amount").value != "")
        answer += parseInt(document.getElementById("star amount").value)*2000
    if(document.getElementById("rare gear").value != "")
        answer += parseInt(document.getElementById("rare gear").value)*1000
    if(document.getElementById("epic gear").value != "")
        answer += parseInt(document.getElementById("epic gear").value)*1500
    if(document.getElementById("mythic gear").value != "")
        answer += parseInt(document.getElementById("mythic gear").value)*2000
    if(pp_answer == 0)
        document.getElementById("cost").innerHTML = `You'll need ${answer} coins.`
    else
        document.getElementById("cost").innerHTML = `You'll need ${answer} coins and ${pp_answer} power points (at least ${Math.ceil(pp_answer/100)*60} club coins).`
}

function pass_button(){
    if(document.getElementById("da ya pass").value == "Without a brawl pass")
    {
        document.getElementById("da ya pass").value = "With a brawl pass"
        document.getElementById("da ya pass").className = "with pass button"
    }
    else
    {
        document.getElementById("da ya pass").value = "Without a brawl pass"
        document.getElementById("da ya pass").className = "without pass button"
    }
    tier_result()
}

function tier_result(){
    if(document.getElementById("sta tier").value == "")
    {
        document.getElementById("tier to tier").innerHTML = "? resources<br>"
        return 0;
    }
    if(document.getElementById("end tier").value == "")
    {
        document.getElementById("tier to tier").innerHTML = "? resources<br>"
        return 0;
    }
    if(parseInt(document.getElementById("sta tier").value) > parseInt(document.getElementById("end tier").value))
    {
        document.getElementById("tier to tier").innerHTML = "bruh (start tier > end tier)<br>"
        return 0;
    }
    gem_arr = [0, 
        0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 
        10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 
        20, 40, 40, 40, 40, 40, 40, 40, 40, 40, 
        40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 
        50, 50, 50, 60, 60, 60, 60, 60, 60, 60, 
        60, 70, 70, 70, 70, 70, 70, 70, 70, 70, 
        70, 90, 90, 90, 90, 90, 90, 90, 90, 90]
    credit_pass_arr = [95,
        95, 95, 95, 190, 190, 190, 190, 285, 285, 285, 
        285, 380, 380, 380, 380, 475, 475, 475, 475, 570, 
        570, 570, 570, 570, 665, 665, 665, 665, 665, 760, 
        760, 760, 855, 855, 855, 855, 855, 950, 950, 950, 
        950, 950, 1045, 1045, 1045, 1045, 1045, 1045, 1140, 1140, 
        1140, 1140, 1140, 1235, 1235, 1235, 1235, 1330, 1330, 1330, 
        1330, 1330, 1425, 1425, 1425, 1425, 1425, 1520, 1520, 1520]
    gem_credit_pass_arr = [95, 
        95, 140, 140, 235, 280, 280, 280, 420, 420, 420, 
        420, 560, 560, 560, 605, 700, 700, 745, 745, 840, 
        840, 885, 885, 885, 1025, 1025, 1025, 1070, 1070, 1165, 
        1165, 1210, 1305, 1305, 1305, 1350, 1350, 1445, 1445, 1490, 
        1490, 1490, 1585, 1585, 1585, 1585, 1630, 1630, 1725, 1770, 
        1770, 1770, 1770, 1865, 1865, 1910, 1910, 2005, 2005, 2005, 
        2005, 2005, 2100, 2145, 2145, 2145, 2145, 2240, 2240, 2240]
    gold_pass_arr = [0, 
        0, 0, 640, 640, 640, 1280, 1280, 1280, 1920, 1920, 
        1920, 1920, 2560, 2560, 2560, 2560, 2560, 3200, 3200, 3200, 
        3200, 3200, 3200, 3840, 3840, 3840, 3840, 4480, 4480, 4480, 
        4480, 5120, 5120, 5120, 5120, 5120, 5760, 5760, 5760, 5760, 
        6400, 6400, 6400, 6400, 7040, 7040, 7040, 7680, 7680, 7680, 
        8320, 8320, 8320, 8320, 8320, 8960, 8960, 8960, 8960, 9600, 
        9600, 9600, 9600, 9600, 9600, 9600, 10240, 10240, 10240, 10240]
    gem_gold_pass_arr = [0, 
        0, 0, 975, 975, 975, 1950, 1950, 1950, 2925, 2925, 
        2925, 2925, 3900, 3900, 3900, 4235, 4235, 4875, 5210, 5210, 
        5210, 5210, 5545, 6185, 6185, 6520, 6520, 7160, 7160, 7160, 
        7160, 7800, 7800, 8135, 8135, 8135, 8775, 9110, 9110, 9110, 
        9750, 10085, 10085, 10085, 10725, 11060, 11060, 12035, 12035, 12035, 
        12675, 13010, 13010, 13010, 13010, 13650, 13650, 13650, 13650, 14625, 
        14625, 14960, 14960, 14960, 14960, 14960, 15600, 15935, 15935, 15935]
    pp_pass_arr = [0, 
        165, 165, 165, 165, 350, 350, 350, 350, 350, 535, 
        535, 535, 535, 535, 720, 720, 720, 720, 905, 905, 
        905, 905, 1090, 1090, 1090, 1275, 1275, 1275, 1460, 1460, 
        1460, 1460, 1460, 1645, 1645, 1645, 1645, 1645, 1830, 1830, 
        1830, 2015, 2015, 2015, 2015, 2015, 2200, 2200, 2200, 2385, 
        2385, 2385, 2570, 2570, 2570, 2570, 2755, 2755, 2755, 2755, 
        2940, 2940, 2940, 3125, 3125, 3310, 3310, 3310, 3550, 3550]
    gem_pp_pass_arr = [0, 
        325, 325, 325, 485, 670, 670, 830, 830, 830, 1015, 
        1175, 1175, 1175, 1335, 1520, 1520, 1680, 1680, 1865, 1865, 
        2025, 2025, 2210, 2370, 2370, 2555, 2715, 2715, 3060, 3060, 
        3060, 3060, 3060, 3245, 3245, 3245, 3245, 3245, 3590, 3590, 
        3590, 3775, 3775, 3935, 3935, 3935, 4120, 4120, 4120, 4305, 
        4305, 4305, 4490, 4650, 4650, 4650, 4835, 4995, 4995, 4995, 
        5180, 5180, 5180, 5365, 5365, 5710, 5710, 5710, 5950, 5950]
    chroma_pass_arr = [0, 
        0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 
        100, 100, 100, 100, 100, 100, 140, 140, 140, 140, 
        180, 180, 180, 180, 180, 180, 220, 220, 220, 220, 
        260, 260, 260, 260, 300, 300, 300, 300, 300, 340, 
        340, 340, 340, 340, 340, 380, 380, 380, 380, 380, 
        380, 380, 380, 380, 420, 420, 420, 420, 460, 460, 
        460, 460, 460, 460, 500, 500, 500, 500, 500, 500]
    pins_arr = [0, 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
        1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 
        5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 
        8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 
        13, 13, 14, 14, 15, 15, 16, 16, 17, 17]

    end_tier = parseInt(document.getElementById("end tier").value)
    sta_tier = parseInt(document.getElementById("sta tier").value)-1
    pin_packs = 0
    pins = 0
    sprays = 0
    document.getElementById("tier to tier").innerHTML = ""
    if(document.getElementById("da ya pass").value == "Without a brawl pass")
    {
        if(end_tier == 70)
            pin_packs += 1
        if(sta_tier < 0)
        {
            gems = gem_arr[end_tier]
            gold = gold_pass_arr[end_tier]
            pp = pp_pass_arr[end_tier]
            credits = credit_pass_arr[end_tier]
            chroma = chroma_pass_arr[end_tier]
        }
        else
        {
            gems = gem_arr[end_tier] - gem_arr[sta_tier]
            gold = gold_pass_arr[end_tier] - gold_pass_arr[sta_tier]
            pp = pp_pass_arr[end_tier] - pp_pass_arr[sta_tier]
            credits = credit_pass_arr[end_tier] - credit_pass_arr[sta_tier]
            chroma = chroma_pass_arr[end_tier] - chroma_pass_arr[sta_tier]
        }
    }
    else
    {
        if(sta_tier == -1)
            document.getElementById("tier to tier").innerHTML += `A sweet skin! (for a more common brawler) <br> `
        if(sta_tier < 30 && end_tier >= 30)
            document.getElementById("tier to tier").innerHTML += `NEW CHROMATIC BRAWLER! <br> `
        
        if(end_tier == 70)
        {
            document.getElementById("tier to tier").innerHTML += `A sweet skin! (for the new brawler) <br> `
            pin_packs += 1
        }
            
        if(sta_tier < 10 && end_tier >= 10)
            pin_packs += 1
        
        if(sta_tier < 20 && end_tier >= 20)
            sprays += 1
        if(sta_tier < 43 && end_tier >= 43)
            sprays += 1
        if(sta_tier < 0)
        {
            pins = pins_arr[end_tier]
            gems = gem_arr[end_tier]
            gold = gem_gold_pass_arr[end_tier]
            pp = gem_pp_pass_arr[end_tier]
            credits = gem_credit_pass_arr[end_tier]
            chroma = chroma_pass_arr[end_tier]
        }
        else
        {
            pins = pins_arr[end_tier] - pins_arr[sta_tier]
            gems = gem_arr[end_tier] - gem_arr[sta_tier]
            gold = gem_gold_pass_arr[end_tier] - gem_gold_pass_arr[sta_tier]
            pp = gem_pp_pass_arr[end_tier] - gem_pp_pass_arr[sta_tier]
            credits = gem_credit_pass_arr[end_tier] - gem_credit_pass_arr[sta_tier]
            chroma = chroma_pass_arr[end_tier] - chroma_pass_arr[sta_tier]
        }
    }
    if(sprays != 0)
        document.getElementById("tier to tier").innerHTML += `${sprays} sprays<br> `
    if(pins != 0)
        document.getElementById("tier to tier").innerHTML += `${pins} pins for the new brawler<br> `
    if(pin_packs != 0)
        document.getElementById("tier to tier").innerHTML += `${pin_packs} pin packs<br> `
    if(gems != 0)
        document.getElementById("tier to tier").innerHTML += `${gems} gems<br> `
    if(credits != 0)
        document.getElementById("tier to tier").innerHTML += `${credits} credits<br> `
    if(gold != 0)
        document.getElementById("tier to tier").innerHTML += `${gold} coins<br>`
    if(pp != 0)
        document.getElementById("tier to tier").innerHTML += `${pp} power points<br>`
    if(chroma != 0)
        document.getElementById("tier to tier").innerHTML += `${chroma} chroma credits<br>`
}

function make_brawler_question(type_sf){
    if(type_sf == 1)
        var things = ["Standard", "standard"]
    if(type_sf == 2)
        var things = ["Fast", "fast"]
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='' id='brawler name storage'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `${things[0]} > Rarity`
    document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='start_everything()'>`
    document.getElementById("the good shit").innerHTML += "<div class='content rarity question' id='rarity question'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("rarity question").innerHTML += "<label for='starting questions'>What's your brawler's name? (Optional, clicking on the rarity brings you to the next page)</label><br>"
    document.getElementById("rarity question").innerHTML += "<input type='text' id='brawler name' oninput='brawler_name()'><br><br>"
    document.getElementById("rarity question").innerHTML += "<label for='starting questions' id='wat rarity'>What rarity is your brawler?</label><br><br>"
    document.getElementById("rarity question").innerHTML += `<input class='rare button' type='button' value='Rare' id='rare' onclick='make_brawler_${things[1]}_questions(160)'> `
    document.getElementById("rarity question").innerHTML += `<input class='super_rare button' type='button' value='Super Rare' id='super rare' onclick='make_brawler_${things[1]}_questions(430)'> `
    document.getElementById("rarity question").innerHTML += `<input class='epic button' type='button' value='Epic' id='epic' onclick='make_brawler_${things[1]}_questions(925)'> `
    document.getElementById("rarity question").innerHTML += `<input class='mythic button' type='button' value='Mythic' id='mythic' onclick='make_brawler_${things[1]}_questions(1900)'> `
    document.getElementById("rarity question").innerHTML += `<input class='legendary button' type='button' value='Legendary' id='legendary' onclick='make_brawler_${things[1]}_questions(3800)'> `
    document.getElementById("rarity question").innerHTML += `<input class='chromatic button' type='button' value='Chromatic' id='chromatic' onclick='chromatic(${type_sf})'> `
    document.getElementById("rarity question").innerHTML += `<input class="starting button" type="button" value="Starting Brawler" id="starting" onclick="starting('${things[0]}')">`
}

function chromatic(go_back_place){
    var the_brawler_name = document.getElementById("brawler name storage").className
    if (the_brawler_name == '')
        the_brawler_name = "the brawler"
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += `<div class='${the_brawler_name}' id='brawler name storage'>`
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `Chromatic > Questions`
    document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='make_brawler_question(${go_back_place})'>`
    document.getElementById("the good shit").innerHTML += "<div class='content result' id='chroma questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("chroma questions").innerHTML += "(There's actually no fast version for this, so you'll get here either way)<br><br>"
    document.getElementById("chroma questions").innerHTML += "<input class='restart button disabled' type='button' value='Restart' id='restart button' onclick='restart()'><br><br>"
    document.getElementById("chroma questions").innerHTML += `<label for='chroma amount'> Chroma Credits amount:</label><br>`
    document.getElementById("chroma questions").innerHTML += "<input type='text' id='chroma amount' oninput='restart_ready()'> chroma credits<br><br>"
    document.getElementById("chroma questions").innerHTML += `<label for='chroma amount'> Needed amount (bottom left number of ${the_brawler_name} right now):</label><br>`
    document.getElementById("chroma questions").innerHTML += "<input class='chro_500 button' type='button' value='500 credits' id='chro_500' onclick='chro_500()'> "
    document.getElementById("chroma questions").innerHTML += "<input class='chro_1500 button' type='button' value='1500 credits' id='chro_1500' onclick='chro_1500()'> "
    document.getElementById("chroma questions").innerHTML += "<input class='chro_4500 button' type='button' value='4500 credits' id='chro_4500' onclick='chro_4500()'><br><br>"
    document.getElementById("chroma questions").innerHTML += "<label for='current token amount'>Current token amount (left bottom corner): </label><br>"
    document.getElementById("chroma questions").innerHTML += "<input type='text' id='current token amount' oninput='restart_ready()'> tokens<br><br>"
    document.getElementById("chroma questions").innerHTML += "<label for='tier'>Which tier are you at? (Use 69+ if higher than 69)</label>"
    document.getElementById("chroma questions").innerHTML += "<p id='slider value'>35</p>"
    document.getElementById("chroma questions").innerHTML += "<input type='range' min='0' max='70' class='tier' id='tier' oninput='put_slider_value()'><br><br>"
    document.getElementById("chroma questions").innerHTML += "<label for='days left'>How many days & hours till season ends? </label><br>"
    document.getElementById("chroma questions").innerHTML += "<input type='text' id='days left' oninput='restart_ready()'> days<br>"
    document.getElementById("chroma questions").innerHTML += "<input type='text' id='hours left' oninput='restart_ready()'> hours<br>"
    document.getElementById("chroma questions").innerHTML += "(No hours = 0 hours. Round down minutes.)<br><br>"
    document.getElementById("chroma questions").innerHTML += "<label for='days left'>Are there any daily quests you can do right now?</label><br>"
    document.getElementById("chroma questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='daily yes' onclick='daily_yes()'> "
    document.getElementById("chroma questions").innerHTML += "<input class='no button' type='button' value='No' id='daily no' onclick='daily_no()'><br><br>"
    document.getElementById("chroma questions").innerHTML += "<label for='have pass'>Do you have the brawl pass this season? </label><br>"
    document.getElementById("chroma questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass' onclick='yes_4_pass()'> "
    document.getElementById("chroma questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass' onclick='no_4_pass()'><br><br>"
    document.getElementById("chroma questions").innerHTML += "<label for='have pass'>Will you have the brawl pass right away next season? </label><br>"
    document.getElementById("chroma questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass 2' onclick='yes_4_pass_2()'> "
    document.getElementById("chroma questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass 2' onclick='no_4_pass_2()'><br><br>"
    document.getElementById("chroma questions").innerHTML += `<input class='done button'  type='button' value='Done' id='done button' onclick='solve_chroma(${go_back_place})'>`
}

function brawler_name(){
    var the_brawler_name = document.getElementById("brawler name").value
    document.getElementById("brawler name storage").className = the_brawler_name
    document.getElementById("wat rarity").innerHTML = `What rarity is ${the_brawler_name}?`
}

function starting(text_4_tracker){
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `${text_4_tracker} > Starting Brawler (Result)`
    if(text_4_tracker == "Standard")
        document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='make_brawler_question(1)'>`
    if(text_4_tracker == "Fast")
        document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='make_brawler_question(2)'>`
    document.getElementById("the good shit").innerHTML += "<div class='content result' id='result'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("result").innerHTML += "For new players:<br>"
    document.getElementById("result").innerHTML += "Shelly is the one and only starting brawler. You'll get her the moment you download brawl stars.<br><br>"
    document.getElementById("result").innerHTML += "For the rest of ya:<br>"
    document.getElementById("result").innerHTML += "You just like clicking buttons do ya? Fine, have another one.<br><br>"
    document.getElementById("result").innerHTML += "<a href='https://www.youtube.com/watch?v=fC7oUOUEEi4' class='stick button'>Totally not a rickroll</a>"
}

function make_brawler_standard_questions(credits_needed) {
    the_rarity = make_the_rarity(credits_needed)
    var the_brawler_name = document.getElementById("brawler name storage").className
    if (the_brawler_name == '')
        the_brawler_name = "the brawler"
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += `<div class='${the_brawler_name}' id='brawler name storage'>`
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `Standard > ${the_rarity} > Questions`
    document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='make_brawler_question(1)'>`
    document.getElementById("the good shit").innerHTML += "<div class='content question' id='brawler standard questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("brawler standard questions").innerHTML += "<input class='restart button disabled' type='button' value='Restart' id='restart button' onclick='restart()'><br><br>"
    document.getElementById("brawler standard questions").innerHTML += `<label for='credit amount'>Credit amount (bottom left of ${the_brawler_name}'s face):</label><br>`
    document.getElementById("brawler standard questions").innerHTML += "<input type='text' id='credit amount' oninput='restart_ready()'> credits<br><br>"
    needed_credit_amount = credits_needed;
    document.getElementById("brawler standard questions").innerHTML += "<label for='current token amount'>Current token amount (left bottom corner): </label><br>"
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
    the_rarity = make_the_rarity(credits_needed)
    var the_brawler_name = document.getElementById("brawler name storage").className
    if (the_brawler_name == '')
        the_brawler_name = "the brawler"
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += `<div class='${the_brawler_name}' id='brawler name storage'>`
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `Fast > ${the_rarity} > Questions`
    document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='make_brawler_question(2)'>`
    document.getElementById("the good shit").innerHTML += "<div class='content question' id='brawler fast questions'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("brawler fast questions").innerHTML += "<input class='restart button disabled' type='button' value='Restart' id='restart button' onclick='restart()'><br><br>"
    document.getElementById("brawler fast questions").innerHTML += `<label for='credit amount'>Credit amount(bottom left of ${the_brawler_name}'s face):</label><br>`
    document.getElementById("brawler fast questions").innerHTML += "<input type='text' id='credit amount' oninput='restart_ready()'> credits<br><br>"
    needed_credit_amount = credits_needed;
    document.getElementById("brawler fast questions").innerHTML += "<label for='have pass'>Do you have the brawl pass this season? </label><br>"
    document.getElementById("brawler fast questions").innerHTML += "<input class='yes button' type='button' value='Yes' id='yes 4 pass' onclick='yes_4_pass()'> "
    document.getElementById("brawler fast questions").innerHTML += "<input class='no button' type='button' value='No' id='no 4 pass' onclick='no_4_pass()'><br><br>"
    document.getElementById("brawler fast questions").innerHTML += "<input class='done button'  type='button' value='Done' id='done button' onclick='solve_brawler(2)'>"
}

function make_the_rarity(input){
    if(input==160)
        var the_rarity = "Rare"
    if(input==430)
        var the_rarity = "Super Rare"
    if(input==925)
        var the_rarity = "Epic"
    if(input==1900)
        var the_rarity = "Mythic"
    if(input==3800)
        var the_rarity = "Legendary"
    return the_rarity
}

function uno_rarity(input){
    if(input=="Rare")
        var num = 160
    if(input=="Super Rare")
        var num = 430
    if(input=="Epic")
        var num = 925
    if(input=="Mythic")
        var num = 1900
    if(input=="Legendary")
        var num = 3800
    return num
}

function make_result_place() {
    document.getElementById("the good shit").innerHTML += "<div class='content result' id='the result'> "
    document.getElementById("the good shit").innerHTML += "</div>"
}

function make_end_place(ottf) {
    document.getElementById("the good shit").innerHTML += "<div class='content result' id='endnote'> "
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("endnote").innerHTML += "Thanks for using my website!<br>"
    if(ottf==1){
        document.getElementById("endnote").innerHTML += "Please note that this doesn't count a lot of ways you can make more progress, such as Club League, Challeges and Masteries.<br>Click on the button below for more info.<br>"
        document.getElementById("endnote").innerHTML += "Bye! :D<br>"
        document.getElementById("endnote").innerHTML += `<input class="assumptions button" type="button" value="Assumptions & The Unpredictable" id="assumptions" onclick="assumptions(1)"></input>`
    }
        
    else if (ottf==2){
        document.getElementById("endnote").innerHTML += "Please note that the fast version gives a very rough prediction, and its results should be taken with a MOUNTAIN of salt.<br>Click on the button below for more info.<br>"
        document.getElementById("endnote").innerHTML += "Bye! :D<br>"
        document.getElementById("endnote").innerHTML += `<input class="assumptions button" type="button" value="Assumptions & The Unpredictable" id="assumptions" onclick="assumptions(2)"></input>`
    }
    else{
        document.getElementById("endnote").innerHTML += "Note that this doesn't count a few ways you can get more progress, such as getting a Jackpot.<br>Click on the button below for more info.<br>"
        document.getElementById("endnote").innerHTML += "Bye! :D<br>"
        document.getElementById("endnote").innerHTML += `<input class="assumptions button" type="button" value="Assumptions & The Unpredictable" id="assumptions" onclick="assumptions(3)"></input>`
    }
    document.getElementById("endnote").innerHTML += ` <input class="again button" type="button" value="Back 2 start" id="back 2 start" onclick="start_everything()"></input>`
}

function assumptions(ottf) {
    if(ottf==1)
    {
        document.getElementById("endnote").innerHTML = ``
        document.getElementById("endnote").innerHTML += `Assumptions:<br>`
        document.getElementById("endnote").innerHTML += `* Player has all game modes unlocked (+map maker)<br>`
        document.getElementById("endnote").innerHTML += `* Uses average of all tokens collected in a week => thinks every day of the week is the same => less reliable when it predicts you'll get the brawler in <7 days.<br>`
        document.getElementById("endnote").innerHTML += `* No mid-way brawl pass purchase (quite common for F2P)<br>`
        document.getElementById("endnote").innerHTML += `* Optimal token collecting by player<br>`
        document.getElementById("endnote").innerHTML += `* Believes the new season quests will be done within the same week you received them<br>`
        document.getElementById("endnote").innerHTML += `* All other season quests are done<br>`
        document.getElementById("endnote").innerHTML += `* Believes you'll get the brawler next season at most<br>`
        document.getElementById("endnote").innerHTML += `<br>`
        document.getElementById("endnote").innerHTML += `The Unpredictable:<br>`
        document.getElementById("endnote").innerHTML += `* Club League<br>`
        document.getElementById("endnote").innerHTML += `* Masteries<br>`
        document.getElementById("endnote").innerHTML += `* JACKPOT!<br>`
        document.getElementById("endnote").innerHTML += `* Challenges / Surprise quests<br>`
        document.getElementById("endnote").innerHTML += `* Trophy road rewards<br>`
        document.getElementById("endnote").innerHTML += `* Higher ranks (additional tokens)<br>`
        document.getElementById("endnote").innerHTML += `* Double token/Coin showers events<br>`
        document.getElementById("endnote").innerHTML += `* event.brawlstars.com`
    }
    else if(ottf==2)
    {
        document.getElementById("endnote").innerHTML = ``
        document.getElementById("endnote").innerHTML += `Assumptions:<br>`
        document.getElementById("endnote").innerHTML += `* Player is always at the end of the pass => simple, consistant, not accurate (Main issue)<br>`
        document.getElementById("endnote").innerHTML += `* Player has just gotten daily quests and finished them => 1 extra day could be added<br>`
        document.getElementById("endnote").innerHTML += `<br>(The rest is the same as the standard version)<br>`
        document.getElementById("endnote").innerHTML += `* Player has all game modes unlocked (+map maker)<br>`
        document.getElementById("endnote").innerHTML += `* Uses average of all tokens collected in a week => thinks every day of the week is the same => less reliable when it predicts you'll get the brawler in <7 days.<br>`
        document.getElementById("endnote").innerHTML += `* No mid-way brawl pass purchase (quite common for F2P)<br>`
        document.getElementById("endnote").innerHTML += `* Optimal token collecting by player<br>`
        document.getElementById("endnote").innerHTML += `* Believes the new season quests will be done within the same week you received them<br>`
        document.getElementById("endnote").innerHTML += `* All other season quests are done<br>`
        document.getElementById("endnote").innerHTML += `* Believes you'll get the brawler next season at most<br>`
        document.getElementById("endnote").innerHTML += `<br>`
        document.getElementById("endnote").innerHTML += `The Unpredictable:<br>`
        document.getElementById("endnote").innerHTML += `* Club League<br>`
        document.getElementById("endnote").innerHTML += `* Masteries<br>`
        document.getElementById("endnote").innerHTML += `* JACKPOT!<br>`
        document.getElementById("endnote").innerHTML += `* Challenges / Surprise quests<br>`
        document.getElementById("endnote").innerHTML += `* Trophy road rewards<br>`
        document.getElementById("endnote").innerHTML += `* Higher ranks/experience (additional tokens)<br>`
        document.getElementById("endnote").innerHTML += `* Double token/Coin showers events<br>`
        document.getElementById("endnote").innerHTML += `* event.brawlstars.com`
    }
    else
    {
        document.getElementById("endnote").innerHTML = ``
        document.getElementById("endnote").innerHTML += `Assumptions:<br>`
        document.getElementById("endnote").innerHTML += `* Player has all game modes unlocked (+map maker)<br>`
        document.getElementById("endnote").innerHTML += `* Uses average of all tokens collected in a week => thinks every day of the week is the same => less reliable when it predicts you'll get the brawler in <7 days.<br>`
        document.getElementById("endnote").innerHTML += `* Optimal token collecting by player<br>`
        document.getElementById("endnote").innerHTML += `* Believes the new season quests will be done within the same week you received them<br>`
        document.getElementById("endnote").innerHTML += `* All other season quests are done<br>`
        document.getElementById("endnote").innerHTML += `<br>`
        document.getElementById("endnote").innerHTML += `The Unpredictable:<br>`
        document.getElementById("endnote").innerHTML += `* Masteries<br>`
        document.getElementById("endnote").innerHTML += `* JACKPOT!<br>`
        document.getElementById("endnote").innerHTML += `* Challenges / Surprise quests<br>`
        document.getElementById("endnote").innerHTML += `* Trophy road rewards<br>`
        document.getElementById("endnote").innerHTML += `* Higher ranks/experience (additional tokens)<br>`
        document.getElementById("endnote").innerHTML += `* Double token/Coin showers events<br>`
        document.getElementById("endnote").innerHTML += `* event.brawlstars.com`
    }
    document.getElementById("endnote").innerHTML += `<br><input class="again button" type="button" value="Back 2 start" id="back 2 start" onclick="start_everything()"></input>`
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

function chro_500() {
    document.getElementById("restart button").className = "restart button"
    var clicked = document.getElementById("chro_500");
    clicked.className = "chro_500 button clicked"
    var not_clicked = document.getElementById("chro_1500");
    not_clicked.className = "chro_1500 button"
    var wee_clicked = document.getElementById("chro_4500");
    wee_clicked.className = "chro_4500 button"
    needed_chroma_credits = 500
}

function chro_1500() {
    document.getElementById("restart button").className = "restart button"
    var clicked = document.getElementById("chro_1500");
    clicked.className = "chro_1500 button clicked"
    var not_clicked = document.getElementById("chro_500");
    not_clicked.className = "chro_500 button"
    var not_clicked = document.getElementById("chro_4500");
    not_clicked.className = "chro_4500 button"
    needed_chroma_credits = 1500
}

function chro_4500() {
    document.getElementById("restart button").className = "restart button"
    var clicked = document.getElementById("chro_4500");
    clicked.className = "chro_4500 button clicked"
    var not_clicked = document.getElementById("chro_500");
    not_clicked.className = "chro_500 button"
    var wee_clicked = document.getElementById("chro_1500");
    wee_clicked.className = "chro_1500 button"
    needed_chroma_credits = 4500
}

function how_many_chroma(){
    if (document.getElementById("chro_500").className == "chro_500 button clicked")
        return 500
    if (document.getElementById("chro_1500").className == "chro_1500 button clicked")
        return 1500
    if (document.getElementById("chro_4500").className == "chro_4500 button clicked")
        return 4500
}

function restart_ready() {
    document.getElementById("restart button").className = "restart button"
}

function restart() {
    document.getElementById("restart button").className = "restart button disabled"
    
    
    try{
        document.getElementById("no 4 pass").className = "no button"
    }catch(TypeError){}

    try{
        document.getElementById("yes 4 pass").className = "yes button"
    }catch(TypeError){}
    
    try{
        document.getElementById("credit amount").value = ""
    }catch(TypeError){}

    try{
        document.getElementById("chroma amount").value = ""
    }catch(TypeError){}

    try{
        document.getElementById("chro_500").className = "chro_500 button"
    }catch(TypeError){}

    try{
        document.getElementById("chro_1500").className = "chro_1500 button"
    }catch(TypeError){}

    try{
        document.getElementById("chro_4500").className = "chro_4500 button"
    }catch(TypeError){}

    try{
        document.getElementById("current token amount").value = ""
    }catch(TypeError){}

    try{
        document.getElementById("days left").value = ""
    }catch(TypeError){}

    try{
        document.getElementById("hours left").value = ""
    }catch(TypeError){}

    try{
        document.getElementById("tier").value = 35
    }catch(TypeError){}

    try{
        document.getElementById("slider value").innerHTML = "35"
    }catch(TypeError){}

    try{
        document.getElementById("no 4 pass 2").className = "no button"
    }catch(TypeError){}

    try{
        document.getElementById("yes 4 pass 2").className = "yes button"
    }catch(TypeError){}

    try{
        document.getElementById("daily no").className = "no button"
    }catch(TypeError){}

    try{
        document.getElementById("daily yes").className = "yes button"
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
    }catch(TypeError){}

    try{
        if(document.getElementById("chroma amount").value == "")
            return true
    }catch(TypeError){}

    try{
        if(document.getElementById("chro_500").className == "chro_500 button" && document.getElementById("chro_1500").className == "chro_1500 button" && document.getElementById("chro_4500").className == "chro_4500 button")
            return true
    }catch(TypeError){}

    try{
        if(document.getElementById("yes 4 pass 2").className == "yes button" && document.getElementById("no 4 pass 2").className == "no button")
            return true
    }catch(TypeError){}
    
    try{
        if(document.getElementById("daily yes").className == "yes button" && document.getElementById("daily no").className == "no button")
            return true
    }catch(TypeError){}

    try{
        if(document.getElementById("days left").value == "")
            return true
    }catch(TypeError){}

    try{
        if(document.getElementById("hours left").value == "")
            return true
    }catch(TypeError){}


    return false
}

function cal(hve_pass) {
    var day = 400 + 200 + 10*3 + 8*5 + 60/4
    var weekend_events = 50 + 500
    if (hve_pass) {week_seasonal = 250 * 5 + 500 * 3} 
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
    the_sweet_tier = [-1, -1]
    if(type==2){
        var one_day_cre = cal(have_pass)/500*25
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
        not_full_pp_gold_m = 0
        this_tier_time = 0

        one_day_tok = cal(have_pass)
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
            one_day_tok = cal(have_pass_2)
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
                
                time = season_ends + all_needed_tokens / one_day_tok
                console.log(time)
                time_r = Math.ceil(time)

                days_needed = time_r

                all_gold_rewards += 229 * Math.ceil(needed_credits / 25)
                not_full_pp_gold_m += 84 * Math.ceil(needed_credits / 25)

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
            one_day_tok = cal(have_pass_2)
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
                not_full_pp_gold_m += 84 * Math.floor((one_day_tok * season_ends + cur_tok) / 500)

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
                not_full_pp_gold_m += 84 * Math.ceil(needed_credits / 25)

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
    var the_brawler_name = document.getElementById("brawler name storage").className
    if (the_brawler_name == '')
        the_brawler_name = "the brawler"
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += `<div class='${the_brawler_name}' id='brawler name storage'>`
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `${tracke} > ${the_rarity} > Questions > Results`
    if(type==1)
        document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='make_brawler_standard_questions(${uno_rarity(the_rarity)})'>`
    if(type==2)
        document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='make_brawler_fast_questions(${uno_rarity(the_rarity)})'>`
    make_result_place()
    var the_result = document.getElementById("the result");
    the_result.innerHTML += "Results:<br>"
    
    try
    {
        if(the_sweet_tier[1]=='1')
            the_result.innerHTML += `You'll get ${the_brawler_name} at tier ${the_sweet_tier[0]} this season.<br>`
        else if (the_sweet_tier[1] != -1)
            the_result.innerHTML += `You'll get ${the_brawler_name} at tier ${the_sweet_tier[0]} next season.<br>`
    }catch(ReferenceError){}
    
    
    the_result.innerHTML += `It'll take around ${days_needed} days to get ${the_brawler_name}.<br>`
    the_result.innerHTML += `(which is around ${make_date(days_needed)})<br><br>`

    if(less_gold < 0)
        the_result.innerHTML += `You'll get around ${more_gold} coins.`
    else
    {
        the_result.innerHTML += `You'll get around ${less_gold} ~ ${more_gold} coins.`
        the_result.innerHTML += `<br>`
        the_result.innerHTML += `This includes coins on the pass and end of pass rewards.<br>Doesn't include power points on the pass converted to coins.<br>`
        the_result.innerHTML += `(Min: Unlocked all end of pass rewards without a full power point bank. Max: Vice Versa)`
    }

    if (the_result.innerHTML.includes("NaN")) 
        the_result.innerHTML += `<br><br>NaN means 'Not a Number', so you probably typed something wrong (･_･). Except for the brawler's name, everything else should be whole numbers only.`
    make_end_place(type)

}

function solve_chroma(go_back_place) {
    if(check())
    {
        alert("You haven't answered all questions!")
        return 0
    }
    var chroma_credit_amount = document.getElementById("chroma amount").value;
    chroma_credit_amount = parseInt(chroma_credit_amount)
    needed_chroma_credits = how_many_chroma()
    the_sweet_tier = [-1, -1]

    var pass_arr = [0,
        75, 75, 100, 150, 200, 300, 400, 400, 400, 400,
        400, 400, 400, 400, 400, 400, 400, 400, 400, 400,
        500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
        500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
        600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
        600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
        600, 600, 600, 600, 600, 600, 600, 600, 600, 600]
    
    var chroma_pass_arr = [0,
        0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 
        40, 0, 0, 0, 0, 0, 40, 0, 0, 0, 
        40, 0, 0, 0, 0, 0, 40, 0, 0, 0, 
        40, 0, 0, 0, 40, 0, 0, 0, 0, 40,
        0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 
        0, 0, 0, 0, 40, 0, 0, 0, 40, 0,
        0, 0, 0, 0, 40, 0, 0, 0, 0, 0]

    var gold_pass_arr = [0,
        0, 0, 640, 0, 0, 640, 0, 0, 640, 0,
        0, 0, 640, 0, 0, 0, 0, 640, 0, 0,
        0, 0, 0, 640, 0, 0, 0, 640, 0, 0,
        0, 640, 0, 0, 0, 0, 640, 0, 0, 0,
        640, 0, 0, 0, 640, 0, 0, 640, 0, 0,
        640, 0, 0, 0, 0, 640, 0, 0, 0, 640,
        0, 0, 0, 0, 0, 0, 640, 0, 0, 0]

    var gem_gold_pass_arr = [0,
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
    not_full_pp_gold_m = 0
    this_tier_time = 0

    one_day_tok = cal(have_pass)
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
                chroma_credit_amount += chroma_pass_arr[tier_now]
                all_gold_rewards += gem_gold_pass_arr[tier_now]
                if (needed_chroma_credits <= chroma_credit_amount)
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
                chroma_credit_amount += chroma_pass_arr[tier_now]
                all_gold_rewards += gold_pass_arr[tier_now]
                if (needed_chroma_credits <= chroma_credit_amount)
                    break
                tier_now += 1
                if (tier_now > 70)
                    break
            }
        }
        if(needed_chroma_credits <= chroma_credit_amount)
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
        one_day_tok = cal(have_pass_2)
        tier = 0
        if(needed_chroma_credits==1500)
            needed_chroma_credits = 500
        if(needed_chroma_credits==4500)
            needed_chroma_credits = 1500
        if(have_pass_2)
        {
            while(true)
            {
                chroma_credit_amount += chroma_pass_arr[tier]
                all_gold_rewards += gem_gold_pass_arr[tier]
                if (needed_chroma_credits <= chroma_credit_amount)
                    break
                tier += 1
                if (tier > 70)
                    break
            }
        }
        else{
            while(true)
            {
                chroma_credit_amount += chroma_pass_arr[tier]
                all_gold_rewards += gold_pass_arr[tier]
                if (needed_chroma_credits <= chroma_credit_amount)
                    break
                tier += 1
                if (tier > 70)
                    break
            }
        }
        if (tier>70)
        {
            time = season_ends + 1 + 63
            time_r = Math.ceil(time)

            days_needed = time_r
            
            all_gold_rewards += 15 / 4 * (time_r - season_ends)
            ava_tokens = 63 * one_day_tok - 34500
            end_rewards = Math.floor(ava_tokens / 500)
            all_gold_rewards += 229 * end_rewards
            not_full_pp_gold_m += 84 * end_rewards

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
        if(needed_chroma_credits==1500)
            needed_chroma_credits = 500
        if(needed_chroma_credits==4500)
            needed_chroma_credits = 1500
        
        one_day_tok = cal(have_pass_2)
        
        ori_season_ends = season_ends
        season_ends = Math.floor(available_tokens / one_day_tok)
        this_tier_time = ori_season_ends - season_ends
        cur_tok = available_tokens % one_day_tok

        all_gold_rewards += 15 / 4 * season_ends
        all_gold_rewards += 229 * Math.floor((one_day_tok * season_ends + cur_tok) / 500)
        not_full_pp_gold_m += 84 * Math.floor((one_day_tok * season_ends + cur_tok) / 500)
            
        tier = 0
        if (have_pass_2)
        {
            while (true)
            {
                chroma_credit_amount += chroma_pass_arr[tier]
                all_gold_rewards += gem_gold_pass_arr[tier]
                if (needed_chroma_credits <= chroma_credit_amount)
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
                chroma_credit_amount += chroma_pass_arr[tier]
                all_gold_rewards += gold_pass_arr[tier]
                if (needed_chroma_credits <= chroma_credit_amount)
                    break
                tier += 1
                if (tier > 70)
                    break
            }
        }
        if (tier > 70)
        {
            time = ori_season_ends + 1 + 63
            time_r = Math.ceil(time)

            days_needed = time_r

            all_gold_rewards += 15 / 4 * (time_r - ori_season_ends)
            ava_tokens = 63 * one_day_tok - 34500
            end_rewards = Math.floor(ava_tokens / 500)
            all_gold_rewards += 229 * end_rewards
            not_full_pp_gold_m += 84 * end_rewards

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
    if(daily_ava && days_needed>0)
        days_needed-=1
    hours = document.getElementById("hours left").value
    hours = parseInt(hours)
    if(hours<12 && days_needed>0)
        days_needed-=1


    var the_brawler_name = document.getElementById("brawler name storage").className
    if (the_brawler_name == '')
        the_brawler_name = "the brawler"
    document.getElementById("the good shit").innerHTML = ""
    document.getElementById("the good shit").innerHTML += `<div class='${the_brawler_name}' id='brawler name storage'>`
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("the good shit").innerHTML += "<div class='content text question' id='tracker'>"
    document.getElementById("the good shit").innerHTML += "</div>"
    document.getElementById("tracker").innerHTML += `Chromatic > Questions > Results`
    document.getElementById("tracker").innerHTML += `<br><input class='back button' type='button' value='Back' id='back' onclick='chromatic(${go_back_place})'>`
    make_result_place()
    var the_result = document.getElementById("the result");
    the_result.innerHTML += "Results:<br>"
        
    try
    {
        if(the_sweet_tier[1]=='1')
            the_result.innerHTML += `You'll get ${the_brawler_name} at tier ${the_sweet_tier[0]} this season.<br>`
        else if (the_sweet_tier[1]!=-1)
            the_result.innerHTML += `You'll get ${the_brawler_name} at tier ${the_sweet_tier[0]} next season.<br>`
    }catch(ReferenceError){}
        
        
    the_result.innerHTML += `It'll take around ${days_needed} days to get ${the_brawler_name}.<br>`
    the_result.innerHTML += `(which is around ${make_date(days_needed)})<br><br>`
    
    if(less_gold < 0)
        the_result.innerHTML += `You'll get around ${more_gold} coins.`
    else
    {
        the_result.innerHTML += `You'll get around ${less_gold} ~ ${more_gold} coins.`
        the_result.innerHTML += `<br>`
        the_result.innerHTML += `This includes coins on the pass and end of pass rewards.<br>Doesn't include power points on the pass converted to coins.<br>`
        the_result.innerHTML += `(Min: Unlocked all end of pass rewards without a full power point bank. Max: Vice Versa)`
    }

    if (the_result.innerHTML.includes("NaN")) 
        the_result.innerHTML += `<br><br>NaN means 'Not a Number', so you probably typed something wrong (･_･). Except for the brawler's name, everything else should be whole numbers only.`
    
    make_end_place(3)

}