require(['../react.min', 'posts' ], function (React, Posts) {

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
});
