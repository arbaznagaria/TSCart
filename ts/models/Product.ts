export default class Product {

    private _Id: string
    public get Id(): string {
        return this._Id
    }

    private _Title: string
    public get Title(): string {
        return this._Title
    }

    private _Description: string
    public get Description(): string {
        return this._Description
    }

    private _ImgUrl: string
    public get ImgUrl(): string {
        return this._ImgUrl
    }

    private _OrigPrice: number
    public get OrigPrice(): number {
        return this._OrigPrice
    }

    private _DiscountPrice: number
    public get DiscountPrice(): number {
        return this._DiscountPrice
    }

    private _Category: number
    public get Category(): number {
        return this._Category
    }

    constructor(id: string, title: string, description: string, imgUrl: string, origPrice: number, discountPrice: number, category: number) {
        this._Id = id
        this._Title = title
        this._Description = description
        this._ImgUrl = imgUrl
        this._OrigPrice = origPrice
        this._DiscountPrice = discountPrice
        this._Category = category
    }

}