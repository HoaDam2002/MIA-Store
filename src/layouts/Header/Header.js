import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import images from '~/assets';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faPhone, faSquarePhone, faTruckFast } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <nav className={cx('container')}>
            <div className={cx('wrapper_top')}>
                <img src={images.logo} alt="logo" className={cx('logo')} />
                <Search />
                <>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPhone} />}>
                        Hotline
                    </Button>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faTruckFast} />}>
                        Đơn hàng
                    </Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faCartShopping} />}>
                        Giỏ hàng
                    </Button>
                    <FontAwesomeIcon icon={faBars} className={cx('menu')} />
                </>
            </div>
        </nav>
    );
}

export default Header;
