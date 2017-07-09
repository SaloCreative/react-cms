export class MediaFilter {
  page;
  perPage;
  type;
  orderBy;
  orderByDirection;

  getEndpointParameters() {

    let parameters = '';
    parameters += (this.page !== null && this.page !== undefined) ? '&page=' + this.page : '&page=1';
    parameters += (this.perPage !== null && this.perPage !== undefined) ? '&perPage=' + this.perPage : '&perPage=' + 150;
    parameters += (this.type !== null && this.type !== undefined) ? '&type=' + this.type : '';
    parameters += (this.orderBy !== null && this.orderBy !== undefined) ? '&orderBy=' + this.orderBy : '';
    parameters += (this.orderByDirection !== null && this.orderByDirection !== undefined) ? '&orderByDirection=' + this.orderByDirection : '&orderByDirection=DESC';

    return parameters;
  }
}
