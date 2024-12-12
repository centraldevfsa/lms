flowchart TD
A[Login do Aluno] -->|Credenciais Válidas| B[Dashboard do Aluno]
A -->|Credenciais Inválidas| C[Mensagem de Erro]

    B --> D[Menu Lateral]
    D --> E[Cursos Matriculados]
    D --> F[Histórico de Aulas]
    D --> G[Certificados]
    D --> H[Configurações da Conta]
    D --> I[Suporte]

    B --> J[Atalhos Principais]
    J --> K[Continuar Aula Atual]
    J --> L[Ver Próxima Aula]
    J --> M[Baixar Material]

    B --> N[Métricas/Indicadores]
    N --> O[Progresso do Curso]
    N --> P[Notificações Recentes]

    B --> Q[Ações Disponíveis]
    Q --> R[Assistir Aulas]
    Q --> S[Baixar Material]
    Q --> T[Enviar Dúvidas ao Suporte]
