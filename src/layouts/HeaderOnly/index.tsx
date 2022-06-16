import Header from '../components/Header';

import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren<unknown> {
}
// Remove React.FC from Typescript template
const HeaderOnly = ({ children }: Props): JSX.Element => {
    return (
        <div>
            <Header />
            <div className="container">

                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
