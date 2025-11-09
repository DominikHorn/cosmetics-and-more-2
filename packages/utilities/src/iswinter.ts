export function isWinter(): boolean {
  const now = new Date();
  const month = now.getUTCMonth() + 1;
  return month >= 11 || month < 2;
}

export function isChristmas(): boolean {
  const now = new Date();
  const month = now.getUTCMonth() + 1;
  const day = now.getDate();
  return month == 12 && day <= 26;
}
