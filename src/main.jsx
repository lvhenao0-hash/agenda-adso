// 🧩 Importamos React, el corazón de nuestra app
import React from 'react'

// 🛠️ Importamos ReactDOM para conectar React con el navegador
import ReactDOM from 'react-dom/client'

// 📒 Importamos el componente principal de la aplicación
import App from './App.jsx'

// 🎨 Importamos los estilos globales
import './index.css'

// 🚀 Aquí es donde todo comienza: renderizamos la app dentro del elemento con id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🧠 StrictMode nos ayuda a detectar errores y buenas prácticas durante el desarrollo */}
    <App />
  </React.StrictMode>,
)
