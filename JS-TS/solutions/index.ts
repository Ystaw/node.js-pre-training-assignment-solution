#!/usr/bin/env ts-node
// CLI entry for Task 10 – placeholder only

import { ToDoManager } from './todo-manager';

async function main() {
    const manager = new ToDoManager();

    const [, , command, ...args] = process.argv;

    switch (command) {
        case 'init': {
            await manager.init();
            break;
        }
        case 'add': {
            await manager.add(args[0], args[1]);
            break;
        }
        case 'complete': {
            await manager.complete(Number(args[0]));
            break;
        }
        case 'list': {
            const todos = await manager.list();
            break;
        }
        default: { };
    }
}

main();