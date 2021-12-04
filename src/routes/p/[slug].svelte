<script context="module">
  import Entity from '@lib/entity/Entity.svelte';
  import { queryContent } from '@lib/helpers/sanity';
  export const load = async ({ page }) => {
    let entity = await queryContent(
      `*[_type == 'project' && slug.current == "${page.params.slug}"]`
    );
    return {
      props: {
        entity,
      },
    };
  };
</script>

<script>
  export let entity;
</script>

<Entity entityJSON={entity} />
