import React, { useState, useEffect } from "react";
import { Calculator, Sparkles, Calendar, Hash } from "lucide-react";

const Main = () => {
  const [dia, setDia] = useState("08");
  const [mes, setMes] = useState("05");
  const [anoNascimento, setAnoNascimento] = useState("1997");
  const [anoUniversal, setAnoUniversal] = useState(2025);
  const [resultado, setResultado] = useState(null);
  const [mostrarCalculos, setMostrarCalculos] = useState(false);
  const [animacao, setAnimacao] = useState(false);

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const calcularAnoPessoal = () => {
    // 1. Soma da Data de Nascimento Completa (dd/mm/aaaa)
    const dataCompleta = dia + mes + anoNascimento;
    const somaDataNascimento = dataCompleta
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);

    // Reduzir a soma da data de nascimento a um único dígito
    let dataNascimentoReduzida = somaDataNascimento;
    const passos = [somaDataNascimento];
    while (dataNascimentoReduzida > 9) {
      dataNascimentoReduzida = dataNascimentoReduzida
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0);
      passos.push(dataNascimentoReduzida);
    }

    // 2. Calcular ano universal
    const anoUniversalReduzido = anoUniversal
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);

    // 3. Soma total
    const somaTotal = dataNascimentoReduzida + anoUniversalReduzido;

    // 4. Reduzir a um dígito final
    let anoFinal = somaTotal;
    const passosFinal = [somaTotal];
    while (anoFinal > 9) {
      anoFinal = anoFinal
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0);
      passosFinal.push(anoFinal);
    }

    return {
      dataCompleta,
      somaDataNascimento,
      dataNascimentoReduzida,
      passosDataNascimento: passos,
      anoUniversalReduzido,
      somaTotal,
      anoFinal,
      passosFinal,
    };
  };

  const handleCalcular = () => {
    setAnimacao(true);
    setTimeout(() => {
      const calc = calcularAnoPessoal();
      setResultado(calc);
      setMostrarCalculos(true);
      setAnimacao(false);
    }, 500);
  };

  const significadosAno = {
    1: {
      titulo: "Novos Começos - Liderança",
      descricao:
        "Ano de iniciativas, liderança e independência. Momento para plantar sementes.",
      detalhes:
        "Este é o recomeço de um ciclo de 9 anos. Energia de ação, determinação e realização. É tempo de focar em si mesmo e nos seus objetivos pessoais. Ideal para iniciar projetos, mudar de carreira ou adotar novos hábitos. A energia do 1 traz impulso, inovação e autoconfiança. Momento de definir metas claras e trabalhar para alcançá-las com determinação.",
    },
    2: {
      titulo: "Cooperação - Diplomacia",
      descricao:
        "Ano de parcerias, diplomacia e sensibilidade. Foco nas relações.",
      detalhes:
        "Período marcado pela colaboração e sensibilidade emocional. É uma época para fortalecer relacionamentos, trabalhar em equipe e desenvolver a diplomacia. A energia do 2 sugere paciência, introspecção e equilíbrio. Questões de relacionamentos serão destacadas. Momento de cultivar parcerias e aprender a arte da negociação e cooperação.",
    },
    3: {
      titulo: "Criatividade - Expressão",
      descricao:
        "Ano de expressão criativa, comunicação e otimismo. Momento de brilhar.",
      detalhes:
        "Período vibrante e expansivo, repleto de oportunidades para expressar sua criatividade. É um ano de movimento, crescimento e expansão em todas as áreas. Sua capacidade de comunicação estará aflorada e você atrairá atenção. Ideal para projetos artísticos, socialização e desenvolvimento de talentos. Época de alegria, otimismo e muitas viagens. Oportunidades surgem tanto na vida pessoal quanto profissional. Momento de colher os primeiros frutos dos esforços dos anos anteriores.",
    },
    4: {
      titulo: "Organização - Construção",
      descricao:
        "Ano de trabalho duro, construção de bases sólidas e disciplina.",
      detalhes:
        "Período de estabelecimento de bases sólidas e estruturação. É um ano para focar no trabalho árduo, organização e disciplina. Momento de construir algo duradouro e estável. A energia do 4 traz seriedade, método e perseverança. Ideal para consolidar conquistas, organizar a vida e estabelecer rotinas produtivas. Requer paciência e determinação.",
    },
    5: {
      titulo: "Liberdade - Transformação",
      descricao: "Ano de mudanças, aventuras e expansão. Momento de explorar.",
      detalhes:
        "Ano de intensa liberdade e transformação. Período de mudanças significativas, aventuras e expansão de horizontes. A energia do 5 traz versatilidade, curiosidade e desejo de novas experiências. Momento ideal para viagens, estudos, conhecer pessoas novas e explorar diferentes possibilidades. Pode haver instabilidade, mas também muitas oportunidades de crescimento.",
    },
    6: {
      titulo: "Responsabilidade - Cuidado",
      descricao:
        "Ano voltado para família, cuidado e responsabilidades domésticas.",
      detalhes:
        "Período de foco na família, responsabilidades e cuidado com outros. A energia do 6 traz harmonia, amor e senso de justiça. É um ano ideal para trabalhar em equipe, fazer algo significativo para a comunidade e fortalecer laços familiares. Momento de assumir responsabilidades e cuidar daqueles que amamos. Período favorável para casamento, filhos e estabilidade emocional.",
    },
    7: {
      titulo: "Introspecção - Espiritualidade",
      descricao: "Ano de reflexão, estudos e desenvolvimento espiritual.",
      detalhes:
        "Fase de autoaperfeiçoamento e aprofundamento espiritual. Período de introspecção, estudos e busca por sabedoria. A energia do 7 traz misticismo, intuição e análise profunda. Momento ideal para desenvolver habilidades, estudar, meditar e se conectar com sua espiritualidade. Pode haver tendência ao isolamento para reflexão. É importante focar em como se tornar uma autoridade em sua área.",
    },
    8: {
      titulo: "Realização Material - Poder",
      descricao: "Ano de conquistas materiais, autoridade e reconhecimento.",
      detalhes:
        "Ano extremamente poderoso associado a conquistas materiais, reconhecimento e autoridade. A energia do 8 traz ambição, liderança e capacidade de realização. Período de grande potencial para sucesso financeiro e profissional. Momento de colher os frutos do trabalho dos anos anteriores. Oportunidades de crescimento, promoções e reconhecimento. Requer responsabilidade no uso do poder.",
    },
    9: {
      titulo: "Conclusão - Sabedoria",
      descricao: "Ano de finalização de ciclos, generosidade e sabedoria.",
      detalhes:
        "Período de término de um ciclo de 9 anos. É um ano de renovação e encerramento de assuntos que não servem mais. A energia do 9 traz sabedoria, altruísmo e compaixão. Momento para fazer uma 'faxina geral' na vida, desapegando-se do que não traz mais valor. Ideal para atividades humanitárias, viagens em busca de conhecimento e crescimento espiritual. Não é recomendável iniciar novos negócios, mas sim preparar-se para o novo ciclo que chegará.",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-300 mr-2" />
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-purple-300 to-indigo-300">
              Ano Pessoal - Cabala
            </h1>
            <Sparkles className="w-8 h-8 text-purple-300 ml-2" />
          </div>
          <p className="text-gray-300 text-lg">
            Descubra o que 2025 reserva para você através da Numerologia da
            Cabala
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-2" />
                Seus Dados
              </h2>

              {/* Dia */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Dia de Nascimento
                </label>
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={dia}
                  onChange={(e) => setDia(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Ex: 08"
                />
              </div>

              {/* Mês */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mês de Nascimento
                </label>
                <select
                  value={mes}
                  onChange={(e) => setMes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  {meses.map((nomeMs, index) => (
                    <option
                      key={index}
                      value={String(index + 1).padStart(2, "0")}
                      className="bg-gray-800"
                    >
                      {nomeMs}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ano de Nascimento */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Ano de Nascimento
                </label>
                <input
                  type="number"
                  min="1900"
                  max="2024"
                  value={anoNascimento}
                  onChange={(e) => setAnoNascimento(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Ex: 1997"
                />
              </div>

              {/* Ano Universal */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Hash className="w-4 h-4 inline mr-1" />
                  Ano Universal
                </label>
                <input
                  type="number"
                  value={anoUniversal}
                  onChange={(e) => setAnoUniversal(parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Botão Calcular */}
              <button
                onClick={handleCalcular}
                disabled={animacao}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                  animacao
                    ? "bg-slate-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-slate-700 to-purple-700 hover:from-slate-600 hover:to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                } text-white`}
              >
                {animacao ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Calculando...
                  </div>
                ) : (
                  "Calcular Ano Pessoal"
                )}
              </button>
            </div>

            {/* Resultado */}
            <div className="space-y-6 max-h-96 overflow-y-auto scroll-smooth">
              {resultado && mostrarCalculos && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Seu Cálculo
                  </h2>

                  {/* Passos do Cálculo */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-400">
                      <p className="text-gray-300">
                        <span className="font-semibold text-blue-400">
                          1. Data Completa:
                        </span>{" "}
                        {dia}/{mes}/{anoNascimento}
                      </p>
                      <p className="text-gray-300 text-sm mt-1">
                        Soma: {resultado.dataCompleta.split("").join(" + ")} ={" "}
                        {resultado.somaDataNascimento}
                      </p>
                      {resultado.passosDataNascimento.length > 1 && (
                        <p className="text-gray-300 text-sm">
                          Redução:{" "}
                          {resultado.passosDataNascimento
                            .slice(0, -1)
                            .map((passo, i, arr) =>
                              i === arr.length - 1
                                ? `${passo
                                    .toString()
                                    .split("")
                                    .join(" + ")} = ${
                                    resultado.dataNascimentoReduzida
                                  }`
                                : `${passo} → `
                            )
                            .join("")}
                        </p>
                      )}
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-400">
                      <p className="text-gray-300">
                        <span className="font-semibold text-green-400">
                          2. Ano Universal {anoUniversal}:
                        </span>{" "}
                        {anoUniversal.toString().split("").join(" + ")} ={" "}
                        {resultado.anoUniversalReduzido}
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-yellow-400">
                      <p className="text-gray-300">
                        <span className="font-semibold text-yellow-400">
                          3. Soma Total:
                        </span>{" "}
                        {resultado.dataNascimentoReduzida} +{" "}
                        {resultado.anoUniversalReduzido} = {resultado.somaTotal}
                      </p>
                    </div>
                    {resultado.passosFinal.length > 1 && (
                      <div className="bg-white/5 rounded-lg p-4 border-l-4 border-purple-400">
                        <p className="text-gray-300">
                          <span className="font-semibold text-purple-400">
                            4. Redução Final:
                          </span>{" "}
                          {resultado.somaTotal.toString().split("").join(" + ")}{" "}
                          = {resultado.anoFinal}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Resultado Final */}
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-slate-600 to-purple-600 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-transform shadow-2xl">
                      <p className="text-slate-100 font-semibold mb-2">
                        Seu Ano Pessoal em {anoUniversal}
                      </p>
                      <p className="text-6xl font-bold text-white mb-2 drop-shadow-lg">
                        {resultado.anoFinal}
                      </p>
                      <p className="text-xl font-bold text-slate-100">
                        {significadosAno[resultado.anoFinal]?.titulo}
                      </p>
                      <div className="mt-2 flex justify-center">
                        <div className="bg-white/20 rounded-full px-4 py-1">
                          <p className="text-sm font-medium text-slate-100">
                            Numerologia Cabalística
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Significado */}
                    <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                      <h3 className="text-xl font-bold text-white mb-4 text-center">
                        Significado na Numerologia Cabalística
                      </h3>
                      <div className="space-y-4">
                        <p className="text-gray-300 text-center leading-relaxed font-medium">
                          {significadosAno[resultado.anoFinal]?.descricao}
                        </p>
                        <div className="border-t border-white/20 pt-4">
                          <p className="text-gray-300 leading-relaxed text-justify">
                            {significadosAno[resultado.anoFinal]?.detalhes}
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-slate-800/30 to-purple-800/30 rounded-lg p-4 border-l-4 border-purple-500">
                          <p className="text-gray-300 text-sm italic">
                            <strong>✨ Lembre-se:</strong> Estas são tendências
                            energéticas que podem influenciar seu ano. Use essas
                            informações como guia para planejar decisões
                            importantes e aproveitar as energias favoráveis de
                            cada período.
                          </p>
                        </div>

                        {/* Dicas específicas para cada Ano Pessoal */}
                        {resultado.anoFinal === 1 && (
                          <div className="bg-gradient-to-r from-slate-800/40 to-purple-800/40 rounded-lg p-4 border-l-4 border-purple-500">
                            <h4 className="text-purple-300 font-bold mb-2">
                              🚀 Dicas para seu Ano Pessoal 1:
                            </h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li>
                                • Defina metas claras e objetivos específicos
                              </li>
                              <li>• Inicie novos projetos com determinação</li>
                              <li>
                                • Desenvolva sua liderança e independência
                              </li>
                              <li>• Seja pioneiro em sua área de atuação</li>
                              <li>• Invista em seu desenvolvimento pessoal</li>
                              <li>
                                • Tenha coragem para tomar decisões importantes
                              </li>
                            </ul>
                          </div>
                        )}

                        {resultado.anoFinal === 2 && (
                          <div className="bg-gradient-to-r from-slate-800/40 to-indigo-800/40 rounded-lg p-4 border-l-4 border-indigo-500">
                            <h4 className="text-indigo-300 font-bold mb-2">
                              🤝 Dicas para seu Ano Pessoal 2:
                            </h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li>
                                • Fortaleça relacionamentos pessoais e
                                profissionais
                              </li>
                              <li>• Pratique a diplomacia e cooperação</li>
                              <li>• Seja paciente com os processos</li>
                              <li>
                                • Invista em parcerias e trabalho em equipe
                              </li>
                              <li>• Desenvolva sua sensibilidade emocional</li>
                              <li>
                                • Busque harmonia e equilíbrio em todas as áreas
                              </li>
                            </ul>
                          </div>
                        )}

                        {resultado.anoFinal === 3 && (
                          <div className="bg-gradient-to-r from-slate-800/40 to-purple-700/40 rounded-lg p-4 border-l-4 border-purple-400">
                            <h4 className="text-purple-300 font-bold mb-2">
                              🎨 Dicas para seu Ano Pessoal 3:
                            </h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li>
                                • Invista em atividades criativas: escrita,
                                arte, música
                              </li>
                              <li>
                                • Aproveite para fazer cursos e aperfeiçoamento
                              </li>
                              <li>
                                • Socialize e construa novos relacionamentos
                              </li>
                              <li>
                                • Considere viagens e experiências
                                enriquecedoras
                              </li>
                              <li>
                                • Cuide da comunicação e expressão pessoal
                              </li>
                              <li>
                                • Mantenha o foco entre múltiplos projetos
                              </li>
                            </ul>
                          </div>
                        )}

                        {resultado.anoFinal === 4 && (
                          <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-lg p-4 border-l-4 border-slate-500">
                            <h4 className="text-slate-300 font-bold mb-2">
                              🏗️ Dicas para seu Ano Pessoal 4:
                            </h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li>
                                • Organize sua vida pessoal e profissional
                              </li>
                              <li>
                                • Estabeleça rotinas produtivas e disciplinadas
                              </li>
                              <li>• Trabalhe com persistência e dedicação</li>
                              <li>• Construa bases sólidas para o futuro</li>
                              <li>
                                • Seja metódico e detalhista em seus projetos
                              </li>
                              <li>• Invista em segurança e estabilidade</li>
                            </ul>
                          </div>
                        )}

                        {resultado.anoFinal === 5 && (
                          <div className="bg-gradient-to-r from-slate-800/40 to-indigo-700/40 rounded-lg p-4 border-l-4 border-indigo-400">
                            <h4 className="text-indigo-300 font-bold mb-2">
                              🌟 Dicas para seu Ano Pessoal 5:
                            </h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li>• Abrace mudanças e novas oportunidades</li>
                              <li>
                                • Explore diferentes possibilidades de carreira
                              </li>
                              <li>• Viaje e amplie seus horizontes</li>
                              <li>
                                • Seja flexível e adaptável às circunstâncias
                              </li>
                              <li>• Invista em sua liberdade pessoal</li>
                              <li>
                                • Experimente coisas novas com curiosidade
                              </li>
                            </ul>
                          </div>
                        )}

                        {resultado.anoFinal === 6 && (
                          <div className="bg-gradient-to-r from-slate-800/40 to-purple-800/40 rounded-lg p-4 border-l-4 border-purple-400">
                            <h4 className="text-purple-300 font-bold mb-2">
                              ❤️ Dicas para seu Ano Pessoal 6:
                            </h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li>
                                • Dedique tempo à família e entes queridos
                              </li>
                              <li>• Assuma responsabilidades com amor</li>
                              <li>• Trabalhe em prol da comunidade</li>
                              <li>
                                • Cuide da harmonia no lar e relacionamentos
                              </li>
                              <li>• Seja prestativo e compreensivo</li>
                              <li>• Invista em estabilidade emocional</li>
                            </ul>
                          </div>
                        )}

                        {resultado.anoFinal === 7 && (
                          <div className="bg-gradient-to-r from-slate-800/40 to-indigo-800/40 rounded-lg p-4 border-l-4 border-indigo-500">
                            <h4 className="text-indigo-300 font-bold mb-2">
                              🧘 Dicas para seu Ano Pessoal 7:
                            </h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li>• Invista em estudos e aperfeiçoamento</li>
                              <li>• Dedique tempo à meditação e reflexão</li>
                              <li>• Desenvolva sua espiritualidade</li>
                              <li>• Busque conhecimento em sua área</li>
                              <li>
                                • Pratique a introspecção e autoconhecimento
                              </li>
                              <li>• Seja seletivo com suas energias</li>
                            </ul>
                          </div>
                        )}

                        {resultado.anoFinal === 8 && (
                          <div className="bg-gradient-to-r from-slate-800/40 to-slate-600/40 rounded-lg p-4 border-l-4 border-slate-400">
                            <h4 className="text-slate-300 font-bold mb-2">
                              💰 Dicas para seu Ano Pessoal 8:
                            </h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li>
                                • Foque em conquistas materiais e financeiras
                              </li>
                              <li>
                                • Desenvolva suas habilidades de liderança
                              </li>
                              <li>• Busque reconhecimento profissional</li>
                              <li>
                                • Administre recursos com responsabilidade
                              </li>
                              <li>• Trabalhe com ambição e determinação</li>
                              <li>• Use seu poder de forma ética</li>
                            </ul>
                          </div>
                        )}

                        {resultado.anoFinal === 9 && (
                          <div className="bg-gradient-to-r from-slate-800/40 to-purple-700/40 rounded-lg p-4 border-l-4 border-purple-400">
                            <h4 className="text-purple-300 font-bold mb-2">
                              🌅 Dicas para seu Ano Pessoal 9:
                            </h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li>
                                • Finalize projetos e relacionamentos pendentes
                              </li>
                              <li>
                                • Faça uma &quot;faxina geral&quot; em sua vida
                              </li>
                              <li>
                                • Pratique o desapego do que não serve mais
                              </li>
                              <li>• Envolva-se em causas humanitárias</li>
                              <li>• Compartilhe sua sabedoria com outros</li>
                              <li>• Prepare-se para um novo ciclo de 9 anos</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!resultado && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-slate-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-400 text-lg">
                    Preencha seus dados e descubra seu Ano Pessoal!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 space-y-2">
          <p>
            ✨ A numerologia pode oferecer insights valiosos sobre os ciclos da
            vida ✨
          </p>
          <div className="bg-white/5 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-300">
              <strong>📅 Importante:</strong> Na Numerologia Cabalística, seu
              Ano Pessoal inicia no dia do seu aniversário, não em 1º de
              janeiro, e segue até o próximo aniversário.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        /* Scrollbar customizado */
        .scroll-smooth::-webkit-scrollbar {
          width: 6px;
        }

        .scroll-smooth::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .scroll-smooth::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }

        .scroll-smooth::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Main;
