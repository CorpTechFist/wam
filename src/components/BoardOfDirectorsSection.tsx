import { useTranslation } from "./TranslationContext";


export function BoardOfDirectorsSection() {
  const { t } = useTranslation();

  return (
    <div className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="glass-morphism glass-shine rounded-3xl p-16 shadow-2xl">

          <h2 className="text-4xl md:text-5xl gradient-text mb-8">
            {t('board.title')}
          </h2>

          <p className="text-xl text-card-foreground mb-8 leading-relaxed">
            {t('board.subtitle1')}
          </p>

          <p className="text-lg text-card-foreground mb-8 leading-relaxed">
            {t('board.subtitle2')}
          </p>

          <p className="text-lg text-card-foreground mb-6 leading-relaxed">
            {t('board.subtitle3')}
          </p>

          <p className="text-2xl md:text-3xl gradient-text">
            {t('board.weAreTheChange')}
          </p>

        </div>
      </div>
    </div>
  );
}
