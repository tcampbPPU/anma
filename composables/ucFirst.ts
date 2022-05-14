/**
 * Uppercase the first letter of a string
 * @param string
 * @return string
 */
export default function ucFirst(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
