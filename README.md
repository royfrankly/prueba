# disenioPrueba
```mermaid
graph LR
    %% Definición de los colores clásicos de Event Storming
    classDef orange fill:#f90,stroke:#333,stroke-width:2px,color:#fff;
    classDef blue fill:#0075ff,stroke:#333,stroke-width:2px,color:#fff;
    classDef yellow fill:#f1c40f,stroke:#333,stroke-width:2px;
    classDef purple fill:#9b59b6,stroke:#333,stroke-width:2px,color:#fff;

    %% Elementos del flujo
    C1[Comando: Solicitar Servicio]:::blue --> A1[Agregado: Gestion de SAA]:::yellow
    A1 --> E1((Evento: Solicitud Creada)):::orange
    E1 --> P1{Política: Notificar Técnico}:::purple
    P1 --> C2[Comando: Asignar Turno]:::blue