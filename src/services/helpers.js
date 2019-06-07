export function omit(object, key) {
  const { [key]: omited, ...others} = object;
  return others;
}