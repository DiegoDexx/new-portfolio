import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import ModalContact from "./modalContact";

function FeatureItem({ children, tone = "pink" }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-[12px] leading-relaxed opacity-90">
      <span className={`svc-check svc-check--${tone} mt-[2px]`}>
        <FaCheck />
      </span>
      <span>{children}</span>
    </li>
  );
}

function DevPlanCard({ name, desc, price, features, tone }) {
  return (
    <div className={`svc-card svc-card--${tone} rounded-2xl p-5 sm:p-6 hover-scale cursor-pointer`}>
      <div className="flex items-center gap-2">
        <span className={`svc-dot svc-dot--${tone}`} />
        <h4 className="text-lg font-medium">{name}</h4>
      </div>

      <p className="mt-2 text-sm opacity-75">{desc}</p>

      <div className="mt-5 svc-price font-bold tracking-tight">
        {price}
      </div>

      <ul className="mt-5 flex flex-col gap-2.5">
        {features.map((f, idx) => (
          <FeatureItem key={idx} tone={tone}>
            {f}
          </FeatureItem>
        ))}
      </ul>
    </div>
  );
}

function MaintCard({ name, price, monthly, perMonth, features, tone, popular, selectText, onSelect }) {
  return (
    <div className={`svc-card svc-card--${tone} rounded-2xl p-5 sm:p-6 hover-scale transition-transform duration-200`}>
      {popular && (
        <div className="svc-popular">
          {popular}
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold">{name}</h4>
        
      </div>

      <div className="mt-3 flex items-end gap-1">
        <div className="svc-price font-bold">{price}</div>
        <div className="text-sm opacity-65">{perMonth}</div>
        <span className={`svc-badge svc-badge--${tone}`}>{monthly}</span>
      </div>

      <ul className="mt-5 flex flex-col gap-2.5">
        {features.map((f, idx) => (
          <FeatureItem key={idx} tone={tone}>
            {f}
          </FeatureItem>
        ))}
      </ul>

      <button
        type="button"
        onClick={onSelect}
        className={`svc-select svc-select--${tone} mt-6 w-full rounded-xl py-3 text-sm font-semibold hover-scale cursor-pointer`}
      >
        {selectText}
      </button>
    </div>
  );
}

function ServiceList({ services }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
      {services.map((service) => (
        <DevPlanCard 
          key={service.id}
          name={service.name}
          desc={service.desc}
          price={service.price}
          features={service.features}
          tone={service.tone}
        />
      ))}
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => setContactOpen(true);

  const dev = {
    basic: {
      name: t("services.dev.basic.name"),
      desc: t("services.dev.basic.desc"),
      price: t("services.dev.basic.price"),
      features: t("services.dev.basic.features", { returnObjects: true }),
      tone: "pink",
    },
    pro: {
      name: t("services.dev.pro.name"),
      desc: t("services.dev.pro.desc"),
      price: t("services.dev.pro.price"),
      features: t("services.dev.pro.features", { returnObjects: true }),
      tone: "purple",
    },
    enterprise: {
      name: t("services.dev.enterprise.name"),
      desc: t("services.dev.enterprise.desc"),
      price: t("services.dev.enterprise.price"),
      features: t("services.dev.enterprise.features", { returnObjects: true }),
      tone: "blue",
    },
  };

  const maint = {
    basic: {
      name: t("services.maintenance.basic.name"),
      price: t("services.maintenance.basic.price"),
      features: t("services.maintenance.basic.features", { returnObjects: true }),
      tone: "pink",
      popular: null,
    },
    pro: {
      name: t("services.maintenance.pro.name"),
      price: t("services.maintenance.pro.price"),
      features: t("services.maintenance.pro.features", { returnObjects: true }),
      tone: "purple",
      popular: t("services.maintenance.popular"),
    },
    premium: {
      name: t("services.maintenance.premium.name"),
      price: t("services.maintenance.premium.price"),
      features: t("services.maintenance.premium.features", { returnObjects: true }),
      tone: "blue",
      popular: null,
    },
  };

  return (
    <>
    <div className="flex flex-col gap-10 ">
      {/* DEV */}
      <section>
      

        <ServiceList services={[dev.basic, dev.pro, dev.enterprise]} />
      </section>

      {/* MAINTENANCE */}
      <section className="svc-panel rounded-3xl p-6 sm:p-8">
      

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <MaintCard
            {...maint.basic}
            monthly={t("services.maintenance.monthly")}
            perMonth={t("services.maintenance.perMonth")}
            selectText={t("services.maintenance.select")}
            onSelect={handleOpenContact}
          />
          <MaintCard
            {...maint.pro}
            monthly={t("services.maintenance.monthly")}
            perMonth={t("services.maintenance.perMonth")}
            selectText={t("services.maintenance.select")}
            onSelect={handleOpenContact}
          />
          <MaintCard
            {...maint.premium}
            monthly={t("services.maintenance.monthly")}
            perMonth={t("services.maintenance.perMonth")}
            selectText={t("services.maintenance.select")}
            onSelect={handleOpenContact}
          />
        </div>

        <div className="svc-note mt-6 rounded-2xl p-4 text-sm opacity-85">
          💡 <span className="font-semibold">{t("services.note")}</span>
        </div>
      </section>

 
    </div>
    <ModalContact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
    
  );
}
