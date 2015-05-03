 //var React = require('react.min');

     var Card = React.createClass({displayName: "Card",
            render: function () {
                return (
                React.createElement("div", null, 
                    React.createElement("h1", null, this.props.heading), 
                    React.createElement("h2", null, this.props.subHeading)
                )
                )
            }
     })

    var App = React.createClass({displayName: "App",
        getInitialState: function() {
            return {
                blogData: this.props.blogData.splice(0)
            }
        },

        render: function () {
            return (
                React.createElement("div", null, 
                    this.state.blogData.map(function(post) {
                        return (
                            React.createElement(Card, {heading: post.heading, subHeading: post.subHeading})
                        )
                    }, this)
                )
            )
        }
    })

React.render(React.createElement(App, {blogData: blogData}), document.body);