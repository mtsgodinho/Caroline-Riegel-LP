
import React, { useState } from 'react';
import { 
  MessageCircle, 
  ChevronRight, 
  ShieldCheck, 
  Heart, 
  Star, 
  Clock, 
  Calendar, 
  Instagram, 
  MapPin, 
  X
} from 'lucide-react';

// --- Constants & Types ---

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5551997748150&text=Olá! Gostaria de agendar minha primeira consulta gratuita.";
const INSTAGRAM_URL = "https://instagram.com/dentistacarolinariegel";

const RESULTS_IMAGES = [
  "https://i.imgur.com/kZ8adWP.png",
  "https://i.imgur.com/QODCtsD.png",
  "https://i.imgur.com/ldm3Q3x.png",
  "https://i.imgur.com/BjwmbuR.png",
];

const BACKSTAGE_IMAGES = [
  "https://i.imgur.com/oix2C5W.png",
  "https://i.imgur.com/CVcg3QW.png",
  "https://i.imgur.com/b1Aay8j.png",
];

// --- Sub-components ---

const Lightbox: React.FC<{ isOpen: boolean; image: string; onClose: () => void }> = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <button className="absolute top-6 right-6 text-white p-2">
        <X size={32} />
      </button>
      <img src={image} alt="Resultado Ampliado" className="max-h-full max-w-full rounded-lg object-contain" />
    </div>
  );
};

