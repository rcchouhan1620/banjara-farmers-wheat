export interface Region {
  id: number;
  name: string;
  varieties: string[];
  pricePerQuintal: string;
  availability: 'High' | 'Medium' | 'Low';
  harvestSeason: string;
  image: string;
}