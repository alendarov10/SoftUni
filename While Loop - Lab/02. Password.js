function  password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;    
    let enteredPassword = input[index];
    index++;
    while (enteredPassword !== password) {
        enteredPassword = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);    
