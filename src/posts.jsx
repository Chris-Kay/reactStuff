define(function (require) {
    var React = require('react.min'),
        Heading = React.createClass({
            render: function() {
                return (
                    <div>
                        <h1>{this.props.item.heading}</h1>
                        <h2>{this.props.item.subHeading}</h2>
                    </div>
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


        if (this.props.item.heading || this.props.item.subHeading) {
            headingElement =
                <Heading heading={this.props.item.heading}
                         subHeading={this.props.item.subHeading}
                    />
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
            <article>
                {headingElement}
                //{bodyElement}
                //{imageElement}
                //{videoElement}
            </article>
        );
    }
});
});