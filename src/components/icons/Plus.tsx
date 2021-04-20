import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  color: string;
}

const Plus: React.FunctionComponent<Props> = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9.327 6.344h5.84v2.552h-5.84v6.708H6.652V8.896H.812V6.344h5.84V.146h2.675v6.198z"
      fill={props.color}
    />
  </Svg>
);
export default React.memo(Plus);