const WhatsAppButton: React.FC<{ label: string; subtext?: string; className?: string }> = ({ label, subtext, className }) => (
  <div className={`flex flex-col items-center gap-2 w-full max-w-sm mx-auto ${className}`}>
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-[#25D366] hover:bg-[#1fb355] text-white font-bold py-5 px-6 rounded-full flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl whatsapp-pulse text-center leading-tight uppercase tracking-wide"
    >
      <MessageCircle size={24} fill="currentColor" className="text-white" />
      <span>{label}</span>
    </a>
    {subtext && <span className="text-zinc-500 text-sm font-medium italic opacity-80">{subtext}</span>}
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col gap-4">
    <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-emerald-700">
      {icon}
    </div>
    <div>
      <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
      <p className="text-stone-600 leading-relaxed text-sm">{description}</p>
    </div>
  </div>
);

// --- Main Page ---

const App: React.FC = () => {
  const [lightbox, setLightbox] = useState({ open: false, image: "" });

  const openImage = (image: string) => setLightbox({ open: true, image });
  const closeImage = () => setLightbox({ open: false, image: "" });

  return (
    <main className="min-h-screen">
      <Lightbox isOpen={lightbox.open} image={lightbox.image} onClose={closeImage} />

      {/* 1. HERO (Primeira Dobra) */}
      <section className="relative min-h-[90vh] flex flex-col">
        {/* Background Overlay - Atualizado para a IMAGEM 2 conforme solicitado */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://i.imgur.com/zDRH1ST.png" 
            alt="Dra. Carolina Riegel" 
            className="w-full h-full object-cover object-top filter brightness-[0.9] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end flex-grow px-6 pb-12 pt-24 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-emerald-700 text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-6 mx-auto">
            Ortodontia Inteligente
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl leading-[1.1] text-zinc-900 mb-6 font-bold">
            Eu sou Carolina Riegel e transformo sorrisos com uma ortodontia <span className="text-emerald-800 italic">humana.</span>
          </h1>
          <p className="text-stone-700 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            De sorriso novo à noites tranquilas: livre-se do bruxismo e da apneia com quem entende de bem-estar.
          </p>
          
          <WhatsAppButton 
            label="Agendar consulta gratuita no WhatsApp" 
            subtext="Sem compromisso e 100% focado em você"
          />
        </div>
      </section>

      {/* 2. QUEM SOU EU (Autoridade) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="relative w-full md:w-1/2">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full z-0 opacity-50"></div>
            {/* Atualizado para a IMAGEM 1 conforme solicitado */}
            <img 
              src="https://i.imgur.com/JjcyGuC.png" 
              alt="Dra. Carolina Riegel Atendimento" 
              className="relative z-10 w-full rounded-[40px] shadow-2xl border-[12px] border-white"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
              Mais que alinhar dentes, eu devolvo a sua <span className="text-emerald-700">qualidade de vida.</span>
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Acredito que um tratamento ortodôntico não deve ser apenas sobre estética. Como ortodontista, meu foco é integrar a beleza do seu sorriso com a saúde funcional do seu corpo.
              </p>
              <ul className="space-y-4">
                {[
                  "Ortodontia planejada de forma inteligente e digital",
                  "Controle efetivo do bruxismo e apneia do sono",
                  "Atendimento individualizado (eu cuido de cada detalhe)",
                  "Foco total no conforto e experiência do paciente"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                      <ChevronRight size={14} className="text-emerald-800" />
                    </div>
                    <span className="font-medium text-zinc-800">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Estou aqui para ouvir suas queixas e planejar, junto com você, o melhor caminho para o seu sorriso dos sonhos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS (Prova Visual) */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs mb-4 block">Portfólio de Sorrisos</span>
          <h2 className="font-serif text-3xl sm:text-5xl mb-6">Resultados reais de quem confiou</h2>
          <div className="w-16 h-1 bg-stone-200 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {RESULTS_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative cursor-pointer overflow-hidden rounded-3xl aspect-[4/5] shadow-sm hover:shadow-xl transition-all"
              onClick={() => openImage(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                  <Star className="text-white fill-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-stone-400 text-xs italic">
          *Os resultados podem variar de pessoa para pessoa. Fotos meramente ilustrativas para demonstração de técnica.
        </p>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={28} />}
              title="Avaliação Honestíssima"
              description="Aqui você nunca ouvirá indicações desnecessárias. Meu compromisso é com a sua saúde e com o que realmente funciona."
            />
            <FeatureCard 
              icon={<Star size={28} />}
              title="Atendimento Comigo"
              description="Do planejamento à finalização: cada etapa é executada por mim pessoalmente. Você não é apenas mais um número."
            />
            <FeatureCard 
              icon={<Heart size={28} />}
              title="Clareza Total"
              description="Eu explico cada passo do seu tratamento de forma simples. Você sempre saberá exatamente o que estamos fazendo."
            />
            <FeatureCard 
              icon={<Clock size={28} />}
              title="Tecnologia a seu Favor"
              description="Utilizamos o que há de mais moderno em ortodontia inteligente para tratamentos mais rápidos e previsíveis."
            />
            <FeatureCard 
              icon={<Calendar size={28} />}
              title="Pontualidade Premium"
              description="Respeito o seu tempo. Nossas consultas são agendadas para garantir que você seja atendido sem esperas longas."
            />
            <FeatureCard 
              icon={<MapPin size={28} />}
              title="Ambiente Acolhedor"
              description="Esqueça o clima frio de consultório. Preparei um espaço para você se sentir em casa enquanto cuida de si."
            />
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-emerald-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
            Ainda tem dúvidas se o seu caso tem solução?
          </h2>
          <p className="text-emerald-100/70 text-lg">
            Deixe-me avaliar pessoalmente. Garanto uma visão clara, técnica e humana sobre o seu tratamento.
          </p>
          <WhatsAppButton label="Conversar no WhatsApp agora" className="!max-w-sm" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-center mb-16">Seu caminho para um novo sorriso em <span className="text-emerald-700 italic underline decoration-stone-300 underline-offset-8">3 passos:</span></h2>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Contato via WhatsApp",
                desc: "Clique em qualquer botão desta página para falar com minha equipe e agendar seu horário."
              },
              {
                step: "02",
                title: "Primeira Consulta Gratuita",
                desc: "No dia marcado, farei uma avaliação detalhada do seu sorriso e ouvirei seus objetivos."
              },
              {
                step: "03",
                title: "Plano Personalizado",
                desc: "Apresentarei as melhores opções de tratamento, tempo estimado e investimento, com transparência total."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full border border-stone-200 flex items-center justify-center font-serif text-2xl text-emerald-800 shadow-sm group-hover:bg-emerald-800 group-hover:text-white transition-all">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white rounded-[40px] border-2 border-dashed border-stone-200 text-center">
            <p className="text-stone-500 font-medium">A primeira avaliação é <span className="text-emerald-800 font-bold uppercase">100% gratuita</span> e não gera nenhum compromisso de fechamento.</p>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Bastidores/Expert) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl mb-4 italic">Ortodontia de 💚</h2>
            <p className="text-stone-500">Bastidores de um atendimento humanizado e focado em você.</p>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-8 snap-x no-scrollbar">
            {BACKSTAGE_IMAGES.map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-full sm:w-[450px] snap-center">
                <div className="bg-stone-50 rounded-[40px] overflow-hidden shadow-lg border-8 border-white">
                  <img src={img} alt="Bastidores" className="w-full h-[500px] object-cover" />
                  <div className="p-6 text-center">
                    <p className="text-sm font-medium text-stone-500 uppercase tracking-widest">
                      {idx === 0 ? "Atendimento com Propósito" : idx === 1 ? "Excelência em cada detalhe" : "Humanização na prática"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 bg-stone-50 text-center overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center rotate-12 pointer-events-none">
          <h2 className="font-serif text-[15rem] whitespace-nowrap">Carolina Riegel</h2>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-6xl mb-8 leading-tight">
            Pronta para sorrir com <span className="text-emerald-800">liberdade?</span>
          </h2>
          <p className="text-stone-600 text-xl mb-12 leading-relaxed">
            Não adie mais o cuidado com você mesma. Sua primeira consulta é por minha conta. Clique abaixo e vamos conversar!
          </p>
          <WhatsAppButton 
            label="Quero minha consulta gratuita agora" 
            subtext="Últimos horários disponíveis para esta semana"
          />
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-16 px-6 bg-zinc-900 text-zinc-400">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 text-center">
          
          <div className="space-y-2">
            <span className="font-signature text-5xl text-white block">Carolina Riegel</span>
            <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold">Ortodontia Inteligente</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-sm">
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Endereço</h4>
              <p>Rua Corte Real, 308<br />Novo Hamburgo - RS<br />CEP 93410-170</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Contato</h4>
              <p>WhatsApp: (51) 99774-8150<br />E-mail: contato@carolinariegel.com.br</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Social</h4>
              <div className="flex justify-center gap-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 rounded-full text-white hover:bg-emerald-700 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 rounded-full text-white hover:bg-emerald-700 transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-800"></div>

          <p className="text-[10px] opacity-40 uppercase tracking-widest leading-relaxed">
            © {new Date().getFullYear()} Carolina Riegel. Todos os direitos reservados.
            <br />
            Desenvolvido para alta conversão e experiência premium.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Canto Inferior Direito) */}
      <div className="fixed bottom-6 right-6 z-[99]">
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse hover:scale-110 transition-transform"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={32} fill="currentColor" />
        </a>
      </div>
    </main>
  );
};

export default App;
