const formatDate = (date, format) => {
    let dt = new Date(date);
    let month = ("00" + (dt.getMonth() + 1)).slice(-2);
    let day = ("00" + dt.getDate()).slice(-2);
    let year = dt.getFullYear();
    let hours = ("00" + dt.getHours()).slice(-2);
    let minutes = ("00" + dt.getMinutes()).slice(-2);
    let seconds = ("00" + dt.getSeconds()).slice(-2);

    switch (format) {
        case "DD-MM-YYYY":
            return day + "-" + month + "-" + year;
        case "YYYY-MM-DD":
            return year + "-" + month + "-" + day;
        case "DD.MM.YYYY / HH:mm:ss":
            return (
                day +
                "." +
                month +
                "." +
                year +
                " / " +
                hours +
                ":" +
                minutes +
                ":" +
                seconds
            );
        case "forComment":
            return (
                hours + ":" + minutes + " / " + day + "." + month + "." + year
            );
        default:
            return day + "." + month + "." + year;
    }
};

const getResumeStatusLabel = status => {
    switch (status) {
        case 1: {
            return 'Aktiv emas'
        }
        case 2: {
            return 'Aktiv'
        }
        default: {
            return 'Undefined'
        }
    }
}

const getResumeStatusColor = status => {
    switch (status) {
        case 1: {
            return 'red'
        }
        case 2: {
            return 'green'
        }
        default: {
            return 'black'
        }
    }
}

export default {
    formatDate,
    getResumeStatusLabel,
    getResumeStatusColor
}
