function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const dob = new Date(dobInput);
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - dob;

    // Calculate the number of years
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));

    // Calculate the number of months
    const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));

    // Calculate the number of days
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));

    // Calculate the number of minutes
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Your age is approximately ${years} years, ${months} months, ${days} days, and ${minutes} minutes.`;
}