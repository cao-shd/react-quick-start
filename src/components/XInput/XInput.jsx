import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class XInput extends React.Component {

    constructor() {
        super();
        this.state = {
            id: '123',
            msg: 'hello world!'
        }
    }

    render() {
        return <div style={{ marginTop: '15px', marginLeft: '15px' }}>
            <h2>{this.state.msg}</h2>
            <input style={{ height: '34px' }} type="text" value={this.state.msg} onChange={(e) => this.handleTextChange(e)} />
            <button
                style={{ marginLeft: '5px' }}
                className={['btn', 'btn-primary'].join(' ')}
                onClick={() => this.handleBtnClick()}
            >点我</button>
        </div>
    }

    handleBtnClick() {
        this.setState({ msg: 'hi you!' }, function () {
            // 在回调中取得最新数据结果
            console.log('callback: ', this.state.msg);
        });

        // 无法取得最新数据结果
        // 因为 setState 是异步函数
        console.log('outer: ', this.state.msg);
    }

    handleTextChange(e) {
        // setState 方法只更新匹配上的字段 而不会覆盖整个对象
        // 所以不用手动重新设置 id 值
        this.setState({ msg: e.target.value });
    }
}


