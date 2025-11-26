function vacationBooksList(numberOfPages, pagesPerHour, numberOfDays) {
    // Изчисляваме общото време за четене на книгата
    let totalTime = numberOfPages / pagesPerHour;
    // Изчисляваме колко часа на ден трябва да чете
    let hoursPerDay = totalTime / numberOfDays;

    console.log(hoursPerDay);
}

// Примерно извикване с три аргумента
vacationBooksList(212, 20, 2);