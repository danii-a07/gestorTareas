const path = require('path')

module.exports = {
    entry: '.src/index.js', //punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', // nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //regex para identificar archivos css
                use: ['style-loader', 'css-loader'], //loaders para procesar archivos
            },
            {
              test: /\.js$/, //regex para identificar archivos JS
              exclude: /node_modules/, //exluir la carpeta de node_modules
              use: {
                loader: 'babel-loader', //loader para llevar JS moderno a JS antiguo para que sea compatible
                options: {
                    presets: ['@babel/preset-env'],
                },
              }  ,
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), 
        compress: true, //habilitar compresión gzip
        port: 9000, //Puerto del servidor de desarrollo
    }
}