const products = [
  {
    id: "1",
    nombre: "Cerveza Rubia Lager",
    precio: 7000,
    categoria: "cervezas",
    stock: 10,
    img: process.env.PUBLIC_URL + "/media/rubia1.jpeg",
    descripcion: "Cerveza rubia suave y refrescante."
  },
  {
    id: "2",
    nombre: "Cerveza Pumpkin",
    precio: 7800,
    categoria: "cervezas",
    stock: 8,
    img: process.env.PUBLIC_URL + "/media/pumpkin.jpeg",
    descripcion: "Cerveza con gusto único, edición limitada."
  },
  {
    id: "3",
    nombre: "Cerveza Negra Stout",
    precio: 7000,
    categoria: "cervezas",
    stock: 5,
    img: process.env.PUBLIC_URL + "/media/negra1.jpeg",
    descripcion: "Cerveza negra fuerte con notas de café y chocolate."
  },
 
  {
    id: "4",
    nombre: "Curso de Cerveza Artesanal",
    precio: 150000,
    categoria: "cursos",
    img: process.env.PUBLIC_URL + "/media/rubia1.jpeg",
    descripcion: "Aprende a hacer cerveza en casa"
  },
  {
    id: "5",
    nombre: "Pack de Cervezas 6 unidades",
    precio: 30000,
    categoria: "packs",
    img: process.env.PUBLIC_URL + "/media/pumpkin.jpeg",
    descripcion: "Pack surtido de cervezas artesanales"
  }
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