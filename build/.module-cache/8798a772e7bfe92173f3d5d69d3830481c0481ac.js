 //var React = require('react.min');

     var Image = React.createClass({displayName: "Image",
         render: function () {
             return (
                 React.createElement("div", null, 
                     React.createElement("img", {src: this.props.image.figure, width: "400px"})
                 )
             )
         }
     });

    var Heading = React.createClass({displayName: "Heading",
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement("h1", null, this.props.heading), 
                    React.createElement("h2", null, this.props.subHeading)
                )
            );
        }
    });

     var Body = React.createClass({displayName: "Body",
         render: function () {
             return (
                 React.createElement("div", {dangerouslySetInnerHTML: {__html: this.props.body}})
             );
         }
     });

     var Card = React.createClass({displayName: "Card",
            render: function () {
                var imageComponment,
                    headingComponment;

                if (this.props.post.heading || this.props.post.subHeading) {
                    headingComponment =
                        React.createElement(Heading, {heading: this.props.post.heading, 
                                 subHeading: this.props.post.subHeading}
                            )
                }

                if (this.props.post.image && this.props.post.image.figure) {
                    imageComponment =
                        React.createElement(Image, {
                            image: this.props.post.image}
                            )
                }

                if(this.props.post.body) {
                    bodyComponment =
                        React.createElement(Body, {
                            body: this.props.post.body}
                            )
                }

                return (
                React.createElement("div", null, 
                    headingComponment, 
                    imageComponment, 
                    React.createElement("div", null), 
                    React.createElement("button", {onClick: this.props.onClick}, "Delete Me")
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