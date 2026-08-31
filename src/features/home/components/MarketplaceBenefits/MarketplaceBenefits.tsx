import { MARKETPLACE_BENEFITS } from "../../data/marketplaceBenefits.data";
import { marketplaceBenefitsStyles } from "./MarketplaceBenefits.styles";

const MarketplaceBenefits = () => {
  return (
    <section
      className={marketplaceBenefitsStyles.root}
      aria-label="Marketplace benefits"
    >
      <div className={marketplaceBenefitsStyles.container}>
        <div className={marketplaceBenefitsStyles.wrapper}>
          <div className={marketplaceBenefitsStyles.grid}>
            {MARKETPLACE_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.id}
                  className={marketplaceBenefitsStyles.item}
                >
                  <div className={marketplaceBenefitsStyles.iconWrapper}>
                    <Icon
                      className={marketplaceBenefitsStyles.icon}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className={marketplaceBenefitsStyles.title}>
                    {benefit.title}
                  </h3>

                  <p className={marketplaceBenefitsStyles.description}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceBenefits;
