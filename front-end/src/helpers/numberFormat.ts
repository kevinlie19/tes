export default function numberFormat(value: string) {
  let stringToNumber = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');

  return stringToNumber;
}
