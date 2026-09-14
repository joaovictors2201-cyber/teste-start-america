# Start América — Landing page

Reprodução responsiva do layout `start-america-v2` (Figma/PDF), em HTML, CSS e JS puros,
sem dependências de build e sem imagens em base64.

## Estrutura de arquivos

```
index.html                     Landing page completa (14 seções)
assets/
  css/styles.css               Tokens de design + todos os estilos
  js/main.js                   Menu mobile, FAQ, carrosséis, validação do formulário
  img/                         Imagens (ver assets/img/README.md) + logos placeholder
contato.html                   ┐
simulador.html                 │
seja-parceiro.html             │ Páginas-alvo dos botões — placeholders "em construção"
login.html                     │ (a serem desenvolvidas na próxima etapa)
politica-de-privacidade.html   │
termos-de-uso.html             │
politica-de-cookies.html       ┘
preview-server.ps1             Servidor estático local para pré-visualização (porta 8099)
```

> **Pastas fora do projeto documentado acima** (não fazem parte do site publicado — conferir
> se ainda são necessárias):
> - `site/start-america/` — versão alternativa/anterior da landing page, com seu próprio
>   `css/style.css`, `js/script.js` e `images/` (inclui `favicon.svg`). Estrutura e conteúdo
>   diferem do `index.html` da raiz; parece um rascunho anterior não migrado.
> - `site/` (raiz) — arquivos de vídeo/gif e projetos do Premiere Pro (`.prproj`, `.prin`)
>   usados na produção do vídeo do hero.
> - `Imagens e vídeo/` e `Imagens e vídeo.zip` — material bruto (fotos de banco de imagens,
>   logos de imprensa, vídeo original) usado como fonte para o que está em `assets/img/`.
> - `LANDPING PAGE - BASE.psd`, `start-america-v2.pdf`, `start-america-v2.svg` — arquivos de
>   design de origem (Figma/PSD exportado) usados como referência para o layout.

## Pré-visualizar

```powershell
powershell -ExecutionPolicy Bypass -File .\preview-server.ps1
```

Depois abra `http://localhost:8099/`. Qualquer servidor estático (ou o Live Server do
VS Code) também funciona. Abrir o `index.html` direto pelo `file://` funciona, mas as
fontes do Google podem não carregar em alguns navegadores.

## Imagens

O HTML aponta para `assets/img/<nome>.png|.jpg|.webp`. Todos os arquivos referenciados já
existem na pasta, exceto `og-cover.jpg` (compartilhamento Open Graph, ainda pendente — ver
`assets/img/README.md`). Para trocar qualquer imagem, basta substituir o arquivo mantendo o
**mesmo nome**.

Recomendado: exportar em **WebP/AVIF** com `srcset` e ajustar as extensões nos `<img>`.

## Identidade visual (resumo dos tokens)

| Token | Valor | Uso |
|---|---|---|
| `--navy` | `#0B1524` | fundo escuro principal |
| `--navy-deep` | `#060C16` | seções escuras / footer |
| `--gold` / `--gold-alt` | `#C6A253` / `#A9863F` | destaques, CTAs (realce claro: `--gold-hi` `#E2C98A`) |
| `--green` | `#10B981` | valores positivos |
| `--red` | `#FF6B6B` | alertas / carga tributária |
| Sorts Mill Goudy | 400 (regular/italic) | títulos `h1`/`h2`/`h3` |
| Montserrat | 500–800 | nav, botões, eyebrows, labels |
| Inter | 400–700 | textos, formulários, FAQ |
| Geist | 400–500 | metadados dos cards de mídia |

Container: 1248 px (margens 96) / alt. 1280 px (margens 80). Grid de 12 colunas,
cards de 4 col → 2 no tablet → 1 no mobile. Ritmo vertical: 96 px por seção, 48 px entre
título/conteúdo/CTA.

## Responsivo

- Breakpoints: mobile ≤ 767, tablet 768–1023, desktop ≥ 1024
- Títulos com `clamp()`, padding mobile 20 px (mín. 16)
- Carrosséis com `scroll-snap` no mobile; tabela comparativa vira cards por tópico
- FAQ e footer viram accordions; menu por hambúrguer
- WhatsApp flutuante respeita `env(safe-area-inset-bottom)`
- `prefers-reduced-motion` desliga animações; foco visível para teclado
- Inputs com `font-size: 16px` para não dar zoom no iOS; `100svh`/`100dvh` no lugar de `100vh`

## Próxima etapa (pendente)

Desenvolver as páginas de formulário/conteúdo (`contato`, `simulador`, `seja-parceiro`,
`login`, páginas legais) reaproveitando `styles.css`. Os placeholders já linkam de volta
para a home e para o formulário principal.
