// code your solution here
function saturdayFun(activity){
    if(activity == null){
        return "This Saturday, I want to roller-skate!"
    } else {
        return `This Saturday, I want to ${activity}!`
    }
}

function mondayWork(activity){
    if(activity == null){
        return "This Monday, I will go to the office."
    } else {
        return `This Monday, I will ${activity}.`
    }
}

function wrapAdjective(special){
    return function encouragingPromptFunction(value){
        return `You are ${special}${value}${special}!`
    }
}

