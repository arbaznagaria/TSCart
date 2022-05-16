export default abstract class AbsService {

    private _baseUrl: string;
    public get baseUrl(): string {
        return this._baseUrl;
    }

    constructor(baseUrl: string) {
        this._baseUrl = baseUrl
    }

}