export default function timeConvert(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const result =  `${hours}ч ${minutes}м`;
  // const result2 = time > 60 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  return result;
}
