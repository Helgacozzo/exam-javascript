const userName = prompt("Qual è il tuo nome?");
const userYearBirth = parseInt(prompt("Qual è il tuo anno di nascita?"));

if ((userYearBirth % 4 === 0 && userYearBirth % 100 !== 0) || userYearBirth % 400 === 0) {
    alert(`Ciao ${userName}, sei nato in un anno bisestile!`);
};