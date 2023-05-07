import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { faChevronDown, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('address-button')}>
                <FontAwesomeIcon icon={faLocationDot} />
                <div className={cx('address_box')}>
                    <span className={cx('address_title')}>Xem giá tại:</span>
                    <p>Hồ chí minh</p>
                </div>
                <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')} />
            </button>
            <input placeholder="Search ..." />
            <button className={cx('search-button')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default Search;
