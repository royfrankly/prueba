<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verificación y Validación</title>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      color: #333;
    }

    header {
      background-color: #005baa;
      color: #fff;
      padding: 20px 0;
      text-align: center;
    }

    nav {
      background-color: #003f7d;
      display: flex;
      justify-content: center;
    }

    nav a {
      color: #fff;
      padding: 14px 20px;
      text-decoration: none;
      display: inline-block;
    }

    nav a:hover {
      background-color: #004d99;
    }

    .container {
      max-width: 960px;
      margin: auto;
      padding: 20px;
      background-color: #fff;
    }

    h1, h2, h3 {
      color: #005baa;
    }

    footer {
      text-align: center;
      padding: 20px;
      background-color: #003f7d;
      color: white;
      margin-top: 40px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    table, th, td {
      border: 1px solid #aaa;
    }

    th, td {
      padding: 10px;
      text-align: center;
    }

    @media (max-width: 768px) {
      nav {
        flex-direction: column;
      }

      nav a {
        text-align: center;
        padding: 10px;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>Verificación y Validación</h1>
    <p>Monografía académica en formato APA 7ª edición</p>
  </header>

  <nav>
    <a href="#resumen">Resumen</a>
    <a href="#introduccion">Introducción</a>
    <a href="#desarrollo">Desarrollo</a>
    <a href="#conclusion">Conclusión</a>
    <a href="#referencias">Referencias</a>
  </nav>

  <div class="container">

    <section id="resumen">
      <h2>Resumen</h2>
      <p>
        La verificación y validación (V&V) son procesos fundamentales en el desarrollo de sistemas y productos, especialmente en ingeniería de software y manufactura. Este documento analiza sus definiciones, diferencias, metodologías y aplicaciones prácticas, demostrando su importancia en la calidad, seguridad y funcionalidad del producto final.
      </p>
    </section>

    <section id="introduccion">
      <h2>Introducción</h2>
      <p>
        En proyectos complejos, garantizar que un producto cumpla con las especificaciones técnicas y las expectativas del cliente es clave. Para lograrlo, se aplican dos procesos: verificación y validación. Aunque relacionados, tienen enfoques y objetivos diferentes que serán explorados en esta monografía.
      </p>
    </section>

    <section id="desarrollo">
      <h2>Desarrollo</h2>

      <h3>1. Definiciones</h3>
      <p><strong>Verificación:</strong> Asegura que el producto cumple con las especificaciones técnicas establecidas. Pregunta clave: “¿Estamos construyendo el producto correctamente?”</p>
      <p><strong>Validación:</strong> Garantiza que el producto satisface las necesidades del cliente. Pregunta clave: “¿Estamos construyendo el producto correcto?”</p>

      <h3>2. Diferencias entre Verificación y Validación</h3>
      <table>
        <tr>
          <th>Aspecto</th>
          <th>Verificación</th>
          <th>Validación</th>
        </tr>
        <tr>
          <td>Enfoque</td>
          <td>Interno, técnico</td>
          <td>Externo, funcional</td>
        </tr>
        <tr>
          <td>Momento</td>
          <td>Durante el desarrollo</td>
          <td>Al finalizar o en pruebas clave</td>
        </tr>
        <tr>
          <td>Objetivo</td>
          <td>Cumplir especificaciones</td>
          <td>Satisfacer al usuario</td>
        </tr>
        <tr>
          <td>Técnicas</td>
          <td>Revisiones, pruebas unitarias</td>
          <td>Pruebas de usuario, aceptación</td>
        </tr>
      </table>

      <h3>3. Métodos comunes</h3>
      <p><strong>Verificación:</strong> Revisiones por pares, análisis estático, simulaciones.</p>
      <p><strong>Validación:</strong> Pruebas de aceptación, prototipos, entrevistas a usuarios.</p>

      <h3>4. Aplicaciones</h3>
      <p>
        En industrias como la automotriz, médica y aeroespacial, V&V son requeridos por normativas. En software, frameworks como ISO 12207 o CMMI los incorporan como etapas clave.
      </p>

      <h3>5. Casos prácticos</h3>
      <p><strong>Banca:</strong> Verificación de algoritmos de cálculo financiero.</p>
      <p><strong>Aplicaciones móviles:</strong> Validación de experiencia de usuario real en condiciones de uso.</p>
    </section>

    <section id="conclusion">
      <h2>Conclusión</h2>
      <p>
        Verificación y validación son fundamentales para desarrollar productos que sean seguros, funcionales y útiles. Aplicadas desde etapas tempranas, permiten detectar errores, ahorrar recursos y cumplir expectativas de los clientes y normativas del sector.
      </p>
    </section>

    <section id="referencias">
      <h2>Referencias</h2>
      <ul>
        <li>IEEE. (2016). <em>IEEE Standard for System, Software, and Hardware Verification and Validation</em>. https://doi.org/10.1109/IEEESTD.2016.7547102</li>
        <li>Sommerville, I. (2016). <em>Software Engineering</em> (10th ed.). Pearson.</li>
        <li>Pressman, R. S., & Maxim, B. R. (2014). <em>Software Engineering: A Practitioner’s Approach</em> (8th ed.). McGraw-Hill Education.</li>
        <li>ISO/IEC/IEEE. (2017). <em>Software Life Cycle Processes</em> (ISO/IEC/IEEE 12207:2017).</li>
        <li>Boehm, B. (1981). <em>Software Engineering Economics</em>. Prentice-Hall.</li>
      </ul>
    </section>
  </div>

  <footer>
    <p>&copy; 2025 Monografía V&V - Elaborado por [Tu Nombre]</p>
  </footer>

</body>
</html>
