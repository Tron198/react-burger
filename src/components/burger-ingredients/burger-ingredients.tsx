import React, { useEffect, useRef, useState } from "react";
import styles from "./burger-ingredients.module.css";
import { IngredientsSet } from "../ingredients-set/ingredients-set";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";

const BurgerIngredientsFunction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState("bun");

  const scrollToRef = useCallback((ref: string) => {
    if (ref === "bun") {
      bunRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "sauce") {
      sauceRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "main") {
      mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const targets = [bunRef.current, sauceRef.current, mainRef.current];

    const options = {
      root: containerRef.current,
      rootMargin: "0px 0px -70% 0px",
    };

    const callback = (
      activeIngredientSections: IntersectionObserverEntry[]
    ) => {
      activeIngredientSections.forEach(
        (activeIngredientSection: IntersectionObserverEntry) => {
          if (!activeIngredientSection.isIntersecting) {
            return;
          }

          if (activeIngredientSection.target === bunRef.current) {
            setCurrent("bun");
          } else if (activeIngredientSection.target === sauceRef.current) {
            setCurrent("sauce");
          } else if (activeIngredientSection.target === mainRef.current) {
            setCurrent("main");
          }
        }
      );
    };

    const observer = new IntersectionObserver(callback, options);
    targets.forEach((target) => {
      if (target) observer.observe(target);
    });
  }, []);

  return (
    <section>
      <h3 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h3>
      <div className={styles.sectionTab}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={() => scrollToRef("bun")}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={() => scrollToRef("sauce")}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={() => scrollToRef("main")}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.largeScroll} ref={containerRef}>
        <IngredientsSet type="bun" title="Булки" refElement={bunRef} />
        <IngredientsSet type="sauce" title="Соусы" refElement={sauceRef} />
        <IngredientsSet type="main" title="Начинки" refElement={mainRef} />
      </div>
    </section>
  );
};

export const BurgerIngredients = React.memo(BurgerIngredientsFunction);
