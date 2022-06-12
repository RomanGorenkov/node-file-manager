import {DialogModule} from "./services/dialog.module.mjs"
import {WorkingDirectoryModule} from "./services/working directory.module.mjs";
import {MessagesService} from "./services/messages.service.mjs";

const cliCommunication = new DialogModule();
const workingDirectoryModule = new WorkingDirectoryModule();
const messagesService = new MessagesService();

function main() {
    try {
        workingDirectoryModule.goToUserHomeDirectory();
        cliCommunication.startDialog();
    }  catch (error) {
        messagesService.showFatalError(error);
        process.exit(1);
    }
}

main();
