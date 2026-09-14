# Mídia da landing page — Start América

Todos os arquivos de imagem/vídeo ficam **nesta pasta** (`assets/img/`).
Para trocar qualquer mídia, basta substituir o arquivo mantendo o **mesmo nome**.
Novos uploads também vão aqui.

## Arquivos já aplicados

| Arquivo | Onde aparece | Origem |
|---|---|---|
| `logo-start-america-dourada.png` | **Header + Footer** e páginas internas (fundo escuro) — versão dourada, lockup vertical (águia + Start América + tagline) |
| `logo-start-america-branca.png` | reserva — versão branca do mesmo lockup |
| `logo-start-america-preta.png` | reserva — versão preta (evitar; preferir a dourada) |
| `world-image.png` | Hero — imagem de fundo (Terra à noite, rotas EUA↔Brasil douradas) | — |
| `hero-earth-poster.png` | fundo reaproveitado (cópia gera `servicos-bg`/`diferenciais-bg`) | Back ground variation 3 |
| `servicos-bg.png` | Seção Serviços — fundo (cópia do poster) | Back ground variation 3 |
| `diferenciais-bg.png` | Seção Diferenciais — fundo | network-connections-technology-background |
| `card-1.png` | "Quem somos / Para quem busca" — imagem 1 do mosaico | aplicado |
| `sobre-card-2.jpg` | "Quem somos" — imagem 2 do mosaico | Landmark Center (átrio interno) |
| `sobre-card-3.jpg` | "Quem somos" — imagem 3 do mosaico | Landmark Center (fachada) |
| `imagem-predio-ofc.jpg` | Seção "Seja um parceiro oficial" (`#parceiros`) — fundo do banner | — |
| `servico-contabilidade.jpg` | Serviços — card "Contabilidade recorrente" | calendar-planner |
| `servico-tributaria.jpg` | Serviços — card "Estratégia tributária internacional" | paperwork |
| `servico-compliance.jpg` | Serviços — card "Compliance e blindagem jurídica" | businessman-reading-contract |
| `servico-financeiro.jpg` | Serviços — card "Serviços financeiros" | high-view-laptop-black-shopping-card |
| `parceiros-foto.jpg` | Seção "Proposta para contadores" (`#contadores`) — foto | it-was-pleasure-doing-business (aperto de mão) |
| `logo-exame.webp` | Mídia — card Exame | Exame_(BR) |
| `logo-valor.png` | Mídia — card Valor Econômico | jornal-valor-economico |
| `logo-infomoney.png` | Mídia — card InfoMoney | infomoney-logo |

| `Frame.png` | Bloco de equipe (Diferenciais) — avatar circular da Fernanda Silveira | aplicado |
| `accountants-right.png` | Banner "Seja um Parceiro Oficial" — selo circular "PARCEIRO OFICIAL" | aplicado |

## Ainda pendente

| Arquivo | Onde aparece | Fallback atual |
|---|---|---|
| `og-cover.jpg` | imagem de compartilhamento (Open Graph) — 1200×630, referenciada em `index.html` (`og:image`) | — |

> `diferenciais-bg.png` é cópia de `hero-earth-poster.png`; troque por imagem própria quando tiver.

## Arquivos sem uso atual no HTML/CSS

Presentes na pasta, mas nenhuma página referencia hoje — confirmar se ainda são necessários antes de apagar:

| Arquivo | Observação |
|---|---|
| `parceiros-bg.png` | cópia do `hero-earth-poster.png`; a seção `#parceiros` usa `imagem-predio-ofc.jpg` como fundo, não este arquivo |
| `contadores-foto.jpg` | não aparece na seção "Proposta para contadores" (`#contadores`) do `index.html` atual |
| `logo-start-america-branca.png` | mantida como reserva (variação branca do logo) |
| `logo-start-america-preta.png` | mantida como reserva (evitar; preferir a dourada) |

## Recomendações

- Otimizar para **WebP/AVIF** com `srcset` (1x/2x) antes de publicar; manter `width`/`height` nos `<img>` para não gerar layout shift.
- O vídeo do hero: idealmente < 5 MB, ~10 s em loop, sem áudio. Manter também um `hero-earth.webm` como `<source>` alternativo melhora a compatibilidade.
- Logos de imprensa: fundo transparente, `object-fit: contain` (já aplicado).
