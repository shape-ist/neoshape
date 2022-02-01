<script context="module">
  import EntityList from '@lib/entityList/EntityList.svelte';
  import { queryContent } from '@lib/helpers/sanity';
  export const load = async () => {
    let entities = await queryContent(
      "*[_type == 'project' && entityType == 'for-profit']"
    );
    return {
      props: {
        entities,
      },
    };
  };
</script>

<script>
  export let entities;
</script>

<EntityList data={entities.result} title="For-Profit Brands" />
