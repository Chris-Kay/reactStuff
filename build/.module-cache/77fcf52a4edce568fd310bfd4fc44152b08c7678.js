define(function (require) {

    var React = require('react.min'),
        Post = require('./posts');

        return React.createClass({
            render: function () {
                var posts = [],
                    post,
                    i = 0,
                    postsLength = this.props.blogPosts.length

                for (; i < postsLength; i += 1) {
                    post = this.props.blogPosts[i];
                    posts.push(React.createElement(Post, {
                        key: 'k' + post.assetId, 
                        item: post}
                        ));
                }
                return (
                    React.createElement("section", null, 
                        React.createElement("div", null, 
                            post
                        )
                    )
                );
            }
    });
});