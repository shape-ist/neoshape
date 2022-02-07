<script>
  import LandingFooterSocialItem from './LandingFooterSocialItem.svelte';
</script>

<div class="flex items-center justify-center flex-col pt-48 pb-16">
  <h2 class="font-secondary font-bold text-2xl pb-4">Find us On:</h2>
  <div>
    <LandingFooterSocialItem
      handle="@shape.ist"
      platform="Instagram"
      href="https://www.instagram.com/shape.ist/"
    />
    <LandingFooterSocialItem
      handle="@shapeist"
      platform="LinkedIn"
      href="https://linkedin.com/company/shapeist/"
    />
  </div>
</div>
