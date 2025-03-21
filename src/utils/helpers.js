export const parseNumber = (value) =>
  Number.isNaN(Number(value)) ? 0 : Number(value);
