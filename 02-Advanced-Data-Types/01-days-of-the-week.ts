enum DaysOfTheWeek {
    "Monday" = 1,
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
}

function daysOfTheWeek(day: number) {
    // if (day in DaysOfTheWeek) {
    //     console.log(DaysOfTheWeek[day])
    // } else {
    //     console.log("error")
    // }
    console.log(DaysOfTheWeek[day] || "error")
}

DaysOfTheWeek.Monday
DaysOfTheWeek[1]

daysOfTheWeek(1)
daysOfTheWeek(5)
daysOfTheWeek(-1)