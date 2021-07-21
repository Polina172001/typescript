import Book from "./domain/Book";
import MusicAlbum from "./domain/MusicAlbum";
import Movie from "./domain/Movie";
import Cart from "./carts/cart";

const cart = new Cart()

cart.add(new Book(2000, 'Boys', 'Andrey', 2005, 1000))
cart.add(new MusicAlbum(1000, 'Forrest', 'Roma', 700))
cart.add(new Movie(600, 'Cheese', 'Gena', 900, 100, 2005, ['boevik', 'comedy'], 'you lucky', 120, 'Belarus'))
