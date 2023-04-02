# Prueba

Montar un website con un formulario con los siguientes campos:

- Primer nombre
- Apellidos
- Telefono
- Año
- Marca
- Modelo
- Color
- Placa

Año, Marca y Modelo deben ser “dropdowns” y que se comporten a modo “cascada”. Es decir, deben ir en orden (Año >
Marca > Modelo), y que cuando se seleccione el Año, el dropdown de Marca se actualice para solamente enseñar Marcas que
tienen modelos de ese Año. Similarmente, cuando se selecciona una Marca, el dropdown de Modelo se debe actualizar para
enseñar Modelos de esa Marca.La idea es no permitir la entrada de combinaciones de año, marca y modelo inválidas. Para
propósitos de la entrevista, usemos la siguiente lista de vehículos como los vehículos “válidos”:

<ul><li>2020 Acura TLX</li><li>2020 Acura RDX</li><li>2020 Toyota Yaris</li><li>2020 Toyota Corolla</li><li>2019 Toyota Camry</li><li>2019 BMW 2 SERIES</li><li>2019 BMW 3 SERIES</li></ul>

Por ejemplo, si el usuario escoge 2020 en el dropdown de Marca debe actualizarse a enseñar solamente Acura o Toyota. Si
luego se escoge Toyota, deben aparecer solamente Yaris y Corolla en el dropdown de Modelos. Si se escoge 2019 debe
aparecer Toyota y BMW solamente, si se escoge BMW debe aparecer 2 SERIES y 3 SERIES en el dropdown de modelo.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
