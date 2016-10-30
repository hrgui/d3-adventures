module.exports = {
  "port": 4000,
  server: {
    directory: true,
    baseDir: 'public',
    routes: {
      "/node_modules": "node_modules"
    }
  },
  open: false
}