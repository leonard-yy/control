module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#FF6A00',
                    'link-color': '#FF6A00',
                },
                lessOptions: {
                    modifyVars: {
                        '@primary-color': '#FF6A00',
                        '@link-color': '#FF6A00',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
};