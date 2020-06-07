import React from 'react';
import css from '@/css/XDataList/XDataItem.scss'

export default function XDataItem(props) {
    return <div className={ css.item }>
        <h1 className={ css.user }>评论人: {props.user}</h1>
        <p className={ css.content }>评论内容: {props.content}</p>
    </div>
}