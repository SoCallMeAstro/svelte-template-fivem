<script lang="ts">
    import { onMount } from "svelte"; import { DebugData, ReceiveNUI, SendNUI } from "@Utils/Events"; import { Visibility } from "@Store/Store"

    ReceiveNUI(["SetUIVisability", (visability: boolean) => {
        $Visibility = visability
    }])

    onMount(() => {
        const KeyHandler = async (e: KeyboardEvent) => {
            if ($Visibility && e.code.includes("Escape")) {
                $Visibility = false;
                SendNUI(["HideUI"])
            }
        }

        document.addEventListener("keydown", KeyHandler);
        return () => {document.removeEventListener("keydown", KeyHandler)};
    });
</script>