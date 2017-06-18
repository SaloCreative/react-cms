export class ProductFilter {
    public page;
    public perPage;
    public status;
    public category;
    public tag;
    public orderBy;
    public orderByDirection;
    public search;

    getEndpointParameters() {

        let parameters = '';
        parameters += (this.page !== null) ? '&page=' + this.page : 1;
        parameters += (this.perPage !== null) ? '&perPage=' + this.perPage : '';
        parameters += (this.status !== null) ? '&status=' + this.status : '';
        parameters += (this.category !== null) ? '&category=' + this.category : '';
        parameters += (this.tag !== null) ? '&tag=' + this.tag : '';
        parameters += (this.orderBy !== null) ? '&orderBy=' + this.orderBy : '';
        parameters += (this.orderByDirection !== null) ? '&orderByDirection=' + this.orderByDirection : '';
        parameters += (this.search !== null) ? '&search=' + this.search : '';

        return parameters;
    }
}
