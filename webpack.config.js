module.exports = {
    entry: {
        index: './src/index.js',
        inicio: './src/inicio.js',
        main: './src/main.js',
        tela: './src/tela.js',
        sozinho: './src/sozinho.js',
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}