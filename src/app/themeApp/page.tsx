export default function Colors() {
  const colors = [
    {
      name: 'Fondo principal',
      hex: '#F2F2F2'
    },
    {
      name: 'Acento azul',
      hex: '#89CFF0'
    },
    {
      name: 'Acento rosa',
      hex: '#FFB6C1'
    },
    {
      name: 'Acento amarillo',
      hex: '#FFFACD'
    },
    {
      name: 'Acento verde',
      hex: '#98FB98'
    },
    {
      name: 'Acento morado',
      hex: '#E6E6FA'
    }
  ]

  return (

    <div className="p-10">
      <h1 className="mb-5 text-3xl font-bold">Paleta de Colores</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {colors.map((color) => (
          <div
            key={color.name}
            className="rounded-lg border p-4 text-center"
            style={{ backgroundColor: color.hex }}
          >
            <div className="mb-2 text-lg font-semibold">{color.name}</div>
            <div className="font-mono text-sm">{color.hex}</div>
          </div>
        ))}
      </div>
    </div>
  )
};
