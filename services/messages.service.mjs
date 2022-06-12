export class MessagesService {
    showMessage(message) {
        console.log(message);
    }

    showWarn(message) {
        console.log('\x1b[33m%s\x1b[0m', message);
    }

    showError(error) {
        console.error('\x1b[31m%s\x1b[0m%s', 'Error: ', error.message);
    }

    showFatalError(error) {
        console.error('\x1b[31m%s\x1b[0m%s', 'Fatal error: ', error.message);
    }
}
