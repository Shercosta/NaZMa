function rewardHoverEffect(defaultID) {
    for (let i = 1; i <= 6; i++) {
        if (("#reward" + i) != defaultID){
            change = ("#reward" + i)
            $(change).css("transition", "300ms")
            $(change).css("opacity", "0.5")
        }
    }
}

function rewardHoverEffectLeave(defaultID) {
    for (let i = 1; i <= 6; i++) {
        if (("#reward" + i) != defaultID){
            change = ("#reward" + i)
            $(change).css("opacity", "1")
        }
    }
}

$(".achievementCol").mouseenter(function() {
    currentID = ("#" + this.id)
    rewardHoverEffect(currentID)
})
$(".achievementCol").mouseleave(function() {
    currentID = ("#" + this.id)
    rewardHoverEffectLeave(currentID)
})

$(".achievementCol").mouseenter(function() {
    $(".fa-trophy").css("transition", "300ms")
    $(".fa-trophy").css("color", "#040404")
})
$(".achievementCol").mouseleave(function() {
    $(".fa-trophy").css("color", "#30318B")
})