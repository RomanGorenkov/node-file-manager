export class ExceptionModule {
    throwEmptyUsernameException() {
        throw new Error('Empty username');
    }
}
