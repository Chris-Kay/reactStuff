 //var React = require('react.min');

     var Card = React.createClass({displayName: "Card",
            render: function () {
                return (
                React.createElement("div", null, 
                    React.createElement("h1", null, this.props.heading), 
                    React.createElement("h2", null, this.props.subHeading), 
                    React.createElement(ImageComponment, {image: this.props.image}), 
                    React.createElement("div", null), 
                    React.createElement("button", {onClick: this.props.onClick}, "Delete Me")
                )
                )
            }
     });

    var ImageComponment = React.createClass({displayName: "ImageComponment",
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement("img", {src: this.props.image, width: "400px"})
                )
            )
        }
    });

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
                            React.createElement(Card, {onClick: that.deletePerson.bind(null, post), post: post})
                        )
                    }, this)
                )
            )
        }
    })

React.render(React.createElement(App, {blogData: blogData}), document.body);