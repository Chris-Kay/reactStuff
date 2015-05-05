define(function (require) {
  var Card = require('blog');

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
            <div>
                {this.state.blogData.map(function(post) {
                    return (
                        <Card onClick={that.deletePerson.bind(null, post)} post={post}></Card>
                    )
                }, this)}
            </div>
        )
    }
})

React.render(<App blogData={blogData}></App>, document.body);
  });
