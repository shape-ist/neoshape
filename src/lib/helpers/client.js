import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  token: import.meta.env.VITE_SANITY_KEY,
  useCdn: import.meta.env.VITE_CACHE_CDN,
});
