# 📌 Simulador de Memória Cache

Este projeto é um simulador de memória cache que implementa três algoritmos de substituição: **FIFO, LRU e LFU**. Ele permite visualizar como os dados são carregados e removidos da cache, contabilizando **Cache Hits** e **Cache Misses**.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura da interface
- **CSS3**: Estilização e layout
- **JavaScript (ES6)**: Lógica da simulação

## 📥 Como Rodar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/simulador-cache-IFRN.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd simulador-cache-IFRN
   ```
3. Abra o arquivo `index.html` no navegador.

## 🔄 Como Funciona

A interface contém:
- **Seleção do algoritmo**: FIFO, LRU ou LFU.
- **Botão "Gerar Pedido"**: Simula um acesso a um item do banco de dados.
- **Cache (5 posições)**: Exibe os itens armazenados.
- **Banco de Dados (20 itens)**: Origem dos dados.
- **Contadores**: Mostram Cache Hits e Cache Misses.

### 🏷️ Algoritmos de Substituição
- **FIFO (First In, First Out)**: Remove o item mais antigo da cache.
- **LRU (Least Recently Used)**: Remove o item menos recentemente acessado.
- **LFU (Least Frequently Used)**: Remove o item menos frequentemente usado.

## 📝 Como Testar

1. **Selecione um algoritmo**.
2. **Clique em "Gerar Pedido"** para requisitar um item.
3. Observe:
   - Se o item **já estava na cache**, aumenta o contador de **Cache HIT**.
   - Se o item **não estava na cache**, aumenta o contador de **Cache MISS** e ele é adicionado.
   - Quando a cache estiver cheia, veja qual item é removido conforme a política do algoritmo escolhido.

## 📸 Prints da Interface

Adicione prints da interface em funcionamento aqui. Para adicionar imagens ao README:
```md
![simulador de cache](/image.png)
```