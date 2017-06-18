export class ProductFilter {
    page;
    perPage;
    status;
    category;
    tag;
    orderBy;
    orderByDirection;
    search;

    getEndpointParameters() {

        let parameters = '';
        parameters += (this.page !== null && this.page !== null) ? '&page=' + this.page : '&page=1';
        parameters += (this.perPage !== null && this.perPage !== null) ? '&perPage=' + this.perPage : '&perPage=' + 150;
        parameters += (this.status !== null && this.status !== null) ? '&status=' + this.status : '';
        parameters += (this.category !== null && this.category !== null) ? '&category=' + this.category : '';
        parameters += (this.tag !== null && this.tag !== null) ? '&tag=' + this.tag : '';
        parameters += (this.orderBy !== null && this.orderBy !== null) ? '&orderBy=' + this.orderBy : '';
        parameters += (this.orderByDirection !== null && this.orderByDirection !== null) ? '&orderByDirection=' + this.orderByDirection : '&orderByDirection=DESC';
        parameters += (this.search !== null && this.search !== null) ? '&search=' + this.search : '';

        return parameters;
    }
}
