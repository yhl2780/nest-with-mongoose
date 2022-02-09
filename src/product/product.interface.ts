import { Document } from 'mongoose';

export interface Product extends Document {
  readonly category: string;
  readonly productName: string;
  readonly productPrice: number;
}
