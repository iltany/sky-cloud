import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import StatsPanel from "../../components/stats-panel/StatsPanel";
import { FAQ_MOCK } from "./MOCK";
import useStyles from "./styles";

const Faq = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className={classes.faqContainer}>
        <div className="page-title">FAQ</div>
        <div className="page-subtitle">Online storage</div>
        <div className={classes.accordionContainer}>
          <Accordion styled>
            {FAQ_MOCK.map((item) => {
              return (
                <>
                  <Accordion.Title key={item.id} onClick={handleClick}>
                    <Icon name="dropdown" />
                    {item.title}
                  </Accordion.Title>
                  <Accordion.Content>
                    <p>{item.description}</p>
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
