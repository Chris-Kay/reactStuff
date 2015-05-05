define(function (require) {
return React.createClass({

    deletePerson: function (post) {
        this.state.blogData.splice(this.state.blogData.indexOf(post), 1);

        this.setState({blogData: this.state.blogData});
    },
    getInitialState: function() {
        return {
            blogData: this.props.blogData.splice(0)
        }
    },

    render: function () {
        var that = this;
        return (
            React.createElement("div", null, 
                this.state.blogData.map(function(post) {
                    return (
                        React.createElement(Card, {onClick: that.deletePerson.bind(null, post), post: post})
                    )
                }, this)
            )
        )
    }
})

React.render(React.createElement(App, {blogData: blogData}), document.body);
  });
