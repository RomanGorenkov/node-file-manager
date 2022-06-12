import readline from "readline"
import {MESSAGERS, MESSAGES_GETTERS_MAP} from "../const/messages.mjs";
import {ExceptionModule} from "./exception.module.mjs";
import {WorkingDirectoryModule} from "./working directory.module.mjs";
import {CommandHandlerService} from "./command-handler.service.mjs";
import {MessagesService} from "./messages.service.mjs";

export class DialogModule {
    exceptionModule = new ExceptionModule();
    workingDirectoryModule = new WorkingDirectoryModule();
    commandHandlerService = new CommandHandlerService();
    messagesService = new MessagesService();
    readlineInterfaces = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    startDialog() {
        this.greetings()
        this.workingDirectoryModule.showWorkingDirectory();
        this.openReadlineDialog();
    }

    openReadlineDialog() {
        this.readlineInterfaces.question(MESSAGERS.commandDelimiter, this.readlineActionHandler);
    }

    greetings() {
        const username = this.getUsername();
        const greetings = MESSAGES_GETTERS_MAP.greetings(username);

        console.log(greetings);
    }

    getUsername() {
        const cliArguments = process.argv;
        const usernameArgument = cliArguments.find(argument => argument.startsWith('--username='));
        const username = usernameArgument ? usernameArgument.substring(11) : '';

        if (username) {
            return username;
        } else {
            this.exceptionModule.throwEmptyUsernameException();
        }
    }

    readlineActionHandler = (answer) => {
        this.commandHandlerService.handleUserCommand(answer)
            .then(
                () => this.readlineInterfaces.question(MESSAGERS.commandDelimiter, this.readlineActionHandler),
                this.userCommandErrorHandler
            )
    }

    userCommandErrorHandler = (userCommandFailData) => {
        const warnMessage = userCommandFailData.isOperationFail ? MESSAGERS.operationFailed : MESSAGERS.invalidInput;

        this.messagesService.showWarn(warnMessage);
        this.readlineInterfaces.question(MESSAGERS.commandDelimiter, this.readlineActionHandler);
    };
}
