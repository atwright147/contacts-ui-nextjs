export interface Address {
  contactId: number,
  address1: string,
  address2: string,
  address3: string,
  city: string,
  county: string,
  postCode: string,
}

export const isAddress = (address: any): address is Address => {
  return address.address1 &&
    address.address2 &&
    address.address3 &&
    address.city &&
    address.county &&
    address.postCode;
}
