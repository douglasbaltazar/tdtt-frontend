export function diffMinutes(date: string) {
    const d1 = new Date(date).getTime();
    const d2 = new Date().getTime();
    let seconds = Math.floor((d2 - d1) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds =
        seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    let diff = "Há ";
    if (days) {
        if (days == 1) {
            diff += days && days.toString() + " dia ";
        } else {
            diff += days && days.toString() + " dias ";
        }
        return diff;
    }
    if (hours) {
        if (hours == 1) {
            diff += hours && hours.toString() + " hora ";
        } else {
            diff += hours && hours.toString() + " horas ";
        }
        return diff;
    }
    if (minutes == 0) {
        diff = "Agora";
        return diff;
    }
    if (minutes == 1) {
        diff += minutes.toString() + " minuto ";
    } else {
        diff += minutes.toString() + " minutos ";
    }
    return diff;
}