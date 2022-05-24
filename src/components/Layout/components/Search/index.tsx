import React, { useEffect, useState,useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTipply from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import className from 'classnames/bind';
import styles from './Search.module.scss';

import * as request from '../../../../utils/request';
import {SearchIcon} from '../../../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { DataApi,Data } from '../../../../types';
import { useDebounce } from '../../../../hooks'

const cx = className.bind(styles);



const Search:React.FC = () => {
    //STATE
    const [searchValue,setSearchValue] = useState<string>('')
    const [searchResult, setSearchResult] = useState<Array<DataApi>>([]);
    const [showResult,setShowResult] = useState<boolean>(true)
    const [loading,setLoading] = useState<boolean>(false)

    //Khi người dùng gõ nếu dừng lại 500 mili giây thì mới bắt đầu tìm kiếm
    //1:
    //2 'h'
    //3 ''
    const debounced = useDebounce(searchValue,500)
    

    const inputRef = useRef<HTMLInputElement>(null)
      //useEffect
      useEffect(() => {
          //check space
        if(!debounced.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true)

        //call api
        const fetchApi = async () => {
            try {
                const res = await request.get('users/search',{
                    params: {
                        q : debounced,
                        type : 'less',
                    },
                });
                setSearchResult(res.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                throw new Error("Failed fetchApi Search !")
            }

        };
        fetchApi();

    }, [debounced]);

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