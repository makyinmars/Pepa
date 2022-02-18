export const formatTime = (sec: number) => {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;

  if (minutes === 0) {
    return `${seconds} sec`;
  } else if (seconds === 0) {
    return `${minutes} min`;
  } else {
    return `${minutes} min and ${seconds} sec`;
  }
};
