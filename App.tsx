
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

// --- Constants ---
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
      <button className="absolute top-6 right-6 text-white p-2 focus:outline-none">
        <X size={40} />
      </button>
      <img src={image} alt="Resultado Ampliado" className="max-h-full max-w-full rounded-xl object-contain shadow-2xl" />
    </div>
  );
};

const WhatsAppButton: React.FC<{ label: string; subtext?: string; className?: string }> = ({ label, subtext, className }) => (
  <div className={`flex flex-col items-center gap-3 w-full max-w-sm mx-auto ${className}`}>
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-[#25D366] hover:bg-[#1fb355] text-white font-bold py-6 px-8 rounded-full flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-2xl whatsapp-pulse text-center leading-tight uppercase tracking-widest text-sm"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span>{label}</span>
    </a>
    {subtext && <span className="text-zinc-500 text-xs font-semibold italic opacity-70 tracking-tight">{subtext}</span>}
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-10 rounded-[40px] shadow-sm border border-stone-100 flex flex-col gap-5 hover:shadow-md transition-shadow">
    <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-emerald-800">
      {icon}
    </div>
    <div>
      <h3 className="font-serif text-2xl font-bold mb-3">{title}</h3>
      <p className="text-stone-500 leading-relaxed text-sm">{description}</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [lightbox, setLightbox] = useState({ open: false, image: "" });

  const openImage = (image: string) => setLightbox({ open: true, image });
  const closeImage = () => setLightbox({ open: false, image: "" });

  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Lightbox isOpen={lightbox.open} image={lightbox.image} onClose={closeImage} />

      {/* 1. HERO - Usando IMAGEM 2 */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/zDRH1ST.png" 
            alt="Dra. Carolina Riegel" 
            className="w-full h-full object-cover object-[center_20%] sm:object-top filter brightness-[0.9] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-6 pb-20 pt-32 text-center max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col items-center">
             <span className="inline-block px-5 py-2 bg-stone-900 text-white text-[10px] uppercase tracking-[0.3em] font-black rounded-full mb-4">
               Ortodontia Inteligente
             </span>
             <h1 className="font-serif text-5xl sm:text-7xl leading-[1.05] text-zinc-900 font-bold">
               Sorrisos que <br/><span className="text-emerald-800 italic font-normal">transformam vidas.</span>
             </h1>
          </div>
          <p className="text-stone-800 text-lg sm:text-xl mb-12 max-w-lg mx-auto leading-relaxed font-medium">
            De um novo sorriso a noites de sono perfeitas. Conquiste sua melhor versão com quem prioriza o seu bem-estar.
          </p>
          
          <WhatsAppButton 
            label="Agendar consulta gratuita" 
            subtext="Vagas limitadas para avaliação personalizada"
          />
        </div>
      </section>

      {/* 2. QUEM SOU EU - Usando IMAGEM 1 */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="relative w-full md:w-5/12">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-stone-50 rounded-full z-0 opacity-60"></div>
            <img 
              src="https://i.imgur.com/JjcyGuC.png" 
              alt="Atendimento Dra. Carolina" 
              className="relative z-10 w-full rounded-[60px] shadow-2xl border-[16px] border-white"
            />
          </div>

          <div className="w-full md:w-7/12 space-y-10">
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight font-bold">
              Minha missão é devolver o seu <span className="text-emerald-700">prazer em sorrir.</span>
            </h2>
            <div className="space-y-8 text-stone-600 text-lg leading-relaxed">
              <p>
                Acredito que a odontologia moderna deve ser focada no ser humano, não apenas no procedimento. Integro estética, funcionalidade e saúde sistêmica para resultados duradouros.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Planejamento Digital 3D",
                  "Controle de Bruxismo",
                  "Tratamento de Apneia",
                  "Atendimento Exclusivo"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                      <ChevronRight size={16} className="text-emerald-700 group-hover:text-white" />
                    </div>
                    <span className="font-bold text-zinc-800 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <WhatsAppButton label="Quero conhecer o consultório" className="!mx-0 !items-start" />
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl sm:text-6xl mb-6 font-bold">Galeria de Resultados</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">Testemunhos visuais de transformações que começaram aqui.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {RESULTS_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative cursor-pointer overflow-hidden rounded-[40px] aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => openImage(img)}
            >
              <img 
                src={img} 
                alt={`Caso Clínico ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-lg p-5 rounded-full border border-white/30">
                  <Star className="text-white fill-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-stone-400 text-[10px] uppercase tracking-widest">*Resultados individuais podem variar.</p>
      </section>

      {/* 4. CARDS DIFERENCIAIS */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<ShieldCheck size={32} />}
              title="Ética & Verdade"
              description="Avaliações realistas. Só indico o que você realmente precisa para sua saúde."
            />
            <FeatureCard 
              icon={<Star size={32} />}
              title="Atendimento VIP"
              description="Eu mesma acompanho cada detalhe do seu caso, do início ao fim."
            />
            <FeatureCard 
              icon={<Clock size={32} />}
              title="Seu Tempo Vale"
              description="Agenda rigorosa para garantir que você não perca tempo em esperas."
            />
          </div>
        </div>
      </section>

      {/* 6. PASSOS CONSULTA */}
      <section className="py-32 px-6 bg-stone-900 text-white rounded-[60px] mx-4 sm:mx-10 my-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-20 font-bold">Como agendar sua <span className="text-emerald-500 italic">avaliação gratuita</span></h2>
          
          <div className="space-y-16">
            {[
              { num: "01", title: "Conversa no WhatsApp", desc: "Clique nos botões e nossa equipe encontrará o melhor horário para você." },
              { num: "02", title: "Consulta de Avaliação", desc: "No consultório, farei um diagnóstico completo e 100% gratuito." },
              { num: "03", title: "Plano de Sorriso", desc: "Você recebe o planejamento ideal, com transparência total de prazos e valores." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-10 items-start">
                <span className="font-serif text-6xl text-emerald-800/50 font-bold leading-none">{step.num}</span>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-stone-400 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BASTIDORES */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-20 font-bold italic">Ortodontia de 💚</h2>
          <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x">
            {BACKSTAGE_IMAGES.map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] sm:w-[450px] snap-center">
                <div className="rounded-[50px] overflow-hidden shadow-2xl border-8 border-white bg-stone-50">
                  <img src={img} alt="Expert" className="w-full h-[550px] object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-40 px-6 text-center bg-stone-50">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="font-serif text-5xl sm:text-7xl font-bold leading-tight">Vamos desenhar o seu novo <span className="text-emerald-800 italic underline decoration-stone-200">sorriso?</span></h2>
          <p className="text-stone-600 text-xl leading-relaxed font-medium">Não perca mais tempo. Agende agora sua avaliação e descubra como a ortodontia inteligente pode mudar sua rotina.</p>
          <WhatsAppButton label="Quero minha consulta grátis" className="scale-110" />
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-zinc-900 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 text-center">
          <div className="space-y-4">
            <span className="font-signature text-7xl text-white block">Carolina Riegel</span>
            <span className="text-emerald-500 uppercase tracking-[0.5em] text-[10px] font-black">Ortodontia Inteligente</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-zinc-500 text-sm">
            <div className="space-y-4">
              <MapPin className="mx-auto text-emerald-600" size={24} />
              <p>Rua Corte Real, 308<br/>Novo Hamburgo - RS</p>
            </div>
            <div className="space-y-4">
              <MessageCircle className="mx-auto text-emerald-600" size={24} />
              <p>(51) 99774-8150<br/>Primeira consulta gratuita</p>
            </div>
            <div className="space-y-4">
              <Instagram className="mx-auto text-emerald-600" size={24} />
              <a href={INSTAGRAM_URL} target="_blank" className="hover:text-white transition-colors">@dentistacarolinariegel</a>
            </div>
          </div>
          
          <div className="w-full h-px bg-zinc-800"></div>
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">© {new Date().getFullYear()} CAROLINA RIEGEL - CRO/RS XXXX</p>
        </div>
      </footer>

      {/* Botão Flutuante Permanente */}
      <div className="fixed bottom-8 right-8 z-[999]">
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse hover:scale-110 transition-transform active:scale-90"
        >
          <MessageCircle size={32} fill="currentColor" />
        </a>
      </div>
    </main>
  );
};

export default App;
