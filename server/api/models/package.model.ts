/**
 * Package API Response Model
 */
export interface Package {
  id: number;
  name: string;
  type: string;
  price: number;
}

/**
 * Package Details API Response Model
 */
export interface PackageDetails {
  package_id: number;
  item_id: number;
  quantity: number;
}
