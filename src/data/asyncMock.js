const products = [
  {
    id: "1",
    nombre: "Cerveza Rubia Lager",
    precio: 7000,
    categoria: "rubia",
    stock: 10,
    img: "/media/rubia1.jpg",
    descripcion: "Cerveza rubia suave y refrescante."
  },
  {
    id: "2",
    nombre: "Cerveza Pumpkin",
    precio: 7800,
    categoria: "calabaza",
    stock: 8,
    img: "/media/pumpkin.1",
    descripcion: "Cerveza con gusto único, edición limitada."
  },
  {
    id: "3",
    nombre: "Cerveza Negra Stout",
    precio: 7000,
    categoria: "negra",
    stock: 5,
    img: "/media/negra1.jpg",
    descripcion: "Cerveza negra fuerte con notas de café y chocolate."
  },
];

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id));
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.categoria === categoryId));
    }, 1000);
  });
};