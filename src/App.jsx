import './app.css';
export default function App() {
  const fecha = new Date();toLocaleString();
  return (
    <main>
      <h1>Hola, Soy Vanessa Henao - Aprendiz ADSO</h1>
      <p>Deseo aprender</p>
      <p>hoy es {fecha}</p>
    </main>
  );
}