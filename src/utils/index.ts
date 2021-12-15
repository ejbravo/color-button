export function replaceCameWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}
