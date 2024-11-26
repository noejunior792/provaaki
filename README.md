# ProvaAki 📚

Bem-vindo ao **ProvaAki**, uma plataforma open source desenvolvida para facilitar o acesso a exames e testes acadêmicos. Com o ProvaAki, estudantes podem compartilhar, acessar e estudar provas antigas para se prepararem melhor para seus desafios acadêmicos.

---

## Tecnologias Utilizadas 🛠️

Este projeto foi construído utilizando as seguintes tecnologias:

- **Next.js**: Framework React para renderização do lado do servidor.
- **Prisma**: ORM que simplifica o acesso ao banco de dados MongoDB.
- **Tailwind CSS**: Biblioteca para estilização rápida e flexível.
- **ShadCN UI**: Componentes UI avançados integrados com Tailwind.
- **Framer Motion**: Biblioteca para animações interativas no frontend.
- **NextAuth.js**: Autenticação simplificada para aplicações Next.js.

---

## Configuração do Ambiente 🛠️

Certifique-se de criar um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
DATABASE_URL=your_mongodb_uri_here
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here
```

---

## Como Rodar o Projeto 🚀

1. Clone o repositório:

```bash
   git clone https://github.com/noejunior792/provaaki.git
   cd provaaki
```

2. Instale as dependências:

```bash
   npm install
```

3. Gere o cliente Prisma:

```bash
   npx prisma generate
```

4. Execute o servidor de desenvolvimento:

```bash
   npm run dev
```

5. Acesse no navegador:

```bash
   http://localhost:3000
```

---

## Como Contribuir 🤝

Contribuições são sempre bem-vindas! Aqui está como você pode colaborar com o projeto:

1. **Fork este repositório**.
2. **Crie uma nova branch** com uma descrição significativa:

```bash
   git checkout -b minha-feature
```

3. **Faça suas alterações** e commit:

```bash
   git commit -m "Adicionei minha-feature"
```

4. **Envie suas alterações**:

```bash
   git push origin minha-feature
```

5. Abra um **Pull Request** explicando suas contribuições.

---

## Autores ✍️

**Criador**:  
[Noé Júnior](https://github.com/noejunior792)

## Contribuidores 🌟

Agradecimentos especiais a todos os contribuidores deste projeto:

<a href="https://github.com/noejunior792/provaaki/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=noejunior792/provaaki" />
</a>

---

## Licença 📜

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
