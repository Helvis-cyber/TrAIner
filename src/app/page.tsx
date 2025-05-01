import TerminalOverlay from "@/components/TerminalOverlay";
import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UserPrograms";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* Canto superior esquerdo */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2" />

            {/* Texto principal */}
            <div className="lg:col-span-7 space-y-8 relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <div>
                  <span className="text-foreground">Transforme</span>
                </div>
                <div>
                  <span className="text-primary">Seu corpo</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">Com uma poderosa</span>
                </div>
                <div className="pt-2">
                  <span className="text-primary"> IA</span>
                </div>
              </h1>

              
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

              <p className="text-xl text-muted-foreground w-2/3">
                Fale com nosso assistente IA e tenha uma dieta e rotina de treinos feitos especialmente para você!
              </p>

              
              <div className="flex items-center gap-10 py-6 font-mono">
                {/* Barra vertical */}
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">3min</div>
                  <div className="text-xs uppercase tracking-wider">PARA GERAR</div>
                </div>
                {/* Barra vertical */}
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">100%</div>
                  <div className="text-xs uppercase tracking-wider">PERSONALIZÁVEL</div>
                </div>
              </div>

              {/* Botão */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
                >
                  <Link href={"/generate-program"} className="flex items-center font-mono">
                    Construa seu programa
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Imagem e Terminal */}
            <div className="lg:col-span-5 relative">
              {/* Cantos da imagem */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
              </div>

              {/* Imagem */}
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-lg bg-cyber-black">
                  <img
                    src="/ia-builder.jpg"
                    alt="AI bodybuilder"
                    className="size-full object-cover object-center"
                  />

                  {/* Efeito Scanline */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />

                  {/* Elementos da interface */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full" />
                    <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50" />
                    <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50" />
                    <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50" />
                    <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                {/* Terminal */}
                <TerminalOverlay />
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserPrograms />

      {/* Termos de Uso */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="bg-card border border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Termos de Uso</CardTitle>
              <CardDescription className="text-muted-foreground">
                Por favor, leia atentamente os termos a seguir
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[300px] overflow-y-auto">
              <div className="text-sm text-foreground space-y-4">
                <p>
                  O Tr<span className="text-primary">AI</span>ner é uma ferramenta que utiliza inteligência artificial para
                  auxiliar os usuários na criação de planos de treino e dietas. Ao utilizar
                  nossa plataforma, você concorda com os seguintes termos:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <strong>Uso da IA:</strong> Você reconhece que a IA é uma ferramenta de suporte e
                    que os resultados gerados são baseados em algoritmos e dados
                    fornecidos pelo usuário.
                  </li>
                  <li>
                    <strong>Responsabilidade do Usuário:</strong> Você é responsável por avaliar a
                    adequação dos planos de treino e dietas gerados pela IA às suas
                    necessidades e condições físicas. É recomendável consultar um profissional
                    de saúde antes de iniciar qualquer novo programa de exercícios ou
                    dieta.
                  </li>
                  <li>
                    <strong>Limitação de Responsabilidade:</strong> O Tr<span className="text-primary">AI</span>ner não se responsabiliza por quaisquer
                    danos ou lesões resultantes do uso das informações fornecidas pela
                    IA. A plataforma é fornecida "como está", sem garantias de qualquer
                    tipo.
                  </li>
                  <li>
                    <strong>Precisão da Informação:</strong> Embora nos esforcemos para fornecer
                    informações precisas e atualizadas, não garantimos que a IA esteja sempre
                    correta ou livre de erros. A IA é uma tecnologia em constante
                    evolução, e os resultados podem variar.
                  </li>
                  <li>
                    <strong>Alterações nos Termos:</strong> Reservamo-nos o direito de modificar estes
                    termos de uso a qualquer momento. As alterações entrarão em vigor após
                    a publicação na plataforma. É sua responsabilidade revisar
                    periodicamente os termos de uso.
                  </li>
                </ol>
                <p>
                  Ao continuar a utilizar o Tr<span className="text-primary">AI</span>ner, você declara que leu, entendeu e
                  concorda com estes termos de uso. Se você não concordar com algum
                  dos termos, por favor, não utilize a plataforma.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
