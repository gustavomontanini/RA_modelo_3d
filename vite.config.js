import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'


export default defineConfig({
    server: {
        host: true, // expõe para a LAN
        port: 5173,
        https: {
            key: fs.readFileSync(path.resolve(__dirname, '192.168.100.19+1-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, '192.168.100.19+1.pem'))
        }
    }
})  