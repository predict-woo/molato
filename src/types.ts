export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  introduction: string;
  profilePhoto: string;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  photo: string;
  price: number;
  description: string;
}

export interface Gift {
  id: string;
  letter: string;
  repliedLetter: string;
  itemId: string;
  item: Product;
  senderId: string;
  sender: User;
  receiverId: string;
  receiver: User;
}
