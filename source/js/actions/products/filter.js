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
        parameters += (this.page !== null && this.page !== undefined) ? '&page=' + this.page : '&page=1';
        parameters += (this.perPage !== null && this.perPage !== undefined) ? '&perPage=' + this.perPage : '&perPage=' + 150;
        parameters += (this.status !== null && this.status !== undefined) ? '&status=' + this.status : '';
        parameters += (this.category !== null && this.category !== undefined) ? '&category=' + this.category : '';
        parameters += (this.tag !== null && this.tag !== undefined) ? '&tag=' + this.tag : '';
        parameters += (this.orderBy !== null && this.orderBy !== undefined) ? '&orderBy=' + this.orderBy : '';
        parameters += (this.orderByDirection !== null && this.orderByDirection !== undefined) ? '&orderByDirection=' + this.orderByDirection : '&orderByDirection=DESC';
        parameters += (this.search !== null && this.search !== undefined) ? '&search=' + this.search : '';

        return parameters;
    }
}
