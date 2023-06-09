const form = document.getElementById("form");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const pw = document.getElementById("pw");

// 기본 Validation Message 제거
// 해당 Input이 공란으로 invalid 이벤트 발생 시 valueMissing 함수 호출
function invalidInput(name) {
  name.addEventListener("invalid", (event) => {
    event.preventDefault();
    if (event.target.value === "") {
      valueMissing();
    }
  });
}
// 위의 invalidInput함수를 모든 Input에 적용
invalidInput(fName);
invalidInput(lName);
invalidInput(email);
invalidInput(pw);

// 각 검증 결과에 맞는 Validation Message 설정
function warning(name) {
  name.style.border = "2px solid hsl(0, 100%, 74%)";
  name.parentElement.querySelector("img").classList.remove("hidden");
  name.parentElement.querySelector("span").style.color = "hsl(0, 100%, 74%)";
}
function correct() {
  event.target.style.border = "2px solid hsl(154, 59%, 51%)";
  event.target.parentElement.querySelector("img").classList.add("hidden");
  event.target.parentElement.querySelector("span").style.color =
    "hsl(154, 59%, 51%)";
  event.target.parentElement.querySelector("span").innerText = `Correct!`;
}
function valueMissing() {
  warning(event.target);
  event.target.parentElement.querySelector(
    "span"
  ).innerText = `${event.target.placeholder} cannot be empty`;
}
function misMatch() {
  warning(event.target);
  event.target.parentElement.querySelector(
    "span"
  ).innerText = `Looks like this is not an email`;
}
function tooShort() {
  warning(event.target);
  event.target.parentElement.querySelector(
    "span"
  ).innerText = `Password must be between 10 ~ 18 characters.`;
}

// Form에 input 이벤트 발생 시, 매 키 입력마다 나오는 검증 결과에 알맞는 함수를 호출
form.addEventListener("input", (event) => {
  event.preventDefault();
  if (event.target.validity.valueMissing) {
    valueMissing();
  } else if (event.target.validity.tooShort) {
    tooShort();
  } else if (event.target.validity.typeMismatch) {
    misMatch();
  } else if (event.target.validity.valid) {
    correct();
  }
});

// Form submit 이벤트 발생 시, 페이지 새로고침 방지
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
