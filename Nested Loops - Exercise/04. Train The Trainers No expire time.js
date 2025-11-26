
function trainTheTrainers(array){
    const countOfPeopleInJury = Number(array[0])

    let index = 1;
    let presentationName = array[index]

    let allGrades = 0;
    let allGradesCounter = 0; // броим всички дадени оценки

    while (presentationName !== 'Finish'){
        let allPresentationGrades = 0;

        for (let i = 0; i < countOfPeopleInJury; i++) {
            index++;
            let currentGrade = Number(array[index]); // взимаме си поредна оценка за текущата презентация

            allPresentationGrades += currentGrade;
            allGrades += currentGrade;
            allGradesCounter++;
        }

        let presentationAverageGrade = allPresentationGrades / countOfPeopleInJury;

        console.log(`${presentationName} - ${presentationAverageGrade.toFixed(2)}.`)

        index++;
        presentationName = array[index]; // взимаме си ново име на презентацията
    }

    let finalAssesment = allGrades / allGradesCounter;

    console.log(`Student's final assessment is ${finalAssesment.toFixed(2)}.`)
}

trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])