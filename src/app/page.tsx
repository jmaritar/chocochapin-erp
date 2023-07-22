import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-gray-100">
      <h1 className="text-5xl font-bold mb-5 text-blue-600">Bienvenido al proyecto ChocoChapin ERP</h1>
      <p className="mb-5 text-lg">Este proyecto consta de varios módulos, a continuación se presenta una descripción de cada uno y los encargados de su desarrollo:</p>

      <div className="flex flex-wrap justify-center mb-10">
        <div className="m-4 bg-blue-100 shadow-md rounded-lg p-6 w-64">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Módulo 1: Gestión de inventario</h2>
          <p>Encargado: Mario Arita - <code>@dev_ja</code></p>
        </div>

        <div className="m-4 bg-green-100 shadow-md rounded-lg p-6 w-64">
          <h2 className="text-xl font-semibold mb-2 text-green-600">Módulo 2: Gestión de ventas</h2>
          <p>Encargado: Nery Lopez - <code>@dev_nl</code></p>
        </div>

        <div className="m-4 bg-yellow-100 shadow-md rounded-lg p-6 w-64">
          <h2 className="text-xl font-semibold mb-2 text-yellow-600">Módulo 3: Gestión de clientes</h2>
          <p>Encargado: Heidy Chu - <code>@dev_hc</code></p>
        </div>

        <div className="m-4 bg-red-100 shadow-md rounded-lg p-6 w-64">
          <h2 className="text-xl font-semibold mb-2 text-red-600">Módulo 4: Gestión financiera</h2>
          <p>Encargado: Miguel Alvarez - <code>@dev_ma</code></p>
        </div>

        <div className="m-4 bg-purple-100 shadow-md rounded-lg p-6 w-64">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">Módulo 5: Login y Seguridad</h2>
          <p>Encargado: Marvin Martinez - <code>@dev_mm</code></p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-blue-600">Este es un proyecto orgullosamente guatemalteco para potenciar la industria local.</p>
      </div>
    </main>
  )
}
