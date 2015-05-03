define(function (require) {
    var React = require('./react.min');

    return React.createClass({
        render: function () {
        var headingElement,
        bodyElement,
        imageElement,
        videoElement,
        video,
        postId = 'post_' + this.props.item.assetId;


        if (this.props.heading || this.props.subheading) {
            headingElement =
                React.createElement(Heading, {heading: this.props.heading, 
                         subheading: this.props.subheading}
                    )
        }

        if (this.props.body) {
            bodyElement =
                React.createElement(Body, {body: this.props.body}
                    )
        }

        if (this.props.image && this.props.image.figure && this.props.image.alt) {
            imageElement =
                React.createElement("img", {src: this.props.figure, alt: this.props.alt, width: "60%"}
                    )
        }

        if (this.props.video && this.props.video.link) {
            videoElement =
                React.createElement("video", {width: "320", height: "240", controls: true}, 
                    React.createElement("source", {src: this.props.video.link, type: "video/mp4"}), 
                    "Your browser does not support the video tag"
                )
        }

        return (
            React.createElement("article", {id: postId}, 
                headingElement, 
                bodyElement, 
                imageElement, 
                videoElement
            )
        );
    }
});
});