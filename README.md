# ChocoChapin ERP

## Descripción del proyecto

ChocoChapin ERP es una solución innovadora de planificación de recursos empresariales diseñada para la industria de dulces en Guatemala, construida con React.js, Next.js, y Yarn.

## Requisitos de instalación

- Node.js versión 18.14.2
- npm versión 9.5.0
- Yarn
- Un navegador moderno (se recomienda la última versión de Chrome, Firefox o Safari)

## Configuración e instalación

1. **Instalar Node.js y npm**: Si aún no tienes instalado Node.js y npm, puedes descargarlo desde el [sitio oficial de Node.js](https://nodejs.org/). La instalación de Node.js incluirá npm.
2. **Verificar la instalación**: Puedes verificar que tengas las versiones correctas de Node.js y npm ejecutando los siguientes comandos en tu terminal:
    ```bash
    node -v
    npm -v
    ```
    Deberías ver las versiones "v18.14.2" para Node.js y "9.5.0" para npm.
3. **Instalar Yarn**: Yarn es nuestro manejador de paquetes. Si aún no tienes Yarn instalado, puedes hacerlo con npm:
    ```bash
    npm install -g yarn
    ```
4. **Verificar la instalación de Yarn**: Para asegurarte de que Yarn se instaló correctamente, puedes verificar su versión con:
    ```bash
    yarn -v
    ```

  * Error comunes en Windows:

  - Permisos de ejecución: Si tienes problemas con los permisos de ejecución, puedes ejecutar el siguiente comando en PowerShell como administrador:
    ```bash
    Set-ExecutionPolicy Unrestricted
    ```

  Nota: Si tienes problemas con la instalación de Yarn, puedes consultar la [documentación oficial](https://classic.yarnpkg.com/en/docs/install/#mac-stable).    

5. **Clonar el repositorio**: Para obtener una copia local del proyecto, puedes clonarlo desde GitHub con el siguiente comando:
    ```bash
    git clone https://github.com/jmaritar/choco-chapin-erp.git
    ```
6. **Instalar las dependencias**: Navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:
    ```bash
    cd choco-chapin-erp
    yarn install
    ```
7. **Iniciar el servidor de desarrollo**: Finalmente, puedes iniciar el servidor de desarrollo con:
    ```bash
    yarn dev
    ```
    El proyecto ahora debería estar corriendo en `http://localhost:3000`.

## Contribuidores
- Mario Arita (Inventory) [@dev_ja](https://github.com/jmaritar)
- Nery Lopez (Sales) [@dev_nl](https://github.com/jmaritar)
- Heidy Chu (Clients) [@dev_hc](https://github.com/jmaritar)
- Miguel Alvarez (Finance) [@dev_ma](https://github.com/jmaritar)
- Marvin Martinez (Auth) [@dev_mm](https://github.com/jmaritar)

## Cómo contribuir

Nos encanta recibir contribuciones. Si estás interesado en mejorar ChocoChapin ERP, por favor lee nuestra [guía de contribución](CONTRIBUTING.md).

## Licencia

[MIT](LICENSE)
