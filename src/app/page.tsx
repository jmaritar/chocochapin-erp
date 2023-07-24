'use client'

import Image from 'next/image'
import Colors from './themeApp/page'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-between bg-gray-100 p-24">

      <h1 className="mb-5 text-5xl font-bold text-blue-600">Bienvenido al proyecto ChocoChapin ERP</h1>
      <p className="mb-5 text-lg">Este proyecto consta de varios módulos, a continuación se presenta una descripción de cada uno y los encargados de su desarrollo:</p>

      <div className="mb-10 flex flex-wrap justify-center">
        <div className="m-4 w-64 rounded-lg bg-blue-100 p-6 shadow-md" onClick={() => { router.push('/borrar1') }}>
          <h2 className="mb-2 text-xl font-semibold text-blue-600">Módulo 1: Gestión de inventario</h2>
          <p>Encargado: Mario Arita - <code>@dev_ja</code></p>
        </div>

        <div className="m-4 w-64 rounded-lg bg-green-100 p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-green-600">Módulo 2: Gestión de ventas</h2>
          <p>Encargado: Nery Lopez - <code>@dev_nl</code></p>
        </div>

        <div className="m-4 w-64 rounded-lg bg-yellow-100 p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-yellow-600">Módulo 3: Gestión de clientes</h2>
          <p>Encargado: Heidy Chu - <code>@dev_hc</code></p>
        </div>

        <div className="m-4 w-64 rounded-lg bg-red-100 p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-red-600">Módulo 4: Gestión financiera</h2>
          <p>Encargado: Miguel Alvarez - <code>@dev_ma</code></p>
        </div>

        <div className="m-4 w-64 rounded-lg bg-purple-100 p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-purple-600">Módulo 5: Login y Seguridad</h2>
          <p>Encargado: Marvin Martinez - <code>@dev_mm</code></p>
        </div>
      </div>

      <div>
        <p className='text-center font-bold'>Para mantener una trabajo estetico nos estaremos guiando por una paleta de colores para 
          procurar el mismo apartado visual en todos los modulos.</p>
        <Colors/>
      </div>


      <div className="mt-10 text-center">
        <p className="text-blue-600">Este es un proyecto orgullosamente guatemalteco para potenciar la industria local.</p>
      </div>
    </main>
  )
}
