<script lang="ts">
	import { optimize } from '$lib/utils/image';
	let props = $props();
</script>

<img class={props.class} srcset={optimize(props.url)} alt={props.description} />
