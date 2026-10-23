import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/StudySmart/', // 👈 Ensures assets load correctly from https://adrizz101.github.io/StudySmart/
});
