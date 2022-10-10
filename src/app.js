
import express from "express";
import { categories, products } from "./data.js";

const app = express();
const port = 3000;

app.use(express.json());

//Creare un endpoint `/api/categories` che restituisce tutte le categorie;

app.get("api/categoriesres", (request, response) => {
  response.send(categories);
});

//Creare un endpoint `/api/categories/:id` che restituisce la categoria passata come parametro, 404 se non esiste;

app.get("api/categoriesres:id", (request, response) => {
  console.log(request.params);
  const { id } = request.params;

  const category = categories.find(
    (categories) => categories.id === Number(id)
  );

  if (!category) {
    return response.status(404).send("id non trovato");
  }

  response.json(category);
});

//Creare un endpoint `/api/categories/category` che permette l'inserimento di una categoria;

app.post("/api/categories/category", (request, response) => {
  const category = request.body;
  categories.push(category);
});

//Creare un endpoint `/api/products` che restituisce tutti i prodotti presenti;

app.get("/api/products", (request, response) => {
  response.json(products);
});
//Creare un endpoint `/api/products/product` che permette l'inserimento di un nuovo prodotto. Si richiede un controllo relativo alla categoria (se l'utente mi passsa una categoria errata, ritorno 400);

app.post("/api/products/product", (request, response) => {
  const product = request.body;
  products.push(product);//manca controllo

app.listen(port, () => {
  console.log(`Server started ${port}`);
});




//non penso sia giusto ma ho cercato di fare il possibile