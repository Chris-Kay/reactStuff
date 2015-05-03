 //var React = require('react.min');

     var Image = React.createClass({
         render: function () {
             return (
                 <div>
                     <img src={this.props.image.figure} width='400px' />
                 </div>
             )
         }
     });

     var Card = React.createClass({
            render: function () {
                var imageComponment;

                if (this.props.post.image && this.props.post.image.figure) {
                    imageComponment =
                        <Image
                            image ={this.props.post.image}
                        />
                }

                return (
                <div>
                    <h1>{this.props.post.heading}</h1>
                    <h2>{this.props.post.subHeading}</h2>
                    {imageComponment}
                    <div></div>
                    <button onClick={this.props.onClick}>Delete Me</button>
                </div>
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