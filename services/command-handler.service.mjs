export class CommandHandlerService {
    commandsMap = {
        command: () => console.log('kek'),
    }
    handleUserCommand(userCommand) {
        console.log('command', userCommand);
        const hasCommandInMap = this.hasCommandInMap(userCommand);
        const handleCommandPromiseExecutor = (resolve, reject) => {
            if (hasCommandInMap) {
                this.commandsMap[userCommand]();
                resolve();
            } else {
                reject(this.getUserCommandFailData(false));
            }
        };

        return new Promise(handleCommandPromiseExecutor);
    }

    hasCommandInMap(userCommand) {
        return !!this.commandsMap[userCommand];
    }

    getUserCommandFailData(isOperationFail) {
        return { isOperationFail }
    }
}
