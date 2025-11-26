function walking(arr){
    let walkingSteps = 0;
    let index = 0;

    while(walkingSteps < 10000){
        let input = arr[index];

        if(input === 'Going home'){
            let stepsToHome = Number(arr[++index]); //++index -> първо прибавя 1 към индекса и тогава го ползваме
            walkingSteps += stepsToHome;
            break;
        } else {
            let currentSteps = Number(input)
            walkingSteps += currentSteps;
        }

        index++;
    }

    if(walkingSteps >= 10000){
        console.log('Goal reached! Good job!');
        console.log(`${walkingSteps - 10000} steps over the goal!`)
    } else {
        console.log(`${10000 - walkingSteps} more steps to reach goal.`)
    }
}

walking(["1500",
"3000",
"Going home",
"200"])