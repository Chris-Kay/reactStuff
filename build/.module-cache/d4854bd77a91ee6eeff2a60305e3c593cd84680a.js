define(function (require) {
    var React = require('react.min'),
        Heading = React.createClass({displayName: "Heading",
            render: function() {
                console.log('Hello World');
                return (
                    React.createElement("div", null, 
                        React.createElement("h1", null, this.props.heading), 
                        React.createElement("h2", null, this.props.subHeading)
                    )
                );
            }
        });

    return React.createClass({
        render: function () {
        var headingElement,
        bodyElement,
        imageElement,
        videoElement,
        video,
        postId = 'post_' + this.props.item.assetId;


        if (this.props.heading || this.props.subHeading) {
            headingElement =
                React.createElement(Heading, {heading: this.props.heading, 
                         subHeading: this.props.subHeading}
                    )
        }

        //if (this.props.body) {
        //    bodyElement =
        //        <Body body={this.props.body}
        //            />
        //}
        //
        //if (this.props.image && this.props.image.figure && this.props.image.alt) {
        //    imageElement =
        //        <img src={this.props.figure} alt={this.props.alt} width='60%'
        //            />
        //}
        //
        //if (this.props.video && this.props.video.link) {
        //    videoElement =
        //        <video width="320" height="240" controls>
        //            <source src={this.props.video.link} type="video/mp4"/>
        //            Your browser does not support the video tag
        //        </video>
        //}

        return (
            React.createElement("article", null, 
                headingElement, 
                "//", bodyElement, 
                "//", imageElement, 
                "//", videoElement
            )
        );
    }
});
});