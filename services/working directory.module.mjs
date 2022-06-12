import os from "os";
import {MESSAGES_GETTERS_MAP} from "../const/messages.mjs";
import {MessagesService} from "./messages.service.mjs";

export class WorkingDirectoryModule {
    messagesService = new MessagesService();

    goToUserHomeDirectory() {
        const homePath = os.homedir();

        process.chdir(homePath);
    }

    showWorkingDirectory() {
        const currentPath = process.cwd();
        const message = MESSAGES_GETTERS_MAP.workingDirectory(currentPath);

        this.messagesService.showMessage(message);
    }
}
