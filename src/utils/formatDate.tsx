export function formatDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  } catch (error) {
    return "Invalid Date";
  }
}
