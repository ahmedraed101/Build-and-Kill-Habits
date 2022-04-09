const input = document.querySelector('#input');
const showHabits = document.querySelector(".show-habits")
const Habits = getHabits()
document.querySelector("#app").addEventListener("submit", e => {
    e.preventDefault()
    const inputValue = input.value
    if (inputValue.trim() === "") return
    console.log(inputValue)
    const newHabit = createHabit(inputValue)
    showHabits.appendChild(newHabit)
    input.value = ""
})