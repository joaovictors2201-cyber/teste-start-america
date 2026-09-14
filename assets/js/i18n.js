/* ============================================================
   START AMÉRICA — internacionalização (PT / EN / ES)
   Abordagem: snapshot do conteúdo em PT + dicionário por texto.
   Strings sem tradução permanecem em português.
   ============================================================ */
(function () {
  'use strict';

  var LANGS = ['pt', 'en', 'es'];
  var STORE_KEY = 'sa_lang';

  /* ---------- Dicionário (chave = texto PT normalizado) ---------- */
  var T = {
    en: {
      // Navegação / ações
      'Quem somos': 'About us',
      'Serviços': 'Services',
      'Planos': 'Plans',
      'Seja um Parceiro Oficial': 'Become an Official Partner',
      'Login': 'Log in',
      'Falar com especialista': 'Talk to a specialist',
      'Falar com um especialista': 'Talk to a specialist',
      'Falar com Especialista': 'Talk to a specialist',
      'Voltar ao site': 'Back to site',
      'Idioma': 'Language',

      // Hero
      'Estruture sua expansão para os Estados Unidos com quem entende os dois lados.':
        'Structure your U.S. expansion <span class="text-gold">with people who understand both sides.</span>',
      'Abertura de LLC, Corporation, contabilidade, Tax e compliance com quem realmente entende o fisco americano e o brasileiro.':
        'LLC and Corporation setup, accounting, tax and compliance with a team that truly understands both the U.S. and Brazilian tax systems.',

      // Sobre
      'Para quem busca': 'For those seeking',
      'Estratégia tributária internacional, investimento dolarizado e blindagem patrimonial':
        '<span class="text-gold">International</span> tax strategy, <span class="text-gold">dollar-based</span> investment and asset <span class="text-gold">protection</span>',
      'Por trás de cada decisão existe um time de especialistas prontos para te auxiliar nessa jornada de sucesso — do planejamento à operação recorrente nos dois países.':
        'Behind every decision there is a team of specialists ready to support you on this journey — from planning to ongoing operations in both countries.',
      'Conheça onde estamos': 'See where we are',

      // Serviços
      'O que fazemos por você': 'What we do for you',
      'Abertura e manutenção acompanhadas por especialistas': 'Setup and upkeep guided by specialists',
      'Da constituição da empresa à rotina contábil e fiscal, você tem um time dedicado nos Estados Unidos e no Brasil.':
        'From incorporating the company to the accounting and tax routine, you get a dedicated team in the United States and Brazil.',
      'Contabilidade recorrente': 'Ongoing accounting',
      'Sua empresa em dia, todo mês': 'Your company up to date, every month',
      'Bookkeeping, Form 1120 e 5472, sales tax e annual report, sem surpresa no fim do ano.':
        'Bookkeeping, Form 1120 and 5472, sales tax and annual report — no surprises at year-end.',
      'Estratégia tributária internacional': 'International tax strategy',
      'Menos imposto, dentro da lei': 'Less tax, within the law',
      'Planejamento entre Brasil e Estados Unidos, tratados, preços de transferência e distribuição de lucros.':
        'Planning between Brazil and the United States: treaties, transfer pricing and profit distribution.',
      'Compliance e blindagem jurídica': 'Compliance and legal protection',
      'Estrutura sólida e protegida': 'A solid, protected structure',
      'BOI Report, contratos societários, separação patrimonial e obrigações estaduais em ordem.':
        'BOI Report, corporate agreements, asset separation and state obligations in order.',
      'Serviços financeiros': 'Financial services',
      'Conta, pagamentos e câmbio': 'Account, payments and FX',
      'Abertura de conta nos Estados Unidos, gateways, remessas e conciliação com o Brasil.':
        'U.S. bank account opening, gateways, remittances and reconciliation with Brazil.',
      // Urgência
      'O empresário brasileiro está perdendo margem em frentes ao mesmo tempo.':
        'Brazilian business owners are losing margin on several fronts at once.',
      'Tributação na fonte, reforma tributária, split payment, insegurança jurídica e margem apertada. Veja quanto isso pesa no seu caso.':
        'Withholding tax, tax reform, split payment, legal uncertainty and tight margins. See how much this weighs in your case.',
      'IRRF 10%': 'WHT 10%',
      'Dividendos na Fonte': 'Tax on dividends',
      'Arrecadação pesada sobre lucros que poderiam ser reinvestidos sem imposto retido.':
        'Heavy taxation on profits that could be reinvested without withholding.',
      'Reforma': 'Reform',
      'Transição tributária nacional que trará carga estimada em até 30% em serviços.':
        'National tax transition expected to reach a burden of up to 30% on services.',
      'Operacional': 'Operational',
      'Retenção imediata nas transações comerciais que drena o fluxo de caixa.':
        'Immediate withholding on commercial transactions that drains cash flow.',
      'Compliance': 'Compliance',
      'Insegurança Jurídica': 'Legal uncertainty',
      'Súbitas alterações em regras de incentivos locais gerando alta vulnerabilidade.':
        'Sudden changes to local incentive rules creating high exposure.',
      'Financeiro': 'Financial',
      'Margem Comprimida': 'Compressed margin',
      'Aumento dos custos estruturais no Brasil sem repasse viável aos clientes finais.':
        'Rising structural costs in Brazil with no viable pass-through to end customers.',
      'Por que Start América?': 'Why Start América?',
      'Automação todo mundo tem. Especialista, só aqui.': 'Everyone has automation. Specialists, only here.',
      'Comparação': 'Comparison',
      'Plataformas automatizadas': 'Automated platforms',
      'Start América': 'Start América',
      'Plataformas': 'Platforms',
      'Quem atende': 'Who supports you',
      'Chat e fila de espera': 'Chat and waiting queue',
      'Especialista em disposição fulltime': 'A full-time dedicated specialist',
      'Estratégia tributária': 'Tax strategy',
      'Não oferece': 'Not offered',
      'Compara 6 jurisdições e desenha a estrutura': 'Compares 6 jurisdictions and designs the structure',
      'Erro em formulário do IRS': 'Errors on an IRS form',
      'Você paga a multa': 'You pay the penalty',
      'Cobertura antimulta e riscos fiscais': 'Penalty and tax-risk coverage',
      'Seu contador no Brasil': 'Your accountant in Brazil',
      'Vira concorrente': 'Becomes a competitor',
      'Vira associado remunerado': 'Becomes a paid partner',
      'Idiomas de atendimento': 'Support languages',
      'Inglês (fuso americano)': 'English (U.S. time zone)',
      'Português, Espanhol e Inglês (Fuso Brasileiro)': 'Portuguese, Spanish and English (Brazil time zone)',
      'Converse com um dos nossos especialistas': 'Talk to one of our specialists',

      // Diferenciais + Equipe
      'O que torna a Start América diferente': 'What makes Start América different',
      'Cobertura contra riscos e multas': 'Coverage against risks and penalties',
      'Nossa consultoria carrega apólice de responsabilidade civil para que você tenha total tranquilidade operacional e jurídica.':
        'Our firm carries a professional liability policy so you have full operational and legal peace of mind.',
      'Atendimento em português, espanhol e inglês.': 'Support in Portuguese, Spanish and English.',
      'Nada de tickets misteriosos ou fusos horários incompatíveis. Atendimento em tempo real no fuso do Brasil.':
        'No mysterious tickets or incompatible time zones. Real-time support on Brazil time.',
      'Você não fala com um chat robotizado. Fala direto com o time de especialistas responsável pela sua estrutura.':
        'You do not talk to a bot. You talk directly to the team of specialists responsible for your structure.',
      'Fernanda Silveira': 'Fernanda Silveira',
      'Especialista em Incorporação': 'Incorporation Specialist',
      'Líder técnica responsável pelo trâmite ágil de EIN e documentação estadual.':
        'Technical lead responsible for fast EIN processing and state documentation.',

      // Planos
      'Um plano para cada momento da sua operação nos Estados Unidos':
        'A plan for every stage of your U.S. operation',
      'Essencial': 'Essential',
      'Para profissionais liberais e freelancers iniciando a exportação de serviços.':
        'For independent professionals and freelancers starting to export services.',
      'Abertura de LLC inclusa': 'LLC setup included',
      'Endereço Fiscal Premium': 'Premium registered address',
      'Suporte prioritário': 'Priority support',
      'Recomendado': 'Recommended',
      'Profissional': 'Professional',
      'O plano mais equilibrado com suporte dedicado de alto nível.':
        'The most balanced plan, with high-level dedicated support.',
      'Prime': 'Prime',
      'Para empresas com faturamento estruturado e múltiplos sócios.':
        'For companies with structured revenue and multiple partners.',
      'Corporate': 'Corporate',
      'Solução sob medida para Holdings ou operações de e-commerce complexas.':
        'A tailored solution for holdings or complex e-commerce operations.',
      'Para estruturas mais complexas, o preço também pode ser calculado como uma fração da economia gerada no seu cenário.':
        'For more complex structures, pricing can also be calculated as a fraction of the savings generated in your scenario.',

      // Mídia
      'Start América na mídia': 'Start América in the news',
      'O que o mercado está falando sobre a nossa expansão': 'What the market is saying about our expansion',
      'Exclusivo': 'Exclusive',
      'Negócios': 'Business',
      'Mercado': 'Markets',
      'Start América recebe smart money de empresa de tecnologia especializada em Saas para contabilidade.':
        'Start América receives smart money from a SaaS technology company specialized in accounting.',
      'Com foco na transição tributária e na busca por segurança jurídica, a nova estrutura simplifica a abertura e manutenção de empresas nos EUA.':
        'Focused on the tax transition and the search for legal certainty, the new structure simplifies opening and running U.S. companies.',
      'Ler reportagem': 'Read the article',
      'Do Brasil para Miami: Empresa Start América dispara na corrida para expandir empresas brasileiras para Estados Unidos,':
        'From Brazil to Miami: Start América surges in the race to expand Brazilian companies into the United States,',
      'Iniciativa pioneira visa blindar o caixa de exportadores de serviços contra o ‘split payment’ e as incertezas da reforma tributária nacional.':
        'A pioneering initiative aims to shield service exporters’ cash flow from “split payment” and the uncertainties of the national tax reform.',
      'Start América capta rodada seed liderada por sócios da Veri e projeta expansão':
        'Start América raises a seed round led by Veri partners and plans expansion',
      'Empresa com plataforma automatizada e atendimento com especialistas focada em facilitação na expansão internacional e abertu…':
        'A company with an automated platform and specialist support focused on easing international expansion and setu…',

      // Parceiros / Fluxo
      'Seja um parceiro oficial Start América':
        'Become an <span class="text-gold">official Start América partner</span>',
      'Indique a Start América ou faça parcerias de estruturação internacional mantendo o compliance no Brasil em perfeita harmonia e ganhe até 30% de comissão recorrente.':
        '<strong>Refer Start América or build international structuring partnerships</strong> while keeping full compliance in Brazil, and earn up to 30% recurring commission.',
      'Quero me tornar um Parceiro Oficial': 'I want to become an Official Partner',
      'Fluxo de parceria': 'Partnership flow',
      'Entenda como funciona o fluxo de parceria do início ao fim':
        'Understand how the partnership works from start to finish',
      'Clientes': 'Clients',
      'Busca expansão internacional': 'Seeking international expansion',
      'Empresas ou pessoas que buscam abertura de empresa nos Estados Unidos, segurança patrimonial, estratégia tributária, compra de imóvel estrangeiro, expansão internacional e abertura de novos negócios no Estados Unidos, investimento dolarizado.':
        'Companies or individuals seeking U.S. company formation, asset protection, tax strategy, foreign real-estate purchase, international expansion and new ventures in the United States, plus dollar-based investment.',
      'Parceiro Oficial': 'Official Partner',
      'Indicação e venda': 'Referral and sale',
      'Escritórios de contabilidade, Advocacias e imobiliárias e/ou corretores que atendem ou possuem conexão direta com o clientes que buscam a expansão internacional e/ou abertura de empresas no Estados Unidos e conseguem fazer a ponte para conectar o cliente ao projeto da Start América.':
        'Accounting firms, law firms and real-estate agencies or brokers who serve or have a direct connection with clients seeking international expansion and/or U.S. company formation, and can bridge the client to the Start América project.',
      'Atendimento e operação': 'Service and operations',
      'Todo operacional como abertura de empresa, contas bancárias, formulários e impostos anuais e estaduais, endereço virtual, entre outros serviços de compliance tributário.':
        'All operations: company formation, bank accounts, annual and state forms and taxes, virtual address and other tax-compliance services.',
      'Quero ser um Parceiro Oficial': 'I want to be an Official Partner',

      // Contadores
      'O seu mercado mudou e sabemos exatamente o que seu cliente precisa':
        'Your market has changed and we know <span class="text-gold">exactly what your client needs</span>',
      'O que você está enfrentando': 'What you are <span class="text-gold">facing</span>',
      'Reforma tributária e split payment mudando a rotina inteira do escritório.':
        'Tax reform and split payment changing the firm’s entire routine.',
      'Cliente perguntando sobre empresa no exterior — e ele sem resposta.':
        'Clients asking about companies abroad — and no answer to give.',
      'Honorário achatado e concorrência por preço na contabilidade tradicional.':
        'Squeezed fees and price competition in traditional accounting.',
      'Risco de perder a carteira para quem oferece mais do que guia e balancete.':
        'Risk of losing the client base to those who offer more than tax slips and balance sheets.',
      'O que você passa a oferecer': 'What you get to <span class="text-gold">offer</span>',
      'Estratégia tributária internacional com especialistas.': 'International tax strategy with specialists.',
      'Compliance e blindagem jurídica que o escritório do lado não tem.':
        'Compliance and legal protection the firm next door does not have.',
      'Assessoria jurídica e tributária de apoio, sem contratar ninguém.':
        'Legal and tax advisory support, with no new hires.',
      'O que você ganha': 'What you <span class="text-gold">gain</span>',
      'Seja um parceiro Start América e ganhe até 30% de comissão recorrente enquanto o cliente ficar.':
        'Become a Start América partner and earn up to 30% recurring commission for as long as the client stays.',
      'Cross-sell: Oportunidade de novos serviços e produtos para seu cliente.':
        '<strong>Cross-sell:</strong> new services and products to offer your client.',
      'Diferencial competitivo: posicionamento de escritório consultivo, não de escritório de guia.':
        '<strong>Competitive edge:</strong> positioning as an advisory firm, not a compliance-only firm.',
      'Zero custo operacional, a execução é toda nossa.':
        '<strong>Zero operational cost</strong> — execution is entirely on us.',

      // Níveis
      'Confira os benefícios exclusivos que preparamos para nossos parceiros':
        'See the exclusive benefits we have prepared for our partners',
      'Bronze': 'Bronze',
      'Recorrente, todo mês': 'Recurring, every month',
      'Indica e agenda': 'Refers and schedules',
      'Repassa o contato ou agenda com o SDR': 'Passes on the contact or books with the SDR',
      'Nós qualificamos, vendemos e entregamos': 'We qualify, sell and deliver',
      'Material e link com o nome dele': 'Materials and a link with their name',
      'Prata': 'Silver',
      'Apoia a negociação': 'Supports the deal',
      'Participa da reunião com o closer': 'Joins the meeting with the closer',
      'Ajuda a destravar objeção': 'Helps unblock objections',
      'Treinamento de vendas e leads da região dele': 'Sales training and leads from their region',
      'Ouro': 'Gold',
      'Conduz a venda': 'Leads the sale',
      'Conduz a venda até o onboarding': 'Leads the sale through onboarding',
      'Portal white label com a marca dele': 'White-label portal with their brand',
      'Diamante': 'Diamond',
      'Negociado': 'Negotiated',
      'Condição própria': 'Custom terms',
      'Representa a praça': 'Represents the territory',
      'Exclusividade territorial por contrato': 'Contractual territorial exclusivity',
      'Condição comercial acima de 30%, por volume': 'Commercial terms above 30%, by volume',
      'Coapresenta os eventos da praça': 'Co-hosts local events',
      'Indicação Bronze': 'Bronze referral',
      'Indicação Prata': 'Silver referral',
      'Falar com consultor': 'Talk to a consultant',

      // FAQ
      'Perguntas Frequentes': 'Frequently Asked Questions',
      'Preciso de cidadania ou green card para abrir empresa nos Estados Unidos?':
        'Do I need citizenship or a green card to open a company in the United States?',
      'Não. Estrangeiros não residentes podem ser sócios de uma LLC ou Corporation. O que definimos com você é a estrutura, o estado de registro e as obrigações fiscais que passam a existir nos dois países.':
        'No. Non-resident foreigners can be members of an LLC or Corporation. What we define with you is the structure, the state of registration and the tax obligations that arise in both countries.',
      'Qual a diferença entre LLC e Corporation?': 'What\'s the difference between an LLC and a Corporation?',
      'A LLC costuma ser mais simples e vantajosa para quem presta serviços, com menos burocracia e tributação repassada aos sócios. A Corporation faz mais sentido para quem pretende captar investidores ou emitir ações. Avaliamos seu cenário e indicamos a estrutura mais adequada.':
        'An LLC tends to be simpler and more advantageous for service providers, with less paperwork and pass-through taxation to the members. A Corporation makes more sense if you plan to raise investment or issue shares. We assess your scenario and recommend the most suitable structure.',
      'Qual é o prazo de abertura da empresa?': 'How long does it take to open the company?',
      'Na maioria dos estados, a constituição sai em cerca de 5 dias úteis. EIN e conta bancária dependem de análise dos órgãos e das instituições, e acompanhamos cada etapa com você.':
        'In most states, incorporation takes about 5 business days. The EIN and bank account depend on agency and institution reviews, and we follow each step with you.',
      'Vocês ajudam a abrir conta bancária nos Estados Unidos?': 'Do you help open a U.S. bank account?',
      'Sim. Fazemos a intermediação para abertura de conta bancária assim que a empresa é constituída, além de orientar sobre gateways de pagamento e remessas entre o Brasil e os Estados Unidos.':
        'Yes. We help open a bank account as soon as the company is incorporated, and guide you on payment gateways and remittances between Brazil and the U.S.',

      // Formulário
      'Fale com um especialista': 'Talk to a specialist',
      'Nome completo': 'Full name',
      'Nome completo *': 'Full name *',
      'E-mail': 'Email',
      'E-mail *': 'Email *',
      'Telefone / WhatsApp': 'Phone / WhatsApp',
      'Telefone / WhatsApp *': 'Phone / WhatsApp *',
      'Seu nome': 'Your name',
      'País': 'Country',
      'Brasil': 'Brazil',
      'Estados Unidos': 'United States',
      'Portugal': 'Portugal',
      'Outro': 'Other',
      'Empresa': 'Company',
      'Nome da empresa': 'Company name',
      'Idioma de atendimento': 'Support language',
      'Português': 'Portuguese',
      'Espanhol': 'Spanish',
      'Inglês': 'English',
      'Prazo para abertura': 'Timeline to open',
      'Selecione': 'Select',
      'Imediato': 'Immediate',
      'Em até 30 dias': 'Within 30 days',
      'Em até 90 dias': 'Within 90 days',
      'Ainda pesquisando': 'Still researching',
      'Receita anual': 'Annual revenue',
      'Até R$ 500 mil': 'Up to R$ 500k',
      'R$ 500 mil – R$ 2 mi': 'R$ 500k – R$ 2M',
      'R$ 2 mi – R$ 10 mi': 'R$ 2M – R$ 10M',
      'Acima de R$ 10 mi': 'Over R$ 10M',
      'Enviar': 'Send',
      'Enviando…': 'Sending…',
      'Recebemos seu contato. Um especialista falará com você em breve.':
        'We received your message. A specialist will reach out shortly.',
      'Revise os campos destacados e tente novamente.': 'Please review the highlighted fields and try again.',
      'Campo obrigatório.': 'Required field.',
      'Informe seu nome completo.': 'Please enter your full name.',
      'Informe um e-mail válido.': 'Please enter a valid email.',
      'Informe um telefone válido com DDD.': 'Please enter a valid phone number with area code.',

      // Footer
      'Navegação': 'Navigation',
      'Nosso time': 'Our team',
      'Na mídia': 'In the news',
      'Para contadores': 'For accountants',
      'Contato': 'Contact',
      'Legal': 'Legal',
      'Política de Privacidade': 'Privacy Policy',
      'Termos de Uso': 'Terms of Use',
      'Política de Cookies': 'Cookie Policy',
      'Start América — assessoria em estruturação internacional, abertura de empresas, contabilidade, tax e compliance para operações entre o Brasil e os Estados Unidos.':
        'Start América — advisory in international structuring, company formation, accounting, tax and compliance for operations between Brazil and the United States.',
      'Todos os direitos reservados.': 'All rights reserved.',
      'Aviso legal: o conteúdo deste site é informativo e não constitui aconselhamento jurídico, contábil ou de investimento. As informações apresentadas dependem de análise individual. Start América não é instituição financeira.':
        'Legal notice: the content of this site is informational and does not constitute legal, accounting or investment advice. The information presented depends on individual analysis. Start América is not a financial institution.',
      'Pular para o conteúdo': 'Skip to content',
      'Falar pelo WhatsApp': 'Chat on WhatsApp',
      'Abrir menu': 'Open menu',
      'Fechar menu': 'Close menu'
    },

    es: {
      'Quem somos': 'Quiénes somos',
      'Serviços': 'Servicios',
      'Planos': 'Planes',
      'Seja um Parceiro Oficial': 'Sé un Socio Oficial',
      'Login': 'Iniciar sesión',
      'Falar com especialista': 'Hablar con un especialista',
      'Falar com um especialista': 'Hablar con un especialista',
      'Falar com Especialista': 'Hablar con un especialista',
      'Voltar ao site': 'Volver al sitio',
      'Idioma': 'Idioma',

      'Estruture sua expansão para os Estados Unidos com quem entende os dois lados.':
        'Estructura tu expansión a Estados Unidos <span class="text-gold">con quienes entienden ambos lados.</span>',
      'Abertura de LLC, Corporation, contabilidade, Tax e compliance com quem realmente entende o fisco americano e o brasileiro.':
        'Apertura de LLC y Corporation, contabilidad, impuestos y compliance con un equipo que entiende de verdad el fisco estadounidense y el brasileño.',

      'Para quem busca': 'Para quien busca',
      'Estratégia tributária internacional, investimento dolarizado e blindagem patrimonial':
        'Estrategia tributaria <span class="text-gold">internacional</span>, inversión <span class="text-gold">dolarizada</span> y <span class="text-gold">blindaje</span> patrimonial',
      'Por trás de cada decisão existe um time de especialistas prontos para te auxiliar nessa jornada de sucesso — do planejamento à operação recorrente nos dois países.':
        'Detrás de cada decisión hay un equipo de especialistas listo para acompañarte en este camino — de la planificación a la operación recurrente en ambos países.',
      'Conheça onde estamos': 'Conoce dónde estamos',

      'O que fazemos por você': 'Lo que hacemos por ti',
      'Abertura e manutenção acompanhadas por especialistas': 'Apertura y mantenimiento acompañados por especialistas',
      'Da constituição da empresa à rotina contábil e fiscal, você tem um time dedicado nos Estados Unidos e no Brasil.':
        'Desde la constitución de la empresa hasta la rutina contable y fiscal, cuentas con un equipo dedicado en Estados Unidos y Brasil.',
      'Contabilidade recorrente': 'Contabilidad recurrente',
      'Sua empresa em dia, todo mês': 'Tu empresa al día, cada mes',
      'Bookkeeping, Form 1120 e 5472, sales tax e annual report, sem surpresa no fim do ano.':
        'Bookkeeping, Form 1120 y 5472, sales tax y annual report, sin sorpresas a fin de año.',
      'Estratégia tributária internacional': 'Estrategia tributaria internacional',
      'Menos imposto, dentro da lei': 'Menos impuestos, dentro de la ley',
      'Planejamento entre Brasil e Estados Unidos, tratados, preços de transferência e distribuição de lucros.':
        'Planificación entre Brasil y Estados Unidos: tratados, precios de transferencia y distribución de utilidades.',
      'Compliance e blindagem jurídica': 'Compliance y blindaje jurídico',
      'Estrutura sólida e protegida': 'Una estructura sólida y protegida',
      'BOI Report, contratos societários, separação patrimonial e obrigações estaduais em ordem.':
        'BOI Report, contratos societarios, separación patrimonial y obligaciones estatales en orden.',
      'Serviços financeiros': 'Servicios financieros',
      'Conta, pagamentos e câmbio': 'Cuenta, pagos y cambio',
      'Abertura de conta nos Estados Unidos, gateways, remessas e conciliação com o Brasil.':
        'Apertura de cuenta en Estados Unidos, gateways, remesas y conciliación con Brasil.',
      'O empresário brasileiro está perdendo margem em frentes ao mesmo tempo.':
        'El empresario brasileño está perdiendo margen en varios frentes a la vez.',
      'Tributação na fonte, reforma tributária, split payment, insegurança jurídica e margem apertada. Veja quanto isso pesa no seu caso.':
        'Retención en la fuente, reforma tributaria, split payment, inseguridad jurídica y márgenes ajustados. Mira cuánto pesa en tu caso.',
      'IRRF 10%': 'Retención 10%',
      'Dividendos na Fonte': 'Impuesto a dividendos',
      'Arrecadação pesada sobre lucros que poderiam ser reinvestidos sem imposto retido.':
        'Alta recaudación sobre utilidades que podrían reinvertirse sin retención.',
      'Reforma': 'Reforma',
      'Transição tributária nacional que trará carga estimada em até 30% em serviços.':
        'Transición tributaria nacional con una carga estimada de hasta el 30% en servicios.',
      'Operacional': 'Operativo',
      'Retenção imediata nas transações comerciais que drena o fluxo de caixa.':
        'Retención inmediata en las transacciones comerciales que drena el flujo de caja.',
      'Compliance': 'Compliance',
      'Insegurança Jurídica': 'Inseguridad jurídica',
      'Súbitas alterações em regras de incentivos locais gerando alta vulnerabilidade.':
        'Cambios repentinos en las reglas de incentivos locales que generan alta vulnerabilidad.',
      'Financeiro': 'Financiero',
      'Margem Comprimida': 'Margen comprimido',
      'Aumento dos custos estruturais no Brasil sem repasse viável aos clientes finais.':
        'Aumento de los costos estructurales en Brasil sin traslado viable a los clientes finales.',
      'Por que Start América?': '¿Por qué Start América?',
      'Automação todo mundo tem. Especialista, só aqui.': 'Automatización tiene todo el mundo. Especialistas, solo aquí.',
      'Comparação': 'Comparación',
      'Plataformas automatizadas': 'Plataformas automatizadas',
      'Start América': 'Start América',
      'Plataformas': 'Plataformas',
      'Quem atende': 'Quién te atiende',
      'Chat e fila de espera': 'Chat y cola de espera',
      'Especialista em disposição fulltime': 'Un especialista dedicado a tiempo completo',
      'Estratégia tributária': 'Estrategia tributaria',
      'Não oferece': 'No la ofrece',
      'Compara 6 jurisdições e desenha a estrutura': 'Compara 6 jurisdicciones y diseña la estructura',
      'Erro em formulário do IRS': 'Error en un formulario del IRS',
      'Você paga a multa': 'Tú pagas la multa',
      'Cobertura antimulta e riscos fiscais': 'Cobertura ante multas y riesgos fiscales',
      'Seu contador no Brasil': 'Tu contador en Brasil',
      'Vira concorrente': 'Se vuelve competidor',
      'Vira associado remunerado': 'Se vuelve socio remunerado',
      'Idiomas de atendimento': 'Idiomas de atención',
      'Inglês (fuso americano)': 'Inglés (horario de EE. UU.)',
      'Português, Espanhol e Inglês (Fuso Brasileiro)': 'Portugués, español e inglés (horario de Brasil)',
      'Converse com um dos nossos especialistas': 'Habla con uno de nuestros especialistas',

      'O que torna a Start América diferente': 'Lo que hace diferente a Start América',
      'Cobertura contra riscos e multas': 'Cobertura ante riesgos y multas',
      'Nossa consultoria carrega apólice de responsabilidade civil para que você tenha total tranquilidade operacional e jurídica.':
        'Nuestra consultoría cuenta con póliza de responsabilidad civil para que tengas total tranquilidad operativa y jurídica.',
      'Atendimento em português, espanhol e inglês.': 'Atención en portugués, español e inglés.',
      'Nada de tickets misteriosos ou fusos horários incompatíveis. Atendimento em tempo real no fuso do Brasil.':
        'Nada de tickets misteriosos ni horarios incompatibles. Atención en tiempo real en el horario de Brasil.',
      'Você não fala com um chat robotizado. Fala direto com o time de especialistas responsável pela sua estrutura.':
        'No hablas con un chatbot. Hablas directamente con el equipo de especialistas responsable de tu estructura.',
      'Fernanda Silveira': 'Fernanda Silveira',
      'Especialista em Incorporação': 'Especialista en Incorporación',
      'Líder técnica responsável pelo trâmite ágil de EIN e documentação estadual.':
        'Líder técnica responsable de la tramitación ágil del EIN y la documentación estatal.',

      'Um plano para cada momento da sua operação nos Estados Unidos':
        'Un plan para cada etapa de tu operación en Estados Unidos',
      'Essencial': 'Esencial',
      'Para profissionais liberais e freelancers iniciando a exportação de serviços.':
        'Para profesionales independientes y freelancers que empiezan a exportar servicios.',
      'Abertura de LLC inclusa': 'Apertura de LLC incluida',
      'Endereço Fiscal Premium': 'Domicilio fiscal Premium',
      'Suporte prioritário': 'Soporte prioritario',
      'Recomendado': 'Recomendado',
      'Profissional': 'Profesional',
      'O plano mais equilibrado com suporte dedicado de alto nível.':
        'El plan más equilibrado, con soporte dedicado de alto nivel.',
      'Prime': 'Prime',
      'Para empresas com faturamento estruturado e múltiplos sócios.':
        'Para empresas con facturación estructurada y varios socios.',
      'Corporate': 'Corporate',
      'Solução sob medida para Holdings ou operações de e-commerce complexas.':
        'Solución a medida para holdings u operaciones de e-commerce complejas.',
      'Para estruturas mais complexas, o preço também pode ser calculado como uma fração da economia gerada no seu cenário.':
        'Para estructuras más complejas, el precio también puede calcularse como una fracción del ahorro generado en tu escenario.',

      'Start América na mídia': 'Start América en los medios',
      'O que o mercado está falando sobre a nossa expansão': 'Lo que el mercado dice sobre nuestra expansión',
      'Exclusivo': 'Exclusiva',
      'Negócios': 'Negocios',
      'Mercado': 'Mercado',
      'Start América recebe smart money de empresa de tecnologia especializada em Saas para contabilidade.':
        'Start América recibe smart money de una empresa de tecnología especializada en SaaS para contabilidad.',
      'Com foco na transição tributária e na busca por segurança jurídica, a nova estrutura simplifica a abertura e manutenção de empresas nos EUA.':
        'Con foco en la transición tributaria y la seguridad jurídica, la nueva estructura simplifica abrir y mantener empresas en EE. UU.',
      'Ler reportagem': 'Leer la nota',
      'Do Brasil para Miami: Empresa Start América dispara na corrida para expandir empresas brasileiras para Estados Unidos,':
        'De Brasil a Miami: Start América acelera en la carrera por expandir empresas brasileñas a Estados Unidos,',
      'Iniciativa pioneira visa blindar o caixa de exportadores de serviços contra o ‘split payment’ e as incertezas da reforma tributária nacional.':
        'Una iniciativa pionera busca blindar la caja de los exportadores de servicios frente al “split payment” y la incertidumbre de la reforma tributaria nacional.',
      'Start América capta rodada seed liderada por sócios da Veri e projeta expansão':
        'Start América levanta una ronda seed liderada por socios de Veri y proyecta expansión',
      'Empresa com plataforma automatizada e atendimento com especialistas focada em facilitação na expansão internacional e abertu…':
        'Empresa con plataforma automatizada y atención con especialistas enfocada en facilitar la expansión internacional y la apert…',

      'Seja um parceiro oficial Start América':
        'Sé un <span class="text-gold">socio oficial de Start América</span>',
      'Indique a Start América ou faça parcerias de estruturação internacional mantendo o compliance no Brasil em perfeita harmonia e ganhe até 30% de comissão recorrente.':
        '<strong>Recomienda Start América o crea alianzas de estructuración internacional</strong> manteniendo el compliance en Brasil, y gana hasta un 30% de comisión recurrente.',
      'Quero me tornar um Parceiro Oficial': 'Quiero ser Socio Oficial',
      'Fluxo de parceria': 'Flujo de alianza',
      'Entenda como funciona o fluxo de parceria do início ao fim':
        'Entiende cómo funciona la alianza de principio a fin',
      'Clientes': 'Clientes',
      'Busca expansão internacional': 'Buscan expansión internacional',
      'Empresas ou pessoas que buscam abertura de empresa nos Estados Unidos, segurança patrimonial, estratégia tributária, compra de imóvel estrangeiro, expansão internacional e abertura de novos negócios no Estados Unidos, investimento dolarizado.':
        'Empresas o personas que buscan abrir empresa en Estados Unidos, seguridad patrimonial, estrategia tributaria, compra de inmueble en el exterior, expansión internacional y nuevos negocios en Estados Unidos, además de inversión dolarizada.',
      'Parceiro Oficial': 'Socio Oficial',
      'Indicação e venda': 'Recomendación y venta',
      'Escritórios de contabilidade, Advocacias e imobiliárias e/ou corretores que atendem ou possuem conexão direta com o clientes que buscam a expansão internacional e/ou abertura de empresas no Estados Unidos e conseguem fazer a ponte para conectar o cliente ao projeto da Start América.':
        'Estudios contables, despachos de abogados e inmobiliarias o corredores que atienden o tienen conexión directa con clientes que buscan expansión internacional y/o apertura de empresas en Estados Unidos, y pueden conectar al cliente con el proyecto de Start América.',
      'Atendimento e operação': 'Atención y operación',
      'Todo operacional como abertura de empresa, contas bancárias, formulários e impostos anuais e estaduais, endereço virtual, entre outros serviços de compliance tributário.':
        'Toda la operación: apertura de empresa, cuentas bancarias, formularios e impuestos anuales y estatales, domicilio virtual y otros servicios de compliance tributario.',
      'Quero ser um Parceiro Oficial': 'Quiero ser Socio Oficial',

      'O seu mercado mudou e sabemos exatamente o que seu cliente precisa':
        'Tu mercado cambió y sabemos <span class="text-gold">exactamente lo que tu cliente necesita</span>',
      'O que você está enfrentando': 'A lo que te <span class="text-gold">enfrentas</span>',
      'Reforma tributária e split payment mudando a rotina inteira do escritório.':
        'Reforma tributaria y split payment que cambian toda la rutina del estudio.',
      'Cliente perguntando sobre empresa no exterior — e ele sem resposta.':
        'Clientes preguntando por empresas en el exterior — y sin respuesta que dar.',
      'Honorário achatado e concorrência por preço na contabilidade tradicional.':
        'Honorarios reducidos y competencia por precio en la contabilidad tradicional.',
      'Risco de perder a carteira para quem oferece mais do que guia e balancete.':
        'Riesgo de perder la cartera ante quienes ofrecen más que declaraciones y balances.',
      'O que você passa a oferecer': 'Lo que pasas a <span class="text-gold">ofrecer</span>',
      'Estratégia tributária internacional com especialistas.': 'Estrategia tributaria internacional con especialistas.',
      'Compliance e blindagem jurídica que o escritório do lado não tem.':
        'Compliance y blindaje jurídico que el estudio de al lado no tiene.',
      'Assessoria jurídica e tributária de apoio, sem contratar ninguém.':
        'Asesoría jurídica y tributaria de apoyo, sin contratar a nadie.',
      'O que você ganha': 'Lo que <span class="text-gold">ganas</span>',
      'Seja um parceiro Start América e ganhe até 30% de comissão recorrente enquanto o cliente ficar.':
        'Sé socio de Start América y gana hasta un 30% de comisión recurrente mientras el cliente siga.',
      'Cross-sell: Oportunidade de novos serviços e produtos para seu cliente.':
        '<strong>Cross-sell:</strong> nuevos servicios y productos para tu cliente.',
      'Diferencial competitivo: posicionamento de escritório consultivo, não de escritório de guia.':
        '<strong>Diferencial competitivo:</strong> posicionamiento como estudio consultivo, no de solo declaraciones.',
      'Zero custo operacional, a execução é toda nossa.':
        '<strong>Cero costo operativo</strong> — la ejecución es toda nuestra.',

      'Confira os benefícios exclusivos que preparamos para nossos parceiros':
        'Descubre los beneficios exclusivos que preparamos para nuestros socios',
      'Bronze': 'Bronce',
      'Recorrente, todo mês': 'Recurrente, cada mes',
      'Indica e agenda': 'Recomienda y agenda',
      'Repassa o contato ou agenda com o SDR': 'Pasa el contacto o agenda con el SDR',
      'Nós qualificamos, vendemos e entregamos': 'Nosotros calificamos, vendemos y entregamos',
      'Material e link com o nome dele': 'Material y enlace con su nombre',
      'Prata': 'Plata',
      'Apoia a negociação': 'Apoya la negociación',
      'Participa da reunião com o closer': 'Participa en la reunión con el closer',
      'Ajuda a destravar objeção': 'Ayuda a resolver objeciones',
      'Treinamento de vendas e leads da região dele': 'Formación de ventas y leads de su región',
      'Ouro': 'Oro',
      'Conduz a venda': 'Lidera la venta',
      'Conduz a venda até o onboarding': 'Lidera la venta hasta el onboarding',
      'Portal white label com a marca dele': 'Portal white label con su marca',
      'Diamante': 'Diamante',
      'Negociado': 'Negociado',
      'Condição própria': 'Condiciones a medida',
      'Representa a praça': 'Representa la plaza',
      'Exclusividade territorial por contrato': 'Exclusividad territorial por contrato',
      'Condição comercial acima de 30%, por volume': 'Condición comercial superior al 30%, por volumen',
      'Coapresenta os eventos da praça': 'Co-presenta los eventos de la plaza',
      'Indicação Bronze': 'Recomendación Bronce',
      'Indicação Prata': 'Recomendación Plata',
      'Falar com consultor': 'Hablar con un consultor',

      'Perguntas Frequentes': 'Preguntas Frecuentes',
      'Preciso de cidadania ou green card para abrir empresa nos Estados Unidos?':
        '¿Necesito ciudadanía o green card para abrir una empresa en Estados Unidos?',
      'Não. Estrangeiros não residentes podem ser sócios de uma LLC ou Corporation. O que definimos com você é a estrutura, o estado de registro e as obrigações fiscais que passam a existir nos dois países.':
        'No. Los extranjeros no residentes pueden ser socios de una LLC o Corporation. Lo que definimos contigo es la estructura, el estado de registro y las obligaciones fiscales que surgen en ambos países.',
      'Qual a diferença entre LLC e Corporation?': '¿Cuál es la diferencia entre una LLC y una Corporation?',
      'A LLC costuma ser mais simples e vantajosa para quem presta serviços, com menos burocracia e tributação repassada aos sócios. A Corporation faz mais sentido para quem pretende captar investidores ou emitir ações. Avaliamos seu cenário e indicamos a estrutura mais adequada.':
        'La LLC suele ser más simple y ventajosa para quienes prestan servicios, con menos burocracia y tributación traspasada a los socios. La Corporation tiene más sentido para quienes buscan captar inversionistas o emitir acciones. Evaluamos tu escenario y te recomendamos la estructura más adecuada.',
      'Qual é o prazo de abertura da empresa?': '¿Cuál es el plazo para abrir la empresa?',
      'Na maioria dos estados, a constituição sai em cerca de 5 dias úteis. EIN e conta bancária dependem de análise dos órgãos e das instituições, e acompanhamos cada etapa com você.':
        'En la mayoría de los estados, la constitución sale en unos 5 días hábiles. El EIN y la cuenta bancaria dependen del análisis de los organismos e instituciones, y acompañamos cada etapa contigo.',
      'Vocês ajudam a abrir conta bancária nos Estados Unidos?': '¿Ayudan a abrir una cuenta bancaria en Estados Unidos?',
      'Sim. Fazemos a intermediação para abertura de conta bancária assim que a empresa é constituída, além de orientar sobre gateways de pagamento e remessas entre o Brasil e os Estados Unidos.':
        'Sí. Ayudamos a abrir la cuenta bancaria en cuanto la empresa está constituida, además de orientar sobre pasarelas de pago y remesas entre Brasil y Estados Unidos.',

      'Fale com um especialista': 'Habla con un especialista',
      'Nome completo': 'Nombre completo',
      'Nome completo *': 'Nombre completo *',
      'E-mail': 'Correo electrónico',
      'E-mail *': 'Correo electrónico *',
      'Telefone / WhatsApp': 'Teléfono / WhatsApp',
      'Telefone / WhatsApp *': 'Teléfono / WhatsApp *',
      'Seu nome': 'Tu nombre',
      'País': 'País',
      'Brasil': 'Brasil',
      'Estados Unidos': 'Estados Unidos',
      'Portugal': 'Portugal',
      'Outro': 'Otro',
      'Empresa': 'Empresa',
      'Nome da empresa': 'Nombre de la empresa',
      'Idioma de atendimento': 'Idioma de atención',
      'Português': 'Portugués',
      'Espanhol': 'Español',
      'Inglês': 'Inglés',
      'Prazo para abertura': 'Plazo para abrir',
      'Selecione': 'Selecciona',
      'Imediato': 'Inmediato',
      'Em até 30 dias': 'En hasta 30 días',
      'Em até 90 dias': 'En hasta 90 días',
      'Ainda pesquisando': 'Aún investigando',
      'Receita anual': 'Ingresos anuales',
      'Até R$ 500 mil': 'Hasta R$ 500 mil',
      'R$ 500 mil – R$ 2 mi': 'R$ 500 mil – R$ 2 M',
      'R$ 2 mi – R$ 10 mi': 'R$ 2 M – R$ 10 M',
      'Acima de R$ 10 mi': 'Más de R$ 10 M',
      'Enviar': 'Enviar',
      'Enviando…': 'Enviando…',
      'Recebemos seu contato. Um especialista falará com você em breve.':
        'Recibimos tu mensaje. Un especialista se pondrá en contacto pronto.',
      'Revise os campos destacados e tente novamente.': 'Revisa los campos destacados e inténtalo de nuevo.',
      'Campo obrigatório.': 'Campo obligatorio.',
      'Informe seu nome completo.': 'Ingresa tu nombre completo.',
      'Informe um e-mail válido.': 'Ingresa un correo válido.',
      'Informe um telefone válido com DDD.': 'Ingresa un teléfono válido con código de área.',

      'Navegação': 'Navegación',
      'Nosso time': 'Nuestro equipo',
      'Na mídia': 'En los medios',
      'Para contadores': 'Para contadores',
      'Contato': 'Contacto',
      'Legal': 'Legal',
      'Política de Privacidade': 'Política de Privacidad',
      'Termos de Uso': 'Términos de Uso',
      'Política de Cookies': 'Política de Cookies',
      'Start América — assessoria em estruturação internacional, abertura de empresas, contabilidade, tax e compliance para operações entre o Brasil e os Estados Unidos.':
        'Start América — asesoría en estructuración internacional, apertura de empresas, contabilidad, impuestos y compliance para operaciones entre Brasil y Estados Unidos.',
      'Todos os direitos reservados.': 'Todos los derechos reservados.',
      'Aviso legal: o conteúdo deste site é informativo e não constitui aconselhamento jurídico, contábil ou de investimento. As informações apresentadas dependem de análise individual. Start América não é instituição financeira.':
        'Aviso legal: el contenido de este sitio es informativo y no constituye asesoramiento jurídico, contable ni de inversión. La información presentada depende de un análisis individual. Start América no es una institución financiera.',
      'Pular para o conteúdo': 'Saltar al contenido',
      'Falar pelo WhatsApp': 'Hablar por WhatsApp',
      'Abrir menu': 'Abrir menú',
      'Fechar menu': 'Cerrar menú'
    }
  };

  /* ---------- Mecanismo ---------- */
  var norm = function (s) { return (s || '').replace(/\s+/g, ' ').trim(); };
  var registry = [];   // { el, html, attrs: {name: value} }

  var INLINE_OK = { br: 1, span: 1, strong: 1, b: 1, em: 1, i: 1, svg: 1 };
  var SPANLIKE = { span: 1, strong: 1, b: 1, em: 1, i: 1 };

  function isLeafText(el) {
    if (!el.childNodes.length) return false;
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType === 1) {
        var tag = (n.tagName || '').toLowerCase();
        if (!INLINE_OK[tag]) return false;
        if (SPANLIKE[tag]) {
          for (var j = 0; j < n.childNodes.length; j++) {
            if (n.childNodes[j].nodeType === 1 && (n.childNodes[j].tagName || '').toLowerCase() !== 'br') return false;
          }
        }
      }
    }
    return /[A-Za-zÀ-ÿ]/.test(el.textContent);
  }

  function build() {
    var TAGS = 'h1,h2,h3,h4,p,a,span,button,li,strong,label,small,option,figcaption';
    document.querySelectorAll(TAGS).forEach(function (el) {
      if (el.closest('[data-no-i18n]')) return;
      // texto — ignora se um ancestral já foi registrado (evita aninhamento)
      if (!el.dataset.i18nDone && isLeafText(el) &&
          !(el.parentElement && el.parentElement.closest('[data-i18n-done]'))) {
        registry.push({ el: el, html: el.innerHTML, key: norm(el.textContent) });
        el.setAttribute('data-i18n-done', '1');
      }
      // atributos traduzíveis
      ['placeholder', 'aria-label', 'title'].forEach(function (a) {
        if (el.hasAttribute(a)) {
          var v = el.getAttribute(a);
          registry.push({ el: el, attr: a, val: v, key: norm(v) });
        }
      });
    });
  }

  function setHTML(el, html) {
    // preserva ícones <svg> filhos diretos (setas, chevrons)
    var icons = [].slice.call(el.children).filter(function (c) {
      return (c.tagName || '').toLowerCase() === 'svg';
    });
    el.innerHTML = html;
    if (icons.length && !el.querySelector('svg')) {
      icons.forEach(function (ic) { el.appendChild(document.createTextNode(' ')); el.appendChild(ic); });
    }
  }

  function apply(lang) {
    var dict = T[lang] || {};
    registry.forEach(function (r) {
      // sempre traduz a partir do original em PT (r.key), nunca do texto atual
      if (r.attr) {
        var av = (lang !== 'pt' && dict[r.key] != null) ? dict[r.key] : r.val;
        r.el.setAttribute(r.attr, av);
        return;
      }
      var html = (lang !== 'pt' && dict[r.key] != null) ? dict[r.key] : r.html;
      setHTML(r.el, html);
    });

    // <title> e meta description
    var titles = {
      pt: 'Start América — Estruture sua expansão para os Estados Unidos',
      en: 'Start América — Structure your expansion into the United States',
      es: 'Start América — Estructura tu expansión a Estados Unidos'
    };
    if (titles[lang]) document.title = titles[lang];

    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);
    document.querySelectorAll('[data-lang-select]').forEach(function (s) { s.value = lang; });
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    window.__saLang = lang;
    document.dispatchEvent(new CustomEvent('sa:langchange', { detail: { lang: lang } }));
  }

  function init() {
    build();
    var saved = 'pt';
    try { saved = localStorage.getItem(STORE_KEY) || 'pt'; } catch (e) {}
    if (LANGS.indexOf(saved) === -1) saved = 'pt';

    document.querySelectorAll('[data-lang-select]').forEach(function (sel) {
      sel.addEventListener('change', function () {
        var l = sel.value;
        if (LANGS.indexOf(l) === -1) return;
        apply(l);
      });
    });

    if (saved !== 'pt') apply(saved);
    else document.querySelectorAll('[data-lang-select]').forEach(function (s) { s.value = 'pt'; });
  }

  // expõe helper para o main.js traduzir strings dinâmicas do formulário
  window.saT = function (ptText) {
    var l = window.__saLang || 'pt';
    if (l === 'pt') return ptText;
    return (T[l] && T[l][norm(ptText)]) || ptText;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
