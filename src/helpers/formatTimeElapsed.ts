export const formatTimeElapsed = (seconds: number): string => {
    let minutes = Math.floor(seconds / 60);

    let sec = seconds - (minutes * 60);
    
    let secString = `${sec < 10 ? '0'+sec : sec}`;
    let minString = `${minutes < 10 ? '0'+minutes : minutes}`;

    return `${minString}:${secString}`;
}