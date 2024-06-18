function solve (num){


    function setUpLoadingBar (percentLoaded){

        let percentSymbolCount=percentLoaded/10;
        let dotSymbolCount=10-percentSymbolCount;

        let percents = '%'.repeat(percentSymbolCount);

        let dots = '.'.repeat(dotSymbolCount);

        const bar = `[${percents}${dots}]`
        return bar;
    }

    let resultBar = setUpLoadingBar(num);

    if (num===100){
        console.log('100% Complete!');
        console.log(resultBar);

    }else {
        console.log(`${num}% ${resultBar}`);
        console.log('Still loading...');
    }
}