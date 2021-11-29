import sanityClient from '@sanity/client'
export default client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2021-03-25',
  token: import.meta.env.VITE_SANITY_KEY,
  useCdn: true,
})