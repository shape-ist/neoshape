<script>
  export let data;
  import Social from './Social.svelte';
  let socials = [];
  if (data.instagram != undefined) {
    socials.push({ url: data.instagram, icon: '/instagram.svg' });
  }
  if (data.twitter != undefined) {
    socials.push({ url: data.twitter, icon: '/twitter.svg' });
  }
  if (data.linkedin != undefined) {
    socials.push({ url: data.linkedin, icon: '/linkedin.svg' });
  }
  export let s = socials;
</script>

<div>
  {#each s as socialItem}
    <Social data={socialItem} />
  {/each}
</div>
