import "./components/css/styles.css"
const currentTime = new Date();

const hrs = currentTime.getHours();

const min = currentTime.getMinutes();

let time = "";

if (min < 10) {

    time = hrs + ":0" + min + "";

}
else {

    time = hrs + ":" + min + "";

}
let greeting = "";
let headerColor = "";
let container = "";

const customTheme = {
    theme: ""
}

const linkColor = {
    color: ""
}

if (hrs < 12) {
    greeting = "Morning";
    customTheme.theme = "#fcd16d";
    headerColor = "morning";
    linkColor.color = "#f5ba13";
    container = "morningContainer";
} else if (hrs < 18) {
    greeting = "Afternoon";
    customTheme.theme = "#AFC5FF";
    headerColor = "afternoon";
    linkColor.color = "#AFC5FF";
    container = "afternoonContainer";

} else {
    greeting = "Evening";
    customTheme.theme = "#070B34";
    headerColor = "evening";
    linkColor.color = "#070B34";
    container = "eveningContainer";
}


document.body.style.backgroundColor = customTheme.theme;
const themeInfo = {
    currentTime: time,
    periodOfDay: greeting,
    themeColor: headerColor,
    containerTheme: container
}

export default themeInfo;
export { linkColor };