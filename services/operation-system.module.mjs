import * as os from "os";

export class OperationSystemModule {
    getUserHomePath() {
        return os.homedir()
    }
}
