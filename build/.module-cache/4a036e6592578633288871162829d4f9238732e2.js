 //var React = require('react.min');

     var Card = React.createClass({displayName: "Card",
            render: function () {
                return (
                React.createElement("div", null, 
                    React.createElement("h1", null, this.props.heading), 
                    React.createElement("h2", null, this.props.subHeading), 
                    React.createElement("imageComponment", null), 
                    React.createElement("div", null), 
                    React.createElement("button", {onClick: this.props.onClick}, "Delete Me")
                )
                )
            }
     })

    var imageComponment = React.createClass({displayName: "imageComponment",
        render: function () {
            return React.createElement("p", null, 'Hello World')
        }
    })

    var App = React.createClass({displayName: "App",

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
                            React.createElement(Card, {onClick: that.deletePerson.bind(null, post), heading: post.heading, subHeading: post.subHeading})
                        )
                    }, this)
                )
            )
        }
    })

React.render(React.createElement(App, {blogData: blogData}), document.body);