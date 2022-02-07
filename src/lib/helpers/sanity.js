import client from './client';
import imageUrlBuilder from '@sanity/image-url';
const project = import.meta.env.VITE_SANITY_PROJECT;
const defaultDataset = import.meta.env.VITE_SANITY_DATASET;

const builder = imageUrlBuilder(client);

export async function fetchSanityAPI(url) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SANITY_KEY}`,
    },
  });
  return response.json();
}

export async function queryContent(q, dataset = defaultDataset) {
  let query = encodeURIComponent(q);
  return await fetchSanityAPI(`
    https://${project}.api.sanity.io/v1/data/query/${dataset}?query=${query}
    `);
}

export function generateCDNURL(source) {
  return builder.image(source);
}
