/**
 * Base Item Interface
 */
export interface Items {
  id: number;
  name: string;
  type: string;
  unit?: string;
  price?: number;
  payment_cycle?: string;
}