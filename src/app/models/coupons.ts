import {Companies} from './companies';

export class Coupons {

  // tslint:disable-next-line:max-line-length
  constructor(public id?: number, public companyID?: Companies, public title?: string, public description?: string, public image?: string, public category?: string,
              public startDate?: Date, public endDate?: Date, public price?: number, public amount?: number) {
  }
}
