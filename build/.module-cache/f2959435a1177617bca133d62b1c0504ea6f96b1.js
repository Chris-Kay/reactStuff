define(function (require) {
var Image = require('image'),
    React = require('react.min');

    // var Heading = React.createClass({
    //     render: function () {
    //         return (
    //             <div>
    //                 <h1>{this.props.heading}</h1>
    //                 <h2>{this.props.subHeading}</h2>
    //             </div>
    //         );
    //     }
    // });
    //
    //  var Body = React.createClass({
    //      render: function () {
    //          return (
    //              <div dangerouslySetInnerHTML={{__html: this.props.body}} />
    //          );
    //      }
    //  });

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
