RegisterCommand("+LoadUI", function()
    SendNUIMessage({action = "SetUIVisability", data = true})
    SetNuiFocus(true, true)
end)

RegisterNUICallback("HideUI", function(_, cb)
    SetNuiFocus(false, false)
    cb("ok")
end)

RegisterKeyMapping("+LoadUI", "Load up the svelte-template UI", "keyboard", "F3")