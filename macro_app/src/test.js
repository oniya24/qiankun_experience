import importHTML from 'import-html-entry';

importHTML('http://localhost:3001/index.html')
    .then(res => {
        console.log(res)
        console.log(res.template);

        res.execScripts().then(res => {
            console.log(res, Object.keys(res).length !== 0)
            if(Object.keys(res).length !== 0){
                console.log("???")
                const { bootstrap, mount } = res;
                console.log('exec bootstrap')
                bootstrap()
            }

        })
        // res.getExternalScripts().then(exports => {
        //     console.log(exports)
        // })
        // res.getExternalStyleSheets().then(res => {
        //     console.log(res)
        // })
});