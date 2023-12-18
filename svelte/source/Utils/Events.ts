import { onMount, onDestroy } from "svelte";

export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

export const ReceiveNUI = <T = unknown>([action, handler]: [string, (data: T) => void]) => {
    const eventListener = (event: MessageEvent) => {
        const { action: eventAction, data } = event.data;
        eventAction === action && handler(data);
    };
    onMount(() => window.addEventListener("message", eventListener));
    onDestroy(() => window.removeEventListener("message", eventListener));
}

export const SendNUI = async ([action, data]: [string, any?]): Promise<any> => {
    const options = {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
    };
    
    const resourceName = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : "svelte-fivem-template";
    
    const resp: Response = await fetch(`https://${resourceName}/${action}`, options);
    return await resp.json()
}

export const DebugData = (events: [ action: string, data: any ], timer = 0): void => {
	if (isEnvBrowser()) {
		for (const event of events) {
			setTimeout(() => {
				window.dispatchEvent(
					new MessageEvent("message", {
						data: {
						action: event.action,
						data: event.data,
						},
					})
				);
			}, timer);
		}
	}
}