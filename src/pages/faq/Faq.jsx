import React, { useState } from "react";
import { Accordion } from "semantic-ui-react";
import StatsPanel from "../../components/stats-panel/StatsPanel";
import { FAQ_MOCK } from "./MOCK";
import useStyles from "./styles";
import Plus from "../../assets/icons/Plus";
import Minus from "../../assets/icons/Minus";

const Faq = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <div>
      <div className={classes.faqContainer}>
        <div className="page-title">FAQ</div>
        <div className="page-subtitle">Online storage</div>
        <div className={classes.accordionContainer}>
          <Accordion styled>
            {FAQ_MOCK.map((item, index) => {
              return (
                <>
                  <Accordion.Title
                    key={item.id}
                    onClick={handleClick}
                    index={index}
                    active={activeIndex === index}
                    className={classes.accordionTitle}
                  >
                    {activeIndex === index ? <Minus /> : <Plus />}

                    {item.title}
                  </Accordion.Title>
                  <Accordion.Content
                    active={activeIndex === index}
                    className={classes.accordionContent}
                  >
                    {item.description}
                  </Accordion.Content>
                </>
              );
            })}
          </Accordion>
        </div>
      </div>
      <div className={classes.stats}>
        <StatsPanel />
      </div>
    </div>
  );
};

export default Faq;
