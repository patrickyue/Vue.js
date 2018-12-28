module.exports = {
  devServer:{
    proxy:{
      '/api/':{
        target:'http://localhost:8087',
        changeOrigin:true,
      }
    }
  }
}