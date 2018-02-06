import * as TestCafe from 'testcafe';
import * as commandLineArgs from 'command-line-args';
import {OptionDefinition} from 'command-line-args';

const optionDefinitions: OptionDefinition[] = [
    {
        name: 'browsers',
        type: String,
        alias: 'b',
        multiple: true,
    },
    {
        name: 'tests',
        type: String,
        alias: 't',
        multiple: true,
    },
    {
        name: 'concurrency',
        type: Number,
        alias: 'c',
    },
    {
        name: 'screenshots',
        type: String,
        alias: 's',
        defaultValue: 'screenshots',
    },
    {
        name: 'takeOnFails',
        type: Boolean,
        alias: 'S',
        defaultValue: false,
    },
];

const args = commandLineArgs(optionDefinitions);

(async () => {
    const tc = await TestCafe('localhost', 1337, 1338);
    const runner = await tc.createRunner();
    try {
        await runner
            .src(args.tests)
            .browsers(args.browsers)
            .concurrency(args.concurrency)
            .screenshots(args.screenshots, args.takeOnFails)
            .run({
                skipJsErrors: true
            });
    } catch (e) {
        console.error(e);
    } finally {
        await tc.close();
    }
})();
