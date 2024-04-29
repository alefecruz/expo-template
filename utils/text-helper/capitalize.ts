export function capitalize(text: string): string {
  const prepositions = ['de', 'da', 'do', 'dos', 'das'];
  return text
    .split(' ')
    .map((word, index) => {
      if (index !== 0 && prepositions.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
