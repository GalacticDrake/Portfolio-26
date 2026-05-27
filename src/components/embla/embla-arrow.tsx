"use client";

import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton = (props: PropType) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      className={"embla__button embla__button--prev".concat(
        disabled ? " embla__button--disabled" : "",
      )}
      type="button"
      {...restProps}
    >
      <span className="material-symbols-outlined">chevron_left</span>
      {children}
    </button>
  );
};

export const NextButton = (props: PropType) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      className={"embla__button embla__button--next".concat(
        disabled ? " embla__button--disabled" : "",
      )}
      type="button"
      {...restProps}
    >
      <span className="material-symbols-outlined">chevron_right</span>
      {children}
    </button>
  );
};
