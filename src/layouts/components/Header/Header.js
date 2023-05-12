import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '~/layouts/components/Search';
import images from '~/assets';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HeaderBottom from './HeaderBottom';
const cx = classNames.bind(styles);

const ADDRESS_ITEMS = [
    {
        key: 1,
        type: 'address',
        title: 'Hồ Chí Minh',
    },
    {
        key: 2,
        type: 'address',
        title: 'Đà Nẵng',
    },
    {
        key: 3,
        type: 'address',
        title: 'Hà Nội',
    },
];

const MENU_NEW = [
    {
        key: 1,
        title: 'Apple (MACBOOK)',
        type: 'laptopnews',
    },
    {
        key: 2,
        title: 'Asus',
        type: 'laptopnews',
    },
    {
        key: 3,
        title: 'Dell',
        type: 'laptopnews',
    },
    {
        key: 4,
        title: 'HP',
        type: 'laptopnews',
    },
    {
        key: 5,
        title: 'Lenovo',
        type: 'laptopnews',
    },
    {
        key: 6,
        title: 'Acer',
        type: 'laptopnews',
    },
    {
        key: 7,
        title: 'MSI',
        type: 'laptopnews',
    },
];

const MENU_OLD = [
    {
        key: 1,
        title: 'Apple (MACBOOK) cũ',
        type: 'laptopold',
    },
    {
        key: 2,
        title: 'Asus cũ',
        type: 'laptopold',
    },
    {
        key: 3,
        title: 'Dell cũ',
        type: 'laptopold',
    },
    {
        key: 4,
        title: 'HP cũ',
        type: 'laptopold',
    },
    {
        key: 5,
        title: 'Lenovo cũ',
        type: 'laptopold',
    },
    {
        key: 6,
        title: 'Acer cũ',
        type: 'laptopold',
    },
    {
        key: 7,
        title: 'MSI cũ',
        type: 'laptopold',
    },
];

const MENU_SERIES = [
    {
        key: 1,
        title: 'Workstation',
        type: 'laptopseries',
    },
    {
        key: 2,
        title: 'Business',
        type: 'laptopseries',
    },
    {
        key: 3,
        title: 'Gaming',
        type: 'laptopseries',
    },
    {
        key: 4,
        title: 'Laptop 2 in 1',
        type: 'laptopseries',
    },
    {
        key: 5,
        title: 'Home & Personal',
        type: 'laptopseries',
    },
    {
        key: 6,
        title: 'Small',
        type: 'laptopseries',
    },
    {
        key: 7,
        title: 'Premium',
        type: 'laptopseries',
    },
];

function Header() {
    return (
        <nav className={cx('container')}>
            {/* Header top */}
            <div className={cx('wrapper_top')}>
                <Link className={cx('box-logo')} to={'/'}>
                    <img src={images.logo1} alt="logo" className={cx('logo')} />
                </Link>
                <Search items={ADDRESS_ITEMS} />
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

            {/* Header bottom */}
            <HeaderBottom itemsNew={MENU_NEW} itemsOld={MENU_OLD} itemsSeries={MENU_SERIES} />
        </nav>
    );
}

export default Header;
