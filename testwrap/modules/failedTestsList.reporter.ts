class MyCustomReporter {
    constructor(globalConfig, options) {
    //     this._globalConfig = globalConfig;
    //     this._options = options;
    }

    onRunComplete(contexts, results) {
        console.log('Custom reporter');
        // console.log('GlobalConfig: ', this._globalConfig);
        // console.log('Options: ', this._options);
    }
}

module.exports = MyCustomReporter;