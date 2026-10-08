# Actividad 2.2 – Selección de tecnología cliente

**Caso 1:** JavaScript puro. La web es sencilla (catálogo estático, mapa y validador de formulario), así que TypeScript o un framework serían matar moscas a cañonazos: JS corre nativo en el navegador, sin compilar ni instalar nada.

**Caso 2:** WebAssembly (WASM) junto a JavaScript. Procesar millones de vectores en tiempo real pide rendimiento casi nativo: el código en C++ o Rust se compila a `.wasm`, como hace Figma, y JS solo gestiona la interfaz (DOM).

**Caso 3:** TypeScript. Con 50 programadores durante dos años, el tipado estático detecta los errores en compilación, antes de llegar al navegador, y el código de un banco se mantiene robusto y fácil de mantener; luego se transpila a JS para ejecutarse.