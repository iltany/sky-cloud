import React from "react";
import StatsPanel from "../../components/stats-panel/StatsPanel";
import useStyles from "./styles";

const TextPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.textContainer}>
        <div className="page-title">Text Page</div>
        <div className="page-subtitle">Online storage</div>
        <div className={classes.textContent}>
          <div className={classes.textTitle}>Access from anywhere</div>
          <div className={classes.textDescription}>
            <p>
              Easily access your files from anywhere with desktop apps for
              Windows and Mac, and mobile apps for iPhone, iPad, Android, and
              the web. Easily access your files from anywhere with desktop apps
              for Windows and Mac, and mobile apps for iPhone, iPad, Android,
              and the web.Easily access your files from anywhere with desktop
              apps for Windows and Mac, and mobile apps for iPhone, iPad,
              Android, and the web.Easily access your files from anywhere with
              desktop apps for Windows and Mac, and mobile apps for iPhone,
              iPad, Android, and the web.
            </p>
            <p>
              Easily access your files from anywhere with desktop apps for
              Windows and Mac, and mobile apps for iPhone, iPad, Android, and
              the web. Easily access your files from anywhere with desktop apps
              for Windows and Mac, and mobile apps for iPhone, iPad, Android,
              and the web.Easily access your files from anywhere with desktop
              apps for Windows and Mac, and mobile apps for iPhone, iPad,
              Android, and the web.Easily access your files from anywhere with
              desktop apps for Windows and Mac, and mobile apps for iPhone,
              iPad, Android, and the web.
            </p>
          </div>
          <div className={classes.textTitle}>Access from anywhere</div>
          <div className={classes.textDescription}>
            <p>
              Easily access your files from anywhere with desktop apps for
              Windows and Mac, and mobile apps for iPhone, iPad, Android, and
              the web. Easily access your files from anywhere with desktop apps
              for Windows and Mac, and mobile apps for iPhone, iPad, Android,
              and the web.Easily access your files from anywhere with desktop
              apps for Windows and Mac, and mobile apps for iPhone, iPad,
              Android, and the web.Easily access your files from anywhere with
              desktop apps for Windows and Mac, and mobile apps for iPhone,
              iPad, Android, and the web.
            </p>
            <div className={classes.descriptionContent}>
              <p>
                Easily access your files from anywhere with desktop apps for
                Windows and Mac, and mobile apps for iPhone, iPad, Android, and
                the web. Easily access your files from anywhere with desktop
                apps for Windows and Mac, and mobile apps for iPhone, iPad,
                Android, and the web.Easily access your files from anywhere with
                desktop apps for
              </p>
              <p>
                Easily access your files from anywhere with desktop apps for
                Windows and Mac, and mobile apps for iPhone, iPad, Android, and
                the web. Easily access your files from anywhere with desktop
                apps for Windows and Mac, and mobile apps for iPhone, iPad,
                Android, and the web.Easily access your files from anywhere with
                desktop apps for
              </p>
            </div>
            <p>
              Easily access your files from anywhere with desktop apps for
              Windows and Mac, and mobile apps for iPhone, iPad, Android, and
              the web. Easily access your files from anywhere with desktop apps
              for Windows and Mac, and mobile apps for iPhone, iPad, Android,
              and the web.Easily access your files from anywhere with desktop
              apps for Windows and Mac, and mobile apps for iPhone, iPad,
              Android, and the web.Easily access your files from anywhere with
              desktop apps for Windows and Mac, and mobile apps for iPhone,
              iPad, Android, and the web.
            </p>
          </div>
        </div>
      </div>
      <StatsPanel />
    </div>
  );
};
export default TextPage;
