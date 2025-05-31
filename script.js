const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector(".advice-text");
const diceBtn = document.querySelector('.dice-btn');

async function getAdvice() {
    console.log("Fetching advice...");
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await res.json();
    const {id, advice} = data.slip;

    console.log(`Advice ID: ${id}, Advice: ${advice}`);

    adviceId.innerText = `ADVICE #${id}`;
    adviceText.innerText = `"${advice}"`;
}

diceBtn.addEventListener('click', getAdvice);

getAdvice();