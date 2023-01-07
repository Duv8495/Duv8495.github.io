alert ("You are a miner who got lost on his way to work and needs to find his way back. You come across a path that goes into a forest, however, it is really dark in there and hard to see. You could instead go up the mountain and get a birds eye view of the area, however, it is very cold up there.")

let forest_or_mountain = prompt("Do you (1) go into the dark forest or do you (2) climb the mountain? Type 1 for forest or 2 for mountain.")

if(forest_or_mountain == 1){
    alert("As you head into the forest you get jumped by bandits and they stab you and take all of your stuff. You Lose.")
}
else if (forest_or_mountain == 2){
     alert("As you head up the mountain, you see someone on the path getting robbed, you can try to help them, however, it is a long way down and might be difficult to stop them. You could look around to see if you can find anything else to help you find your job.")
     let down_or_look = prompt("Do you (1) try to head down or do you (2) look around for something that can help you?")
    
     if(down_or_look == 1){
        alert("As you look to see if there is a way down, a goat suddenly charges into you, sending you falling down the mountain. You Lose.")
    }
    else { 
        alert("As you look around you see a goat charging at you and get out of the way, after that, you see a caravan and they could know the way, however, it could be a trap")
        let caravan_or_look = prompt("Do you (1) go to the caravan and see if they can take you there or do you (2) keep looking around for something else?")
        if(caravan_or_look == 2){
            alert("As you keep looking around the snow gets deeper and deeper until you freeze to death. You Lose.")
        }
        else{
            alert("You head to the caravan and they take you to your job, when you get there you tell the guards about where the bandits are, and get a bonus. YOU WIN!")
        }
    }
}
else{
    alert("You decide to head back the way you came and you find a caravan and they take you to your job. You Win?")
}
