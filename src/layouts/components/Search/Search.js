import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Search(items = []) {
    const [languages, setLanguages] = useState('Đà Nẵng');
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const handleLanguages = (e) => {
        setLanguages(e.target.textContent);
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                placement="bottom-start"
                delay={[0, 500]}
                render={(attrs) => (
                    <div className={cx('address-items')} tabIndex="-1" {...attrs}>
                        {items.items.map((item, index) => {
                            return (
                                <Button normal key={index} onClick={(e) => handleLanguages(e)}>
                                    {item.title}
                                </Button>
                            );
                        })}
                    </div>
                )}
            >
                <button className={cx('address-button')}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div className={cx('address_box')}>
                        <span className={cx('address_title')}>Xem giá tại:</span>
                        <p>{languages}</p>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} className={cx('arrow_down')} />
                </button>
            </Tippy>
            <input placeholder="Search ..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button className={cx('search-button')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default Search;
