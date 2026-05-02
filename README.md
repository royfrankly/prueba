# disenioPrueba
graph LR
    %% Definición de Estilos (Colores estándar de Event Storming)
    classDef event fill:#ffa500,stroke:#333,stroke-width:2px;
    classDef command fill:#add8e6,stroke:#333,stroke-width:2px;
    classDef aggregate fill:#ffff00,stroke:#333,stroke-width:2px;
    classDef policy fill:#dDA0DD,stroke:#333,stroke-width:2px;

    %% Flujo
    C1[Comando: Registrar Usuario]:::command --> A1[Agregado: Usuario]:::aggregate
    A1 --> E1((Evento: Usuario Registrado)):::event
    E1 --> P1{Política: Enviar Bienvenida}:::policy
    P1 --> C2[Comando: Enviar Email]:::command
    