 //var React = require('react.min');

     var Image = React.createClass({
         render: function () {
             return (
                 <div className='centered-image'>
                     <img src={this.props.image.figure} width='400px' />
                 </div>
             )
         }
     });

    var Heading = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>{this.props.heading}</h1>
                    <h2>{this.props.subHeading}</h2>
                </div>
            );
        }
    });

     var Body = React.createClass({
         render: function () {
             return (
                 <div dangerouslySetInnerHTML={{__html: this.props.body}} />
             );
         }
     });

     var Card = React.createClass({
            render: function () {
                var imageComponment,
                    headingComponment,
                    bodyComponment;

                if (this.props.post.heading || this.props.post.subHeading) {
                    headingComponment =
                        <Heading heading={this.props.post.heading}
                                 subHeading={this.props.post.subHeading}
                            />
                }

                if (this.props.post.image && this.props.post.image.figure) {
                    imageComponment =
                        <Image
                            image ={this.props.post.image}
                            />
                }

                if(this.props.post.body) {
                    bodyComponment =
                        <Body
                            body={this.props.post.body}
                            />
                }

                return (
                <article className='blogPost'>
                    {headingComponment}
                    {imageComponment}
                    {bodyComponment}
                    <button onClick={this.props.onClick}>Delete Me</button>
                </article>
                )
            }
     });

    var App = React.createClass({

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
                <div>
                    {this.state.blogData.map(function(post) {
                        return (
                            <Card onClick={that.deletePerson.bind(null, post)} post={post}></Card>
                        )
                    }, this)}
                </div>
            )
        }
    })

React.render(<App blogData={blogData}></App>, document.body);