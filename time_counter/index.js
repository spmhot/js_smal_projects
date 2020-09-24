const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const myBirthday = '07 Jun 2021';

function x() {
    const mybddate = new Date(myBirthday);
    const currentDate = new Date();

    const totalseconds =
        Math.floor(new Date(mybddate) - new Date(currentDate)) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 60) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formTime(hours);
    minutesEl.innerHTML = formTime(minutes);
    secondsEl.innerHTML = formTime(seconds);

}

function formTime(time) {
    return time < 10 ? `0${time}` : time;
}
x();
setInterval(x, 100)
if (x == myBirthday) {
    window.alert("hhh");
}
