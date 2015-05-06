require(['../react.min', 'posts' ], function (React, Posts) {

    var App = React.createClass({

        mixins: [ReactFireMixin],
        deletePerson: function (post) {
            this.state.blogData.splice(this.state.blogData.indexOf(post), 1);

            this.setState({blogData: this.state.blogData});
        },
        getInitialState: function() {
            return {
                blogData: []
            }
        },
        componentWillMount: function() {
            this.bindAsArray(new Firebase('https://brilliant-inferno-9224.firebaseio.com/'), 'blogData')
        },

        render: function () {
                 var that = this;
                 return (
                     <div>
                         {this.state.blogData.map(function(post) {
                             return (
                                 <Posts onClick={that.deletePerson.bind(null, post)} post={post}></Posts>
                             )
                         }, this)}
                     </div>
                 )
             }
         })
         React.render(<App />, document.body);
  });
