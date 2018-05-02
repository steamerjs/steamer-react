import React, { Component } from 'react';
import {
    inject,
    observer
} from 'mobx-react';
import {
    action
} from 'mobx';
import {
    formatDate
} from 'utils';
import {
    getCommentList
} from '../db';

import Spinner from 'react-spin-component';
import Touch from 'touch';

import './comment.less';

@inject('news')
@inject('router')
@observer
class Comment extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
        this.commentId = this.props.match.params.id;

        this.getCommentList = getCommentList.bind(this);

        this.goBack = this.goBack.bind(this);
    }

    componentWillMount() {
        if (!this.props.news.comments.hasOwnProperty(this.commentId)) {
            this.getCommentList();
        }
    }

    goBack() {
        this.props.router.goBack();
    }

    render() {
        let commentId = this.commentId;
        let commentData = (this.props.news.comments.hasOwnProperty(commentId)) ? this.props.news.comments[commentId] : [];

        let commentList = commentData.map((items, index) => {
            let item = items[0];

            return (
                <div key={index} className="comment-list_item">
                    <div className="item">
                        <div className="avatar">
                            <img src={item.head_url} />
                        </div>
                        <div className="nameBar">
                            {item.nick}
                            <span>{formatDate(item.pub_time, 2)}</span>
                        </div>
                        <div className="contentBox">
                            <p>{item.reply_content}</p>
                        </div>
                    </div>
                </div>
            );
        });

        commentList = (!commentList.length) ? <div>暂无评论</div> : commentList;

        return (
            <div className="comment-wrapper">
                <div className="comment-list">
                    <h1>
                        精选评论
                        <Touch
                            onTap={this.goBack}
                        >
                            <div className="back">返回</div>
                        </Touch>
                    </h1>

                    <div className="comment-list_item">
                        {commentList}
                    </div>
                </div>
                <Spinner
                    isShow={this.props.spinLoading}
                />
            </div>
        );
    }
}

export default Comment;
