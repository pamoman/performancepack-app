/*
 * Content Block - SlideShow
 */

import Image from 'next/image';
import defaultSettings from './settings';
import { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Grid, Box, Typography } from '@mui/material';
import { FiberManualRecord, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import styles from './styles';

const Slideshow = ({ images, userSettings }) => {
    const settings = { ...defaultSettings, ...userSettings };
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [pause, setPause] = useState(false);
    const timer = useRef();

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1000,
        initial: 0,
        slideChanged: (s) => {
            setCurrentSlide(s.track.details.rel)
        },
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
        created: () => {
            setLoaded(true)
        },
    });

    const SlideLeftArrow = ({ disabled, ...rest }) => {
        return (
            <KeyboardArrowLeft
                sx={styles.slideshowArrows}
                className={`${!disabled && "clickable"} left-arrow`}
                onClick={() => {
                    !disabled && slider.current?.prev();
                    !disabled && settings.autoplay && restartTimer();
                }}
                color={disabled ? "disabled" : "secondary"}
                {...rest}
            />
        )
    };
      
    const SlideRightArrow = ({ disabled, ...rest }) => {
        return (
            <KeyboardArrowRight
                sx={styles.slideshowArrows}
                className={`${!disabled && "clickable"} right-arrow`}
                onClick={() => {
                    !disabled && slider.current?.next();
                    !disabled && settings.autoplay && restartTimer();
                }}
                color={disabled ? "disabled" : "secondary"}
                {...rest}
            />
        )
    };

    const setTimer = () => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.current?.next()
            }
        }, (settings.interval * 1000));
    };

    const restartTimer = () => {
        clearInterval(timer.current);
        setTimer();
    };

    const autoSlideshowEffect = () => {
        useEffect(() => {
            setTimer();
    
            /* Cleanup when unmounting */
            return () => {
                clearInterval(timer.current);
            }
        }, [pause, slider]);
    };

    settings.autoplay && autoSlideshowEffect();

    useEffect(() => {
        sliderRef.current?.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current?.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef]);

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Box sx={styles.slideshowSlider}>
                    <Box ref={sliderRef} className="keen-slider">
                        {images.map((image, i) => {
                            const { url, caption, alternativeText } = image.attributes;

                            return (
                                <Box key={`slideshow-image-${i}`} className={`keen-slider__slide number-slide${i}`} component="figure">
                                    <Box sx={styles.slideshowImage}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                                            alt={alternativeText}
                                            layout='responsive'
                                            objectFit='cover'
                                            width={4}
                                            height={3}
                                        />
                                    </Box>

                                    {settings.show_caption && caption &&
                                        <Box sx={styles.slideshowCaption} component="figcaption">
                                            <Typography color="primary" variant="subtitle1">{caption}</Typography>
                                        </Box>
                                    }
                                </Box>
                            )
                        })}
                    </Box>

                    {settings.arrows && loaded && slider.current && (
                        <>
                            <SlideLeftArrow disabled={currentSlide === 0} />

                            <SlideRightArrow disabled={currentSlide === slider.current.track.details.slides.length - 1} />
                        </>
                    )}
                </Box>

                {settings.dots && loaded && slider.current && (
                    <Box sx={styles.slideshowChooser}>
                        {[
                            ...Array(slider.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <FiberManualRecord 
                                    key={idx}
                                    className={"slide clickable" + (currentSlide === idx ? " active" : "")}
                                    onClick={() => {
                                        slider.current?.moveToIdx(idx);
                                        settings.autoplay && restartTimer();
                                    }}
                                />
                            )
                        })}
                    </Box>
                )}
            </Grid>
        </Grid>
    )
};

export default Slideshow;