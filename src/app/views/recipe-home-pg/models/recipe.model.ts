export interface Recipe {
  id: number;
  image: string;
  name: string;
  description: string;
  ingredients: string[];
  directions: string[];
  vegie: boolean;
}
