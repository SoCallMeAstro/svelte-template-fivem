<script lang="ts">
    import { Visibility, Debug } from "@Store/Store"; import EventListeners from "@Handlers/EventListeners.svelte";
</script>

{#if $Visibility || $Debug }
    <main>
        <slot/>
    </main>
{/if}

<EventListeners/>