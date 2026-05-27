"use client";

import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./embla-arrow";
import { DotButton, useDotButton } from "./embla-dot";

import "./embla.scss";

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};

interface SourceObject {
  title?: string;
  subtitle?: string;
  imagePath: string;
}

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedSource, setSelectedSource] = useState<SourceObject | null>(
    null,
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (selectedSource) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedSource]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((s, index) => (
            <div className="embla__slide" key={index}>
              <div
                className="embla__img"
                style={{ backgroundImage: `url("${s?.imagePath}")` }}
                onClick={() => setSelectedSource(s)}
              ></div>
              <div className="embla__slide__desc">
                <div className="embla__slide__title">{s?.title}</div>
                <div className="embla__slide__subtitle">{s?.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>

      {selectedSource && (
        <div className="lightbox">
          <div className="lb-header">
            <div className="lb-title">{selectedSource?.title}</div>
            <div className="lb-close" onClick={() => setSelectedSource(null)}>
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>
          <div className="lb-image-container">
            <div
              className="lb-backdrop"
              onClick={() => setSelectedSource(null)}
            ></div>
            <img
              src={selectedSource?.imagePath}
              alt=""
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;
