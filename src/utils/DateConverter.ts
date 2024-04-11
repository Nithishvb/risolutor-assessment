export const formatDate = (inputDate: string) => {
  const options: any = { day: "2-digit", month: "long", year: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-GB", options);
};
