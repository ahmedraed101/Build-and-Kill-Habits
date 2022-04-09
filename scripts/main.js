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

// create habit
const createHabit = (title) => {
    const id = 4
    const newHabit = new Habit(id, title)
    // Habits.push(newHabit)
    // saveHabits()
    return createHabitDom(newHabit)
}