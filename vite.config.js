import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/coursera-ibm-developing-with-react--plantShopping/",
  plugins: [react()],
})
