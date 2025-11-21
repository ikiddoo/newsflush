
export const API_KEY = import.meta.env.VITE_API_KEY;

export function getNewsApiUrl(category: string, country: string = "us") {
  return `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
}
