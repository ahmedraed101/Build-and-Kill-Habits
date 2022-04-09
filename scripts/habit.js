class Habit {
    constructor(id, title) {
        this.id = id
        this.startTime = new Date().getTime()
        this.title = title
    }
}

const createEl = (type, classes, children=[], text="") => {
    const el = document.createElement(type)
    el.innerText = text
    el.classList.add(...classes)
    for (let i = 0; i < children.length; i++) {
        el.appendChild(children[i])
    }
    return el
}

const images = ['3d-render-male-figure-mountain-landscape-with-low-clouds-against-sunset-sky_1048-13918.webp', 'courage-man-jump-through-gap-hill-business-concept-idea_1323-262.webp', 'hikers-top_181624-555.webp', 'low-angle-woman-climbing-metal-bars_23-2148698892.webp', 'man-climb-mountain-get-flag-achievement-goal-difficult-career-concept_207634-718.webp', 'man-jump-through-gap-hill-man-jumping-cliff-sunset-background-business-concept-idea_1323-100.webp', 'man-jumping-impossible-possible-cliff-sunset-background-business-concept-idea_1323-266.webp', 'wide-mountain-panorama-small-silhouette-tourist-with-backpack-rocky-mountain-slope-with-raised-hands-valley-covered-with-white-puffy-clouds-beauty-nature.webp']
const createHabitDom =  (habit) => {
    const imageEl = createEl("img", [])
    const image = images[Math.round(Math.random() * (images.length - 1))]
    console.log(image)
    imageEl.setAttribute("src", `./images/${image}`)

    const titleEl = createEl("div", ["title"], [], habit.title)
    const now = new Date()
    const time = Math.floor((now - habit.startTime) / 1000 / 60 / 60 / 24)
    const finalTime = time === 0 ? "⏳" : `${time} Days`
    const timeEl = createEl("div", ["time"], [], finalTime)

    const deleteButtonEl = createEl("div", ["delete-button"], [], "Delete")
    const restartButtonEl = createEl("div", ["restart-button"], [], "Restart")
    const actionsButtonEl = createEl("div", ["action-buttons"], [deleteButtonEl, restartButtonEl])
    const habitCard = createEl("div", ["habit"], [imageEl, titleEl, timeEl, actionsButtonEl])
    return habitCard
}

const getHabits = () => {
    const habits = localStorage.getItem("habits")
    if (habits == null) return []
    return habits
}

const saveHabits = () => {
    localStorage.setItem("habits", Habits)
}