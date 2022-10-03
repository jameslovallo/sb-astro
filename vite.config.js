import basicSsl from '@vitejs/plugin-basic-ssl'
export default {
	// config options
	server: {
		https: true,
	},
	plugins: [basicSsl()],
}
