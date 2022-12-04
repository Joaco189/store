# STORE

Es un e-commerce de periféricos de pc, en el que mi idea fue mantener un estilo moderno pero simple y enfocándome en que su uso sea satisfactorio tanto visualmente como funcionalmente.

## Funcionamiento

En el path "/" se encuentra el Home, mediante la NavBar se puede acceder al dropdown menu con las categorías de productos. En dicho listado, al hacer clic en un producto es redirigido al detalle del mismo (si el id del producto no existe, se redirige a la página de error). Una vez agregado el producto al carrito (el widget del mismo se visualiza siempre en la parte inferior derecha, incluyendo un contador de cantidad de productos), se puede dirigir al mismo para concretar la compra. Allí se muestra el listado de productos, al hacer clic en comprar, se accede al formulario para rellenar (si no hay stock se muestra mediante notificación cuáles son los faltantes pero si hay stock se concreta la orden mostrando el id de la misma). Todos los campos del formulario son validados haciendo más seguros los datos ingresados.

## Dependencias

 - **Formik**: Para la creación del formulario de compra. (github.com/jaredpalmer/formik)
 - **Yup**: Usado para la validación de los campos del formulario. (github.com/jquense/yup)
 - **normalize.css**: Alternativa a los CSS Reset, usado para mantener la consistencia de los estilos entre navegadores. (necolas.github.io/normalize.css/)
 - **react-spinners**: Para el loader utilizado en la página. (github.com/davidhu2000/react-spinners)
 - **react-toastify**: Utilizada para tener notificaciones mas atractivas visualmente. (github.com/fkhadra/react-toastify)
 - **react-spline**: Te permite exportar y usar escenas 3D de Spline directamente en la app. (github.com/splinetool/react-spline)
 
 ##

#### Deploy: https://store-joaco189.vercel.app

*Creado por Joaquín Mangold.*