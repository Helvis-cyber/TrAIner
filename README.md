# TrAIner - Seu Personal Trainer Virtual Inteligente 🏋️‍♂️💡

Plataforma completa para geração de planos de treino e dietas personalizadas através de assistente de voz com IA.

✨ Destaques

Tecnologias**: Next.js 14, React, Tailwind & Shadcn UI  
🎙️ Assistente por Voz**: Interação natural com Vapi AI  
🧠 IA Avançada**: Integração com Gemini AI para recomendações inteligentes  
🏋️ Planos de Treino**: Programas personalizados baseados em seu perfil  
🥗 Dietas Customizadas**: Planos alimentares adaptados às suas necessidades  
🔒 Autenticação Segura**: Login com Clerk (Facebook, Google ou email)  
💾 Banco de Dados**: Convex para armazenamento em tempo real  
⚡ Geração Instantânea**: Programas criados em tempo real  

🚀 Funcionalidades Principais

*Assistente Inteligente**: Conversa natural para coletar seus objetivos e preferências  
*Treinos Personalizados**: Rotinas adaptadas ao seu nível físico e condições de saúde  
*Recomendações Nutricionais**: Planos alimentares considerando restrições e alergias  
*Multiplos Programas**: Crie e visualize diversos programas, com apenas um ativo por vez  
*Design Responsivo**: Experiência perfeita em qualquer dispositivo  

## ⚙️ Configuração

1. Clone o repositório:
```bash
git clone https://github.com/Helvis-cyber/TrAIner.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (`.env.local`):
```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Vapi
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
NEXT_PUBLIC_VAPI_API_KEY=

# Convex
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

🚀 Deploy

Recomendamos deploy na Vercel para melhor performance:

1. Conecte seu repositório GitHub  
2. Configure as variáveis de ambiente  
3. Deploy automático com:  
```bash
npm run build
npm run start
```

 🛠 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| [Next.js](https://nextjs.org/) | Framework React full-stack |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária |
| [Shadcn UI](https://ui.shadcn.com/) | Componentes UI acessíveis |
| [Clerk](https://clerk.com/) | Autenticação segura |
| [Vapi](https://www.vapi.ai/) | Plataforma de assistente por voz |
| [Convex](https://www.convex.dev/) | Banco de dados em tempo real |
| [Gemini AI](https://ai.google/discover/gemini/) | Modelo de linguagem avançado |

📚 Saiba Mais

- [Documentação Next.js](https://nextjs.org/docs)  
- [Guia Clerk](https://clerk.com/docs)  
- [API Vapi](https://docs.vapi.ai/)  
- [Convex Docs](https://docs.convex.dev/)  
- [Gemini AI](https://ai.google/discover/gemini/)  

---

Desenvolvido com ❤️ por Helvis Santos - Transformando objetivos fitness em realidade com tecnologia de ponta!
