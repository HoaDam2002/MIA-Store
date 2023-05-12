import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/themes/light.css';
import { faAppleAlt, faLaptop, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button/Button';
import styles from './Header.module.scss';
import Wrapper from '../popper/Wrapper';

const cx = classNames.bind(styles);

function HeaderBottom({ itemsNew = [], itemsOld = [], itemsSeries = [] }) {
    Tippy.propTypes = {
        placement: 'bottom-start',
    };
    return (
        <div className={cx('wrapper_bottom')}>
            <Tippy
                interactive
                placement="bottom-start"
                delay={[null]}
                render={(attrs) => (
                    <div className={cx('menu_new')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h4>Hãng sản xuất</h4>
                            {itemsNew.map((item, index) => {
                                return (
                                    <Button key={index} highlight>
                                        {item.title}
                                    </Button>
                                );
                            })}
                        </Wrapper>
                    </div>
                )}
            >
                <div>
                    <Button underline leftIcon={<FontAwesomeIcon icon={faLaptop} />}>
                        LAPTOP MỚI
                    </Button>
                </div>
            </Tippy>

            <Tippy
                interactive
                placement="bottom-start"
                delay={[null]}
                render={(attrs) => (
                    <div className={cx('menu_new')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h4>Hãng sản xuất</h4>
                            {itemsOld.map((item, index) => {
                                return (
                                    <Button key={index} highlight>
                                        {item.title}
                                    </Button>
                                );
                            })}
                        </Wrapper>
                    </div>
                )}
            >
                <div>
                    <Button underline leftIcon={<FontAwesomeIcon icon={faLaptop} />}>
                        LAPTOP CŨ
                    </Button>
                </div>
            </Tippy>

            <Tippy
                interactive
                placement="bottom-start"
                delay={[null]}
                render={(attrs) => (
                    <div className={cx('menu_new')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h4>Mua theo dòng máy</h4>
                            {itemsSeries.map((item, index) => {
                                return (
                                    <Button key={index} highlight>
                                        {item.title}
                                    </Button>
                                );
                            })}
                        </Wrapper>
                    </div>
                )}
            >
                <div>
                    <Button underline>MUA THEO DÒNG MÁY</Button>
                </div>
            </Tippy>
            <Button underline leftIcon={<FontAwesomeIcon icon={faAppleAlt} />}>
                APPLE MACBOOK
            </Button>
            <Button underline leftIcon={<FontAwesomeIcon icon={faWindowRestore} />}>
                MICROSOFT SURFACE
            </Button>
            <Button underline>PHỤ KIỆN</Button>
            <Button underline>TƯ VẤN MUA HÀNG</Button>
            <Button underline>KHUYẾN MÃI</Button>
        </div>
    );
}

export default HeaderBottom;
