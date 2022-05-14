import React, { useEffect, useState,useRef } from 'react'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTipply from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import className from 'classnames/bind';
import styles from './Search.module.scss';

import {SearchIcon} from '../../../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const cx = className.bind(styles);

const Search:React.FC = () => {
    //STATE
    const [searchValue,setSearchValue] = useState<string>('')
    const [searchResult, setSearchResult] = useState<Array<string | number>>([]);
    const [showResult,setShowResult] = useState<boolean>(true)

    const inputRef = useRef<HTMLInputElement>(null)
      //useEffect
      useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    //handle
    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current?.focus()
    }
    const handleHideResult = () => {
        setShowResult(false)
    }


  return (
    <HeadlessTipply
    interactive
    visible={showResult && searchResult.length > 0}
    render={(attrs) => (
        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </PopperWrapper>
        </div>
    )}
    onClickOutside={handleHideResult}
>
    <div className={cx('search')}>
        <input 
        ref={inputRef}
        value={searchValue}
        placeholder="Search accounts and videos" 
        spellCheck={false} 
        onChange={e=>setSearchValue(e.target.value)} 
        onFocus={()=>setShowResult(true)}
        />
        {/* Khi có Search value thì mới hiện thị Button X */}
        {!!searchValue && (

        <button className={cx('clear')} onClick={handleClear}>
            {/* Clear */}
            <FontAwesomeIcon icon={faCircleXmark as IconProp} />
        </button>
        )}

        {/* Loading */}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner as IconProp} /> */}

        <button className={cx('search-btn')}>
            {/* Search */}
            {/* <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} /> */}
            {/* <img src = {images.search} /> */}
            <SearchIcon />
        </button>
    </div>
</HeadlessTipply>
  )
}

export default Search