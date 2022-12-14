import PropTypes from 'prop-types';

import freFlag from '../../assets/img/language/fre.png';
import engFlag from '../../assets/img/language/eng.png';

import './style.scss';

function LanguageChooser({ language, setLanguage }) {
  const handleClick = () => {
    if (language === 'fre') {
      setLanguage('eng');
    }
    else {
      setLanguage('fre');
    }
  };

  return (
    <div className="language-chooser clickable" onClick={handleClick}>
      <img className={language === 'fre' ? 'language-chooser__img--active' : 'language-chooser__img'} src={freFlag} alt="french" />
      <span>/</span>
      <img className={language === 'eng' ? 'language-chooser__img--active' : 'language-chooser__img'} src={engFlag} alt="english" />
    </div>
  );
}

LanguageChooser.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default LanguageChooser;
