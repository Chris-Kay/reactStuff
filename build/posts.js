define(function (require) {
  var Image = require('post-items/image'),
  Heading = require('post-items/heading'),
  Body = require('post-items/body');

  return React.createClass({
            render: function () {
                var imageComponment,
                    headingComponment,
                    bodyComponment;

                if (this.props.post.heading || this.props.post.subHeading) {
                    headingComponment =
                        React.createElement(Heading, {heading: this.props.post.heading, 
                                 subHeading: this.props.post.subHeading}
                            )
                }

                if (this.props.post.image) {
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
                React.createElement("article", {className: "blogPost"}, 
                    headingComponment, 
                    imageComponment, 
                    bodyComponment, 
                    React.createElement("button", {onClick: this.props.onClick}, "Delete Me")
                )
                )
            }
     });
 });
