export const isoToTimeStamp = (time) => {
  let date = new Date(time);
  date = date.getFullYear()+'년 ' + (date.getMonth()+1) + '월 '+date.getDate()+'일 ';
  return date
}