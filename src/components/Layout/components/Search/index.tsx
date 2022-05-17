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
import { DataApi,Data } from '../../../../types';

const cx = className.bind(styles);



const Search:React.FC = () => {
    //STATE
    const [searchValue,setSearchValue] = useState<string>('')
    const [searchResult, setSearchResult] = useState<Array<DataApi>>([]);
    const [showResult,setShowResult] = useState<boolean>(true)
    const [loading,setLoading] = useState<boolean>(false)
    

    const inputRef = useRef<HTMLInputElement>(null)
      //useEffect
      useEffect(() => {
          //check space
        if(!searchValue.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res=>res.json())
            .then(res => {
                setSearchResult(res.data)
                console.log("DATA API :", res.data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })

    }, [searchValue]);

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
                {searchResult.map((result) => (
                    <AccountItem key = {result.id} data={result}/>
                ))}
               
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
        {/* Khi có Search value + không loading thì mới hiện thị Button X */}
        {!!searchValue && !loading && (

        <button className={cx('clear')} onClick={handleClear}>
            {/* Clear */}
            <FontAwesomeIcon icon={faCircleXmark as IconProp} />
        </button>
        )}

        {/* Loading */}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner as IconProp} />}
        
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