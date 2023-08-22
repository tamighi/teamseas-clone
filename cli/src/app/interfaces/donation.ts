export interface Donation {
  "@id"?: string;
  count: number;
  displayName: string;
  email: string;
  mobile?: string;
  team?: string;
  message?: string;
  anonymous?: boolean;
  readonly createdAt?: Date;
}
