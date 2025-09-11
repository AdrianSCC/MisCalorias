
const alimentos = [
  { nombre: "LECHE ENTERA S/L", calorias: 0.62, proteina: 0.03, hidratos: 0.045, grasas: 0.036 },
  { nombre: "CACAO", calorias: 3.75, proteina: 0.255, hidratos: 0.163, grasas: 0.16 },
  { nombre: "CEREALES AVENA", calorias: 3.9, proteina: 0.13, hidratos: 0.66, grasas: 0.058 },
  { nombre: "QUESO FRESCO", calorias: 1.49, proteina: 0.103, hidratos: 0.03, grasas: 0.105 },
  { nombre: "JAMON SERRANO", calorias: 2.478, proteina: 0.335, hidratos: 0.01, grasas: 0.122 },
  { nombre: "TOMATE", calorias: 0.77, proteina: 0.015, hidratos: 0.095, grasas: 0.035 },
  { nombre: "CARNE DE CERDO", calorias: 1.29, proteina: 0.2307, hidratos: 0, grasas: 0.039 },
  { nombre: "PAN RUSTICO", calorias: 2.65, proteina: 0.091, hidratos: 0.47, grasas: 0.045 },
  { nombre: "1 HUEVO", calorias: 1.5, proteina: 0.125, hidratos: 0.05, grasas: 0.111 }
];

// Función para guardar en localStorage
function guardarAlimentos() {
  localStorage.setItem('alimentos', JSON.stringify(alimentos));
}
