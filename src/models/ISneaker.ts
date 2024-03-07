export interface ISneaker {
  favoriteId: number | null;
  "id": number,
  "title": string,
  "price": number,
  "imageUrl": string,
  "isAdded": boolean,
  "isFavorite": boolean
}