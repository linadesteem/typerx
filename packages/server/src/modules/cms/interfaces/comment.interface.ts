import { Document } from 'mongoose';

export interface Comment extends Document {
  name: string;
}
