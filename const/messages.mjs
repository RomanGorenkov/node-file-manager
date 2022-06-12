export const MESSAGES_GETTERS_MAP = {
    'greetings': (username) => `Welcome to the File Manager, ${username}`,
    'workingDirectory': (workingDirectory) => `You are currently in ${workingDirectory}`,
}

export const MESSAGERS = {
    commandDelimiter: '>> ',
    invalidInput: 'Invalid input',
    operationFailed: 'Operation failed',
}
