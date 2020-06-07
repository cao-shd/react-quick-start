import React from 'react';
import XDataItem from '@/components/XDataList/XDataItem';
import css from '@/css/XDataList/XDataList.scss';


export default class XDataList extends React.Component {

    constructor() {
        super();
        this.state = {
            commentList: [
                { id: 1, user: '张三', content: '沙发' },
                { id: 2, user: '李四', content: '板凳' },
                { id: 3, user: '王五', content: '凉席' },
            ]
        }
    }

    render() {
        return <div>
            <h1 className={[css.title, 'test'].join(' ')}>这是评论列表组件</h1>
            {this.state.commentList.map(item => <XDataItem {...item} key={item.id}></XDataItem>)}
        </div>
    }
}


