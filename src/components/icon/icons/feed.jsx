import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Feed({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill={fill} fillRule="evenodd">
        <path
          d="M19.9066652,0.657777778 C19.7825281,0.270268872 19.4246469,0.00543675326 19.0177764,0 L0.951111043,0 C0.425826919,7.29367346e-17 6.43287522e-17,0.425826949 0,0.951111111 L0,18.9244444 C0.00730050377,19.5206077 0.492680869,20.0000447 1.08888881,20 L18.9155542,20 C19.5100301,19.9976181 19.992724,19.5188807 19.9999986,18.9244444 L19.9999986,1.09777778 C20.0002454,0.946172331 19.9684389,0.796227362 19.9066652,0.657777778 L19.9066652,0.657777778 Z M19.4133333,0.951111111 L19.4133333,6.47555556 C19.4133333,6.70137865 19.2302675,6.88444444 19.0044444,6.88444444 L0.951111111,6.88444444 C0.725288013,6.88444444 0.542222222,6.70137865 0.542222222,6.47555556 L0.542222222,1.09777778 C0.544662779,0.797599217 0.788700407,0.555545634 1.08888889,0.555555556 L18.9155556,0.555555556 C19.1259371,0.556986866 19.3165009,0.679987134 19.4044444,0.871111111 C19.4100313,0.897420527 19.4130087,0.924216998 19.4133333,0.951111111 Z M18.9155556,19.4711111 L1.08888889,19.4711111 C0.790434608,19.4686944 0.549083419,19.2273432 0.546666667,18.9288889 L0.546666667,7.32888889 C0.674168943,7.39047003 0.813960913,7.42237907 0.955555556,7.42222222 L19.0044444,7.42222222 C19.160262,7.4197717 19.3130126,7.37852904 19.4488889,7.30222222 L19.4488889,18.9244444 C19.4513694,19.2221965 19.2132781,19.4662401 18.9155556,19.4711111 L18.9155556,19.4711111 Z"
          stroke={stroke}
          fillRule="nonzero"
        />
        <path
          d="M4.24444444,1.99555556 L2.17777778,1.99555556 C1.80664576,1.99789527 1.50500039,2.29559755 1.49777778,2.66666667 L1.49777778,4.73333333 C1.49540639,4.91562655 1.56585916,5.0913331 1.69351325,5.22149021 C1.82116734,5.35164732 1.99547288,5.42549827 2.17777778,5.42666667 L4.24444444,5.42666667 C4.62245267,5.42666667 4.92888889,5.12023045 4.92888889,4.74222222 L4.92888889,2.66666667 C4.92162535,2.29387555 4.61730631,1.9954848 4.24444444,1.99555556 Z M4.38222222,4.74222222 C4.38222222,4.81831479 4.32053701,4.88 4.24444444,4.88 L2.17777778,4.88 C2.10168521,4.88 2.04,4.81831479 2.04,4.74222222 L2.04,2.66666667 C2.04,2.5905741 2.10168521,2.52888889 2.17777778,2.52888889 L4.24444444,2.52888889 C4.28174921,2.52768488 4.31794629,2.54166743 4.34475403,2.56763742 C4.37156176,2.59360741 4.38668609,2.62934248 4.38666667,2.66666667 L4.38222222,4.74222222 Z"
          fillRule="nonzero"
        />
        <path
          d="M17.8222222,2.62666667 L7.22666667,2.62666667 C7.07693613,2.62666667 6.95555556,2.74804725 6.95555556,2.89777778 C6.95555556,3.04750831 7.07693613,3.16888889 7.22666667,3.16888889 L17.8222222,3.16888889 C17.9719528,3.16888889 18.0933333,3.04750831 18.0933333,2.89777778 C18.0933333,2.74804725 17.9719528,2.62666667 17.8222222,2.62666667 Z"
          fillRule="nonzero"
        />
        <path
          d="M13.0355556,4.69777778 L7.22666667,4.69777778 C7.07693613,4.69777778 6.95555556,4.81915836 6.95555556,4.96888889 C6.95555556,5.11861942 7.07693613,5.24 7.22666667,5.24 L13.0355556,5.24 C13.1852861,5.24 13.3066667,5.11861942 13.3066667,4.96888889 C13.3066667,4.81915836 13.1852861,4.69777778 13.0355556,4.69777778 L13.0355556,4.69777778 Z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

Feed.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Feed.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 20 20',
};