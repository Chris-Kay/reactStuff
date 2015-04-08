
var Card = React.createClass({
    render: function() {

    return (
        <div className={'exam-revision'}>
            <h1>{this.props.heading}</h1>
        </div>
        )
    }
})

var App = React.createClass({

    getInitialState: function() {
    return {
        blogData: this.props.blogData.splice(0)
    }
},

render: function() {
    var that = this;
    return (
        <div>
        {this.state.blogData.map(function(article) {
            return (
                <Card heading={article.heading}></Card>
                )
            })}
        </div>
        )
    }
})

React.render(
<App blogData={blogData}></App>,
    document.getElementById('body')
);// JavaScript Document