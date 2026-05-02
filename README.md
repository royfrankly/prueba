# disenioPrueba
```mermaid
flowchart LR
    %% Configuración de Estilo para parecer Notas Adhesivas
    classDef command fill:#00bfff,stroke:#333,stroke-width:1px,color:#000,font-weight:bold
    classDef event fill:#ff9f43,stroke:#333,stroke-width:1px,color:#000,font-weight:bold
    classDef aggregate fill:#fff4a3,stroke:#333,stroke-width:1px,color:#000
    classDef actor fill:#feca57,stroke:#333,stroke-width:1px,color:#000,font-size:10px

    subgraph Bloque1 [ ]
        direction TB
        A1[👤 Cliente]:::actor
        C1[Registrar Solicitud]:::command
        E1[Solicitud Registrada]:::event
    end

    subgraph Bloque2 [ ]
        direction TB
        Agg1[📦 SAA Agregado]:::aggregate
    end

    Bloque1 --> Bloque2

    %% Estilos de los subgrafos para que sean invisibles
    style Bloque1 fill:none,stroke:none
    style Bloque2 fill:none,stroke:none