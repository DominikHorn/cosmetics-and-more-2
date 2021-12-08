export function isWinter(): boolean {
  const now = new Date();
  const month = now.getUTCMonth() + 1;
  return month > 11 || month < 2;
}
