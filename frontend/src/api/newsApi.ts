
export const API_KEY = "1f48f71ac0ea494ea9c9de0fe477f543";

export function getNewsApiUrl(category: string, country: string = "us") {
  return `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
}
