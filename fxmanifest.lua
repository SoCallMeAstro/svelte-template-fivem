fx_version "cerulean"
game "gta5"
lua54 "yes"

version "1.0.0"

files {
    "build/**"
}

client_scripts {
    "client/*.lua"
}

ui_page "build/index.html"
-- ui_page "http://localhost:3000"

-- ^^ For development purposes, will essentially hot reload when you make changes to the svelte source code, like the browser
-- Just comment out the "ui_page "build/index.html"" line with ctrl + /, and uncomment out the "ui_page "http://localhost:3000"" portion