export default function Colors() {
  const colors = [
    {
      name: "Fondo principal",
      hex: "#F2F2F2",
    },
    {
      name: "Acento azul",
      hex: "#89CFF0",
    },
    {
      name: "Acento rosa",
      hex: "#FFB6C1",
    },
    {
      name: "Acento amarillo",
      hex: "#FFFACD",
    },
    {
      name: "Acento verde",
      hex: "#98FB98",
    },
    {
      name: "Acento morado",
      hex: "#E6E6FA",
    },
  ];

  return (
  
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Paleta de Colores</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colors.map((color) => (
          <div
            key={color.name}
            className="border rounded-lg p-4 text-center"
            style={{ backgroundColor: color.hex }}
          >
            <div className="text-lg font-semibold mb-2">{color.name}</div>
            <div className="text-sm font-mono">{color.hex}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
