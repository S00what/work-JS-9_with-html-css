let sec = document.querySelector(".s"),
    min = document.querySelector(".m"),
    hour = document.querySelector(".h"),
    hoursNumber = document.querySelector(".hours"),
    minutesNumber = document.querySelector(".minutes")
    now = new Date();
const links = document.querySelectorAll(`.tabsItem`);
const tabs = document.querySelectorAll(`.tabsContentItem`);


let secAngle = now.getSeconds() * 6,
    minAngle = now.getMinutes() * 6 + now.getSeconds() * 0.1,
    hourAngle = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5
//Извините я написал ИИ что-бы он пояснил как это исправить а то идей не было вообще а он просто скинул код
//Но я все прочел внимательно и пытался вникнуть как смог и как я понял он убрал только микро-рывки
//основная работа между плавным скачком делает математика а углы он просто записал в переменные
function clock() {
    let time = new Date();
    secAngle += 6;
    minAngle += 0.1;
    hourAngle += 0.1 / 12;
    sec.style.transition = "transform 1s linear";
    min.style.transition = "transform 1s linear";
    hour.style.transition = "transform 1s linear";
    sec.style.transform = `rotate(${secAngle}deg)`;
    min.style.transform = `rotate(${minAngle}deg)`;
    hour.style.transform = `rotate(${hourAngle}deg)`;
    hoursNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    minutesNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    setTimeout(clock, 1000);
}
clock();

links.forEach((link, i) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        links.forEach((link, i) => {
            link.classList.remove("active");
            tabs[i].classList.remove("active");
        });
        link.classList.add("active");
        tabs[i].classList.add("active");
    });
});

