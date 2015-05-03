// //var React = require('react.min');
//
//     var Card = React.createClass({
//            render: function () {
//                return (
//                <div>
//                    <h1>{this.props.heading}</h1>
//                    <h2>{this.props.subHeading}</h2>
//                </div>
//                )
//            }
//     })
//
//    var App = React.createClass({
//        getInitialState: function() {
//            return {
//                blogData: this.props.blogData.splice(0)
//            }
//        },
//
//        render: function () {
//            return (
//                <div>
//                    {this.state.blogData.map(function(post) {
//                        return (
//                            <Card heading={post.heading} subHeading={post.subHeading}></Card>
//                        )
//                    }, this)}
//                </div>
//            )
//        }
//    })
//
//React.render(<App blogData={blogData}></App>, document.body);