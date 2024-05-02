"use strict";

function generateRandomName() {
  const questions = [
    "Hi Alfi",
    "Hi Andrea",
    "Hi Jesus",
    "Hi Jaranesca",
    "Hi Guadalupe",
    "Hi Leslie",
    "Hi Maximo",
    "Hi Moncerrat",
    "Hi Niran",
    "Hi Sabrina",
    "Hi Daniel",
    "Hi Uriel",
    "Hi Dante",
    "Hi Victor",
    "Hi Kaaliyah",
    "Hi Rene",
    "Hi Brett",
    "Hi Kayla",
    "Hi Kadiatou",
    "Hi Remsey",
    "Hi Abdikadir",
    "Hi Kayla",
    "Hi Kadiatou",
    "Hi Remsey",
  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * questions.length);

  document.getElementById("displayQuestion").innerHTML = questions[index];
}

// Example usage:
let thequestion = generateRandomName();
