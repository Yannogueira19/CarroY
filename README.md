# YCars

**Aplicativo mobile React Native para consulta de veículos na Tabela FIPE, com autenticação e armazenamento de dados no Firebase.**

---

## 📖 Visão Geral

YCars permite ao usuário:

* Consultar preços médios de veículos pela Tabela FIPE
* Favoritar veículos para acesso rápido
* Gerenciar seu perfil e histórico de favoritos
* Persistir dados remotamente usando Firebase

O aplicativo foi desenvolvido com Expo e funciona no **Expo Go**.

---

## 🏆 Funcionalidades

1. **Autenticação**

   * Login e registro com e-mail e senha (Firebase Auth via REST API)
   * Persistência de sessão com AsyncStorage

2. **Dashboard (Home)**

   * Seleção de marca, modelo e ano
   * Exibição do valor FIPE
   * Favoritar / remover favorito

3. **Detalhes da Marca**

   * Tela `MarcaInfo` exibindo informações estáticas sobre cada marca

4. **Perfil do Usuário**

   * Exibição de nome, e-mail e data de cadastro
   * Botão de logout

5. **Favoritos**

   * Listagem de veículos favoritados
   * Remoção com confirmação

6. **Navegação**

   * Auth stack (Login → Registro)
   * Drawer (Home, Favoritos, Perfil, Sair)

---

## ⚙️ Requisitos Técnicos

* **React Hooks**: `useState`, `useEffect`, `useFocusEffect`, custom hook `useUserUid`
* **React Navigation**: Stack Navigator e Drawer Navigator
* **Firebase**: Authentication (REST), Firestore
* **API**: Tabela FIPE via Axios
* **Persistência**: AsyncStorage para UID
* **Loading States**: `ActivityIndicator` controlado via `useState`

---

## 📂 Estrutura de Pastas

```
/src
  /screens        # Telas principais
    Login.js
    Registro.js
    Home.js
    Perfil.js
    Favoritos.js
    MarcaInfo.js
  /navigation     # Configuração de rotas
    AppNavigator.js
  /services       # Configurações de serviços externos
    firebaseConfig.js
  /components     # (Opcional) Componentes reutilizáveis

App.js            # Entry point, renderiza AppNavigator
index.js          # RegisterRootComponent (Expo)
```

---

## 🚀 Instalação e Execução

1. **Pré-requisitos**: Node.js, npm/yarn, Expo CLI
2. Clone o repositório:

   ```bash
   git clone <seu-repo-url>
   cd nome-do-projeto
   ```
3. Instale dependências:

   ```bash
   npm install
   ```
4. Inicie o projeto no Expo:

   ```bash
   npx expo start
   ```
5. Abra no **Expo Go** escaneando o QR code.

---


