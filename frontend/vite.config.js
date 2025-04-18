import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	
		build: {
		  outDir: 'public'  // Ensure the build output goes to the 'public' directory
		},
	  
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
});
