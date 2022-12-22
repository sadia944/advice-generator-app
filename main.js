const advice = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-Id");
const btn = document.querySelector(".get-advice");

function getAdvice() {

    fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 200)}`)
        .then((response) => response.json())
        .then((data) => {
            advice.innerHTML = `“${data.slip.advice}”`;
            adviceId.innerText = data.slip.id;
        }
        );
}
getAdvice()

btn.addEventListener("click", getAdvice)