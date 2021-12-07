import React, { useMemo, useState } from "react";
import useBreakpoint from "use-breakpoint";
import Slider from "react-slick";
import { BREAKPOINTS, price } from "../../constants";
import useStyles from "./styles";
import CheckIcon from "../../assets/icons/CheckIcon";
import MainButton from "../../common/button/MainButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PriceSection = () => {
  const [cardActive, setCardActive] = useState(1);
  const classes = useStyles();

  const handleActiveCard = (index) => () => {
    setCardActive(index);
  };

  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isMobile = ["smallMobile", "mobile", "tablet"].includes(breakpoint);

  const getPriceContentClasses = (index) => {
    return cardActive === index && !isMobile
      ? [classes.cardContentActive, classes.cardContent].join(" ")
      : classes.cardContent;
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 1,
  };

  const PriceContentWrapper = useMemo(() => {
    return isMobile ? Slider : React.Fragment;
  }, [isMobile]);

  return (
    <>
      <div className={`${classes.container} ${classes.priceMaxWidth}`}>
        <div className={classes.priceTitle}>Become a PREMIUM MEMBER</div>
        <div className={classes.priceDescription}>
          Premium Business <br /> 1 TB free space and 4 TB monthly transfer
        </div>
      </div>
      <div className={classes.priceWrapper}>
        <div className={`${classes.container} ${classes.priceContainerWidth}`}>
          <div className={classes.cardContainer}>
            <PriceContentWrapper {...(isMobile && settings)}>
              {price.map((item, index) => {
                return (
                  <div className={classes.h100}>
                    <div
                      key={item.days}
                      className={getPriceContentClasses(index)}
                      style={{
                        backgroundImage: `url(${item.background_content}) `,
                      }}
                      role="button"
                      tabIndex="0"
                      onClick={handleActiveCard(index)}
                    >
                      <div className={classes.cardPopular}>{item.popular}</div>
                      <div className={classes.cardDays}>{item.days}</div>
                      <div className={classes.cardPrice}>{item.price}</div>
                      {item.proposal_list.map((list) => {
                        return (
                          <div key={list} className={classes.cardList}>
                            {list}
                            <CheckIcon />
                          </div>
                        );
                      })}
                      {cardActive === index && (
                        <>
                          <MainButton
                            wrapperBtn={classes.btnWrapper}
                            type="button"
                            titleBtn="Sing Up"
                          />
                          <div className={classes.helpBlock}>
                            14-day money back guarantee
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </PriceContentWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
